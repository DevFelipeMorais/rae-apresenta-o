// =============================================================================
// RAE ESTADUAL - SERVIDOR HTTP + API DE SINCRONIZAÇÃO EM TEMPO REAL (PORTA 3000)
// =============================================================================
// Fornece:
// 1. Hospedagem HTTP com cabeçalhos para Google OAuth 2.0 (COOP) e CORS aberto
// 2. API REST automática (/api/rae/sync) + Server-Sent Events (/api/rae/events)
//    para que todos os usuários, de qualquer dispositivo ou navegador, tenham
//    o mesmo acesso e atualizem quaisquer informações em tempo real.
// =============================================================================

const http = require("http");
const fs = require("fs");
const path = require("path");

const PORT = process.env.PORT || 3000;
const ROOT = __dirname;
const DB_FILE = path.join(ROOT, "rae_cloud_db.json");

const MIME_TYPES = {
    ".html": "text/html; charset=utf-8",
    ".css": "text/css; charset=utf-8",
    ".js": "application/javascript; charset=utf-8",
    ".json": "application/json; charset=utf-8",
    ".sql": "text/plain; charset=utf-8",
    ".jpg": "image/jpeg",
    ".jpeg": "image/jpeg",
    ".png": "image/png",
    ".svg": "image/svg+xml",
    ".ico": "image/x-icon"
};

function carregarBancoServidor() {
    try {
        if (fs.existsSync(DB_FILE)) {
            const raw = fs.readFileSync(DB_FILE, "utf8");
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object") {
                if (!parsed.colecoes) parsed.colecoes = {};
                if (!parsed.config) parsed.config = {};
                if (!parsed.usuarios_google) parsed.usuarios_google = {};
                return parsed;
            }
        }
    } catch (e) {
        console.warn("Aviso ao ler rae_cloud_db.json:", e.message);
    }
    return {
        config: {
            googleClientId: "",
            supabaseUrl: "",
            supabaseAnonKey: ""
        },
        colecoes: {},
        usuarios_google: {},
        atualizadoEm: new Date().toISOString()
    };
}

let dbEstado = carregarBancoServidor();
const clientesSSE = new Set();

function salvarBancoServidor() {
    try {
        dbEstado.atualizadoEm = new Date().toISOString();
        fs.writeFileSync(DB_FILE, JSON.stringify(dbEstado, null, 2), "utf8");
    } catch (e) {
        console.warn("Aviso ao salvar rae_cloud_db.json:", e.message);
    }
}

function transmitirEventoSSE(evento) {
    const payload = `data: ${JSON.stringify(evento)}\n\n`;
    for (const res of clientesSSE) {
        try {
            res.write(payload);
        } catch (e) {
            clientesSSE.delete(res);
        }
    }
}

function definirHeadersPadrao(res) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
}

const server = http.createServer((req, res) => {
    definirHeadersPadrao(res);

    if (req.method === "OPTIONS") {
        res.writeHead(204);
        res.end();
        return;
    }

    const cleanUrl = (req.url || "/").split("?")[0];

    // 1. Stream de Eventos em Tempo Real (Server-Sent Events)
    if (cleanUrl === "/api/rae/events" && req.method === "GET") {
        res.writeHead(200, {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            "Connection": "keep-alive"
        });
        res.write(`data: ${JSON.stringify({ tipo: "conectado", timestamp: Date.now() })}\n\n`);
        clientesSSE.add(res);

        req.on("close", () => {
            clientesSSE.delete(res);
        });
        return;
    }

    // 2. Endpoint GET /api/rae/sync -> Retorna estado global e configurações compartilhadas
    if (cleanUrl === "/api/rae/sync" && req.method === "GET") {
        res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
        res.end(JSON.stringify({
            ok: true,
            config: dbEstado.config,
            colecoes: dbEstado.colecoes,
            usuarios_google: dbEstado.usuarios_google,
            atualizadoEm: dbEstado.atualizadoEm
        }));
        return;
    }

    // 3. Endpoint POST /api/rae/sync -> Atualiza qualquer coleção ou configuração para todos os usuários
    if (cleanUrl === "/api/rae/sync" && (req.method === "POST" || req.method === "PUT")) {
        let body = "";
        req.on("data", chunk => {
            body += chunk;
            if (body.length > 25 * 1024 * 1024) req.destroy();
        });
        req.on("end", () => {
            try {
                const dados = JSON.parse(body || "{}");
                let alterou = false;

                if (dados.config && typeof dados.config === "object") {
                    dbEstado.config = { ...dbEstado.config, ...dados.config };
                    alterou = true;
                    transmitirEventoSSE({
                        tipo: "config",
                        config: dbEstado.config,
                        origemId: dados.origemId || null,
                        timestamp: Date.now()
                    });
                }

                if (dados.colecao && dados.payload !== undefined) {
                    dbEstado.colecoes[dados.colecao] = dados.payload;
                    alterou = true;
                    transmitirEventoSSE({
                        tipo: "colecao",
                        colecao: dados.colecao,
                        payload: dados.payload,
                        origemId: dados.origemId || null,
                        timestamp: Date.now()
                    });
                }

                if (dados.colecoes && typeof dados.colecoes === "object") {
                    for (const [col, val] of Object.entries(dados.colecoes)) {
                        if (val !== undefined) {
                            dbEstado.colecoes[col] = val;
                            alterou = true;
                            transmitirEventoSSE({
                                tipo: "colecao",
                                colecao: col,
                                payload: val,
                                origemId: dados.origemId || null,
                                timestamp: Date.now()
                            });
                        }
                    }
                }

                if (dados.usuarioGoogle && dados.usuarioGoogle.email) {
                    const emailKey = dados.usuarioGoogle.email.toLowerCase();
                    dbEstado.usuarios_google[emailKey] = {
                        ...dados.usuarioGoogle,
                        ultimo_login: new Date().toISOString()
                    };
                    alterou = true;
                }

                if (alterou) {
                    salvarBancoServidor();
                }

                res.writeHead(200, { "Content-Type": "application/json; charset=utf-8" });
                res.end(JSON.stringify({ ok: true, atualizadoEm: dbEstado.atualizadoEm }));
            } catch (err) {
                res.writeHead(400, { "Content-Type": "application/json; charset=utf-8" });
                res.end(JSON.stringify({ ok: false, erro: err.message }));
            }
        });
        return;
    }

    // 4. Arquivos Estáticos do Portal
    const relPath = cleanUrl === "/" ? "/index.html" : cleanUrl;
    const filePath = path.join(ROOT, decodeURIComponent(relPath));

    if (!filePath.startsWith(ROOT)) {
        res.writeHead(403);
        res.end("Acesso negado");
        return;
    }

    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
            res.end("Arquivo não encontrado");
            return;
        }

        const ext = path.extname(filePath).toLowerCase();
        res.writeHead(200, {
            "Content-Type": MIME_TYPES[ext] || "application/octet-stream"
        });
        res.end(content);
    });
});

server.listen(PORT, "0.0.0.0", () => {
    console.log(`\n=============================================================`);
    console.log(`🚀 Servidor & API RAE ativos em: http://localhost:${PORT}`);
    console.log(`⚡ Sincronização Global em Tempo Real: /api/rae/sync & /api/rae/events`);
    console.log(`=============================================================\n`);
});
