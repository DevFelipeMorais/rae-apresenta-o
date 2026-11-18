// ==========================================================================
// RAE ESTADUAL - MÓDULO DE BANCO DE DADOS EM NUVEM (FIREBASE / FIRESTORE)
// ==========================================================================
// Você pode colar suas credenciais do Firebase diretamente no objeto
// FIREBASE_DEFAULT_CONFIG abaixo OU configurar pelo botão se DB" na"Fireba
// barra superior do sistema.
// ==========================================================================

const FIREBASE_DEFAULT_CONFIG = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
};

const CHAVE_FIREBASE_CONFIG_STORAGE = "rae_firebase_config_v1";

// Mapeamento das coleções do Firestore para as chaves do sistema RAE
const COLECOES_RAE = {
    escolas: { docId: "lista_escolas", storageKey: "rae_escolas_v2" },
    alunos: { docId: "lista_alunos", storageKey: "rae_alunos_v2" },
    ocorrencias: { docId: "lista_ocorrencias", storageKey: "rae_ocorrencias_v2" },
    cardapios: { docId: "mapa_cardapios", storageKey: "rae_cardapios_v2" },
    avisos: { docId: "lista_avisos", storageKey: "rae_avisos_v2" },
    grades_horarias: { docId: "mapa_grades", storageKey: "rae_grades_horarias_v2" },
    votacao_merenda: { docId: "placar_merenda", storageKey: "rae_snack_votes_v2" }
};

window.RAE_DB = {
    conectado: false,
    db: null,
    app: null,
    sincronizandoRemoto: false,
    unsubscribers: [],

    obterConfig() {
        try {
            const salvo = localStorage.getItem(CHAVE_FIREBASE_CONFIG_STORAGE);
            if (salvo) {
                const parsed = JSON.parse(salvo);
                if (parsed && parsed.apiKey && parsed.projectId) return parsed;
            }
        } catch (e) { }
        if (FIREBASE_DEFAULT_CONFIG.apiKey && FIREBASE_DEFAULT_CONFIG.projectId) {
            return FIREBASE_DEFAULT_CONFIG;
        }
        return null;
    },

    salvarConfig(config) {
        localStorage.setItem(CHAVE_FIREBASE_CONFIG_STORAGE, JSON.stringify(config));
    },

    removerConfig() {
        localStorage.removeItem(CHAVE_FIREBASE_CONFIG_STORAGE);
        this.desconectar();
    },

    async inicializar() {
        this.injetarInterfaceFirebase();
        const config = this.obterConfig();
        if (!config) {
            this.atualizarStatusBadge("local", "Banco Local (Configurar Firebase)");
            return false;
        }

        try {
            this.atualizarStatusBadge("conectando", "Conectando ao Firestore...");

            if (typeof firebase === "undefined") {
                console.warn("SDK do Firebase ainda não carregado.");
                this.atualizarStatusBadge("erro", "SDK Firebase indisponível");
                return false;
            }

            if (!firebase.apps.length) {
                this.app = firebase.initializeApp(config);
            } else {
                this.app = firebase.app();
            }

            this.db = firebase.firestore();
            this.conectado = true;

            await this.sincronizarInicial();
            this.iniciarListenersTempoReal();

            this.atualizarStatusBadge("online", `Firestore Ativo (${config.projectId})`);
            return true;
        } catch (erro) {
            console.error("Erro ao conectar ao Firebase Firestore:", erro);
            this.conectado = false;
            this.atualizarStatusBadge("erro", "Erro na conexão Firebase");
            return false;
        }
    },

    desconectar() {
        this.unsubscribers.forEach(unsub => {
            try { unsub(); } catch (e) { }
        });
        this.unsubscribers = [];
        this.conectado = false;
        this.atualizarStatusBadge("local", "Banco Local (Configurar Firebase)");
    },

    // Sincroniza os dados na abertura: se o Firestore já tiver dados, baixa;
    // se a coleção estiver vazia no Firestore, sobe os dados atuais do portal.
    async sincronizarInicial() {
        if (!this.conectado || !this.db) return;

        for (const [nomeColecao, meta] of Object.entries(COLECOES_RAE)) {
            try {
                const docRef = this.db.collection("rae_sistema").doc(nomeColecao);
                const snap = await docRef.get();

                if (snap.exists && snap.data() && snap.data().payload !== undefined) {
                    const dadosNuvem = JSON.parse(snap.data().payload);
                    this.sincronizandoRemoto = true;
                    localStorage.setItem(meta.storageKey, JSON.stringify(dadosNuvem));
                    this.sincronizandoRemoto = false;
                } else {
                    const localRaw = localStorage.getItem(meta.storageKey);
                    if (localRaw) {
                        await docRef.set({
                            payload: localRaw,
                            atualizadoEm: new Date().toISOString(),
                            origem: "seed_inicial"
                        });
                    }
                }
            } catch (err) {
                console.warn(`Aviso ao sincronizar coleção ${nomeColecao}:`, err);
            }
        }

        this.atualizarTelasLocais();
    },

    // Escuta alterações em tempo real vindas do Firestore
    iniciarListenersTempoReal() {
        if (!this.conectado || !this.db) return;

        this.unsubscribers.forEach(u => { try { u(); } catch (e) { } });
        this.unsubscribers = [];

        const unsub = this.db.collection("rae_sistema").onSnapshot((snapshot) => {
            let houveMudanca = false;
            snapshot.docChanges().forEach((change) => {
                if (change.type === "added" || change.type === "modified") {
                    const nomeColecao = change.doc.id;
                    const meta = COLECOES_RAE[nomeColecao];
                    const data = change.doc.data();
                    if (meta && data && data.payload) {
                        const atualLocal = localStorage.getItem(meta.storageKey);
                        if (atualLocal !== data.payload) {
                            this.sincronizandoRemoto = true;
                            localStorage.setItem(meta.storageKey, data.payload);
                            this.sincronizandoRemoto = false;
                            houveMudanca = true;
                        }
                    }
                }
            });

            if (houveMudanca) {
                this.atualizarTelasLocais();
            }
        }, (erro) => {
            console.error("Erro no listener em tempo real do Firestore:", erro);
            this.atualizarStatusBadge("erro", "Permissão / Regra Firestore");
        });

        this.unsubscribers.push(unsub);
    },

    // Salva uma coleção específica no Firestore
    async salvarColecao(nomeColecao, dados) {
        const meta = COLECOES_RAE[nomeColecao];
        if (!meta) return;

        const payloadStr = typeof dados === "string" ? dados : JSON.stringify(dados);

        if (!this.conectado || !this.db || this.sincronizandoRemoto) return;

        try {
            await this.db.collection("rae_sistema").doc(nomeColecao).set({
                payload: payloadStr,
                atualizadoEm: new Date().toISOString()
            });

            // Também sincroniza cada item individualmente na subcoleção para fácil visualização no Console do Firebase
            if (Array.isArray(dados) && (nomeColecao === "ocorrencias" || nomeColecao === "escolas" || nomeColecao === "alunos")) {
                const batch = this.db.batch();
                dados.slice(0, 50).forEach(item => {
                    if (item && item.id !== undefined) {
                        // Evita gravar fotos base64 gigantes no documento individual se passar de 800KB
                        const copia = { ...item };
                        if (copia.fotos && JSON.stringify(copia.fotos).length > 700000) {
                            copia.fotos = ["[Foto armazenada no pacote principal]"];
                        }
                        const ref = this.db.collection(nomeColecao).doc(String(item.id));
                        batch.set(ref, copia, { merge: true });
                    }
                });
                batch.commit().catch(() => { });
            }
        } catch (erro) {
            console.error(`Erro ao gravar coleção ${nomeColecao} no Firestore:`, erro);
        }
    },

    // Força envio de todos os dados locais para o Firestore
    async exportarTudoParaFirestore() {
        if (!this.conectado || !this.db) {
            alert("Conecte suas credenciais do Firebase primeiro.");
            return;
        }

        try {
            for (const [nomeColecao, meta] of Object.entries(COLECOES_RAE)) {
                const raw = localStorage.getItem(meta.storageKey);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    await this.salvarColecao(nomeColecao, parsed);
                }
            }
            if (typeof mostrarToast === "function") {
                mostrarToast("☁️ Todos os dados foram sincronizados com o Cloud Firestore!", "sucesso");
            }
        } catch (e) {
            console.error(e);
            if (typeof mostrarToast === "function") {
                mostrarToast("Erro ao enviar dados para o Firestore. Verifique as regras (Rules) do banco.", "erro");
            }
        }
    },

    // Atualiza a interface da página ativa (index.html ou ocorrencias.html)
    atualizarTelasLocais() {
        try {
            // Se estiver na index.html
            if (typeof carregarEscolas === "function" && typeof renderizarEscolas === "function") {
                escolas = carregarEscolas();
                renderizarEscolas(escolas);
            }
            if (typeof carregarAlunos === "function" && typeof renderizarTabelaAlunos === "function") {
                alunos = carregarAlunos();
                renderizarTabelaAlunos();
                if (typeof atualizarMetricasDashboard === "function") atualizarMetricasDashboard();
            }
            if (typeof carregarCardapios === "function" && typeof renderizarCardapioPrincipal === "function") {
                cardapios = carregarCardapios();
                renderizarCardapioPrincipal();
            }
            if (typeof carregarAvisos === "function" && typeof renderizarAvisos === "function") {
                avisos = carregarAvisos();
                renderizarAvisos();
            }
            if (typeof carregarOcorrencias === "function" && typeof filtrarOcorrencias === "function") {
                ocorrencias = carregarOcorrencias();
                filtrarOcorrencias();
            }
            if (typeof atualizarInterfaceVotacaoMerenda === "function") {
                atualizarInterfaceVotacaoMerenda();
            }
        } catch (e) {
            console.warn("Aviso ao atualizar telas locais:", e);
        }
    },

    atualizarStatusBadge(estado, texto) {
        const btn = document.getElementById("raeFirebaseStatusBtn");
        const label = document.getElementById("raeFirebaseStatusText");
        const dot = document.getElementById("raeFirebaseStatusDot");
        const modalStatus = document.getElementById("fbModalStatusBanner");

        if (!btn) return;

        const cores = {
            online: { bg: "#ECFDF5", border: "#6EE7B7", text: "#047857", dot: "#10B981" },
            conectando: { bg: "#FEF3C7", border: "#FDE68A", text: "#B45309", dot: "#F59E0B" },
            erro: { bg: "#FEF2F2", border: "#FECACA", text: "#DC2626", dot: "#EF4444" },
            local: { bg: "#EEF2FF", border: "#C7D2FE", text: "#4338CA", dot: "#6366F1" }
        };

        const c = cores[estado] || cores.local;
        btn.style.background = c.bg;
        btn.style.borderColor = c.border;
        btn.style.color = c.text;
        if (dot) dot.style.background = c.dot;
        if (label) label.textContent = texto;

        if (modalStatus) {
            modalStatus.style.background = c.bg;
            modalStatus.style.borderColor = c.border;
            modalStatus.style.color = c.text;
            modalStatus.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:${c.dot};display:inline-block;"></span> <strong>Status:</strong> ${texto}`;
        }
    },

    injetarInterfaceFirebase() {
        if (document.getElementById("raeFirebaseModal")) return;

        // 1. Insere botão de status do Banco de Dados no cabeçalho
        const navContainer = document.querySelector(".nav-actions") || document.querySelector(".occ-page-nav > div:last-child");
        if (navContainer && !document.getElementById("raeFirebaseStatusBtn")) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.id = "raeFirebaseStatusBtn";
            btn.onclick = () => this.abrirModalConfig();
            btn.title = "Configurar Banco de Dados Firebase / Cloud Firestore";
            btn.style.cssText = "display:inline-flex;align-items:center;gap:7px;padding:7px 13px;border-radius:999px;border:1px solid #C7D2FE;background:#EEF2FF;color:#4338CA;font-family:'Poppins',sans-serif;font-size:12px;font-weight:600;cursor:pointer;transition:all 0.2s;white-space:nowrap;";
            btn.innerHTML = `
                <span id="raeFirebaseStatusDot" style="width:8px;height:8px;border-radius:50%;background:#6366F1;display:inline-block;"></span>
                <i class="fas fa-database"></i>
                <span id="raeFirebaseStatusText">Firebase DB</span>
            `;
            navContainer.insertBefore(btn, navContainer.firstChild);
        }

        // 2. Cria o Modal de Configuração do Firebase / Firestore
        const modalHtml = `
            <div class="modal-overlay admin-form-modal" id="raeFirebaseModal" style="z-index:10000;">
                <div class="modal admin-modal-wrapper" style="max-width:640px;">
                    <button class="modal-close" onclick="window.RAE_DB.fecharModalConfig()" aria-label="Fechar">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-content admin-modal-content">
                        <div class="admin-modal-title">
                            <i class="fas fa-fire" style="color:#F59E0B;"></i>
                            <div>
                                <h3>Banco de Dados em Nuvem · Firebase / Firestore</h3>
                                <p>Conecte o portal RAE ao Google Cloud Firestore para sincronizar escolas, alunos, cardápios e ocorrências em tempo real</p>
                            </div>
                        </div>

                        <div id="fbModalStatusBanner" style="display:flex;align-items:center;gap:8px;padding:12px 16px;border-radius:10px;border:1px solid #C7D2FE;background:#EEF2FF;color:#4338CA;font-size:13px;margin-bottom:18px;">
                            <span style="width:10px;height:10px;border-radius:50%;background:#6366F1;display:inline-block;"></span>
                            <strong>Status:</strong> Verificando conexão...
                        </div>

                        <div style="background:#F8FAFC;border:1px solid #E2E8F0;border-radius:10px;padding:14px 16px;margin-bottom:18px;font-size:12.5px;color:#475569;line-height:1.6;">
                            <strong style="color:#0F172A;display:block;margin-bottom:4px;"><i class="fas fa-circle-info" style="color:#4F46E5;"></i> Como obter suas credenciais gratuitas do Firebase:</strong>
                            1. Acesse <a href="https://console.firebase.google.com/" target="_blank" style="color:#4F46E5;font-weight:600;">console.firebase.google.com</a> e crie um projeto.<br>
                            2. No menu lateral, clique em <strong>Criação &rarr; Firestore Database &rarr; Criar banco de dados</strong> (inicie no <em>modo de teste</em>).<br>
                            3. Em <strong>Configurações do Projeto (&⚙️) &rarr; Seus aplicativos (Web &lt;/&gt;)</strong>, copie o bloco <code>firebaseConfig</code> e cole abaixo:
                        </div>

                        <div class="form-group">
                            <label for="fbRawJsonInput"><i class="fas fa-code"></i> Colar bloco <code>firebaseConfig</code> completo (opcional — preenche os campos automaticamente)</label>
                            <textarea id="fbRawJsonInput" rows="3" placeholder="Cole aqui o objeto firebaseConfig = { apiKey: '...', projectId: '...' } copiado do Firebase" oninput="window.RAE_DB.interpretarColagemConfig(this.value)" style="font-family:monospace;font-size:12px;"></textarea>
                        </div>

                        <form id="formFirebaseConfig" onsubmit="window.RAE_DB.salvarEConectarModal(event)">
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="fbApiKey">apiKey *</label>
                                    <input type="text" id="fbApiKey" placeholder="AIzaSy..." required>
                                </div>
                                <div class="form-group">
                                    <label for="fbProjectId">projectId *</label>
                                    <input type="text" id="fbProjectId" placeholder="rae-escola-12345" required>
                                </div>
                            </div>
                            <div class="form-row">
                                <div class="form-group">
                                    <label for="fbAuthDomain">authDomain</label>
                                    <input type="text" id="fbAuthDomain" placeholder="rae-escola-12345.firebaseapp.com">
                                </div>
                                <div class="form-group">
                                    <label for="fbAppId">appId</label>
                                    <input type="text" id="fbAppId" placeholder="1:123456789:web:abcdef">
                                </div>
                            </div>

                            <div class="admin-form-actions" style="justify-content:space-between;flex-wrap:wrap;gap:10px;">
                                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                                    <button type="button" class="btn btn-secondary" onclick="window.RAE_DB.exportarTudoParaFirestore()" title="Enviar todos os dados atuais para o Firestore">
                                        <i class="fas fa-cloud-arrow-up"></i> Sincronizar Dados Atuais
                                    </button>
                                    <button type="button" class="btn btn-secondary" onclick="window.RAE_DB.desconectarModal()" style="color:#DC2626;">
                                        <i class="fas fa-plug-circle-xmark"></i> Usar Só Local
                                    </button>
                                </div>
                                <div style="display:flex;gap:8px;">
                                    <button type="button" class="btn btn-secondary" onclick="window.RAE_DB.fecharModalConfig()">Fechar</button>
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fas fa-bolt"></i> Conectar ao Firestore
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        `;

        document.body.insertAdjacentHTML("beforeend", modalHtml);
    },

    abrirModalConfig() {
        const modal = document.getElementById("raeFirebaseModal");
        if (!modal) return;

        const cfg = this.obterConfig();
        if (cfg) {
            document.getElementById("fbApiKey").value = cfg.apiKey || "";
            document.getElementById("fbProjectId").value = cfg.projectId || "";
            document.getElementById("fbAuthDomain").value = cfg.authDomain || "";
            document.getElementById("fbAppId").value = cfg.appId || "";
        }

        modal.classList.add("active");
    },

    fecharModalConfig() {
        const modal = document.getElementById("raeFirebaseModal");
        if (modal) modal.classList.remove("active");
    },

    interpretarColagemConfig(texto) {
        if (!texto) return;
        const extrair = (chave) => {
            const regex = new RegExp(chave + '\\s*:\\s*["\']([^"\']+)["\']');
            const m = texto.match(regex);
            return m ? m[1] : "";
        };

        const apiKey = extrair("apiKey");
        const projectId = extrair("projectId");
        const authDomain = extrair("authDomain");
        const appId = extrair("appId");

        if (apiKey) document.getElementById("fbApiKey").value = apiKey;
        if (projectId) document.getElementById("fbProjectId").value = projectId;
        if (authDomain) document.getElementById("fbAuthDomain").value = authDomain;
        if (appId) document.getElementById("fbAppId").value = appId;
    },

    async salvarEConectarModal(event) {
        event.preventDefault();
        const apiKey = document.getElementById("fbApiKey").value.trim();
        const projectId = document.getElementById("fbProjectId").value.trim();
        const authDomain = document.getElementById("fbAuthDomain").value.trim() || `${projectId}.firebaseapp.com`;
        const appId = document.getElementById("fbAppId").value.trim();

        if (!apiKey || !projectId) return;

        const novaConfig = {
            apiKey,
            authDomain,
            projectId,
            storageBucket: `${projectId}.appspot.com`,
            appId
        };

        this.salvarConfig(novaConfig);
        const ok = await this.inicializar();
        if (ok) {
            if (typeof mostrarToast === "function") {
                mostrarToast(`🔥 Conectado ao Cloud Firestore (${projectId}) com sucesso!`, "sucesso");
            }
            this.fecharModalConfig();
        } else {
            if (typeof mostrarToast === "function") {
                mostrarToast("Não foi possível conectar ao Firestore. Verifique o apiKey e projectId.", "erro");
            }
        }
    },

    desconectarModal() {
        this.removerConfig();
        document.getElementById("formFirebaseConfig").reset();
        document.getElementById("fbRawJsonInput").value = "";
        if (typeof mostrarToast === "function") {
            mostrarToast("Configuração do Firebase removida. Operando em modo local.", "info");
        }
    }
};

// Intercepta gravações no localStorage das chaves do sistema RAE para enviá-las automaticamente ao Firestore
(function interceptarPersistenciaParaFirestore() {
    const setItemOriginal = Storage.prototype.setItem;
    const mapaReverso = {};
    for (const [nomeColecao, meta] of Object.entries(COLECOES_RAE)) {
        mapaReverso[meta.storageKey] = nomeColecao;
    }

    Storage.prototype.setItem = function (chave, valor) {
        setItemOriginal.apply(this, arguments);

        const nomeColecao = mapaReverso[chave];
        if (nomeColecao && window.RAE_DB && window.RAE_DB.conectado && !window.RAE_DB.sincronizandoRemoto) {
            try {
                const parsed = JSON.parse(valor);
                window.RAE_DB.salvarColecao(nomeColecao, parsed);
            } catch (e) { }
        }
    };
})();

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        window.RAE_DB.inicializar();
    }, 100);
});
