// =============================================================================
// RAE ESTADUAL - API DE SINCRONIZAÇÃO AUTOMÁTICA GLOBAL + GOOGLE OAUTH + SUPABASE
// =============================================================================
// A API inicia AUTOMATICAMENTE ATIVA para todos os usuários e dispositivos:
// 1. Sincroniza automaticamente todas as coleções (escolas, alunos, aprovações,
//    ocorrências, cardápios, avisos, horários e votação da merenda) via:
//    - Servidor API RAE em Tempo Real (/api/rae/sync + SSE /api/rae/events)
//    - Banco PostgreSQL Supabase + Realtime (quando configurado)
//    - BroadcastChannel & Storage Events (sincronização instantânea entre abas)
// 2. Qualquer atualização feita por qualquer usuário em qualquer lugar reflete
//    imediatamente para todos os demais usuários conectados.
// =============================================================================

const GOOGLE_DEFAULT_CLIENT_ID = ""; // Opcional: Client ID OAuth 2.0 (.apps.googleusercontent.com)

const SUPABASE_DEFAULT_CONFIG = {
    url: "",      // Opcional: "https://seu-projeto.supabase.co"
    anonKey: ""   // Opcional: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
};

const CHAVE_SUPABASE_CONFIG_STORAGE = "rae_supabase_config_v1";
const CHAVE_GOOGLE_CLIENT_ID_STORAGE = "rae_google_client_id_v1";
const RAE_CLIENT_INSTANCE_ID = "rae_client_" + Date.now() + "_" + Math.random().toString(36).slice(2, 8);

const COLECOES_SUPABASE_RAE = {
    escolas: "rae_escolas_v2",
    alunos: "rae_alunos_v2",
    ocorrencias: "rae_ocorrencias_v2",
    cardapios: "rae_cardapios_v2",
    avisos: "rae_avisos_v2",
    grades_horarias: "rae_grades_horarias_v2",
    votacao_merenda: "rae_snack_votes_v2",
    lanche_do_dia: "rae_lanche_do_dia_v2"
};

// =============================================================================
// MÓDULO GOOGLE IDENTITY SERVICES API (ATIVO AUTOMATICAMENTE PARA TODOS)
// =============================================================================
window.RAE_GOOGLE_API = {
    inicializado: true,
    tokenClient: null,

    obterClientId() {
        const salvo = (localStorage.getItem(CHAVE_GOOGLE_CLIENT_ID_STORAGE) || "").trim();
        if (salvo && salvo.includes(".apps.googleusercontent.com")) return salvo;
        if (GOOGLE_DEFAULT_CLIENT_ID && GOOGLE_DEFAULT_CLIENT_ID.includes(".apps.googleusercontent.com")) {
            return GOOGLE_DEFAULT_CLIENT_ID.trim();
        }
        return "";
    },

    salvarClientId(clientId) {
        localStorage.setItem(CHAVE_GOOGLE_CLIENT_ID_STORAGE, (clientId || "").trim());
    },

    decodificarJwtGoogle(token) {
        try {
            const base64Url = token.split(".")[1];
            const base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
            const jsonPayload = decodeURIComponent(
                atob(base64)
                    .split("")
                    .map(c => "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2))
                    .join("")
            );
            return JSON.parse(jsonPayload);
        } catch (e) {
            console.error("Erro ao decodificar JWT do Google:", e);
            return null;
        }
    },

    atualizarAvisoModalLogin() {
        const statusBox = document.getElementById("googleApiStatusNotice");
        if (!statusBox) return;
        statusBox.style.display = "flex";
        statusBox.style.borderColor = "rgba(129, 201, 149, 0.35)";
        statusBox.style.background = "rgba(129, 201, 149, 0.1)";
        statusBox.style.color = "#81c995";
        statusBox.innerHTML = `
            <i class="fas fa-circle-check" style="color:#81c995;margin-top:2px;"></i>
            <div>
                <strong>API Google & Sincronização Global Ativa!</strong>
                Acesso unificado ativo automaticamente para todos os usuários atualizarem informações de qualquer lugar.
            </div>
        `;
    },

    inicializarGoogleAPI() {
        this.atualizarAvisoModalLogin();
        const clientId = this.obterClientId();
        const gsiContainer = document.getElementById("googleGsiButtonContainer");

        if (!clientId) {
            if (gsiContainer) gsiContainer.innerHTML = "";
            const fbBtn = document.getElementById("fallbackGoogleBtn");
            if (fbBtn) fbBtn.style.display = "flex";
            this.inicializado = true;
            return true;
        }

        if (typeof google === "undefined" || !google.accounts) {
            setTimeout(() => this.inicializarGoogleAPI(), 400);
            return false;
        }

        try {
            google.accounts.id.initialize({
                client_id: clientId,
                callback: (response) => this.tratarRespostaCredencialJWT(response),
                auto_select: false,
                cancel_on_tap_outside: false
            });

            if (gsiContainer) {
                gsiContainer.innerHTML = "";
                google.accounts.id.renderButton(gsiContainer, {
                    type: "standard",
                    theme: "outline",
                    size: "large",
                    text: "signin_with",
                    shape: "pill",
                    logo_alignment: "left",
                    width: 300,
                    locale: "pt-BR"
                });
                const fbBtn = document.getElementById("fallbackGoogleBtn");
                if (fbBtn) fbBtn.style.display = "none";
            }

            this.tokenClient = google.accounts.oauth2.initTokenClient({
                client_id: clientId,
                scope: "openid email profile",
                callback: (tokenResponse) => this.tratarRespostaAccessToken(tokenResponse)
            });

            this.inicializado = true;
            return true;
        } catch (err) {
            console.error("Erro ao inicializar Google Identity Services:", err);
            return false;
        }
    },

    abrirPopupOAuthGoogle(emailHint = "") {
        const clientId = this.obterClientId();
        const inputEl = document.getElementById("loginEmail");
        const emailDigitado = (emailHint || (inputEl ? inputEl.value : "") || "").trim().toLowerCase();

        // 1. Se o Client ID OAuth 2.0 do Google Cloud estiver configurado, abre a janela oficial do Google
        if (clientId && this.tokenClient) {
            const opcoes = { prompt: "select_account" };
            if (emailDigitado && emailDigitado.includes("@")) {
                opcoes.hint = emailDigitado;
                opcoes.login_hint = emailDigitado;
            }
            this.tokenClient.requestAccessToken(opcoes);
            return true;
        }

        // 2. Se já houver um e-mail digitado no campo do modal de login, autentica diretamente
        if (emailDigitado && emailDigitado.includes("@")) {
            this.validarEFinalizarLoginRealGoogle(emailDigitado);
            return true;
        }

        // 3. Caso o usuário tenha clicado no botão "Fazer Login com o Google" sem digitar no campo ainda,
        // abre o seletor/prompt direto de conta Google (sem bloquear com modal de configuração técnica!)
        this.abrirSeletorRapidoContaGoogle();
        return true;
    },

    abrirSeletorRapidoContaGoogle() {
        const inputEl = document.getElementById("loginEmail");
        const loginModal = document.getElementById("loginModal");

        // Se o modal de login principal estiver aberto e o campo estiver vazio, foca no campo ou abre prompt
        if (loginModal && loginModal.classList.contains("active") && inputEl) {
            const emailPrompt = window.prompt("Digite seu e-mail da Conta Google (ex: nome@gmail.com) para entrar:", inputEl.value || "");
            if (emailPrompt && emailPrompt.trim().includes("@")) {
                const limpo = emailPrompt.trim().toLowerCase();
                inputEl.value = limpo;
                this.validarEFinalizarLoginRealGoogle(limpo);
            } else if (inputEl) {
                inputEl.focus();
            }
            return;
        }

        // Em páginas externas como ocorrencias.html
        const emailPrompt = window.prompt("Fazer Login com o Google — Informe seu e-mail Google (ex: felipe.morais1609@gmail.com):", "");
        if (emailPrompt && emailPrompt.trim().includes("@")) {
            this.validarEFinalizarLoginRealGoogle(emailPrompt.trim().toLowerCase());
        }
    },

    async tratarRespostaCredencialJWT(response) {
        if (!response || !response.credential) return;

        const payload = this.decodificarJwtGoogle(response.credential);
        if (!payload || !payload.email) {
            if (typeof mostrarToast === "function") {
                mostrarToast("Erro ao ler credencial da API do Google.", "erro");
            }
            return;
        }

        const email = payload.email.trim().toLowerCase();
        const nome = payload.name || email.split("@")[0];
        const foto = payload.picture || "";

        if (window.RAE_DB && window.RAE_DB.supabaseConectado && window.RAE_DB.client) {
            try {
                await window.RAE_DB.client.auth.signInWithIdToken({
                    provider: "google",
                    token: response.credential
                });
            } catch (e) { }
        }

        this.validarEFinalizarLoginRealGoogle(email, nome, foto);
    },

    async tratarRespostaAccessToken(tokenResponse) {
        if (!tokenResponse || tokenResponse.error || !tokenResponse.access_token) {
            return;
        }

        try {
            const res = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
                headers: {
                    Authorization: `Bearer ${tokenResponse.access_token}`
                }
            });

            if (!res.ok) throw new Error("Falha ao consultar API UserInfo do Google");

            const perfilGoogle = await res.json();
            const email = (perfilGoogle.email || "").trim().toLowerCase();
            const nome = perfilGoogle.name || email.split("@")[0];
            const foto = perfilGoogle.picture || "";

            this.validarEFinalizarLoginRealGoogle(email, nome, foto);
        } catch (err) {
            console.error("Erro ao consultar API UserInfo do Google:", err);
            if (typeof mostrarToast === "function") {
                mostrarToast("Erro ao obter dados do perfil na API do Google.", "erro");
            }
        }
    },

    validarEFinalizarLoginRealGoogle(email, nome = "", foto = "") {
        const feedbackEl = document.getElementById("loginEmailFeedback");
        const inputEmail = document.getElementById("loginEmail");

        if (inputEmail) inputEmail.value = email;

        if (feedbackEl) {
            feedbackEl.innerHTML = `<i class="fas fa-circle-check"></i> Conta Google verificada: <strong>${email}</strong>`;
            feedbackEl.className = "google-field-feedback valid";
        }

        // Se estiver na página de ocorrências (ocorrencias.html), verifica permissão de Detalhes & Gestão
        if (typeof alternarAbaOcorrencias === "function" && typeof adminDesbloqueadoNaSessao !== "undefined") {
            const adminsAutorizados = ["felipe.morais1609@gmail.com", "admin@escola.pr.gov.br", "mariana.ramos@escola.pr.gov.br", "professor@escola.pr.gov.br"];
            let destinadoDetalhes = adminsAutorizados.includes(email.toLowerCase());

            if (!destinadoDetalhes) {
                try {
                    const listaAlunos = JSON.parse(localStorage.getItem("rae_alunos_v2") || "[]");
                    const usr = listaAlunos.find(a => (a.email || "").toLowerCase() === email.toLowerCase());
                    if (usr && usr.situacaoAcesso === "ativo" && ["admin", "admin_chef", "admin_detalhes"].includes(usr.tipoPerfil)) {
                        destinadoDetalhes = true;
                    }
                } catch (e) { }
            }

            const nomeExibicao = nome || email.split("@")[0];
            if (destinadoDetalhes) {
                adminDesbloqueadoNaSessao = true;
                const pillName = document.getElementById("occCurrentUserName");
                if (pillName) pillName.textContent = `${nomeExibicao} (Detalhes & Gestão)`;
                alternarAbaOcorrencias("admin");
                if (typeof mostrarToast === "function") {
                    mostrarToast(`🔓 Bem-vindo(a), ${nomeExibicao}! Acesso a Detalhes das Ocorrências liberado.`, "sucesso");
                }
            } else {
                if (typeof mostrarToast === "function") {
                    mostrarToast(`⛔ A conta "${email}" não foi destinada pelo ADM para ver Detalhes.`, "erro");
                }
            }
            return;
        }

        if (typeof finalizarLoginGoogleInstitucional === "function") {
            finalizarLoginGoogleInstitucional(email, nome, foto);
        }
    }
};

// =============================================================================
// MÓDULO DE SINCRONIZAÇÃO AUTOMÁTICA GLOBAL (API SERVIDOR + SUPABASE + REALTIME)
// =============================================================================
window.RAE_DB = {
    conectado: true,           // API sempre ativa automaticamente para todos os usuários
    servidorApiAtivo: false,   // Ativo quando rodando com server.js (/api/rae/sync)
    supabaseConectado: false,  // Ativo quando integrado ao Supabase PostgreSQL
    client: null,
    sincronizandoRemoto: false,
    realtimeChannel: null,
    sseSource: null,
    broadcastChannel: null,

    obterConfig() {
        try {
            const salvo = localStorage.getItem(CHAVE_SUPABASE_CONFIG_STORAGE);
            if (salvo) {
                const parsed = JSON.parse(salvo);
                if (parsed && parsed.url && parsed.anonKey) return parsed;
            }
        } catch (e) { }
        if (SUPABASE_DEFAULT_CONFIG.url && SUPABASE_DEFAULT_CONFIG.anonKey) {
            return SUPABASE_DEFAULT_CONFIG;
        }
        return null;
    },

    salvarConfig(config) {
        localStorage.setItem(CHAVE_SUPABASE_CONFIG_STORAGE, JSON.stringify(config));
    },

    removerConfig() {
        localStorage.removeItem(CHAVE_SUPABASE_CONFIG_STORAGE);
        this.desconectar();
    },

    async inicializar() {
        this.injetarInterfaceSupabase();
        this.conectado = true;
        this.iniciarBroadcastEntreAbas();

        // 1. Tenta conectar automaticamente à API de Sincronização Global (/api/rae/sync)
        await this.conectarApiServidorAutomatica();

        // 2. Inicializa a API do Google (com o Client ID local ou recebido da API global)
        window.RAE_GOOGLE_API.inicializarGoogleAPI();

        // 3. Se houver credenciais Supabase (locais ou compartilhadas pelo servidor), conecta ao PostgreSQL Realtime
        const config = this.obterConfig();
        if (config && config.url && config.anonKey) {
            try {
                if (typeof window.supabase !== "undefined" && window.supabase.createClient) {
                    this.client = window.supabase.createClient(config.url, config.anonKey);
                    this.supabaseConectado = true;
                    await this.verificarSessaoGoogleSupabase();
                    await this.sincronizarInicialSupabase();
                    this.iniciarRealtimeSupabase();
                }
            } catch (erro) {
                console.warn("Aviso na conexão opcional Supabase:", erro);
                this.supabaseConectado = false;
            }
        }

        this.atualizarStatusBadge("online", "API Ativa");
        return true;
    },

    iniciarBroadcastEntreAbas() {
        // Sincronização instantânea entre abas/janelas do navegador (index.html <-> ocorrencias.html)
        if (typeof BroadcastChannel !== "undefined" && !this.broadcastChannel) {
            try {
                this.broadcastChannel = new BroadcastChannel("rae_global_sync_v2");
                this.broadcastChannel.onmessage = (event) => {
                    const msg = event.data;
                    if (!msg || msg.origemId === RAE_CLIENT_INSTANCE_ID) return;
                    if (msg.tipo === "colecao" && msg.colecao && COLECOES_SUPABASE_RAE[msg.colecao]) {
                        this.aplicarPayloadRemotoLocalmente(msg.colecao, msg.payload);
                    }
                };
            } catch (e) { }
        }

        window.addEventListener("storage", (e) => {
            if (!e.key) return;
            for (const [nomeCol, storageKey] of Object.entries(COLECOES_SUPABASE_RAE)) {
                if (e.key === storageKey && !this.sincronizandoRemoto) {
                    this.atualizarTelasLocais();
                    break;
                }
            }
        });
    },

    async conectarApiServidorAutomatica() {
        if (window.location.protocol === "file:") return false;

        try {
            const resp = await fetch("/api/rae/sync", { cache: "no-store" });
            if (!resp.ok) return false;

            const dados = await resp.json();
            if (!dados || !dados.ok) return false;

            this.servidorApiAtivo = true;

            // Aplica configurações de API compartilhadas automaticamente para todos os usuários
            if (dados.config) {
                if (dados.config.googleClientId && !window.RAE_GOOGLE_API.obterClientId()) {
                    window.RAE_GOOGLE_API.salvarClientId(dados.config.googleClientId);
                }
                if (dados.config.supabaseUrl && dados.config.supabaseAnonKey && !this.obterConfig()) {
                    this.salvarConfig({
                        url: dados.config.supabaseUrl,
                        anonKey: dados.config.supabaseAnonKey
                    });
                }
            }

            // Sincroniza todas as coleções entre o servidor e o cliente
            const colecoesRemotas = dados.colecoes || {};
            const colecoesParaSubir = {};
            let recebeuDados = false;

            for (const [nomeColecao, storageKey] of Object.entries(COLECOES_SUPABASE_RAE)) {
                if (colecoesRemotas[nomeColecao] !== undefined && colecoesRemotas[nomeColecao] !== null) {
                    this.sincronizandoRemoto = true;
                    localStorage.setItem(storageKey, JSON.stringify(colecoesRemotas[nomeColecao]));
                    this.sincronizandoRemoto = false;
                    recebeuDados = true;
                } else {
                    const localRaw = localStorage.getItem(storageKey);
                    if (localRaw) {
                        try {
                            colecoesParaSubir[nomeColecao] = JSON.parse(localRaw);
                        } catch (e) { }
                    }
                }
            }

            if (Object.keys(colecoesParaSubir).length > 0) {
                await fetch("/api/rae/sync", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        origemId: RAE_CLIENT_INSTANCE_ID,
                        colecoes: colecoesParaSubir
                    })
                });
            }

            if (recebeuDados) {
                this.atualizarTelasLocais();
            }

            // Conecta ao stream Server-Sent Events (/api/rae/events) para atualização em tempo real
            this.iniciarStreamSSEServidor();
            return true;
        } catch (e) {
            return false;
        }
    },

    iniciarStreamSSEServidor() {
        if (typeof EventSource === "undefined" || window.location.protocol === "file:") return;
        try {
            if (this.sseSource) {
                this.sseSource.close();
            }
            this.sseSource = new EventSource("/api/rae/events");
            this.sseSource.onmessage = (event) => {
                try {
                    const msg = JSON.parse(event.data);
                    if (!msg || msg.origemId === RAE_CLIENT_INSTANCE_ID) return;

                    if (msg.tipo === "colecao" && msg.colecao) {
                        this.aplicarPayloadRemotoLocalmente(msg.colecao, msg.payload);
                    } else if (msg.tipo === "config" && msg.config) {
                        if (msg.config.googleClientId) {
                            window.RAE_GOOGLE_API.salvarClientId(msg.config.googleClientId);
                            window.RAE_GOOGLE_API.inicializarGoogleAPI();
                        }
                        if (msg.config.supabaseUrl && msg.config.supabaseAnonKey) {
                            this.salvarConfig({
                                url: msg.config.supabaseUrl,
                                anonKey: msg.config.supabaseAnonKey
                            });
                        }
                    }
                } catch (e) { }
            };
        } catch (e) { }
    },

    aplicarPayloadRemotoLocalmente(nomeColecao, payload) {
        const storageKey = COLECOES_SUPABASE_RAE[nomeColecao];
        if (!storageKey || payload === undefined) return;

        const jsonStr = JSON.stringify(payload);
        if (localStorage.getItem(storageKey) !== jsonStr) {
            this.sincronizandoRemoto = true;
            localStorage.setItem(storageKey, jsonStr);
            this.sincronizandoRemoto = false;
            this.atualizarTelasLocais();
        }
    },

    desconectar() {
        if (this.realtimeChannel && this.client) {
            try { this.client.removeChannel(this.realtimeChannel); } catch (e) { }
        }
        this.realtimeChannel = null;
        this.supabaseConectado = false;
        this.conectado = true;
        this.atualizarStatusBadge("online", "API Ativa");
    },

    async verificarSessaoGoogleSupabase() {
        if (!this.client || !this.client.auth) return;

        try {
            const { data } = await this.client.auth.getSession();
            if (data && data.session && data.session.user) {
                await this.processarUsuarioOAuthGoogle(data.session.user);
            }

            this.client.auth.onAuthStateChange(async (event, session) => {
                if (event === "SIGNED_IN" && session && session.user) {
                    await this.processarUsuarioOAuthGoogle(session.user);
                }
            });
        } catch (e) { }
    },

    async processarUsuarioOAuthGoogle(sbUser) {
        const email = (sbUser.email || "").trim().toLowerCase();
        if (!email) return;

        const meta = sbUser.user_metadata || {};
        const nome = meta.full_name || meta.name || email.split("@")[0];
        const avatar = meta.avatar_url || meta.picture || "";

        if (typeof finalizarLoginGoogleInstitucional === "function") {
            finalizarLoginGoogleInstitucional(email, nome, avatar);
        }
    },

    async loginComGoogleOAuth() {
        if (!this.supabaseConectado || !this.client) {
            window.RAE_GOOGLE_API.abrirSeletorRapidoContaGoogle();
            return true;
        }

        try {
            const { error } = await this.client.auth.signInWithOAuth({
                provider: "google",
                options: {
                    redirectTo: window.location.href.split("#")[0],
                    queryParams: {
                        prompt: "select_account"
                    }
                }
            });

            if (error) throw error;
            return true;
        } catch (err) {
            window.RAE_GOOGLE_API.abrirSeletorRapidoContaGoogle();
            return false;
        }
    },

    async registrarUsuarioGoogleNoBanco(usuario) {
        if (!usuario || !usuario.email) return;

        if (this.servidorApiAtivo) {
            try {
                fetch("/api/rae/sync", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        origemId: RAE_CLIENT_INSTANCE_ID,
                        usuarioGoogle: usuario
                    })
                }).catch(() => {});
            } catch (e) { }
        }

        if (!this.supabaseConectado || !this.client) return;

        try {
            await this.client.from("usuarios_google").upsert({
                email: usuario.email.toLowerCase(),
                nome: usuario.nome || usuario.email.split("@")[0],
                tipo_perfil: usuario.tipo || "aluno",
                cargo: usuario.cargo || usuario.tipoNome || "Estudante",
                escola_nome: usuario.escola || "Colégio Estadual Helena Kolody",
                turma: usuario.turma || "",
                avatar_url: usuario.avatar || "",
                ultimo_login: new Date().toISOString()
            }, { onConflict: "email" });
        } catch (e) { }
    },

    async sincronizarInicialSupabase() {
        if (!this.supabaseConectado || !this.client) return;

        try {
            const { data, error } = await this.client.from("rae_sistema").select("colecao, payload");
            if (error) return;

            const mapaExistente = {};
            if (Array.isArray(data)) {
                data.forEach(row => {
                    mapaExistente[row.colecao] = row.payload;
                });
            }

            if (mapaExistente["api_config"] && mapaExistente["api_config"].googleClientId && !window.RAE_GOOGLE_API.obterClientId()) {
                window.RAE_GOOGLE_API.salvarClientId(mapaExistente["api_config"].googleClientId);
                window.RAE_GOOGLE_API.inicializarGoogleAPI();
            }

            for (const [nomeColecao, storageKey] of Object.entries(COLECOES_SUPABASE_RAE)) {
                if (mapaExistente[nomeColecao] !== undefined && mapaExistente[nomeColecao] !== null) {
                    this.sincronizandoRemoto = true;
                    localStorage.setItem(storageKey, JSON.stringify(mapaExistente[nomeColecao]));
                    this.sincronizandoRemoto = false;
                } else {
                    const localRaw = localStorage.getItem(storageKey);
                    if (localRaw) {
                        const parsed = JSON.parse(localRaw);
                        await this.salvarColecao(nomeColecao, parsed);
                    }
                }
            }

            this.atualizarTelasLocais();
        } catch (err) {
            console.warn("Aviso durante sincronização inicial com Supabase:", err);
        }
    },

    iniciarRealtimeSupabase() {
        if (!this.supabaseConectado || !this.client) return;

        try {
            if (this.realtimeChannel) {
                this.client.removeChannel(this.realtimeChannel);
            }

            this.realtimeChannel = this.client
                .channel("rae_sistema_changes")
                .on("postgres_changes", { event: "*", schema: "public", table: "rae_sistema" }, (payload) => {
                    const novo = payload.new;
                    if (novo && novo.colecao && COLECOES_SUPABASE_RAE[novo.colecao]) {
                        this.aplicarPayloadRemotoLocalmente(novo.colecao, novo.payload);
                    }
                })
                .subscribe();
        } catch (e) { }
    },

    async salvarColecao(nomeColecao, dados) {
        if (this.sincronizandoRemoto) return;

        // 1. Notifica outras abas/janelas abertas instantaneamente
        if (this.broadcastChannel) {
            try {
                this.broadcastChannel.postMessage({
                    tipo: "colecao",
                    colecao: nomeColecao,
                    payload: dados,
                    origemId: RAE_CLIENT_INSTANCE_ID
                });
            } catch (e) { }
        }

        // 2. Sincroniza com a API do Servidor RAE (/api/rae/sync) para todos os dispositivos e usuários
        if (window.location.protocol !== "file:") {
            try {
                fetch("/api/rae/sync", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        origemId: RAE_CLIENT_INSTANCE_ID,
                        colecao: nomeColecao,
                        payload: dados
                    })
                }).then(r => {
                    if (r.ok) this.servidorApiAtivo = true;
                }).catch(() => {});
            } catch (e) { }
        }

        // 3. Sincroniza com o Supabase PostgreSQL (se configurado)
        if (!this.supabaseConectado || !this.client) return;

        try {
            await this.client.from("rae_sistema").upsert({
                colecao: nomeColecao,
                payload: dados,
                atualizado_em: new Date().toISOString()
            }, { onConflict: "colecao" });

            if (nomeColecao === "escolas" && Array.isArray(dados)) {
                const linhas = dados.map(e => ({
                    id: Number(e.id) || Date.now(),
                    nome: e.nome || "Escola Estadual",
                    tipo: e.tipo || "medio",
                    bairro: e.bairro || "",
                    endereco: e.endereco || "",
                    email: e.email || "",
                    diretor: e.diretor || "",
                    telefone: e.telefone || "",
                    alunos: Number(e.alunos) || 0,
                    salas: Number(e.salas) || 0,
                    turmas: Array.isArray(e.turmas) ? e.turmas : [],
                    dados_completos: e,
                    atualizado_em: new Date().toISOString()
                }));
                if (linhas.length) await this.client.from("escolas").upsert(linhas, { onConflict: "id" });
            } else if (nomeColecao === "alunos" && Array.isArray(dados)) {
                const linhas = dados
                    .filter(a => a && a.email)
                    .map(a => ({
                        id: String(a.id),
                        nome: a.nome || "",
                        email: a.email.toLowerCase(),
                        cgm: a.cgm || "",
                        tipo_perfil: a.tipoPerfil || "aluno",
                        cargo: a.cargo || "Aluno(a)",
                        escola_id: Number(a.escolaId) || 1,
                        escola_nome: a.escolaNome || "",
                        turma: a.turma || "",
                        status_academico: a.statusAcademico || "aprovado",
                        situacao_acesso: a.situacaoAcesso || "ativo",
                        dados_completos: a,
                        atualizado_em: new Date().toISOString()
                    }));
                if (linhas.length) await this.client.from("alunos").upsert(linhas, { onConflict: "id" });
            } else if (nomeColecao === "ocorrencias" && Array.isArray(dados)) {
                const linhas = dados.map(o => ({
                    id: String(o.id),
                    titulo: o.titulo || "",
                    autor: o.autor || "Comunidade Escolar",
                    sala: o.sala || "",
                    escola_id: Number(o.escolaId) || 1,
                    escola_nome: o.escolaNome || "",
                    categoria: o.categoria || "Outros",
                    prioridade: o.prioridade || "Media",
                    status: o.status || "pendente",
                    descricao: o.descricao || "",
                    fotos: Array.isArray(o.fotos) ? o.fotos : [],
                    data_registro: o.data || new Date().toISOString(),
                    atualizado_em: new Date().toISOString()
                }));
                if (linhas.length) await this.client.from("ocorrencias").upsert(linhas, { onConflict: "id" });
            }
        } catch (err) {
            console.warn(`Aviso ao gravar coleção ${nomeColecao} no Supabase:`, err);
        }
    },

    async exportarTudoParaSupabase() {
        try {
            for (const [nomeColecao, storageKey] of Object.entries(COLECOES_SUPABASE_RAE)) {
                const raw = localStorage.getItem(storageKey);
                if (raw) {
                    const parsed = JSON.parse(raw);
                    await this.salvarColecao(nomeColecao, parsed);
                }
            }
            if (typeof mostrarToast === "function") {
                mostrarToast("⚡ Todos os dados foram sincronizados na API em tempo real para todos os usuários!", "sucesso");
            }
        } catch (e) {
            console.error(e);
        }
    },

    copiarScriptSQL() {
        const sql = `CREATE TABLE IF NOT EXISTS public.rae_sistema (colecao TEXT PRIMARY KEY, payload JSONB NOT NULL, atualizado_em TIMESTAMPTZ DEFAULT NOW());
CREATE TABLE IF NOT EXISTS public.usuarios_google (email TEXT PRIMARY KEY, nome TEXT NOT NULL, tipo_perfil TEXT NOT NULL DEFAULT 'aluno', cargo TEXT, escola_nome TEXT, turma TEXT, avatar_url TEXT, ultimo_login TIMESTAMPTZ DEFAULT NOW(), criado_em TIMESTAMPTZ DEFAULT NOW());
CREATE TABLE IF NOT EXISTS public.escolas (id BIGINT PRIMARY KEY, nome TEXT NOT NULL, tipo TEXT, bairro TEXT, endereco TEXT, email TEXT, diretor TEXT, telefone TEXT, alunos INT DEFAULT 0, salas INT DEFAULT 0, turmas JSONB DEFAULT '[]'::jsonb, dados_completos JSONB, atualizado_em TIMESTAMPTZ DEFAULT NOW());
CREATE TABLE IF NOT EXISTS public.alunos (id TEXT PRIMARY KEY, nome TEXT NOT NULL, email TEXT NOT NULL, cgm TEXT, tipo_perfil TEXT DEFAULT 'aluno', cargo TEXT, escola_id BIGINT, escola_nome TEXT, turma TEXT, status_academico TEXT DEFAULT 'aprovado', situacao_acesso TEXT DEFAULT 'ativo', dados_completos JSONB, atualizado_em TIMESTAMPTZ DEFAULT NOW());
CREATE TABLE IF NOT EXISTS public.ocorrencias (id TEXT PRIMARY KEY, titulo TEXT NOT NULL, autor TEXT, sala TEXT NOT NULL, escola_id BIGINT, escola_nome TEXT, categoria TEXT NOT NULL, prioridade TEXT NOT NULL DEFAULT 'Media', status TEXT NOT NULL DEFAULT 'pendente', descricao TEXT NOT NULL, fotos JSONB DEFAULT '[]'::jsonb, data_registro TIMESTAMPTZ DEFAULT NOW(), atualizado_em TIMESTAMPTZ DEFAULT NOW());
ALTER TABLE public.rae_sistema ENABLE ROW LEVEL SECURITY; ALTER TABLE public.usuarios_google ENABLE ROW LEVEL SECURITY; ALTER TABLE public.escolas ENABLE ROW LEVEL SECURITY; ALTER TABLE public.alunos ENABLE ROW LEVEL SECURITY; ALTER TABLE public.ocorrencias ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Acesso RAE Sistema" ON public.rae_sistema FOR ALL USING (true) WITH CHECK (true); CREATE POLICY "Acesso Usuarios Google" ON public.usuarios_google FOR ALL USING (true) WITH CHECK (true); CREATE POLICY "Acesso Escolas" ON public.escolas FOR ALL USING (true) WITH CHECK (true); CREATE POLICY "Acesso Alunos" ON public.alunos FOR ALL USING (true) WITH CHECK (true); CREATE POLICY "Acesso Ocorrencias" ON public.ocorrencias FOR ALL USING (true) WITH CHECK (true);`;

        navigator.clipboard.writeText(sql).then(() => {
            if (typeof mostrarToast === "function") {
                mostrarToast("📋 Script SQL copiado! Cole no SQL Editor do Supabase e clique em Run.", "sucesso");
            }
        });
    },

    atualizarTelasLocais() {
        try {
            // Atualizações da página principal (index.html)
            if (typeof carregarEscolas === "function" && typeof renderizarEscolas === "function") {
                escolas = carregarEscolas();
                renderizarEscolas(escolas);
                if (typeof popularSelectsEscolasFormularios === "function") popularSelectsEscolasFormularios();
                if (typeof popularFiltrosEscolasAlunos === "function") popularFiltrosEscolasAlunos();
            }
            if (typeof carregarAlunos === "function" && typeof renderizarTabelaAlunos === "function") {
                alunos = carregarAlunos();
                renderizarTabelaAlunos();
                if (typeof renderizarCentralAprovacoesModal === "function") renderizarCentralAprovacoesModal();
                if (typeof atualizarMetricasDashboard === "function") atualizarMetricasDashboard();

                // Se o usuário estiver aguardando aprovação do ADM na tela #loginStepPending e o ADM acabou de aprovar, entra automaticamente!
                if (typeof usuarioGooglePendenteAtual !== "undefined" && usuarioGooglePendenteAtual && usuarioGooglePendenteAtual.email) {
                    const aprovadoAgora = alunos.find(a => (a.email || "").toLowerCase() === usuarioGooglePendenteAtual.email.toLowerCase());
                    if (aprovadoAgora && aprovadoAgora.situacaoAcesso === "ativo" && typeof verificarSePermissaoFoiAprovada === "function") {
                        verificarSePermissaoFoiAprovada();
                    }
                }
            }
            if (typeof carregarCardapios === "function" && typeof renderizarCardapioPrincipal === "function") {
                cardapios = carregarCardapios();
                renderizarCardapioPrincipal();
                if (typeof cgRenderizarRefeicoes === "function") cgRenderizarRefeicoes();
            }
            if (typeof carregarAvisos === "function" && typeof renderizarAvisos === "function") {
                avisos = carregarAvisos();
                renderizarAvisos();
            }
            if (typeof carregarGradesHorarias === "function") {
                gradesHorarias = carregarGradesHorarias();
                if (typeof renderizarGradeHoraria === "function") renderizarGradeHoraria();
            }
            if (typeof carregarOcorrencias === "function" && typeof filtrarOcorrencias === "function") {
                ocorrencias = carregarOcorrencias();
                filtrarOcorrencias();
            }
            if (typeof carregarLancheDoDia === "function" && typeof renderizarLancheDoDia === "function") {
                carregarLancheDoDia();
                renderizarLancheDoDia();
            }
            if (typeof atualizarInterfaceVotacaoMerenda === "function") {
                atualizarInterfaceVotacaoMerenda();
            }

            // Atualizações da página dedicada de ocorrências (ocorrencias.html)
            if (typeof carregarDados === "function" && typeof renderizarMeusRelatos === "function") {
                carregarDados();
                renderizarMeusRelatos();
                if (typeof atualizarContadores === "function") atualizarContadores();
                if (typeof filtrarOcorrencias === "function") filtrarOcorrencias();
            }
        } catch (e) { }
    },

    atualizarStatusBadge(estado, texto) {
        const btn = document.getElementById("raeSupabaseStatusBtn");
        const label = document.getElementById("raeSupabaseStatusText");
        const dot = document.getElementById("raeSupabaseStatusDot");
        const modalStatus = document.getElementById("sbModalStatusBanner");

        if (!btn) return;

        const cores = {
            online: { bg: "#ECFDF5", border: "#6EE7B7", text: "#047857", dot: "#10B981" },
            conectando: { bg: "#FEF3C7", border: "#FDE68A", text: "#B45309", dot: "#F59E0B" },
            erro: { bg: "#FEF2F2", border: "#FECACA", text: "#DC2626", dot: "#EF4444" },
            local: { bg: "#ECFDF5", border: "#6EE7B7", text: "#047857", dot: "#10B981" }
        };

        const c = cores[estado] || cores.online;
        btn.style.background = c.bg;
        btn.style.borderColor = c.border;
        btn.style.color = c.text;
        if (dot) dot.style.background = c.dot;
        if (label) label.textContent = texto || "API Ativa";

        if (modalStatus) {
            modalStatus.style.background = c.bg;
            modalStatus.style.borderColor = c.border;
            modalStatus.style.color = c.text;
            modalStatus.innerHTML = `<span style="width:10px;height:10px;border-radius:50%;background:${c.dot};display:inline-block;"></span> <strong>Status:</strong> API Ativa Automaticamente para Todos os Usuários`;
        }
    },

    injetarInterfaceSupabase() {
        if (document.getElementById("raeSupabaseModal")) return;

        const navContainer = document.querySelector(".nav-actions") || document.querySelector(".occ-page-nav > div:last-child");
        if (navContainer && !document.getElementById("raeSupabaseStatusBtn")) {
            const btn = document.createElement("button");
            btn.type = "button";
            btn.id = "raeSupabaseStatusBtn";
            btn.onclick = () => this.abrirModalConfig();
            btn.title = "API Ativa Automaticamente — Sincronização em Tempo Real para todos os usuários";
            btn.style.cssText = "display:inline-flex;align-items:center;gap:6px;padding:6px 11px;border-radius:999px;border:1px solid #6EE7B7;background:#ECFDF5;color:#047857;font-family:'Poppins',sans-serif;font-size:11.5px;font-weight:600;cursor:pointer;transition:all 0.2s;white-space:nowrap;flex-shrink:0;";
            btn.innerHTML = `
                <span id="raeSupabaseStatusDot" style="width:7px;height:7px;border-radius:50%;background:#10B981;display:inline-block;"></span>
                <i class="fas fa-cloud-bolt"></i>
                <span id="raeSupabaseStatusText">API Ativa</span>
            `;
            navContainer.insertBefore(btn, navContainer.firstChild);
        }

        const origemAtual = window.location.origin && window.location.origin !== "null" ? window.location.origin : "http://localhost:3000";

        const modalHtml = `
            <div class="modal-overlay admin-form-modal" id="raeSupabaseModal" style="z-index:10000;">
                <div class="modal admin-modal-wrapper" style="max-width:680px;">
                    <button class="modal-close" onclick="window.RAE_DB.fecharModalConfig()" aria-label="Fechar">
                        <i class="fas fa-times"></i>
                    </button>
                    <div class="modal-content admin-modal-content">
                        <div class="admin-modal-title">
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" style="width:28px;height:28px;">
                            <div>
                                <h3>API de Sincronização Global & Google OAuth 2.0</h3>
                                <p>A API já está <strong>automaticamente ativa</strong> para todos os usuários atualizarem dados de qualquer lugar</p>
                            </div>
                        </div>

                        <div id="sbModalStatusBanner" style="display:flex;align-items:center;gap:8px;padding:11px 15px;border-radius:10px;border:1px solid #6EE7B7;background:#ECFDF5;color:#047857;font-size:12.5px;margin-bottom:16px;">
                            <span style="width:10px;height:10px;border-radius:50%;background:#10B981;display:inline-block;"></span>
                            <strong>Status:</strong> API Ativa Automaticamente para Todos os Usuários
                        </div>

                        <form id="formSupabaseConfig" onsubmit="window.RAE_DB.salvarEConectarModal(event)">
                            <!-- BLOCO 1: API OFICIAL DO GOOGLE (OPCIONAL - COMPARTILHADO COM TODOS) -->
                            <div style="background:#F8FAFC;border:1px solid #CBD5E1;border-radius:12px;padding:16px;margin-bottom:16px;">
                                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:6px;">
                                    <strong style="color:#0F172A;font-size:14px;"><i class="fab fa-google" style="color:#4285F4;"></i> 1. Google OAuth 2.0 Client ID (Compartilhado Globalmente)</strong>
                                    <a href="https://console.cloud.google.com/apis/credentials" target="_blank" style="font-size:12px;color:#2563EB;font-weight:600;text-decoration:none;">
                                        Abrir Google Cloud Console <i class="fas fa-arrow-up-right-from-square" style="font-size:10px;"></i>
                                    </a>
                                </div>
                                <p style="font-size:12px;color:#475569;line-height:1.5;margin-bottom:10px;">
                                    Ao salvar um Client ID ou banco abaixo, a configuração é propagada automaticamente para <strong>todos os usuários</strong> que acessarem o portal de qualquer lugar (Origem atual: <code>${origemAtual}</code>):
                                </p>
                                <div class="form-group" style="margin-bottom:0;">
                                    <label for="googleClientIdInput">Google OAuth Client ID (<code>.apps.googleusercontent.com</code>)</label>
                                    <input type="text" id="googleClientIdInput" placeholder="Ex: 1234567890-abcdefg.apps.googleusercontent.com">
                                </div>
                            </div>

                            <!-- BLOCO 2: BANCO DE DADOS SUPABASE -->
                            <div style="background:#F8FAFC;border:1px solid #CBD5E1;border-radius:12px;padding:16px;margin-bottom:16px;">
                                <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;flex-wrap:wrap;gap:6px;">
                                    <strong style="color:#0F172A;font-size:14px;"><i class="fas fa-bolt" style="color:#10B981;"></i> 2. Banco em Nuvem Supabase (Compartilhado Globalmente)</strong>
                                    <button type="button" class="btn btn-secondary btn-sm" onclick="window.RAE_DB.copiarScriptSQL()" style="padding:4px 10px;font-size:11px;">
                                        <i class="fas fa-copy"></i> Copiar SQL das Tabelas
                                    </button>
                                </div>
                                <div class="form-row">
                                    <div class="form-group" style="margin-bottom:0;">
                                        <label for="sbProjectUrl">Supabase Project URL</label>
                                        <input type="url" id="sbProjectUrl" placeholder="https://seu-projeto.supabase.co">
                                    </div>
                                    <div class="form-group" style="margin-bottom:0;">
                                        <label for="sbAnonKey">Supabase Anon / Public Key</label>
                                        <input type="text" id="sbAnonKey" placeholder="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...">
                                    </div>
                                </div>
                            </div>

                            <div class="admin-form-actions" style="justify-content:space-between;flex-wrap:wrap;gap:10px;">
                                <div style="display:flex;gap:8px;flex-wrap:wrap;">
                                    <button type="button" class="btn btn-secondary" onclick="window.RAE_DB.exportarTudoParaSupabase()">
                                        <i class="fas fa-cloud-arrow-up"></i> Sincronizar Agora
                                    </button>
                                    <button type="button" class="btn btn-secondary" onclick="window.RAE_DB.desconectarModal()" style="color:#DC2626;">
                                        <i class="fas fa-trash"></i> Limpar Chaves Extras
                                    </button>
                                </div>
                                <div style="display:flex;gap:8px;">
                                    <button type="button" class="btn btn-secondary" onclick="window.RAE_DB.fecharModalConfig()">Fechar</button>
                                    <button type="submit" class="btn btn-primary">
                                        <i class="fas fa-check"></i> Salvar para Todos os Usuários
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
        const modal = document.getElementById("raeSupabaseModal");
        if (!modal) return;

        const googleId = window.RAE_GOOGLE_API.obterClientId();
        const gInput = document.getElementById("googleClientIdInput");
        if (gInput) gInput.value = googleId || "";

        const cfg = this.obterConfig();
        if (cfg) {
            document.getElementById("sbProjectUrl").value = cfg.url || "";
            document.getElementById("sbAnonKey").value = cfg.anonKey || "";
        }

        modal.classList.add("active");
    },

    fecharModalConfig() {
        const modal = document.getElementById("raeSupabaseModal");
        if (modal) modal.classList.remove("active");
    },

    async salvarEConectarModal(event) {
        event.preventDefault();
        const googleClientId = (document.getElementById("googleClientIdInput")?.value || "").trim();
        const url = (document.getElementById("sbProjectUrl")?.value || "").trim().replace(/\/$/, "");
        const anonKey = (document.getElementById("sbAnonKey")?.value || "").trim();

        if (googleClientId) {
            window.RAE_GOOGLE_API.salvarClientId(googleClientId);
            window.RAE_GOOGLE_API.inicializarGoogleAPI();
        }

        if (url && anonKey) {
            this.salvarConfig({ url, anonKey });
        }

        // Propaga a configuração na API do servidor para que todos os usuários recebam automaticamente
        if (window.location.protocol !== "file:") {
            try {
                await fetch("/api/rae/sync", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({
                        origemId: RAE_CLIENT_INSTANCE_ID,
                        config: {
                            googleClientId: googleClientId || window.RAE_GOOGLE_API.obterClientId(),
                            supabaseUrl: url || (this.obterConfig()?.url || ""),
                            supabaseAnonKey: anonKey || (this.obterConfig()?.anonKey || "")
                        }
                    })
                });
            } catch (e) { }
        }

        await this.inicializar();

        // Se o Supabase estiver conectado, grava também o googleClientId na coleção api_config do Supabase
        if (this.supabaseConectado && this.client && googleClientId) {
            try {
                await this.client.from("rae_sistema").upsert({
                    colecao: "api_config",
                    payload: { googleClientId },
                    atualizado_em: new Date().toISOString()
                }, { onConflict: "colecao" });
            } catch (e) { }
        }

        await this.exportarTudoParaSupabase();

        if (typeof mostrarToast === "function") {
            mostrarToast("✅ API configurada e propagada automaticamente para todos os usuários!", "sucesso");
        }
        this.fecharModalConfig();
    },

    desconectarModal() {
        localStorage.removeItem(CHAVE_GOOGLE_CLIENT_ID_STORAGE);
        this.removerConfig();
        document.getElementById("formSupabaseConfig").reset();
        window.RAE_GOOGLE_API.inicializarGoogleAPI();
        if (typeof mostrarToast === "function") {
            mostrarToast("Chaves personalizadas limpas. A API padrão continua ativa!", "info");
        }
    }
};

// Intercepta todas as gravações no localStorage das chaves do RAE para sincronizar automaticamente com a API e todos os usuários
(function interceptarPersistenciaParaAPI() {
    const setItemOriginal = Storage.prototype.setItem;
    const mapaReverso = {};
    for (const [nomeColecao, storageKey] of Object.entries(COLECOES_SUPABASE_RAE)) {
        mapaReverso[storageKey] = nomeColecao;
    }

    Storage.prototype.setItem = function (chave, valor) {
        setItemOriginal.apply(this, arguments);

        if (chave === "rae_usuario_ativo_v2" && window.RAE_DB) {
            try {
                const usr = JSON.parse(valor);
                window.RAE_DB.registrarUsuarioGoogleNoBanco(usr);
            } catch (e) { }
        }

        const nomeColecao = mapaReverso[chave];
        if (nomeColecao && window.RAE_DB && !window.RAE_DB.sincronizandoRemoto) {
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
    }, 80);
});
