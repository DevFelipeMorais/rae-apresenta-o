-- =============================================================================
-- RAE ESTADUAL - SCRIPT DE CRIAÇÃO DO BANCO DE DADOS NO SUPABASE (POSTGRESQL)
-- =============================================================================
-- Como usar:
-- 1. Acesse seu projeto em https://supabase.com/dashboard
-- 2. No menu lateral, clique em "SQL Editor" -> "New query"
-- 3. Cole todo este script e clique em "Run" (Executar)
-- =============================================================================

-- 1. Tabela de Sincronização Geral das Coleções do Sistema RAE
CREATE TABLE IF NOT EXISTS public.rae_sistema (
    colecao TEXT PRIMARY KEY,
    payload JSONB NOT NULL,
    atualizado_em TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Tabela de Usuários Autenticados com Conta Google
CREATE TABLE IF NOT EXISTS public.usuarios_google (
    email TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    tipo_perfil TEXT NOT NULL DEFAULT 'aluno',
    cargo TEXT,
    escola_nome TEXT,
    turma TEXT,
    avatar_url TEXT,
    ultimo_login TIMESTAMPTZ DEFAULT NOW(),
    criado_em TIMESTAMPTZ DEFAULT NOW()
);

-- 3. Tabela Relacional de Escolas Estaduais
CREATE TABLE IF NOT EXISTS public.escolas (
    id BIGINT PRIMARY KEY,
    nome TEXT NOT NULL,
    tipo TEXT,
    bairro TEXT,
    endereco TEXT,
    email TEXT,
    diretor TEXT,
    telefone TEXT,
    alunos INT DEFAULT 0,
    salas INT DEFAULT 0,
    turmas JSONB DEFAULT '[]'::jsonb,
    dados_completos JSONB,
    atualizado_em TIMESTAMPTZ DEFAULT NOW()
);

-- 4. Tabela Relacional de Alunos & Gestores
CREATE TABLE IF NOT EXISTS public.alunos (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    email TEXT NOT NULL,
    cgm TEXT,
    tipo_perfil TEXT DEFAULT 'aluno',
    cargo TEXT,
    escola_id BIGINT,
    escola_nome TEXT,
    turma TEXT,
    status_academico TEXT DEFAULT 'aprovado',
    situacao_acesso TEXT DEFAULT 'ativo',
    dados_completos JSONB,
    atualizado_em TIMESTAMPTZ DEFAULT NOW()
);

-- 5. Tabela Relacional de Ocorrências & Manutenção Predial
CREATE TABLE IF NOT EXISTS public.ocorrencias (
    id TEXT PRIMARY KEY,
    titulo TEXT NOT NULL,
    autor TEXT,
    sala TEXT NOT NULL,
    escola_id BIGINT,
    escola_nome TEXT,
    categoria TEXT NOT NULL,
    prioridade TEXT NOT NULL DEFAULT 'Media',
    status TEXT NOT NULL DEFAULT 'pendente',
    descricao TEXT NOT NULL,
    fotos JSONB DEFAULT '[]'::jsonb,
    data_registro TIMESTAMPTZ DEFAULT NOW(),
    atualizado_em TIMESTAMPTZ DEFAULT NOW()
);

-- Habilita Row Level Security (RLS) com políticas abertas para o cliente do portal
ALTER TABLE public.rae_sistema ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.usuarios_google ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.escolas ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.alunos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.ocorrencias ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Acesso RAE Sistema" ON public.rae_sistema;
CREATE POLICY "Acesso RAE Sistema" ON public.rae_sistema FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso Usuarios Google" ON public.usuarios_google;
CREATE POLICY "Acesso Usuarios Google" ON public.usuarios_google FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso Escolas" ON public.escolas;
CREATE POLICY "Acesso Escolas" ON public.escolas FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso Alunos" ON public.alunos;
CREATE POLICY "Acesso Alunos" ON public.alunos FOR ALL USING (true) WITH CHECK (true);

DROP POLICY IF EXISTS "Acesso Ocorrencias" ON public.ocorrencias;
CREATE POLICY "Acesso Ocorrencias" ON public.ocorrencias FOR ALL USING (true) WITH CHECK (true);
