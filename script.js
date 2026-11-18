// ==========================================================================
// RAE - REDE DE APOIO ESCOLAR (SISTEMA INTEGRADO ESTADUAL)
// PORTAL UNIFICADO: GESTÃO DO ADMINISTRADOR & ESPAÇO DO ESTUDANTE
// ==========================================================================

// Dados Iniciais das Escolas Estaduais
const escolasIniciais = [
    {
        id: 1,
        nome: "Escola Estadual Professora Helena Kolody",
        tipo: "tecnico",
        tipoNome: "Ensino Médio e Técnico",
        bairro: "Centro",
        endereco: "Rua Presidente Faria, 450 - Centro",
        alunos: 840,
        imagem: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
        status: "Ativa",
        telefone: "(41) 3254-1234",
        email: "helenakolody@escola.pr.gov.br",
        diretor: "Profª. Regina Célia Ferreira",
        salas: 24,
        turnos: [
            { nome: "Manhã", horario: "07:00 - 12:30", ativo: true },
            { nome: "Tarde", horario: "13:30 - 18:00", ativo: true },
            { nome: "Noite", horario: "19:00 - 22:30", ativo: true }
        ],
        integral: false,
        turmas: [
            "1º Ano A - Matutino",
            "2º Ano B - Matutino",
            "3º Ano C - Matutino",
            "1º DS - Vespertino",
            "2º DS - Vespertino",
            "3º ADM - Noturno"
        ],
        cursos: [
            {
                codigo: "ds",
                nome: "Desenvolvimento de Sistemas",
                icone: "fa-code",
                duracao: "3 semestres",
                vagas: 90,
                descricao: "Programação web, mobile, banco de dados, APIs e arquitetura de software."
            },
            {
                codigo: "adm",
                nome: "Administração",
                icone: "fa-briefcase",
                duracao: "3 semestres",
                vagas: 80,
                descricao: "Gestão empresarial, controladoria, processos logísticos e recursos humanos."
            }
        ]
    },
    {
        id: 2,
        nome: "Escola Estadual Carlos Drummond de Andrade",
        tipo: "medio",
        tipoNome: "Ensino Médio",
        bairro: "Jardim América",
        endereco: "Rua dos Poetas, 202 - Jardim América",
        alunos: 680,
        imagem: "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?w=800&q=80",
        status: "Ativa",
        telefone: "(11) 3456-0404",
        email: "drummond@escola.gov.br",
        diretor: "Carlos Mendes",
        salas: 20,
        turnos: [
            { nome: "Manhã", horario: "07:00 - 12:30", ativo: true },
            { nome: "Tarde", horario: "13:30 - 18:00", ativo: true },
            { nome: "Noite", horario: "19:00 - 22:30", ativo: true }
        ],
        integral: false,
        turmas: ["1º Ano A", "1º Ano B", "2º Ano A", "3º Ano A - Regular"],
        cursos: []
    },
    {
        id: 3,
        nome: "Instituto Federal de Educação (IFET)",
        tipo: "tecnico",
        tipoNome: "Ensino Técnico Integrado",
        bairro: "Vila Nova",
        endereco: "Rua da Ciência, 789 - Vila Nova",
        alunos: 1200,
        imagem: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
        status: "Ativa",
        telefone: "(11) 3456-0303",
        email: "ifet@escola.edu.br",
        diretor: "Ana Carolina Souza",
        salas: 40,
        turnos: [
            { nome: "Manhã", horario: "07:00 - 12:30", ativo: true },
            { nome: "Tarde", horario: "13:30 - 18:00", ativo: true },
            { nome: "Noite", horario: "19:00 - 22:45", ativo: true }
        ],
        integral: false,
        turmas: ["1º DS - Manhã", "2º DS - Tarde", "1º ADM - Manhã", "1º ENF - Tarde", "2º ENF - Noite"],
        cursos: [
            {
                codigo: "ds",
                nome: "Desenvolvimento de Sistemas",
                icone: "fa-code",
                duracao: "3 semestres",
                vagas: 120,
                descricao: "Programação, banco de dados, web mobile e análise de sistemas."
            },
            {
                codigo: "adm",
                nome: "Administração",
                icone: "fa-briefcase",
                duracao: "3 semestres",
                vagas: 100,
                descricao: "Gestão empresarial, finanças, RH, marketing e logística."
            },
            {
                codigo: "enf",
                nome: "Enfermagem",
                icone: "fa-heart-pulse",
                duracao: "4 semestres",
                vagas: 80,
                descricao: "Saúde coletiva, clínica, urgências, farmacologia e ética."
            }
        ]
    },
    {
        id: 4,
        nome: "Colégio Técnico Industrial (CTI)",
        tipo: "tecnico",
        tipoNome: "Ensino Técnico",
        bairro: "Distrito Industrial",
        endereco: "Av. da Tecnologia, 1500 - Setor Norte",
        alunos: 950,
        imagem: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&q=80",
        status: "Ativa",
        telefone: "(11) 3456-0707",
        email: "cti@escola.gov.br",
        diretor: "Roberto Alves",
        salas: 32,
        turnos: [
            { nome: "Manhã", horario: "07:00 - 12:30", ativo: true },
            { nome: "Tarde", horario: "13:30 - 18:00", ativo: true },
            { nome: "Noite", horario: "19:00 - 22:45", ativo: true }
        ],
        integral: false,
        turmas: ["1º DS - Manhã", "2º DS - Tarde", "1º ADM - Noite", "2º ADM - Noite"],
        cursos: [
            {
                codigo: "ds",
                nome: "Desenvolvimento de Sistemas",
                icone: "fa-code",
                duracao: "3 semestres",
                vagas: 90,
                descricao: "Desenvolvimento web, mobile, APIs e arquitetura de software."
            },
            {
                codigo: "adm",
                nome: "Administração",
                icone: "fa-briefcase",
                duracao: "3 semestres",
                vagas: 110,
                descricao: "Planejamento estratégico, controladoria, RH e operações."
            }
        ]
    },
    {
        id: 5,
        nome: "Escola Técnica Estadual de Saúde",
        tipo: "tecnico",
        tipoNome: "Ensino Técnico em Saúde",
        bairro: "Centro Hospitalar",
        endereco: "Praça da Educação, 150 - Centro",
        alunos: 1050,
        imagem: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80",
        status: "Ativa",
        telefone: "(11) 3456-1010",
        email: "saude@escola.pr.gov.br",
        diretor: "Dra. Juliana Martins",
        salas: 36,
        turnos: [
            { nome: "Manhã", horario: "07:00 - 12:30", ativo: true },
            { nome: "Tarde", horario: "13:30 - 18:00", ativo: true },
            { nome: "Noite", horario: "19:00 - 22:45", ativo: true }
        ],
        integral: false,
        turmas: ["1º ENF - Matutino", "2º ENF - Matutino", "1º ADM - Vespertino", "3º ENF - Noturno"],
        cursos: [
            {
                codigo: "enf",
                nome: "Enfermagem",
                icone: "fa-heart-pulse",
                duracao: "4 semestres",
                vagas: 150,
                descricao: "Técnico em enfermagem com estágios em hospitais regionais parceiros."
            },
            {
                codigo: "adm",
                nome: "Administração Hospitalar",
                icone: "fa-briefcase",
                duracao: "3 semestres",
                vagas: 100,
                descricao: "Gestão hospitalar, fluxos clínicos e administração de unidades de saúde."
            }
        ]
    },
    {
        id: 6,
        nome: "Centro de Educação Integral Dom Pedro II",
        tipo: "medio",
        tipoNome: "Ensino Médio Integral",
        bairro: "Jardim Botânico",
        endereco: "Rua das Inovações, 500 - Jardim Botânico",
        alunos: 760,
        imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=800&q=80",
        status: "Ativa",
        telefone: "(11) 3456-1111",
        email: "pedroII@escola.pr.gov.br",
        diretor: "Ricardo Fernandes",
        salas: 28,
        turnos: [
            { nome: "Tempo Integral", horario: "07:30 - 16:45", ativo: true }
        ],
        integral: true,
        turmas: ["1º Ano Integral A", "2º Ano Integral A", "3º Ano Integral A"],
        cursos: []
    }
];

// Dados Iniciais dos Alunos
const alunosIniciais = [
    {
        id: "aluno_1",
        nome: "Lucas Silva",
        email: "lucas.silva@escola.pr.gov.br",
        cgm: "CGM-88219",
        escolaId: 1,
        escolaNome: "Escola Estadual Professora Helena Kolody",
        turma: "3º Ano C - Matutino",
        turno: "Manhã",
        statusAcademico: "aprovado",
        statusAcademicoNome: "Passou de ano (Aprovado)",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80",
        observacoes: "Excelente rendimento em Matemática, Lógica e Linguagens.",
        dataCadastro: "2026-02-10"
    },
    {
        id: "aluno_2",
        nome: "Beatriz Oliveira Santos",
        email: "beatriz.santos@escola.pr.gov.br",
        cgm: "CGM-91042",
        escolaId: 1,
        escolaNome: "Escola Estadual Professora Helena Kolody",
        turma: "3º Ano C - Matutino",
        turno: "Manhã",
        statusAcademico: "andamento",
        statusAcademicoNome: "Em andamento",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&q=80",
        observacoes: "Participante do projeto de desenvolvimento de sistemas e robótica.",
        dataCadastro: "2026-03-01"
    },
    {
        id: "aluno_3",
        nome: "Gabriel Henrique Ramos",
        email: "gabriel.ramos@escola.pr.gov.br",
        cgm: "CGM-77413",
        escolaId: 1,
        escolaNome: "Escola Estadual Professora Helena Kolody",
        turma: "3º Ano C - Matutino",
        turno: "Manhã",
        statusAcademico: "aprovado",
        statusAcademicoNome: "Passou de ano (Aprovado)",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
        observacoes: "Líder de turma e monitor voluntário da disciplina de Programação.",
        dataCadastro: "2026-02-15"
    },
    {
        id: "aluno_4",
        nome: "Camila Fernandes de Souza",
        email: "camila.fernandes@escola.pr.gov.br",
        cgm: "CGM-65902",
        escolaId: 1,
        escolaNome: "Escola Estadual Professora Helena Kolody",
        turma: "3º Ano C - Matutino",
        turno: "Manhã",
        statusAcademico: "formado",
        statusAcademicoNome: "Formado",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
        observacoes: "Concluiu o curso técnico com nota máxima no projeto final.",
        dataCadastro: "2025-12-20"
    },
    {
        id: "aluno_5",
        nome: "Rodrigo Mendonça",
        email: "rodrigo.mendonca@escola.pr.gov.br",
        cgm: "CGM-43098",
        escolaId: 4,
        escolaNome: "Colégio Técnico Industrial (CTI)",
        turma: "2º DS - Tarde",
        turno: "Tarde",
        statusAcademico: "andamento",
        statusAcademicoNome: "Em andamento",
        situacaoAcesso: "bloqueado",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
        observacoes: "Acesso temporariamente bloqueado para atualização cadastral presencial.",
        dataCadastro: "2026-01-18"
    },
    {
        id: "aluno_6",
        nome: "Mariana Albuquerque",
        email: "mariana.albuquerque@escola.pr.gov.br",
        cgm: "CGM-55104",
        escolaId: 5,
        escolaNome: "Escola Técnica Estadual de Saúde",
        turma: "1º ENF - Matutino",
        turno: "Manhã",
        statusAcademico: "aprovado",
        statusAcademicoNome: "Passou de ano (Aprovado)",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        observacoes: "Excelente assiduidade e notas nas disciplinas clínicas.",
        dataCadastro: "2026-02-05"
    }
];

// Professores da Turma (Espaço do Estudante)
const professoresTurmaPadrao = [
    {
        nome: "Profª. Mariana Ramos",
        disciplina: "Desenvolvimento de Sistemas & Web",
        email: "mariana.ramos@escola.pr.gov.br",
        horarioAtendimento: "Terças e Quintas: 10:40 - 11:30",
        avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80"
    },
    {
        nome: "Prof. Marcos Souza",
        disciplina: "Matemática Aplicada & Algoritmos",
        email: "marcos.souza@escola.pr.gov.br",
        horarioAtendimento: "Segundas e Quartas: 08:40 - 09:30",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80"
    },
    {
        nome: "Profª. Regina Célia Ferreira",
        disciplina: "Língua Portuguesa & Comunicação",
        email: "regina.ferreira@escola.pr.gov.br",
        horarioAtendimento: "Sextas-feiras: 09:50 - 10:40",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&q=80"
    },
    {
        nome: "Prof. Roberto Alves",
        disciplina: "Banco de Dados & Arquitetura",
        email: "roberto.alves@escola.pr.gov.br",
        horarioAtendimento: "Quintas-feiras: 11:30 - 12:20",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80"
    },
    {
        nome: "Profª. Juliana Martins",
        disciplina: "Projeto Integrador & Inovação",
        email: "juliana.martins@escola.pr.gov.br",
        horarioAtendimento: "Segundas-feiras: 11:30 - 12:20",
        avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80"
    }
];

// Grade Horária Semanal
const gradeHorariaSemanal = [
    {
        horario: "07:00 - 07:50",
        segunda: { disc: "Matemática", sala: "Sala 12" },
        terca: { disc: "Dev. Sistemas", sala: "Lab 02" },
        quarta: { disc: "Português", sala: "Sala 12" },
        quinta: { disc: "Banco de Dados", sala: "Lab 01" },
        sexta: { disc: "Projeto Integrador", sala: "Lab 03" }
    },
    {
        horario: "07:50 - 08:40",
        segunda: { disc: "Matemática", sala: "Sala 12" },
        terca: { disc: "Dev. Sistemas", sala: "Lab 02" },
        quarta: { disc: "Português", sala: "Sala 12" },
        quinta: { disc: "Banco de Dados", sala: "Lab 01" },
        sexta: { disc: "Projeto Integrador", sala: "Lab 03" }
    },
    {
        horario: "08:40 - 09:30",
        segunda: { disc: "História", sala: "Sala 12" },
        terca: { disc: "Física", sala: "Sala 12" },
        quarta: { disc: "Inglês Técnico", sala: "Lab 02" },
        quinta: { disc: "Sociologia", sala: "Sala 12" },
        sexta: { disc: "Química", sala: "Sala 12" }
    },
    {
        horario: "09:30 - 09:50",
        isIntervalo: true,
        rotulo: "🥪 Intervalo & Lanche da Manhã (Pátio Escolar)"
    },
    {
        horario: "09:50 - 10:40",
        segunda: { disc: "Algoritmos", sala: "Lab 01" },
        terca: { disc: "Português", sala: "Sala 12" },
        quarta: { disc: "Dev. Sistemas", sala: "Lab 02" },
        quinta: { disc: "Matemática", sala: "Sala 12" },
        sexta: { disc: "Educação Física", sala: "Quadra" }
    },
    {
        horario: "10:40 - 11:30",
        segunda: { disc: "Algoritmos", sala: "Lab 01" },
        terca: { disc: "Biologia", sala: "Sala 12" },
        quarta: { disc: "Dev. Sistemas", sala: "Lab 02" },
        quinta: { disc: "Geografia", sala: "Sala 12" },
        sexta: { disc: "Filosofia", sala: "Sala 12" }
    },
    {
        horario: "11:30 - 12:20",
        segunda: { disc: "Projeto Web", sala: "Lab 02" },
        terca: { disc: "Biologia", sala: "Sala 12" },
        quarta: { disc: "Química", sala: "Sala 12" },
        quinta: { disc: "Geografia", sala: "Sala 12" },
        sexta: { disc: "Redes & Seg.", sala: "Lab 01" }
    }
];

// Cardápios Nutricionais (Editáveis pelo ADM)
const cardapiosIniciais = {
    segunda: {
        manha: [
            { tipo: "cafe", nome: "Café da Manhã", horario: "07:00 - 07:45", itens: ["Leite com café ou achocolatado", "Pão francês com queijo", "Fruta da estação (banana)", "Bolo de fubá"] },
            { tipo: "lanche", nome: "Lanche da Manhã", horario: "09:30 - 09:50", itens: ["Suco de laranja natural", "Biscoito integral", "Maçã fatiada"] }
        ],
        tarde: [
            { tipo: "almoco", nome: "Almoço", horario: "12:00 - 13:00", itens: ["Arroz branco e feijão preto", "Frango assado com ervas", "Salada de alface e tomate", "Purê de batatas", "Sobremesa: goiaba"] },
            { tipo: "lanche", nome: "Lanche da Tarde", horario: "15:30 - 16:00", itens: ["Vitamina de frutas", "Sanduíche natural de queijo", "Fruta"] }
        ],
        noite: [
            { tipo: "lanche", nome: "Lanche Noturno", horario: "19:30 - 19:50", itens: ["Café com leite", "Pão com queijo", "Bolo caseiro"] },
            { tipo: "jantar", nome: "Jantar", horario: "21:15 - 21:45", itens: ["Sopa nutritiva de legumes e carne", "Pão integral", "Suco natural"] }
        ]
    },
    terca: {
        manha: [
            { tipo: "cafe", nome: "Café da Manhã", horario: "07:00 - 07:45", itens: ["Chá de ervas ou leite", "Torrada com manteiga", "Mingau de aveia", "Maçã"] },
            { tipo: "lanche", nome: "Lanche da Manhã", horario: "09:30 - 09:50", itens: ["Iogurte natural", "Granola", "Fruta picada"] }
        ],
        tarde: [
            { tipo: "almoco", nome: "Almoço", horario: "12:00 - 13:00", itens: ["Arroz integral e feijão carioca", "Carne moída com legumes", "Salada de repolho e cenoura", "Pudim caseiro"] },
            { tipo: "lanche", nome: "Lanche da Tarde", horario: "15:30 - 16:00", itens: ["Vitamina de banana com aveia", "Pão de queijo", "Fruta"] }
        ],
        noite: [
            { tipo: "lanche", nome: "Lanche Noturno", horario: "19:30 - 19:50", itens: ["Achocolatado", "Torrada com queijo", "Fruta"] },
            { tipo: "jantar", nome: "Jantar", horario: "21:15 - 21:45", itens: ["Macarronada ao sugo com carne", "Salada verde", "Suco de uva"] }
        ]
    },
    quarta: {
        manha: [
            { tipo: "cafe", nome: "Café da Manhã", horario: "07:00 - 07:45", itens: ["Leite com cacau", "Pão de batata", "Melancia fatiada"] },
            { tipo: "lanche", nome: "Lanche da Manhã", horario: "09:30 - 09:50", itens: ["Suco de maracujá", "Biscoito de polvilho", "Banana"] }
        ],
        tarde: [
            { tipo: "almoco", nome: "Almoço", horario: "12:00 - 13:00", itens: ["Feijoada leve escolar", "Arroz branco", "Couve refogada", "Laranja fresca"] },
            { tipo: "lanche", nome: "Lanche da Tarde", horario: "15:30 - 16:00", itens: ["Suco de uva", "Sanduíche de ricota com ervas"] }
        ],
        noite: [
            { tipo: "jantar", nome: "Jantar", horario: "21:15 - 21:45", itens: ["Risoto de frango com legumes", "Salada de tomate", "Suco natural"] }
        ]
    },
    quinta: {
        manha: [
            { tipo: "cafe", nome: "Café da Manhã", horario: "07:00 - 07:45", itens: ["Café com leite", "Pão francês", "Fruta da época (mamão)"] },
            { tipo: "lanche", nome: "Lanche da Manhã", horario: "09:30 - 09:50", itens: ["Vitamina de abacate", "Biscoito integral"] }
        ],
        tarde: [
            { tipo: "almoco", nome: "Almoço", horario: "12:00 - 13:00", itens: ["Isca de peixe assada", "Purê de mandioquinha", "Arroz e feijão", "Salada mista"] },
            { tipo: "lanche", nome: "Lanche da Tarde", horario: "15:30 - 16:00", itens: ["Bolo de cenoura com cobertura leve", "Suco natural"] }
        ],
        noite: [
            { tipo: "jantar", nome: "Jantar", horario: "21:15 - 21:45", itens: ["Escondidinho de mandioca com carne", "Salada", "Suco"] }
        ]
    },
    sexta: {
        manha: [
            { tipo: "cafe", nome: "Café da Manhã Especial", horario: "07:00 - 07:45", itens: ["Salada de frutas com iogurte", "Pão integral", "Chá ou leite"] },
            { tipo: "lanche", nome: "Lanche da Manhã", horario: "09:30 - 09:50", itens: ["Suco de melancia", "Pão de queijo caseiro"] }
        ],
        tarde: [
            { tipo: "almoco", nome: "Almoço Especial", horario: "12:00 - 13:00", itens: ["Estrogonofe de frango leve", "Arroz branco", "Batata rústica assada", "Salada verde"] },
            { tipo: "lanche", nome: "Lanche da Tarde", horario: "15:30 - 16:00", itens: ["Pãozinho recheado", "Suco de laranja natural"] }
        ],
        noite: [
            { tipo: "jantar", nome: "Jantar", horario: "21:15 - 21:45", itens: ["Pizza caseira integral de queijo e legumes", "Suco natural"] }
        ]
    }
};

// Avisos e Notícias Oficiais
const avisosIniciais = [
    {
        id: 1,
        titulo: "Período de Matrículas e Rematrículas 2027 da Rede Estadual",
        resumo: "Confira o calendário oficial, documentos obrigatórios e orientações para confirmação de vagas nas escolas estaduais.",
        data: "15 de Agosto, 2026",
        badge: { tipo: "urgente", texto: "Matrículas 2027", icone: "fa-calendar-check" },
        imagem: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1200&q=80",
        conteudo: [
            {
                subtitulo: "📅 Cronograma Oficial SERE",
                paragrafos: [
                    "• <strong>05 a 12 de setembro:</strong> Rematrícula de veteranos (Ensino Médio e Técnico).",
                    "• <strong>15 a 22 de setembro:</strong> Matrícula para novos alunos na rede estadual.",
                    "• <strong>25 de setembro a 06 de outubro:</strong> Inscrições para cursos técnicos integrados e subsequentes."
                ]
            }
        ]
    },
    {
        id: 2,
        titulo: "Olimpíada Estadual de Matemática e Tecnologia",
        resumo: "Inscrições abertas para estudantes do ensino fundamental e médio. Premiação inclui bolsas de iniciação científica.",
        data: "12 de Agosto, 2026",
        badge: { tipo: "sucesso", texto: "Olimpíadas", icone: "fa-trophy" },
        imagem: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=1200&q=80",
        conteudo: [
            {
                subtitulo: "🏆 Premiações e Fases",
                paragrafos: [
                    "A competição ocorrerá em duas fases: online nas escolas e final presencial na capital.",
                    "Todos os participantes receberão certificado oficial da Secretaria de Educação."
                ]
            }
        ]
    }
];

// Chaves de Persistência no LocalStorage
const CHAVE_ESCOLAS_STORAGE = "rae_escolas_v2";
const CHAVE_ALUNOS_STORAGE = "rae_alunos_v2";
const CHAVE_CARDAPIOS_STORAGE = "rae_cardapios_v2";
const CHAVE_AVISOS_STORAGE = "rae_avisos_v2";
const CHAVE_OCORRENCIAS_STORAGE = "rae_ocorrencias_v2";
const CHAVE_SNACK_VOTES_STORAGE = "rae_snack_votes_v2";
const CHAVE_USUARIO_STORAGE = "rae_usuario_ativo_v2";
const CHAVE_GRADES_STORAGE = "rae_grades_horarias_v2";

// Usuários Pré-configurados para o Sistema
const USUARIOS_SISTEMA = {
    aluno: {
        id: "aluno_1",
        usuario: "aluno",
        senha: "123",
        nome: "Lucas Silva",
        email: "lucas.silva@escola.pr.gov.br",
        tipo: "aluno",
        tipoNome: "Aluno",
        cgm: "CGM-88219",
        turma: "3º Ano C - Matutino",
        escolaId: 1,
        escola: "Escola Estadual Professora Helena Kolody",
        situacaoAcesso: "ativo",
        statusAcademico: "aprovado",
        avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80"
    },
    admin: {
        id: "admin_1",
        usuario: "felipe.morais1609",
        senha: "123",
        nome: "Felipe Morais",
        email: "felipe.morais1609@gmail.com",
        tipo: "admin",
        tipoPerfil: "admin_chef",
        tipoNome: "Administrador(a) Chefe",
        cargo: "Gestão Geral — Administrador Principal",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    },
    admin_chef: {
        id: "admin_chef_1",
        usuario: "felipe.morais1609",
        senha: "123",
        nome: "Felipe Morais",
        email: "felipe.morais1609@gmail.com",
        tipo: "admin",
        tipoPerfil: "admin_chef",
        tipoNome: "Administrador(a) Chefe",
        cargo: "Gestão Geral — Todas as Funções",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80"
    }
};

const SENHA_PADRAO_DEMO = "123";
const USUARIOS_FIXOS = {
    admins: [
        {
            login: "felipe.morais1609@gmail.com",
            senha: "admin",
            email: "felipe.morais1609@gmail.com",
            perfil: USUARIOS_SISTEMA.admin_chef
        },
        {
            login: "admin@escola.pr.gov.br",
            senha: "admin",
            email: "admin@escola.pr.gov.br",
            perfil: USUARIOS_SISTEMA.admin
        },
        {
            login: "mariana.ramos@escola.pr.gov.br",
            senha: "admin",
            email: "mariana.ramos@escola.pr.gov.br",
            perfil: USUARIOS_SISTEMA.admin
        },
        {
            login: "professor@escola.pr.gov.br",
            senha: "professor2026",
            email: "professor@escola.pr.gov.br",
            perfil: USUARIOS_SISTEMA.admin_chef
        },
        {
            login: "avisos@escola.pr.gov.br",
            senha: "avisos123",
            email: "avisos@escola.pr.gov.br",
            perfil: {
                id: "admin_avisos_1",
                usuario: "avisos",
                senha: "avisos123",
                nome: "Coordenador(a) de Comunicação",
                email: "avisos@escola.pr.gov.br",
                tipo: "admin_avisos",
                tipoNome: "Gestor(a) de Avisos",
                cargo: "Comunicação Institucional — Publicação de Avisos",
                situacaoAcesso: "ativo",
                avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&q=80"
            }
        },
        {
            login: "cardapio@escola.pr.gov.br",
            senha: "cardapio123",
            email: "cardapio@escola.pr.gov.br",
            perfil: {
                id: "admin_cardapio_1",
                usuario: "cardapio",
                senha: "cardapio123",
                nome: "Nutricionista Responsável",
                email: "cardapio@escola.pr.gov.br",
                tipo: "admin_cardapio",
                tipoNome: "Gestor(a) de Cardápio",
                cargo: "Nutrição Escolar — Cardápio & Horários de Lanches",
                situacaoAcesso: "ativo",
                avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&q=80"
            }
        }
    ]
};

// E-mails autorizados como Administrador
const EMAILS_ADMIN_GOOGLE = [
    "felipe.morais1609@gmail.com",
    "mariana.ramos@escola.pr.gov.br",
    "admin@escola.pr.gov.br",
    "professor@escola.pr.gov.br",
];

const EMAILS_ALUNO_GOOGLE_FIXOS = [
    "lucas.silva@escola.pr.gov.br",
];

// Estado da Aplicação
let escolas = [];
let alunos = [];
let cardapios = {};
let avisos = [];
let gradesHorarias = {};   // { [escolaId]: gradeHorariaSemanal[] }
let ocorrencias = [];
let ocorrenciaFotosTemp = [];
let usuarioAtual = null;
let escolaHorariosEditando = null; // escola selecionada no modal de horários

let perfilAtivoVisao = "admin"; // "admin" | "aluno"
let turnoCardapioSelecionado = "manha";
let diaCardapioSelecionado = "segunda";
let filtroAtual = "todos";
let escolaAtualModal = null;
let turnoAtualModal = "manha";
let dadosSereTemp = [];

// ==========================================================================
// FUNÇÕES DE CARREGAMENTO E PERSISTÊNCIA
// ==========================================================================

function carregarEscolas() {
    const salvo = localStorage.getItem(CHAVE_ESCOLAS_STORAGE);
    if (salvo) {
        try {
            const parsed = JSON.parse(salvo);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch (e) { }
    }
    salvarEscolasNoStorage(escolasIniciais);
    return JSON.parse(JSON.stringify(escolasIniciais));
}

function salvarEscolasNoStorage(dados = escolas) {
    localStorage.setItem(CHAVE_ESCOLAS_STORAGE, JSON.stringify(dados));
}

function carregarAlunos() {
    const salvo = localStorage.getItem(CHAVE_ALUNOS_STORAGE);
    let lista = null;
    if (salvo) {
        try {
            const parsed = JSON.parse(salvo);
            if (Array.isArray(parsed)) lista = parsed;
        } catch (e) { }
    }
    if (!lista) {
        lista = JSON.parse(JSON.stringify(alunosIniciais));
    }
    lista = lista.map(a => normalizarCamposUsuario(a));
    salvarAlunosNoStorage(lista);
    return lista;
}

function normalizarCamposUsuario(u) {
    if (!u) return u;
    if (!u.tipoPerfil) u.tipoPerfil = "aluno";
    const meta = (typeof MAPA_DESTINOS_LOGIN !== "undefined" && MAPA_DESTINOS_LOGIN[u.tipoPerfil])
        ? MAPA_DESTINOS_LOGIN[u.tipoPerfil]
        : null;
    if (!u.cargo || u.cargo.trim() === "") {
        if (u.tipoPerfil === "admin_chef") u.cargo = "Gestão Geral — Todas as Funções";
        else if (u.tipoPerfil === "admin" || u.tipoPerfil === "admin_detalhes") u.cargo = "Gestão & Detalhes de Ocorrências";
        else if (u.tipoPerfil === "admin_cardapio" || u.tipoPerfil === "cozinha") u.cargo = "Responsável pela Cozinha — Cardápio & Votação da Merenda";
        else if (u.tipoPerfil === "funcionario") u.cargo = "Funcionário(a) — Equipe Escolar";
        else if (u.tipoPerfil === "admin_avisos") u.cargo = "Comunicação — Publicação de Avisos Oficiais";
        else if (meta && meta.cargoPadrao) u.cargo = meta.cargoPadrao;
        else u.cargo = `Estudante — ${u.turma || "Turma Regular"}`;
    }
    if (!u.senha) u.senha = "";
    if (!u.tipoNome) {
        if (u.tipoPerfil === "admin_chef") u.tipoNome = "Administrador(a) Chefe";
        else if (u.tipoPerfil === "admin" || u.tipoPerfil === "admin_detalhes") u.tipoNome = "Gestor(a) de Detalhes";
        else if (u.tipoPerfil === "admin_cardapio" || u.tipoPerfil === "cozinha") u.tipoNome = "Responsável pela Cozinha";
        else if (u.tipoPerfil === "funcionario") u.tipoNome = "Funcionário(a)";
        else if (u.tipoPerfil === "admin_avisos") u.tipoNome = "Gestor(a) de Avisos";
        else if (meta && meta.rotulo) u.tipoNome = meta.rotulo;
        else u.tipoNome = "Aluno(a)";
    }
    return u;
}

function usuarioTemPermissaoAdmin(u) {
    if (!u) return false;
    const emailLimpo = (u.email || "").toLowerCase();
    if (EMAILS_ADMIN_GOOGLE.includes(emailLimpo)) return true;
    if (["admin", "admin_chef", "admin_detalhes"].includes(u.tipoPerfil)) return true;
    return false;
}

function salvarAlunosNoStorage(dados = alunos) {
    localStorage.setItem(CHAVE_ALUNOS_STORAGE, JSON.stringify(dados));
}

function salvarAlunos(dados = alunos) {
    salvarAlunosNoStorage(dados);
}

function carregarCardapios() {
    const salvo = localStorage.getItem(CHAVE_CARDAPIOS_STORAGE);
    if (salvo) {
        try {
            const parsed = JSON.parse(salvo);
            if (parsed && typeof parsed === "object") return parsed;
        } catch (e) { }
    }
    salvarCardapiosNoStorage(cardapiosIniciais);
    return JSON.parse(JSON.stringify(cardapiosIniciais));
}

function salvarCardapiosNoStorage(dados = cardapios) {
    localStorage.setItem(CHAVE_CARDAPIOS_STORAGE, JSON.stringify(dados));
}

function carregarAvisos() {
    const salvo = localStorage.getItem(CHAVE_AVISOS_STORAGE);
    if (salvo) {
        try { return JSON.parse(salvo); } catch (e) { }
    }
    salvarAvisosNoStorage(avisosIniciais);
    return JSON.parse(JSON.stringify(avisosIniciais));
}

function salvarAvisosNoStorage(dados = avisos) {
    localStorage.setItem(CHAVE_AVISOS_STORAGE, JSON.stringify(dados));
}

function carregarGradesHorarias() {
    const salvo = localStorage.getItem(CHAVE_GRADES_STORAGE);
    if (salvo) {
        try {
            const parsed = JSON.parse(salvo);
            if (parsed && typeof parsed === "object") return parsed;
        } catch (e) { }
    }
    return {};
}

function salvarGradesNoStorage(dados = gradesHorarias) {
    localStorage.setItem(CHAVE_GRADES_STORAGE, JSON.stringify(dados));
}

function obterGradeEscola(escolaId) {
    const id = String(escolaId);
    if (gradesHorarias[id] && gradesHorarias[id].length > 0) {
        return gradesHorarias[id];
    }
    return JSON.parse(JSON.stringify(gradeHorariaSemanal));
}

// ==========================================================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ==========================================================================

document.addEventListener("DOMContentLoaded", function () {
    escolas = carregarEscolas();
    alunos = carregarAlunos();
    cardapios = carregarCardapios();
    avisos = carregarAvisos();
    ocorrencias = carregarOcorrencias();
    gradesHorarias = carregarGradesHorarias();

    carregarSessaoUsuario();

    atualizarMetricasDashboard();
    renderizarEscolas(escolas);
    popularFiltrosEscolasAlunos();
    renderizarTabelaAlunos();
    renderizarCardapioPrincipal();
    renderizarAvisos();

    inicializarEventosGerais();
    inicializarEventosFiltros();
    inicializarModalGerais();
    inicializarEventosAutenticacao();
    popularSelectsEscolasFormularios();
    inicializarSnackVoting();
    filtrarOcorrencias();

    window.addEventListener("storage", function (e) {
        if (e.key === CHAVE_OCORRENCIAS_STORAGE) {
            ocorrencias = carregarOcorrencias();
            filtrarOcorrencias();
        }
    });

    window.addEventListener("focus", function () {
        ocorrencias = carregarOcorrencias();
        filtrarOcorrencias();
    });

    aplicarVisaoLanding();
    if (window.location.hash === "#login") {
        setTimeout(() => abrirModalLogin(), 200);
    }
});

function aplicarVisaoLanding() {
    perfilAtivoVisao = "landing";
    document.body.classList.remove(
        "view-admin", "view-aluno", "view-landing",
        "view-admin-avisos", "view-admin-cardapio"
    );
    document.body.classList.add("view-landing");

    const heroBadge = document.getElementById("heroBadgePerfil");
    const heroTitle = document.getElementById("heroTituloPrincipal");
    const heroSub = document.getElementById("heroSubtexto");

    if (heroBadge) {
        heroBadge.innerHTML = '<i class="fas fa-graduation-cap"></i> Portal Unificado da Rede Estadual de Educação';
    }
    if (heroTitle) {
        heroTitle.innerHTML = 'Gestão Escolar & <span class="highlight">Espaço do Estudante</span> em um só portal';
    }
    if (heroSub) {
        heroSub.innerHTML = 'Acesso exclusivo para gestores e alunos da rede: consultas, cadastros, cardápios, horários e integração oficial com o sistema SERE/RCO.';
    }
}

// ==========================================================================
// CONTROLE DE VISÃO: TELA ÚNICA DINÂMICA (ADM vs ALUNO)
// ==========================================================================

function alternarVisaoPerfil(tipo) {
    const tiposValidos = ["admin", "aluno", "admin_avisos", "admin_cardapio"];
    if (!tiposValidos.includes(tipo)) return;

    if (!usuarioAtual) {
        abrirModalLogin(tipo === "aluno" ? "aluno" : "admin");
        mostrarToast("Por favor, faça login com o Google para acessar esta área.", "info");
        return;
    }

    const temPermissaoAdm = usuarioTemPermissaoAdmin(usuarioAtual);

    if (tipo === "admin" && !temPermissaoAdm) {
        mostrarToast("⛔ Acesso restrito: sua conta não possui permissão de Administrador.", "erro");
        abrirModalLogin("admin");
        return;
    }

    if (temPermissaoAdm && (tipo === "admin" || tipo === "aluno")) {
        usuarioAtual.tipo = tipo;
        usuarioAtual.tipoNome = tipo === "admin"
            ? (usuarioAtual.tipoPerfil === "admin_chef" ? "Administrador(a) Chefe" : "Gestor(a) / ADM")
            : "Aluno(a) (Modo Visualização)";
        localStorage.setItem(CHAVE_USUARIO_STORAGE, JSON.stringify(usuarioAtual));
        atualizarInterfaceSessao();
    } else if (usuarioAtual.tipo !== tipo) {
        abrirModalLogin(tipo);
        return;
    }

    perfilAtivoVisao = tipo;

    document.body.classList.remove(
        "view-admin", "view-aluno", "view-landing",
        "view-admin-avisos", "view-admin-cardapio"
    );

    const classeVisao = {
        admin: "view-admin",
        aluno: "view-aluno",
        admin_avisos: "view-admin-avisos",
        admin_cardapio: "view-admin-cardapio"
    }[tipo];
    document.body.classList.add(classeVisao);

    const heroBadge = document.getElementById("heroBadgePerfil");
    const heroTitle = document.getElementById("heroTituloPrincipal");
    const heroSub = document.getElementById("heroSubtexto");

    if (tipo === "admin") {
        if (heroBadge) heroBadge.innerHTML = '<i class="fas fa-shield-alt"></i> Painel Executivo da Administração Escolar';
        if (heroTitle) heroTitle.innerHTML = 'Gestão Escolar e <span class="highlight">Controle da Rede Estadual</span>';
        if (heroSub) heroSub.innerHTML = 'Área do Administrador: Gestão completa de escolas (ex: Helena Kolody), moderação e histórico de alunos, importação SERE/RCO, registro de ocorrências prediais e <strong>edição do cardápio nutricional</strong>.';
        filtrarOcorrencias();

    } else if (tipo === "aluno") {
        if (heroBadge) heroBadge.innerHTML = '<i class="fas fa-graduation-cap"></i> Espaço Oficial do Estudante';
        if (heroTitle) heroTitle.innerHTML = 'Tudo sobre a sua <span class="highlight">Turma, Aulas e Lanches</span>';
        if (heroSub) heroSub.innerHTML = 'Consulte seus colegas de classe, professores responsáveis, quadro semanal de horários de aulas e o cardápio nutricional da sua escola.';
        renderizarEspacoAluno();

    } else if (tipo === "admin_avisos") {
        if (heroBadge) heroBadge.innerHTML = '<i class="fas fa-bullhorn"></i> Painel de Gestão de Avisos';
        if (heroTitle) heroTitle.innerHTML = 'Publicação de <span class="highlight">Avisos & Comunicados</span>';
        if (heroSub) heroSub.innerHTML = 'Área exclusiva para publicar, editar e remover avisos e comunicados oficiais da rede estadual. Cardápio e horários são gerenciados pelo Gestor de Cardápio.';

    } else if (tipo === "admin_cardapio") {
        if (heroBadge) heroBadge.innerHTML = '<i class="fas fa-utensils"></i> Painel do Responsável pela Cozinha & Nutrição';
        if (heroTitle) heroTitle.innerHTML = 'Gestão do <span class="highlight">Cardápio & Votação da Merenda</span>';
        if (heroSub) heroSub.innerHTML = 'Área do Responsável pela Cozinha: altere os dados do cardápio semanal, configure o Lanche do Dia e acompanhe em tempo real a votação da merenda com a margem de +7% para preparo.';
        // Inicializa o painel de gestão dedicado
        setTimeout(() => inicializarPainelGestorCardapio(), 50);
    }

    renderizarCardapioPrincipal();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// ==========================================================================
// ESPAÇO DO ALUNO: TURMA, COLEGAS, PROFESSORES E GRADE HORÁRIA
// ==========================================================================

function renderizarEspacoAluno() {
    const aluno = (usuarioAtual && usuarioAtual.tipo === "aluno") ? usuarioAtual : USUARIOS_SISTEMA.aluno;

    const pic = document.getElementById("alunoHeroAvatar");
    const nome = document.getElementById("alunoHeroNome");
    const escola = document.getElementById("alunoHeroEscola");
    const turma = document.getElementById("alunoHeroTurma");
    const cgm = document.getElementById("alunoHeroCgm");
    const email = document.getElementById("alunoHeroEmail");
    const status = document.getElementById("alunoHeroStatus");

    if (pic) pic.src = aluno.avatar || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80";
    if (nome) nome.textContent = aluno.nome;
    if (escola) escola.textContent = aluno.escola || "Escola Estadual Professora Helena Kolody";
    if (turma) turma.textContent = aluno.turma || "3º Ano C - Matutino";
    if (cgm) cgm.textContent = aluno.cgm || "CGM-88219";
    if (email) email.textContent = aluno.email || "lucas.silva@escola.pr.gov.br";

    if (status) {
        const isAprovado = (aluno.statusAcademico === "aprovado" || aluno.statusAcademico === "formado");
        status.className = `status-badge ${isAprovado ? 'status-aprovado' : 'status-andamento'}`;
        status.innerHTML = isAprovado ? '<i class="fas fa-circle-check"></i> Passou de ano (Aprovado)' : '<i class="fas fa-spinner fa-pulse"></i> Em andamento';
    }

    renderizarColegasTurma(aluno);
    renderizarProfessoresTurma();
    renderizarGradeHoraria();
}

function renderizarColegasTurma(alunoAtual) {
    const grid = document.getElementById("classmatesGrid");
    const countEl = document.getElementById("countColegas");
    const subtitle = document.getElementById("widgetColegasSubtitle");
    if (!grid) return;

    if (subtitle) subtitle.textContent = `Estudantes matriculados na turma ${alunoAtual.turma || '3º Ano C'}`;

    const colegas = alunos.filter(a =>
        a.escolaNome === alunoAtual.escola ||
        a.escolaId === alunoAtual.escolaId ||
        a.turma === alunoAtual.turma
    );

    const listaFinal = colegas.length > 0 ? colegas : alunos.slice(0, 4);

    if (countEl) countEl.textContent = `${listaFinal.length} colegas`;

    grid.innerHTML = listaFinal.map(colega => `
        <div class="classmate-card">
            <img src="${colega.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80'}" alt="${colega.nome}" class="classmate-avatar">
            <div class="classmate-name" title="${colega.nome}">${colega.nome}</div>
            <div class="classmate-email">${colega.email}</div>
        </div>
    `).join("");
}

function renderizarProfessoresTurma() {
    const container = document.getElementById("teachersList");
    if (!container) return;

    container.innerHTML = professoresTurmaPadrao.map(prof => `
        <div class="teacher-card">
            <div class="teacher-main-info">
                <img src="${prof.avatar}" alt="${prof.nome}" class="teacher-avatar">
                <div class="teacher-details">
                    <strong>${prof.nome}</strong>
                    <span class="teacher-subject-tag">${prof.disciplina}</span>
                </div>
            </div>
            <div class="teacher-contact-pill" title="Atendimento: ${prof.horarioAtendimento}">
                <i class="fas fa-clock"></i>
                <span>${prof.horarioAtendimento}</span>
            </div>
        </div>
    `).join("");
}

function renderizarGradeHoraria() {
    const tbody = document.getElementById("timetableBody");
    if (!tbody) return;

    // Usa a grade da escola do aluno logado; cai no padrão global se não houver
    const escolaId = (usuarioAtual && usuarioAtual.escolaId) ? usuarioAtual.escolaId : 1;
    const grade = obterGradeEscola(escolaId);

    tbody.innerHTML = grade.map(linha => {
        if (linha.isIntervalo) {
            return `
                <tr>
                    <td class="timetable-time-cell">${linha.horario}</td>
                    <td colspan="5" class="timetable-intervalo">
                        <i class="fas fa-bell"></i> ${linha.rotulo}
                    </td>
                </tr>
            `;
        }

        return `
            <tr>
                <td class="timetable-time-cell">${linha.horario}</td>
                <td><div class="timetable-subject-box"><span class="timetable-subject">${linha.segunda.disc}</span><span class="timetable-room">${linha.segunda.sala}</span></div></td>
                <td><div class="timetable-subject-box"><span class="timetable-subject">${linha.terca.disc}</span><span class="timetable-room">${linha.terca.sala}</span></div></td>
                <td><div class="timetable-subject-box"><span class="timetable-subject">${linha.quarta.disc}</span><span class="timetable-room">${linha.quarta.sala}</span></div></td>
                <td><div class="timetable-subject-box"><span class="timetable-subject">${linha.quinta.disc}</span><span class="timetable-room">${linha.quinta.sala}</span></div></td>
                <td><div class="timetable-subject-box"><span class="timetable-subject">${linha.sexta.disc}</span><span class="timetable-room">${linha.sexta.sala}</span></div></td>
            </tr>
        `;
    }).join("");
}

// ==========================================================================
// CARDÁPIOS NUTRICIONAIS & EDIÇÃO EXCLUSIVA DO ADMINISTRADOR
// ==========================================================================

function selecionarTurnoCardapio(turno) {
    turnoCardapioSelecionado = turno;
    document.querySelectorAll(".menu-turno-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.turno === turno);
    });
    renderizarCardapioPrincipal();
}

function selecionarDiaCardapio(dia) {
    diaCardapioSelecionado = dia;
    document.querySelectorAll("#mainWeekTabs .week-tab").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.day === dia);
    });
    renderizarCardapioPrincipal();
}

function renderizarCardapioPrincipal() {
    const container = document.getElementById("mainMenuContent");
    if (!container) return;

    const diaObj = cardapios[diaCardapioSelecionado] || cardapios.segunda;
    const refeicoes = diaObj[turnoCardapioSelecionado] || diaObj.manha || [];

    if (!refeicoes || refeicoes.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px 20px; color: var(--gray-600); grid-column: 1 / -1;">
                <i class="fas fa-utensils" style="font-size: 38px; color: var(--gray-300); margin-bottom: 10px;"></i>
                <h4>Refeição balanceada padrão fornecida pela rede estadual.</h4>
            </div>
        `;
        return;
    }

    container.innerHTML = refeicoes.map(refeicao => `
        <div class="meal-card ${refeicao.tipo}">
            <div class="meal-card-header">
                <div class="meal-icon">
                    ${getIconeRefeicao(refeicao.tipo)}
                </div>
                <div>
                    <h4>${refeicao.nome}</h4>
                    <div class="meal-time">
                        <i class="far fa-clock"></i>
                        ${refeicao.horario}
                    </div>
                </div>
            </div>
            <div class="meal-items">
                ${refeicao.itens.map(item => `
                    <div class="meal-item">
                        <i class="fas fa-check-circle"></i>
                        <span>${item}</span>
                    </div>
                `).join("")}
            </div>
        </div>
    `).join("");
}

function abrirModalEditarCardapio() {
    const tiposPermitidos = ["admin", "admin_cardapio"];
    const podeEditar = usuarioAtual && tiposPermitidos.includes(usuarioAtual.tipo);
    if (!podeEditar) {
        mostrarToast("Acesso Negado: Somente o Administrador ou o Gestor de Cardápio podem editar o cardápio nutricional.", "erro");
        return;
    }

    const selectDia = document.getElementById("cardapioEditDia");
    const selectTurno = document.getElementById("cardapioEditTurno");

    if (selectDia) selectDia.value = diaCardapioSelecionado;
    if (selectTurno) selectTurno.value = turnoCardapioSelecionado;

    carregarRefeicoesParaEdicao();
    abrirModalAdmin("adminEditarCardapioModal");
}

function carregarRefeicoesParaEdicao() {
    const dia = document.getElementById("cardapioEditDia").value;
    const turno = document.getElementById("cardapioEditTurno").value;
    const container = document.getElementById("cardapioEditRefeicoesContainer");
    if (!container) return;

    const diaObj = cardapios[dia] || cardapios.segunda;
    const refeicoes = diaObj[turno] || [
        { tipo: "cafe", nome: "Café / Lanche", horario: "07:00 - 07:45", itens: ["Café com leite", "Pão"] },
        { tipo: "lanche", nome: "Intervalo", horario: "09:30 - 09:50", itens: ["Suco natural", "Biscoito"] }
    ];

    container.innerHTML = refeicoes.map((ref, idx) => `
        <div class="meal-edit-group">
            <h4>${getIconeRefeicao(ref.tipo)} ${ref.nome}</h4>
            <div class="form-row">
                <div class="form-group">
                    <label>Nome da Refeição</label>
                    <input type="text" id="editMealNome_${idx}" value="${ref.nome}" required>
                </div>
                <div class="form-group">
                    <label>Horário de Servimento</label>
                    <input type="text" id="editMealHorario_${idx}" value="${ref.horario}" required>
                </div>
            </div>
            <div class="form-group">
                <label>Itens do Cardápio (separados por vírgula)</label>
                <textarea id="editMealItens_${idx}" rows="2" required>${ref.itens.join(", ")}</textarea>
            </div>
            <input type="hidden" id="editMealTipo_${idx}" value="${ref.tipo}">
        </div>
    `).join("");
}

function tratarSubmitEditarCardapio(event) {
    event.preventDefault();
    const dia = document.getElementById("cardapioEditDia").value;
    const turno = document.getElementById("cardapioEditTurno").value;

    const container = document.getElementById("cardapioEditRefeicoesContainer");
    const mealGroups = container.querySelectorAll(".meal-edit-group");

    const novasRefeicoes = [];

    mealGroups.forEach((_, idx) => {
        const nome = document.getElementById(`editMealNome_${idx}`).value.trim();
        const horario = document.getElementById(`editMealHorario_${idx}`).value.trim();
        const itensStr = document.getElementById(`editMealItens_${idx}`).value.trim();
        const tipo = document.getElementById(`editMealTipo_${idx}`).value;

        const itens = itensStr.split(",")
            .map(i => i.trim())
            .filter(i => i.length > 0);

        novasRefeicoes.push({ tipo, nome, horario, itens });
    });

    if (!cardapios[dia]) cardapios[dia] = {};
    cardapios[dia][turno] = novasRefeicoes;

    salvarCardapiosNoStorage();
    renderizarCardapioPrincipal();
    fecharModalAdmin("adminEditarCardapioModal");

    mostrarToast(`✅ Cardápio de ${dia.toUpperCase()} (${turno}) atualizado com sucesso pelo Administrador!`, "sucesso");
}

// ==========================================================================
// PAINEL DE GESTÃO DO CARDÁPIO — INTERFACE DEDICADA PARA GESTOR (admin_cardapio)
// Estado atual do painel gestor
// ==========================================================================

let cgDiaSelecionado = "segunda";
let cgTurnoSelecionado = "manha";

// Inicializa o painel ao entrar na visão de gestor de cardápio
function inicializarPainelGestorCardapio() {
    const painel = document.getElementById("cardapioGestorPainel");
    if (!painel) return;

    // Preenche o nome do gestor no badge
    const nomeEl = document.getElementById("cgGestorNome");
    if (nomeEl && usuarioAtual) nomeEl.textContent = usuarioAtual.nome || "Nutricionista";

    cgDiaSelecionado = "segunda";
    cgTurnoSelecionado = "manha";

    // Reseta os botões de dia e turno para o estado inicial
    document.querySelectorAll(".cg-dia-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.dia === cgDiaSelecionado);
    });
    document.querySelectorAll(".cg-turno-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.turno === cgTurnoSelecionado);
    });

    cgRenderizarRefeicoes();
}

function cgSelecionarDia(dia) {
    cgDiaSelecionado = dia;
    document.querySelectorAll(".cg-dia-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.dia === dia);
    });
    cgRenderizarRefeicoes();
}

function cgSelecionarTurno(turno) {
    cgTurnoSelecionado = turno;
    document.querySelectorAll(".cg-turno-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.turno === turno);
    });
    cgRenderizarRefeicoes();
}

// Renderiza os cards de refeição do painel gestor
function cgRenderizarRefeicoes() {
    const grid = document.getElementById("cgRefeicoesGrid");
    if (!grid) return;

    const diaObj = cardapios[cgDiaSelecionado] || cardapios.segunda;
    const refeicoes = (diaObj && diaObj[cgTurnoSelecionado]) || [];

    if (!refeicoes || refeicoes.length === 0) {
        grid.innerHTML = `
            <div class="cg-empty-state">
                <i class="fas fa-utensils"></i>
                <p>Nenhuma refeição cadastrada para este turno.</p>
                <button type="button" class="btn btn-primary" onclick="cgAdicionarRefeicao()">
                    <i class="fas fa-plus-circle"></i> Adicionar Primeira Refeição
                </button>
            </div>
        `;
        return;
    }

    grid.innerHTML = refeicoes.map((ref, idx) => cgGerarCardRefeicao(ref, idx)).join("") + `
        <div style="display:flex;align-items:center;justify-content:center;min-height:120px;">
            <button type="button" class="btn btn-secondary" onclick="cgAdicionarRefeicao()" style="border-style:dashed;">
                <i class="fas fa-plus-circle"></i> Adicionar Refeição
            </button>
        </div>
    `;
}

// Gera o HTML de um card de refeição (modo visualização)
function cgGerarCardRefeicao(ref, idx) {
    const iconeMap = {
        cafe: '<i class="fas fa-mug-hot"></i>',
        almoco: '<i class="fas fa-utensils"></i>',
        lanche: '<i class="fas fa-cookie-bite"></i>',
        jantar: '<i class="fas fa-moon"></i>'
    };
    const icone = iconeMap[ref.tipo] || '<i class="fas fa-utensils"></i>';

    const itensHtml = ref.itens.map((item, iIdx) => `
        <div class="cg-item-row">
            <i class="fas fa-circle-check check"></i>
            <span>${item}</span>
            <button type="button" class="cg-item-del" onclick="cgRemoverItemDireto(${idx}, ${iIdx})" title="Remover item">
                <i class="fas fa-times"></i>
            </button>
        </div>
    `).join("");

    return `
        <div class="cg-refeicao-card" id="cgCard_${idx}">
            <div class="cg-card-top">
                <div class="cg-card-info">
                    <div class="cg-card-icon">${icone}</div>
                    <div class="cg-card-meta">
                        <h4>${ref.nome}</h4>
                        <div class="cg-card-horario">
                            <i class="far fa-clock"></i>
                            <span>${ref.horario}</span>
                        </div>
                    </div>
                </div>
                <div class="cg-card-actions">
                    <button type="button" class="cg-btn-edit" onclick="cgModoEditar(${idx})" title="Editar esta refeição">
                        <i class="fas fa-pen"></i> Editar
                    </button>
                    <button type="button" class="cg-item-del" style="padding:6px 8px;font-size:13px;" onclick="cgRemoverRefeicao(${idx})" title="Remover refeição">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </div>
            <div class="cg-card-body">
                <div class="cg-items-list">${itensHtml}</div>
                <div class="cg-edit-add-row">
                    <input type="text" class="cg-edit-add-input" id="cgNovoItem_${idx}"
                        placeholder="+ Adicionar item ao cardápio..."
                        onkeydown="if(event.key==='Enter'){event.preventDefault();cgAdicionarItemDireto(${idx});}">
                    <button type="button" class="cg-btn-add-item" onclick="cgAdicionarItemDireto(${idx})">
                        <i class="fas fa-plus"></i> Adicionar
                    </button>
                </div>
            </div>
        </div>
    `;
}

// Gera o HTML de um card em modo edição (nome + horário editáveis)
function cgModoEditar(idx) {
    const card = document.getElementById("cgCard_" + idx);
    if (!card) return;

    const diaObj = cardapios[cgDiaSelecionado] || cardapios.segunda;
    const refeicoes = (diaObj && diaObj[cgTurnoSelecionado]) || [];
    const ref = refeicoes[idx];
    if (!ref) return;

    const iconeMap = {
        cafe: '<i class="fas fa-mug-hot"></i>',
        almoco: '<i class="fas fa-utensils"></i>',
        lanche: '<i class="fas fa-cookie-bite"></i>',
        jantar: '<i class="fas fa-moon"></i>'
    };
    const icone = iconeMap[ref.tipo] || '<i class="fas fa-utensils"></i>';

    card.classList.add("editing");
    card.innerHTML = `
        <div class="cg-card-top">
            <div class="cg-card-info">
                <div class="cg-card-icon">${icone}</div>
                <div class="cg-card-meta" style="flex:1;">
                    <input type="text" class="cg-edit-input" id="cgEditNome_${idx}"
                        value="${ref.nome}" placeholder="Nome da refeição" style="margin-bottom:4px;font-weight:700;">
                    <div style="display:flex;align-items:center;gap:6px;">
                        <i class="far fa-clock" style="color:var(--gray-400);font-size:11px;"></i>
                        <input type="text" class="cg-edit-input" id="cgEditHorario_${idx}"
                            value="${ref.horario}" placeholder="Ex: 07:00 - 07:45" style="margin-bottom:0;font-size:11px;">
                    </div>
                </div>
            </div>
            <div class="cg-card-actions">
                <button type="button" class="cg-btn-save" onclick="cgSalvarRefeicao(${idx})">
                    <i class="fas fa-check"></i> Salvar
                </button>
                <button type="button" class="cg-btn-cancel" onclick="cgRenderizarRefeicoes()">
                    <i class="fas fa-times"></i>
                </button>
            </div>
        </div>
        <div class="cg-edit-fields">
            <span class="cg-edit-label">Itens do cardápio</span>
            <div id="cgEditItens_${idx}">
                ${ref.itens.map((item, iIdx) => `
                    <div style="display:flex;gap:8px;margin-bottom:6px;" id="cgEditItemRow_${idx}_${iIdx}">
                        <input type="text" class="cg-edit-input" style="margin-bottom:0;flex:1;"
                            id="cgEditItem_${idx}_${iIdx}" value="${item}" placeholder="Item do cardápio">
                        <button type="button" class="cg-item-del" style="padding:8px;font-size:13px;"
                            onclick="document.getElementById('cgEditItemRow_${idx}_${iIdx}').remove()">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                `).join("")}
            </div>
            <div class="cg-edit-add-row" style="margin-top:8px;">
                <input type="text" class="cg-edit-add-input" id="cgEditNovoItem_${idx}"
                    placeholder="+ Novo item..."
                    onkeydown="if(event.key==='Enter'){event.preventDefault();cgAdicionarItemNoEditor(${idx});}">
                <button type="button" class="cg-btn-add-item" onclick="cgAdicionarItemNoEditor(${idx})">
                    <i class="fas fa-plus"></i> Adicionar
                </button>
            </div>
        </div>
    `;
}

// Adiciona um item diretamente no modo visualização (sem abrir edição)
function cgAdicionarItemDireto(idx) {
    const input = document.getElementById("cgNovoItem_" + idx);
    if (!input) return;
    const valor = input.value.trim();
    if (!valor) { input.focus(); return; }

    if (!cardapios[cgDiaSelecionado]) cardapios[cgDiaSelecionado] = {};
    if (!cardapios[cgDiaSelecionado][cgTurnoSelecionado]) cardapios[cgDiaSelecionado][cgTurnoSelecionado] = [];

    cardapios[cgDiaSelecionado][cgTurnoSelecionado][idx].itens.push(valor);
    salvarCardapiosNoStorage();
    renderizarCardapioPrincipal();
    cgRenderizarRefeicoes();
    mostrarToast(`✅ "${valor}" adicionado ao cardápio!`, "sucesso");
}

// Adiciona item no editor expandido
function cgAdicionarItemNoEditor(idx) {
    const input = document.getElementById("cgEditNovoItem_" + idx);
    if (!input) return;
    const valor = input.value.trim();
    if (!valor) { input.focus(); return; }

    const container = document.getElementById("cgEditItens_" + idx);
    if (!container) return;

    const iIdx = container.children.length;
    const div = document.createElement("div");
    div.id = "cgEditItemRow_" + idx + "_" + iIdx;
    div.style.cssText = "display:flex;gap:8px;margin-bottom:6px;";
    div.innerHTML = `
        <input type="text" class="cg-edit-input" style="margin-bottom:0;flex:1;"
            id="cgEditItem_${idx}_${iIdx}" value="${valor}" placeholder="Item do cardápio">
        <button type="button" class="cg-item-del" style="padding:8px;font-size:13px;"
            onclick="document.getElementById('cgEditItemRow_${idx}_${iIdx}').remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    container.appendChild(div);
    input.value = "";
    input.focus();
}

// Remove um item diretamente no modo visualização
function cgRemoverItemDireto(idx, iIdx) {
    if (!cardapios[cgDiaSelecionado] || !cardapios[cgDiaSelecionado][cgTurnoSelecionado]) return;
    cardapios[cgDiaSelecionado][cgTurnoSelecionado][idx].itens.splice(iIdx, 1);
    salvarCardapiosNoStorage();
    renderizarCardapioPrincipal();
    cgRenderizarRefeicoes();
}

// Salva a refeição após edição do nome, horário e itens
function cgSalvarRefeicao(idx) {
    const nomeInput = document.getElementById("cgEditNome_" + idx);
    const horarioInput = document.getElementById("cgEditHorario_" + idx);
    const itensContainer = document.getElementById("cgEditItens_" + idx);

    if (!nomeInput || !horarioInput || !itensContainer) return;

    const nome = nomeInput.value.trim();
    const horario = horarioInput.value.trim();

    if (!nome || !horario) {
        mostrarToast("Preencha o nome e o horário da refeição.", "erro");
        return;
    }

    // Coleta todos os itens dos inputs do editor
    const itens = [];
    itensContainer.querySelectorAll("input[type='text']").forEach(input => {
        const v = input.value.trim();
        if (v) itens.push(v);
    });

    if (itens.length === 0) {
        mostrarToast("Adicione pelo menos um item ao cardápio.", "erro");
        return;
    }

    if (!cardapios[cgDiaSelecionado]) cardapios[cgDiaSelecionado] = {};
    if (!cardapios[cgDiaSelecionado][cgTurnoSelecionado]) cardapios[cgDiaSelecionado][cgTurnoSelecionado] = [];

    // Preserva o tipo original
    const tipoAtual = cardapios[cgDiaSelecionado][cgTurnoSelecionado][idx]?.tipo || "lanche";

    cardapios[cgDiaSelecionado][cgTurnoSelecionado][idx] = { tipo: tipoAtual, nome, horario, itens };
    salvarCardapiosNoStorage();
    renderizarCardapioPrincipal();
    cgRenderizarRefeicoes();
    mostrarToast(`✅ "${nome}" atualizado com sucesso!`, "sucesso");
}

// Remove uma refeição inteira do turno
function cgRemoverRefeicao(idx) {
    if (!confirm("Remover esta refeição do cardápio?")) return;
    if (!cardapios[cgDiaSelecionado] || !cardapios[cgDiaSelecionado][cgTurnoSelecionado]) return;
    cardapios[cgDiaSelecionado][cgTurnoSelecionado].splice(idx, 1);
    salvarCardapiosNoStorage();
    renderizarCardapioPrincipal();
    cgRenderizarRefeicoes();
    mostrarToast("Refeição removida do cardápio.", "info");
}

// Adiciona uma nova refeição em branco
function cgAdicionarRefeicao() {
    if (!cardapios[cgDiaSelecionado]) cardapios[cgDiaSelecionado] = {};
    if (!cardapios[cgDiaSelecionado][cgTurnoSelecionado]) {
        cardapios[cgDiaSelecionado][cgTurnoSelecionado] = [];
    }

    const novaRefeicao = {
        tipo: "lanche",
        nome: "Nova Refeição",
        horario: "07:00 - 07:45",
        itens: ["Novo item"]
    };

    cardapios[cgDiaSelecionado][cgTurnoSelecionado].push(novaRefeicao);
    salvarCardapiosNoStorage();
    renderizarCardapioPrincipal();
    cgRenderizarRefeicoes();

    // Abre direto no modo edição no novo card
    const novoIdx = cardapios[cgDiaSelecionado][cgTurnoSelecionado].length - 1;
    setTimeout(() => {
        cgModoEditar(novoIdx);
        const card = document.getElementById("cgCard_" + novoIdx);
        if (card) card.scrollIntoView({ behavior: "smooth", block: "center" });
    }, 80);
}

// ==========================================================================
// HORÁRIOS DE AULAS POR ESCOLA (EXCLUSIVO ADM)
// ==========================================================================

const DIAS_SEMANA = ["segunda", "terca", "quarta", "quinta", "sexta"];
const DIAS_LABELS = { segunda: "Segunda", terca: "Terça", quarta: "Quarta", quinta: "Quinta", sexta: "Sexta" };

function abrirModalEditarHorarios(idEscola) {
    const tiposPermitidos = ["admin", "admin_cardapio"];
    const podeEditar = usuarioAtual && tiposPermitidos.includes(usuarioAtual.tipo);
    if (!podeEditar) {
        mostrarToast("Acesso negado: somente o Administrador ou o Gestor de Cardápio podem editar os horários de aulas.", "erro");
        return;
    }

    const escola = escolas.find(e => e.id === idEscola);
    if (!escola) return;

    escolaHorariosEditando = escola;

    const titulo = document.getElementById("horariosModalEscolaNome");
    if (titulo) titulo.textContent = escola.nome;

    renderizarFormGradeHoraria(idEscola);
    abrirModalAdmin("adminHorariosAulasModal");
}

function renderizarFormGradeHoraria(idEscola) {
    const container = document.getElementById("horariosLinhasContainer");
    if (!container) return;

    const grade = obterGradeEscola(idEscola);

    container.innerHTML = grade.map((linha, idx) => {
        if (linha.isIntervalo) {
            return `
                <div class="horario-linha-form intervalo-linha" data-idx="${idx}" data-intervalo="true">
                    <div class="horario-linha-header">
                        <span class="horario-linha-num"><i class="fas fa-bell"></i> Intervalo</span>
                        <div class="horario-linha-controles">
                            <input type="text" class="horario-input horario-input-time" data-field="horario" data-idx="${idx}"
                                value="${linha.horario}" placeholder="Ex: 09:30 - 09:50">
                            <input type="text" class="horario-input horario-input-rotulo" data-field="rotulo" data-idx="${idx}"
                                value="${linha.rotulo}" placeholder="Descrição do intervalo">
                        </div>
                        <button type="button" class="btn-remove-linha" onclick="removerLinhaHorario(${idx})" title="Remover linha">
                            <i class="fas fa-trash-can"></i>
                        </button>
                    </div>
                </div>
            `;
        }

        return `
            <div class="horario-linha-form" data-idx="${idx}" data-intervalo="false">
                <div class="horario-linha-header">
                    <span class="horario-linha-num"><i class="fas fa-clock"></i> Aula ${idx + 1}</span>
                    <input type="text" class="horario-input horario-input-time" data-field="horario" data-idx="${idx}"
                        value="${linha.horario}" placeholder="Ex: 07:00 - 07:50">
                    <button type="button" class="btn-remove-linha" onclick="removerLinhaHorario(${idx})" title="Remover linha">
                        <i class="fas fa-trash-can"></i>
                    </button>
                </div>
                <div class="horario-dias-grid">
                    ${DIAS_SEMANA.map(dia => `
                        <div class="horario-dia-col">
                            <label class="horario-dia-label">${DIAS_LABELS[dia]}</label>
                            <input type="text" class="horario-input horario-input-disc"
                                data-field="${dia}_disc" data-idx="${idx}"
                                value="${linha[dia] ? linha[dia].disc : ''}"
                                placeholder="Disciplina">
                            <input type="text" class="horario-input horario-input-sala"
                                data-field="${dia}_sala" data-idx="${idx}"
                                value="${linha[dia] ? linha[dia].sala : ''}"
                                placeholder="Sala">
                        </div>
                    `).join("")}
                </div>
            </div>
        `;
    }).join("");
}

function coletarGradeDoFormulario() {
    const container = document.getElementById("horariosLinhasContainer");
    if (!container) return [];

    const linhas = container.querySelectorAll(".horario-linha-form");
    const grade = [];

    linhas.forEach(linhaEl => {
        const isIntervalo = linhaEl.dataset.intervalo === "true";
        const idx = parseInt(linhaEl.dataset.idx);

        const horario = linhaEl.querySelector(`[data-field="horario"]`)?.value.trim() || "";

        if (isIntervalo) {
            const rotulo = linhaEl.querySelector(`[data-field="rotulo"]`)?.value.trim() || "Intervalo";
            grade.push({ horario, isIntervalo: true, rotulo });
        } else {
            const obj = { horario };
            DIAS_SEMANA.forEach(dia => {
                const disc = linhaEl.querySelector(`[data-field="${dia}_disc"]`)?.value.trim() || "";
                const sala = linhaEl.querySelector(`[data-field="${dia}_sala"]`)?.value.trim() || "";
                obj[dia] = { disc, sala };
            });
            grade.push(obj);
        }
    });

    return grade;
}

function adicionarLinhaAula() {
    const container = document.getElementById("horariosLinhasContainer");
    if (!container) return;

    const linhas = container.querySelectorAll(".horario-linha-form");
    const novoIdx = linhas.length;

    const novaLinha = document.createElement("div");
    novaLinha.className = "horario-linha-form";
    novaLinha.dataset.idx = novoIdx;
    novaLinha.dataset.intervalo = "false";

    novaLinha.innerHTML = `
        <div class="horario-linha-header">
            <span class="horario-linha-num"><i class="fas fa-clock"></i> Aula ${novoIdx + 1}</span>
            <input type="text" class="horario-input horario-input-time" data-field="horario" data-idx="${novoIdx}"
                value="" placeholder="Ex: 13:30 - 14:20">
            <button type="button" class="btn-remove-linha" onclick="removerLinhaHorario(${novoIdx})" title="Remover linha">
                <i class="fas fa-trash-can"></i>
            </button>
        </div>
        <div class="horario-dias-grid">
            ${DIAS_SEMANA.map(dia => `
                <div class="horario-dia-col">
                    <label class="horario-dia-label">${DIAS_LABELS[dia]}</label>
                    <input type="text" class="horario-input horario-input-disc"
                        data-field="${dia}_disc" data-idx="${novoIdx}"
                        value="" placeholder="Disciplina">
                    <input type="text" class="horario-input horario-input-sala"
                        data-field="${dia}_sala" data-idx="${novoIdx}"
                        value="" placeholder="Sala">
                </div>
            `).join("")}
        </div>
    `;

    container.appendChild(novaLinha);
    novaLinha.scrollIntoView({ behavior: "smooth", block: "center" });
}

function adicionarLinhaIntervalo() {
    const container = document.getElementById("horariosLinhasContainer");
    if (!container) return;

    const linhas = container.querySelectorAll(".horario-linha-form");
    const novoIdx = linhas.length;

    const novaLinha = document.createElement("div");
    novaLinha.className = "horario-linha-form intervalo-linha";
    novaLinha.dataset.idx = novoIdx;
    novaLinha.dataset.intervalo = "true";

    novaLinha.innerHTML = `
        <div class="horario-linha-header">
            <span class="horario-linha-num"><i class="fas fa-bell"></i> Intervalo</span>
            <div class="horario-linha-controles">
                <input type="text" class="horario-input horario-input-time" data-field="horario" data-idx="${novoIdx}"
                    value="" placeholder="Ex: 09:30 - 09:50">
                <input type="text" class="horario-input horario-input-rotulo" data-field="rotulo" data-idx="${novoIdx}"
                    value="🥪 Intervalo & Lanche (Pátio Escolar)" placeholder="Descrição do intervalo">
            </div>
            <button type="button" class="btn-remove-linha" onclick="removerLinhaHorario(${novoIdx})" title="Remover linha">
                <i class="fas fa-trash-can"></i>
            </button>
        </div>
    `;

    container.appendChild(novaLinha);
    novaLinha.scrollIntoView({ behavior: "smooth", block: "center" });
}

function removerLinhaHorario(idx) {
    // Coleta o estado atual, remove a linha e re-renderiza o formulário
    const gradeAtual = coletarGradeDoFormulario();
    gradeAtual.splice(idx, 1);

    // Salva temporariamente e re-renderiza
    const container = document.getElementById("horariosLinhasContainer");
    if (!container || !escolaHorariosEditando) return;

    const idEscola = String(escolaHorariosEditando.id);
    gradesHorarias[idEscola] = gradeAtual;
    renderizarFormGradeHoraria(idEscola);
}

function restaurarGradePadrao() {
    if (!escolaHorariosEditando) return;
    if (!confirm("Deseja restaurar a grade horária padrão desta escola? As alterações não salvas serão perdidas.")) return;

    const idEscola = String(escolaHorariosEditando.id);
    delete gradesHorarias[idEscola];
    renderizarFormGradeHoraria(idEscola);
    mostrarToast("Grade horária restaurada para o padrão.", "info");
}

function salvarGradeHoraria() {
    if (!escolaHorariosEditando) return;

    const grade = coletarGradeDoFormulario();
    if (grade.length === 0) {
        mostrarToast("A grade não pode ficar vazia. Adicione pelo menos uma linha de aula.", "erro");
        return;
    }

    const idEscola = String(escolaHorariosEditando.id);
    gradesHorarias[idEscola] = grade;
    salvarGradesNoStorage();

    fecharModalAdmin("adminHorariosAulasModal");

    // Se o aluno logado pertence a esta escola, atualiza a grade exibida
    if (usuarioAtual && String(usuarioAtual.escolaId) === idEscola) {
        renderizarGradeHoraria();
    }

    mostrarToast(`✅ Grade horária de "${escolaHorariosEditando.nome}" salva com sucesso!`, "sucesso");
    escolaHorariosEditando = null;
}

// Abre um seletor de escola para editar horários (chamado pelo dropdown do admin)
function abrirModalEscolasParaHorarios() {
    const lista = document.getElementById("escolaHorariosLista");
    if (!lista) return;

    lista.innerHTML = escolas.map(escola => {
        const temGrade = gradesHorarias[String(escola.id)];
        return `
            <button type="button" class="escola-horarios-item" onclick="fecharModalAdmin('adminSelecionarEscolaHorariosModal'); abrirModalEditarHorarios(${escola.id})">
                <div class="escola-horarios-item-info">
                    <img src="${escola.imagem}" alt="${escola.nome}" class="escola-horarios-item-img">
                    <div>
                        <strong>${escola.nome}</strong>
                        <span>${escola.bairro} · ${escola.turnos ? escola.turnos.filter(t=>t.ativo).map(t=>t.nome).join(', ') : 'Turnos variados'}</span>
                    </div>
                </div>
                ${temGrade ? '<span class="escola-horarios-badge-custom"><i class="fas fa-check-circle"></i> Grade personalizada</span>' : '<span class="escola-horarios-badge-padrao"><i class="fas fa-info-circle"></i> Grade padrão</span>'}
            </button>
        `;
    }).join("");

    abrirModalAdmin("adminSelecionarEscolaHorariosModal");
}

// ==========================================================================
// DASHBOARD DE MÉTRICAS & ONBOARDING
// ==========================================================================

function atualizarMetricasDashboard() {
    const elEscolas = document.getElementById("statTotalEscolas");
    const elAlunos = document.getElementById("statTotalAlunos");
    const elTurmas = document.getElementById("statTotalTurmas");
    const elTaxa = document.getElementById("statTaxaAprovacao");

    if (elEscolas) elEscolas.textContent = escolas.length;
    if (elAlunos) elAlunos.textContent = alunos.length;

    let totalTurmas = 0;
    escolas.forEach(e => {
        totalTurmas += (e.turmas && Array.isArray(e.turmas)) ? e.turmas.length : 3;
    });
    if (elTurmas) elTurmas.textContent = totalTurmas;

    if (alunos.length > 0) {
        const aprovados = alunos.filter(a => a.statusAcademico === "aprovado" || a.statusAcademico === "formado").length;
        const taxa = Math.round((aprovados / alunos.length) * 100);
        if (elTaxa) elTaxa.textContent = `${taxa}%`;
    } else {
        if (elTaxa) elTaxa.textContent = "94%";
    }
}

function abrirModalOnboarding() {
    const overlay = document.getElementById("onboardingModal");
    if (!overlay) return;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fecharModalOnboarding() {
    const overlay = document.getElementById("onboardingModal");
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================================================
// DRAWER MOBILE
// ==========================================================================

function toggleDrawer() {
    const drawer  = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("drawerOverlay");
    const toggle  = document.getElementById("navToggle");
    if (!drawer) return;

    const isOpen = drawer.classList.contains("open");
    if (isOpen) {
        fecharDrawer();
    } else {
        abrirDrawer();
    }
}

function abrirDrawer() {
    const drawer  = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("drawerOverlay");
    const toggle  = document.getElementById("navToggle");
    if (!drawer) return;

    drawer.classList.add("open");
    drawer.setAttribute("aria-hidden", "false");
    if (overlay) overlay.classList.add("active");
    if (toggle)  toggle.classList.add("open");
    toggle?.setAttribute("aria-expanded", "true");
    document.body.style.overflow = "hidden";

    atualizarDrawerPerfil();
}

function fecharDrawer() {
    const drawer  = document.getElementById("mobileDrawer");
    const overlay = document.getElementById("drawerOverlay");
    const toggle  = document.getElementById("navToggle");
    if (!drawer) return;

    drawer.classList.remove("open");
    drawer.setAttribute("aria-hidden", "true");
    if (overlay) overlay.classList.remove("active");
    if (toggle)  toggle.classList.remove("open");
    toggle?.setAttribute("aria-expanded", "false");
    document.body.style.overflow = "";
}

function atualizarDrawerPerfil() {
    const drawer = document.getElementById("mobileDrawer");
    if (!drawer) return;

    const user = usuarioAtual || USUARIOS_SISTEMA.admin;

    const drawerAvatar = document.getElementById("drawerAvatar");
    const drawerNome   = document.getElementById("drawerNome");
    const drawerCargo  = document.getElementById("drawerCargo");
    const drawerBadge  = document.getElementById("drawerBadge");

    if (drawerAvatar) drawerAvatar.src = user.avatar || "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&q=80";
    if (drawerNome)   drawerNome.textContent = usuarioAtual ? (user.nome || "Usuário") : "Visitante (Não conectado)";

    const isAdmin = user.tipo === "admin";
    const isAvisos = user.tipo === "admin_avisos";
    const isCardapio = user.tipo === "admin_cardapio";

    if (drawerCargo) {
        if (!usuarioAtual) {
            drawerCargo.textContent = "Faça login com Google para acessar";
        } else {
            drawerCargo.textContent = user.cargo || (isAdmin ? "Administrador(a)" : (user.escola || "Aluno(a)"));
        }
    }
    if (drawerBadge) {
        if (!usuarioAtual) {
            drawerBadge.className = "drawer-badge drawer-badge--aluno";
            drawerBadge.innerHTML = '<i class="fas fa-right-to-bracket"></i> Aguardando Login';
        } else if (isAdmin) {
            drawerBadge.className = "drawer-badge drawer-badge--admin";
            drawerBadge.innerHTML = `<i class="fas fa-shield-halved"></i> ${user.tipoNome || "Administrador"}`;
        } else if (isAvisos) {
            drawerBadge.className = "drawer-badge drawer-badge--admin";
            drawerBadge.innerHTML = '<i class="fas fa-bullhorn"></i> Gestor(a) de Avisos';
        } else if (isCardapio) {
            drawerBadge.className = "drawer-badge drawer-badge--admin";
            drawerBadge.innerHTML = `<i class="fas fa-utensils"></i> ${user.tipoNome || "Responsável pela Cozinha"}`;
        } else {
            drawerBadge.className = "drawer-badge drawer-badge--aluno";
            drawerBadge.innerHTML = '<i class="fas fa-graduation-cap"></i> Aluno(a)';
        }
    }
}

// ==========================================================================
// GESTÃO DE ESCOLAS (EXCLUSIVO ADM)
// ==========================================================================
function filtrarEscolaHelena() {
    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.value = "Helena Kolody";
        filtroAtual = "todos";
        document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
        document.querySelector(".filter-btn[data-filter='todos']")?.classList.add("active");
        aplicarFiltrosEscolas();
    }
    const secao = document.getElementById("escolas");
    if (secao) secao.scrollIntoView({ behavior: "smooth" });
}

function aplicarFiltrosEscolas() {
    const termo = (document.getElementById("searchInput")?.value || "").toLowerCase().trim();

    let escolasFiltradas = escolas.filter(escola => {
        let correspondeFiltro = false;
        if (filtroAtual === "todos") {
            correspondeFiltro = true;
        } else if (["ds", "adm", "enf"].includes(filtroAtual)) {
            correspondeFiltro = escola.cursos && escola.cursos.some(c => c.codigo === filtroAtual);
        } else {
            correspondeFiltro = escola.tipo === filtroAtual;
        }

        const temCursoBusca = escola.cursos && escola.cursos.some(c =>
            c.nome.toLowerCase().includes(termo) ||
            c.codigo.toLowerCase().includes(termo) ||
            c.descricao.toLowerCase().includes(termo)
        );

        const correspondeBusca = termo === "" ||
            escola.nome.toLowerCase().includes(termo) ||
            escola.bairro.toLowerCase().includes(termo) ||
            escola.tipoNome.toLowerCase().includes(termo) ||
            escola.endereco.toLowerCase().includes(termo) ||
            escola.diretor.toLowerCase().includes(termo) ||
            temCursoBusca;

        return correspondeFiltro && correspondeBusca;
    });

    renderizarEscolas(escolasFiltradas);
}

function renderizarEscolas(listaEscolas) {
    const grid = document.getElementById("schoolsGrid");
    const noResults = document.getElementById("noResults");
    if (!grid) return;

    if (listaEscolas.length === 0) {
        grid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    grid.innerHTML = listaEscolas.map(escola => {
        const totalTurmas = escola.turmas ? escola.turmas.length : 3;

        return `
        <article class="school-card">
            <div class="school-card-image">
                <button class="card-admin-edit admin-only" onclick="event.stopPropagation(); abrirModalEditarEscola(${escola.id})" title="Editar informações da escola">
                    <i class="fas fa-edit"></i>
                </button>
                <button class="card-admin-delete admin-only" onclick="event.stopPropagation(); excluirEscola(${escola.id})" title="Excluir esta escola">
                    <i class="fas fa-trash-alt"></i>
                </button>
                <img src="${escola.imagem}" alt="${escola.nome}" loading="lazy">
                <span class="school-type ${escola.tipo}">${escola.tipoNome}</span>
                ${escola.integral ? '<span class="school-type" style="background: var(--accent); right: auto; left: 120px;">Integral</span>' : ''}
                <span class="school-status">${escola.status}</span>
            </div>
            <div class="school-card-body">
                <h3>${escola.nome}</h3>
                <div class="school-address">
                    <i class="fas fa-map-marker-alt"></i>
                    <span>${escola.endereco}</span>
                </div>
                <div class="school-info">
                    <div class="school-info-item">
                        <i class="fas fa-users"></i>
                        <span>${escola.alunos} vagas</span>
                    </div>
                    <div class="school-info-item">
                        <i class="fas fa-door-open"></i>
                        <span>${totalTurmas} turmas</span>
                    </div>
                    <div class="school-info-item">
                        <i class="fas fa-city"></i>
                        <span>${escola.bairro}</span>
                    </div>
                </div>
                <div class="school-card-footer-buttons">
                    <button class="school-detail-btn" onclick="abrirModalEscola(${escola.id})">
                        <i class="fas fa-eye"></i> Detalhes & Turmas
                    </button>
                    <div class="school-card-icon-btns admin-only">
                        <button class="btn btn-secondary admin-only" onclick="abrirModalEditarEscola(${escola.id})" title="Editar Escola">
                            <i class="fas fa-edit"></i>
                        </button>
                        <button class="btn btn-accent-horario admin-only" onclick="abrirModalEditarHorarios(${escola.id})" title="Editar Horários de Aulas">
                            <i class="fas fa-clock"></i>
                        </button>
                        <button class="btn btn-turmas-card admin-only" onclick="abrirModalGerenciarTurmas(${escola.id})" title="Gerenciar Turmas">
                            <i class="fas fa-chalkboard-user"></i>
                        </button>
                    </div>
                </div>
            </div>
        </article>
        `;
    }).join("");
}

function abrirModalEditarEscola(idEscola) {
    const escola = escolas.find(e => e.id === idEscola);
    if (!escola) return;

    document.getElementById("editEscolaId").value = escola.id;
    document.getElementById("editEscolaNome").value = escola.nome;
    document.getElementById("editEscolaTipo").value = escola.tipo;
    document.getElementById("editEscolaBairro").value = escola.bairro;
    document.getElementById("editEscolaEndereco").value = escola.endereco;
    document.getElementById("editEscolaAlunos").value = escola.alunos;
    document.getElementById("editEscolaSalas").value = escola.salas;
    document.getElementById("editEscolaDiretor").value = escola.diretor;
    document.getElementById("editEscolaTelefone").value = escola.telefone;
    document.getElementById("editEscolaEmail").value = escola.email;
    document.getElementById("editEscolaImagem").value = escola.imagem;

    // Preenche chips de turmas
    const turmasAtual = escola.turmas || [];
    document.getElementById("editEscolaTurmas").value = turmasAtual.join(",");
    renderizarChipsNoBox("editTurmasChipsBox", turmasAtual, "edit");

    abrirModalAdmin("adminEditarEscolaModal");
}

function tratarSubmitEditarEscola(event) {
    event.preventDefault();
    const id = parseInt(document.getElementById("editEscolaId").value);
    const index = escolas.findIndex(e => e.id === id);
    if (index === -1) return;

    const nome = document.getElementById("editEscolaNome").value.trim();
    const tipo = document.getElementById("editEscolaTipo").value;
    const bairro = document.getElementById("editEscolaBairro").value.trim();
    const endereco = document.getElementById("editEscolaEndereco").value.trim();
    const alunosQtd = parseInt(document.getElementById("editEscolaAlunos").value) || 800;
    const salas = parseInt(document.getElementById("editEscolaSalas").value) || 20;
    const diretor = document.getElementById("editEscolaDiretor").value.trim();
    const telefone = document.getElementById("editEscolaTelefone").value.trim();
    const email = document.getElementById("editEscolaEmail").value.trim();
    const turmasStr = document.getElementById("editEscolaTurmas").value.trim();
    const imagem = document.getElementById("editEscolaImagem").value.trim() || escolas[index].imagem;

    const turmasArray = turmasStr.split(",")
        .map(t => t.trim())
        .filter(t => t.length > 0);

    const nomeAntigo = escolas[index].nome;

    escolas[index] = {
        ...escolas[index],
        nome,
        tipo,
        tipoNome: tipo === "medio" ? "Ensino Médio" : "Ensino Técnico",
        bairro,
        endereco,
        alunos: alunosQtd,
        salas,
        diretor,
        telefone,
        email,
        imagem,
        turmas: turmasArray.length > 0 ? turmasArray : escolas[index].turmas
    };

    if (nome !== nomeAntigo) {
        alunos.forEach(a => {
            if (a.escolaId === id) a.escolaNome = nome;
        });
        salvarAlunosNoStorage();
    }

    salvarEscolasNoStorage();
    aplicarFiltrosEscolas();
    popularSelectsEscolasFormularios();
    popularFiltrosEscolasAlunos();
    renderizarTabelaAlunos();
    atualizarMetricasDashboard();
    fecharModalAdmin("adminEditarEscolaModal");

    mostrarToast(`✅ Escola "${nome}" atualizada com sucesso!`, "sucesso");
}

function tratarSubmitNovaEscola(event) {
    event.preventDefault();
    const nome = document.getElementById("escolaNome").value.trim();
    const tipo = document.getElementById("escolaTipo").value;
    const bairro = document.getElementById("escolaBairro").value.trim();
    const endereco = document.getElementById("escolaEndereco").value.trim();
    const alunosQtd = parseInt(document.getElementById("escolaAlunos").value) || 600;
    const salas = parseInt(document.getElementById("escolaSalas").value) || 20;
    const diretor = document.getElementById("escolaDiretor").value.trim() || "Direção Escolar";
    const telefone = document.getElementById("escolaTelefone").value.trim() || "(11) 3456-0000";
    const turmasStr = document.getElementById("escolaTurmasIniciais").value.trim();
    const imagem = document.getElementById("escolaImagem").value.trim() || "https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?w=800&q=80";

    const turmasArray = turmasStr.split(",")
        .map(t => t.trim())
        .filter(t => t.length > 0);

    const emailLimpo = nome.toLowerCase()
        .normalize("NFD").replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9]/g, "");

    const novaEscola = {
        id: Date.now(),
        nome,
        tipo,
        tipoNome: tipo === "medio" ? "Ensino Médio" : "Ensino Técnico",
        bairro,
        endereco,
        alunos: alunosQtd,
        imagem,
        status: "Ativa",
        telefone,
        email: `${emailLimpo}@escola.pr.gov.br`,
        diretor,
        salas,
        turnos: [
            { nome: "Manhã", horario: "07:00 - 12:30", ativo: true },
            { nome: "Tarde", horario: "13:30 - 18:00", ativo: true },
            { nome: "Noite", horario: "19:00 - 22:30", ativo: true }
        ],
        integral: false,
        turmas: turmasArray.length > 0 ? turmasArray : ["1º Ano A", "2º Ano A", "3º Ano A"],
        cursos: tipo === "tecnico" ? [
            {
                codigo: "ds",
                nome: "Desenvolvimento de Sistemas",
                icone: "fa-code",
                duracao: "3 semestres",
                vagas: 80,
                descricao: "Formação técnica em desenvolvimento web e sistemas."
            }
        ] : []
    };

    escolas.unshift(novaEscola);
    salvarEscolasNoStorage();
    aplicarFiltrosEscolas();
    popularSelectsEscolasFormularios();
    popularFiltrosEscolasAlunos();
    atualizarMetricasDashboard();
    fecharModalAdmin("adminEscolaModal");
    document.getElementById("formNovaEscola").reset();
    // Reseta chips para o padrão
    const padrao = ["1º Ano A", "2º Ano A", "3º Ano A"];
    document.getElementById("escolaTurmasIniciais").value = padrao.join(",");
    renderizarChipsNoBox("novaTurmasChipsBox", padrao, "nova");

    mostrarToast(`✅ Escola "${nome}" cadastrada com sucesso!`, "sucesso");
}

function excluirEscola(id) {
    const escola = escolas.find(e => e.id === id);
    if (!escola) return;
    if (confirm(`Tem certeza que deseja excluir a escola "${escola.nome}"?`)) {
        escolas = escolas.filter(e => e.id !== id);
        salvarEscolasNoStorage();
        aplicarFiltrosEscolas();
        popularSelectsEscolasFormularios();
        popularFiltrosEscolasAlunos();
        atualizarMetricasDashboard();
        mostrarToast(`🗑️ Escola "${escola.nome}" removida da rede!`, "info");
    }
}

// ==========================================================================
// GERENCIAMENTO DE TURMAS POR ESCOLA (EXCLUSIVO ADM)
// ==========================================================================

let escolaTurmasEditando = null;   // escola aberta no modal de gerenciar turmas
let turmasTemporarias = [];        // estado temporário das turmas no modal

/* ---- Utilitários de chips ---- */

function obterTurmasDoHidden(prefixo) {
    const id = prefixo === "edit" ? "editEscolaTurmas" : "escolaTurmasIniciais";
    const val = (document.getElementById(id)?.value || "").trim();
    return val ? val.split(",").map(t => t.trim()).filter(Boolean) : [];
}

function sincronizarHidden(prefixo, lista) {
    const id = prefixo === "edit" ? "editEscolaTurmas" : "escolaTurmasIniciais";
    const el = document.getElementById(id);
    if (el) el.value = lista.join(",");
}

function renderizarChipsNoBox(boxId, lista, prefixo) {
    const box = document.getElementById(boxId);
    if (!box) return;

    if (lista.length === 0) {
        box.innerHTML = `<span class="turmas-chips-empty"><i class="fas fa-info-circle"></i> Nenhuma turma cadastrada ainda</span>`;
        return;
    }

    box.innerHTML = lista.map((turma, idx) => `
        <span class="turma-chip">
            <span class="turma-chip-text">${turma}</span>
            <button type="button" class="turma-chip-remove"
                onclick="removerTurmaChip('${boxId}', ${idx}, '${prefixo}')"
                title="Remover turma">
                <i class="fas fa-xmark"></i>
            </button>
        </span>
    `).join("");
}

function removerTurmaChip(boxId, idx, prefixo) {
    if (prefixo === "gerenciar") {
        turmasTemporarias.splice(idx, 1);
        renderizarChipsNoBox(boxId, turmasTemporarias, "gerenciar");
        atualizarContadorGerenciar();
        return;
    }
    const lista = obterTurmasDoHidden(prefixo);
    lista.splice(idx, 1);
    sincronizarHidden(prefixo, lista);
    renderizarChipsNoBox(boxId, lista, prefixo);
}

function adicionarTurmaModal(prefixo) {
    const inputId = prefixo === "edit" ? "editNovaTurmaInput" : "novaNovaTurmaInput";
    const boxId   = prefixo === "edit" ? "editTurmasChipsBox" : "novaTurmasChipsBox";
    const input   = document.getElementById(inputId);
    if (!input) return;

    const nome = input.value.trim();
    if (!nome) { mostrarToast("Digite o nome da turma antes de adicionar.", "erro"); return; }

    const lista = obterTurmasDoHidden(prefixo);
    if (lista.includes(nome)) { mostrarToast("Esta turma já está cadastrada.", "erro"); return; }

    lista.push(nome);
    sincronizarHidden(prefixo, lista);
    renderizarChipsNoBox(boxId, lista, prefixo);
    input.value = "";
    input.focus();
}

/* ---- Modal dedicado de gerenciar turmas ---- */

function abrirModalGerenciarTurmas(idEscola) {
    if (perfilAtivoVisao !== "admin" && (!usuarioAtual || usuarioAtual.tipo !== "admin")) {
        mostrarToast("Acesso negado: somente o Administrador pode gerenciar turmas.", "erro");
        return;
    }

    const escola = escolas.find(e => e.id === idEscola);
    if (!escola) return;

    escolaTurmasEditando = escola;
    turmasTemporarias = [...(escola.turmas || [])];

    const nomeEl = document.getElementById("gerenciarTurmasEscolaNome");
    if (nomeEl) nomeEl.textContent = escola.nome;

    renderizarChipsNoBox("gerenciarTurmasChipsBox", turmasTemporarias, "gerenciar");
    atualizarContadorGerenciar();

    // Limpa campos de adição
    const inputGer = document.getElementById("gerenciarTurmaInput");
    if (inputGer) inputGer.value = "";
    const selAno   = document.getElementById("gerenciarTurmaAno");
    const selTurma = document.getElementById("gerenciarTurmaTurma");
    const selTurno = document.getElementById("gerenciarTurmaTurno");
    if (selAno)   selAno.value   = "";
    if (selTurma) selTurma.value = "";
    if (selTurno) selTurno.value = "";

    abrirModalAdmin("adminGerenciarTurmasModal");
}

function atualizarContadorGerenciar() {
    const el = document.getElementById("gerenciarTurmasCount");
    if (el) el.textContent = `${turmasTemporarias.length} turma${turmasTemporarias.length !== 1 ? "s" : ""}`;
}

function adicionarTurmaGerenciar() {
    const input = document.getElementById("gerenciarTurmaInput");
    if (!input) return;
    const nome = input.value.trim();
    if (!nome) { mostrarToast("Digite o nome da turma.", "erro"); return; }
    if (turmasTemporarias.includes(nome)) { mostrarToast("Esta turma já está na lista.", "erro"); return; }

    turmasTemporarias.push(nome);
    renderizarChipsNoBox("gerenciarTurmasChipsBox", turmasTemporarias, "gerenciar");
    atualizarContadorGerenciar();
    input.value = "";
    input.focus();
}

function adicionarTurmaCompostoModal() {
    const ano   = document.getElementById("gerenciarTurmaAno")?.value.trim();
    const turma = document.getElementById("gerenciarTurmaTurma")?.value.trim();
    const turno = document.getElementById("gerenciarTurmaTurno")?.value.trim();

    if (!ano) { mostrarToast("Selecione o Ano/Série.", "erro"); return; }

    const partes = [ano, turma, turno].filter(Boolean);
    const nome   = partes.join(turma ? " " : " - ").replace(/ {2,}/g, " ").trim();
    // Formata como "1º Ano A - Manhã" ou "1º DS - Tarde"
    const nomeFinal = turma ? `${ano} ${turma}${turno ? " - " + turno : ""}` : `${ano}${turno ? " - " + turno : ""}`;

    if (turmasTemporarias.includes(nomeFinal)) { mostrarToast("Esta turma já está na lista.", "erro"); return; }

    turmasTemporarias.push(nomeFinal);
    renderizarChipsNoBox("gerenciarTurmasChipsBox", turmasTemporarias, "gerenciar");
    atualizarContadorGerenciar();

    // Reseta selects
    document.getElementById("gerenciarTurmaAno").value   = "";
    document.getElementById("gerenciarTurmaTurma").value = "";
    document.getElementById("gerenciarTurmaTurno").value = "";
}

function usarSugestaoTurma(nome) {
    if (turmasTemporarias.includes(nome)) {
        mostrarToast("Esta turma já está na lista.", "erro");
        return;
    }
    turmasTemporarias.push(nome);
    renderizarChipsNoBox("gerenciarTurmasChipsBox", turmasTemporarias, "gerenciar");
    atualizarContadorGerenciar();
}

function salvarTurmasGerenciar() {
    if (!escolaTurmasEditando) return;

    const idx = escolas.findIndex(e => e.id === escolaTurmasEditando.id);
    if (idx === -1) return;

    escolas[idx].turmas = [...turmasTemporarias];
    salvarEscolasNoStorage();

    // Atualiza selects de turmas nos formulários de aluno
    atualizarSelectTurmasAluno(escolaTurmasEditando.id);
    popularSelectsEscolasFormularios();
    aplicarFiltrosEscolas();
    atualizarMetricasDashboard();

    fecharModalAdmin("adminGerenciarTurmasModal");
    mostrarToast(`✅ Turmas de "${escolaTurmasEditando.nome}" salvas! (${turmasTemporarias.length} turmas)`, "sucesso");

    escolaTurmasEditando = null;
    turmasTemporarias = [];
}

function abrirModalEscola(idEscola) {
    const escola = escolas.find(e => e.id === idEscola);
    if (!escola) return;

    escolaAtualModal = escola;
    turnoAtualModal = escola.integral ? "integral" : (escola.turnos && escola.turnos[0] && escola.turnos[0].ativo ? "manha" : "tarde");

    const overlay = document.getElementById("schoolModal");
    const content = document.getElementById("modalContent");
    if (!overlay || !content) return;

    const turnosDisponiveis = escola.turnos ? escola.turnos.filter(t => t.ativo) : [];
    const temIntegral = escola.integral;
    const turmasEscola = escola.turmas || ["1º Ano Regular", "2º Ano Regular", "3º Ano Regular"];
    const alunosVinculados = alunos.filter(a => a.escolaId === escola.id);

    content.innerHTML = `
        <div class="modal-hero">
            <img src="${escola.imagem}" alt="${escola.nome}">
            <div class="modal-hero-info">
                <span class="school-type ${escola.tipo}">${escola.tipoNome}</span>
                ${temIntegral ? '<span class="school-type" style="background: var(--accent); margin-left: 8px;">Integral</span>' : ''}
                <h2>${escola.nome}</h2>
                <p>
                    <i class="fas fa-map-marker-alt"></i>
                    ${escola.endereco} · ${escola.bairro}
                </p>
            </div>
        </div>
        <div class="modal-body" style="padding: 24px;">
            <div class="school-details-grid">
                <div class="school-detail-item">
                    <i class="fas fa-users"></i>
                    <strong>${escola.alunos} vagas</strong>
                    <span>${alunosVinculados.length} matriculados</span>
                </div>
                <div class="school-detail-item">
                    <i class="fas fa-door-open"></i>
                    <strong>${escola.salas} salas</strong>
                    <span>${turmasEscola.length} turmas formadas</span>
                </div>
                <div class="school-detail-item">
                    <i class="fas fa-clock"></i>
                    <strong>${turnosDisponiveis.length} turno${turnosDisponiveis.length > 1 ? 's' : ''}</strong>
                    <span>${temIntegral ? 'Tempo Integral' : turnosDisponiveis.map(t => t.nome).join(', ')}</span>
                </div>
            </div>

            <!-- Turmas Registradas -->
            <div class="classes-section">
                <h3 style="font-size: 17px; font-weight: 700; display: flex; align-items: center; justify-content: space-between; margin-bottom: 12px;">
                    <span><i class="fas fa-chalkboard-user" style="color: var(--primary); margin-right: 8px;"></i> Turmas Registradas</span>
                    <div style="display: flex; gap: 8px;">
                        <button class="btn btn-accent-horario admin-only" onclick="fecharModal(); abrirModalEditarHorarios(${escola.id})" style="padding: 4px 12px; font-size: 12px;">
                            <i class="fas fa-clock"></i> Horários de Aulas
                        </button>
                        <button class="btn btn-turmas-card admin-only" onclick="fecharModal(); abrirModalGerenciarTurmas(${escola.id})" style="padding: 4px 12px; font-size: 12px;">
                            <i class="fas fa-plus"></i> Gerenciar Turmas
                        </button>
                    </div>
                </h3>
                <div class="classes-grid">
                    ${turmasEscola.map(turma => {
        const alunosNaTurma = alunosVinculados.filter(a => a.turma === turma).length;
        return `
                            <div class="class-card">
                                <div><strong>${turma}</strong></div>
                                <span>${alunosNaTurma} alunos</span>
                            </div>
                        `;
    }).join("")}
                </div>
            </div>

            ${escola.cursos && escola.cursos.length > 0 ? `
            <div class="courses-section" style="margin-top: 24px;">
                <h3 style="font-size: 17px; font-weight: 700; margin-bottom: 14px; display: flex; align-items: center; gap: 10px;">
                    <i class="fas fa-graduation-cap" style="color: var(--primary);"></i>
                    Cursos Técnicos Oferecidos
                </h3>
                <div class="courses-grid">
                    ${escola.cursos.map(curso => `
                        <div class="course-card" data-curso="${curso.codigo}">
                            <div class="course-icon ${curso.codigo}">
                                <i class="fas ${curso.icone}"></i>
                            </div>
                            <div class="course-info">
                                <h4>${curso.nome}</h4>
                                <div class="course-meta">
                                    <span><i class="fas fa-clock"></i> ${curso.duracao}</span>
                                    <span><i class="fas fa-users"></i> ${curso.vagas} vagas</span>
                                </div>
                                <p>${curso.descricao}</p>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
            ` : ''}
        </div>
    `;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fecharModal() {
    const overlay = document.getElementById("schoolModal");
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    escolaAtualModal = null;
}

// ==========================================================================
// GESTÃO DE ALUNOS & HISTÓRICO (EXCLUSIVO ADM)
// ==========================================================================

function validarDominioInstitucional(email) {
    if (!email || typeof email !== "string") return false;
    const limpo = email.trim().toLowerCase();
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/i.test(limpo);
}

function validarFeedbackEmailInput(input) {
    const val = input.value.trim().toLowerCase();
    const idFeedback = input.id === "cadEmail" ? "cadEmailFeedback" : "alunoEmailFeedback";
    const feedbackEl = document.getElementById(idFeedback);
    if (!feedbackEl) return;

    if (val === "") {
        feedbackEl.textContent = "";
        feedbackEl.className = "field-feedback";
        return;
    }

    if (validarDominioInstitucional(val)) {
        feedbackEl.textContent = "✓ E-mail válido";
        feedbackEl.className = "field-feedback valid";
    } else {
        feedbackEl.textContent = "✕ Digite um endereço de e-mail válido";
        feedbackEl.className = "field-feedback invalid";
    }
}

function validarFeedbackEmailLogin(input) {
    const val = (input.value || "").trim().toLowerCase();
    const feedbackEl = document.getElementById("loginEmailFeedback");
    if (!feedbackEl) return;

    if (val === "") {
        feedbackEl.textContent = "";
        feedbackEl.className = "google-field-feedback";
        input.style.borderColor = "";
        return;
    }

    if (validarDominioInstitucional(val)) {
        feedbackEl.innerHTML = '<i class="fas fa-circle-check"></i> Conta Google válida';
        feedbackEl.className = "google-field-feedback valid";
        input.style.borderColor = "#a8c7fa";
    } else {
        feedbackEl.innerHTML = '<i class="fas fa-circle-exclamation"></i> Informe um e-mail Google válido';
        feedbackEl.className = "google-field-feedback invalid";
        input.style.borderColor = "#f2b8b5";
    }
}

function popularFiltrosEscolasAlunos() {
    const select = document.getElementById("studentSchoolFilter");
    if (!select) return;
    const valorAtual = select.value;

    select.innerHTML = '<option value="todas">Todas as Escolas</option>' +
        escolas.map(e => `<option value="${e.id}">${e.nome}</option>`).join("");

    select.value = valorAtual || "todas";
}

function popularSelectsEscolasFormularios() {
    const selectAluno = document.getElementById("alunoEscola");
    const selectCad = document.getElementById("cadEscola");
    const selectSere = document.getElementById("sereEscolaSelect");
    const selectOcc = document.getElementById("occEscola");
    const selectFilterOcc = document.getElementById("occFilterEscola");

    const optionsHtml = '<option value="">Selecione uma Escola...</option>' +
        escolas.map(e => `<option value="${e.id}">${e.nome}</option>`).join("");

    if (selectAluno) selectAluno.innerHTML = optionsHtml;
    if (selectCad) selectCad.innerHTML = optionsHtml;
    if (selectSere) selectSere.innerHTML = optionsHtml;
    if (selectOcc) selectOcc.innerHTML = optionsHtml;

    if (selectFilterOcc) {
        const valAtual = selectFilterOcc.value;
        selectFilterOcc.innerHTML = '<option value="todas">Todas as Escolas</option>' +
            escolas.map(e => `<option value="${e.id}">${e.nome}</option>`).join("");
        if (valAtual) selectFilterOcc.value = valAtual;
    }
}

function atualizarSelectTurmasAluno(escolaId, turmaSelecionada = "") {
    const selectTurma = document.getElementById("alunoTurma");
    if (!selectTurma) return;

    const escola = escolas.find(e => String(e.id) === String(escolaId));
    if (!escola || !escola.turmas || escola.turmas.length === 0) {
        selectTurma.innerHTML = '<option value="1º Ano A">1º Ano A</option><option value="2º Ano A">2º Ano A</option><option value="3º Ano A">3º Ano A</option>';
        return;
    }

    selectTurma.innerHTML = escola.turmas.map(t => `<option value="${t}" ${t === turmaSelecionada ? 'selected' : ''}>${t}</option>`).join("");
}

function atualizarTurmasCadastro(escolaId) {
    const selectTurma = document.getElementById("cadTurma");
    if (!selectTurma) return;

    const escola = escolas.find(e => String(e.id) === String(escolaId));
    if (!escola || !escola.turmas || escola.turmas.length === 0) {
        selectTurma.innerHTML = '<option value="1º Ano A">1º Ano A</option><option value="2º Ano A">2º Ano A</option><option value="3º Ano A">3º Ano A</option>';
        return;
    }

    selectTurma.innerHTML = escola.turmas.map(t => `<option value="${t}">${t}</option>`).join("");
}

const MAPA_DESTINOS_LOGIN = {
    aluno: {
        visao: "aluno",
        rotulo: "Aluno(a)",
        cargoPadrao: "Estudante — Espaço do Aluno",
        badgeHtml: '<span class="status-badge status-andamento" title="Destinado ao Espaço do Aluno"><i class="fas fa-user-graduate"></i> Aluno(a)</span>'
    },
    funcionario: {
        visao: "admin_cardapio",
        rotulo: "Funcionário(a)",
        cargoPadrao: "Funcionário(a) — Equipe Escolar",
        badgeHtml: '<span class="status-badge status-aprovado" title="Destinado a Funcionário"><i class="fas fa-user-tie"></i> Funcionário(a)</span>'
    },
    admin_cardapio: {
        visao: "admin_cardapio",
        rotulo: "Responsável pela Cozinha",
        cargoPadrao: "Responsável pela Cozinha — Cardápio & Votação da Merenda",
        badgeHtml: '<span class="status-badge status-aprovado" style="background:#ECFDF5;color:#047857;border:1px solid #6EE7B7;" title="Destinado a Responsável pela Cozinha (Cardápio & Votação)"><i class="fas fa-utensils"></i> Resp. Cozinha</span>'
    },
    cozinha: {
        visao: "admin_cardapio",
        rotulo: "Responsável pela Cozinha",
        cargoPadrao: "Responsável pela Cozinha — Cardápio & Votação da Merenda",
        badgeHtml: '<span class="status-badge status-aprovado" style="background:#ECFDF5;color:#047857;border:1px solid #6EE7B7;" title="Destinado a Responsável pela Cozinha (Cardápio & Votação)"><i class="fas fa-utensils"></i> Resp. Cozinha</span>'
    },
    admin_avisos: {
        visao: "admin_avisos",
        rotulo: "Gestor(a) de Avisos",
        cargoPadrao: "Comunicação — Publicação de Avisos Oficiais",
        badgeHtml: '<span class="status-badge" style="background:#FEF3C7;color:#B45309;border:1px solid #FDE68A;" title="Destinado a Avisos"><i class="fas fa-bullhorn"></i> Avisos</span>'
    },
    admin_detalhes: {
        visao: "admin",
        rotulo: "Gestor(a) de Detalhes",
        cargoPadrao: "Gestão & Detalhes de Ocorrências",
        badgeHtml: '<span class="status-badge status-formado" title="Destinado a Detalhes de Ocorrências & Gestão"><i class="fas fa-screwdriver-wrench"></i> Detalhes & Gestão</span>'
    },
    admin: {
        visao: "admin",
        rotulo: "Gestor(a) / Detalhes",
        cargoPadrao: "Gestão & Detalhes de Ocorrências",
        badgeHtml: '<span class="status-badge status-formado" title="Gestor / Detalhes"><i class="fas fa-shield-halved"></i> Detalhes & Gestão</span>'
    },
    admin_chef: {
        visao: "admin",
        rotulo: "Administrador(a) Chefe",
        cargoPadrao: "Gestão Geral — Acesso Total",
        badgeHtml: '<span class="status-badge status-formado" title="Acesso Total"><i class="fas fa-crown"></i> ADM Chefe</span>'
    }
};

function obterMetaDestino(tipoPerfil) {
    return MAPA_DESTINOS_LOGIN[tipoPerfil] || MAPA_DESTINOS_LOGIN.aluno;
}

function atualizarBadgesPendentesAdmin() {
    const qtd = alunos.filter(a => a.situacaoAcesso === "pendente").length;
    const badgeHero = document.getElementById("badgeAprovacoesHero");
    const badgeModal = document.getElementById("modalCountPendentesBadge");
    if (badgeHero) {
        badgeHero.textContent = qtd;
        badgeHero.style.background = qtd > 0 ? "#FEF3C7" : "#FFFFFF";
        badgeHero.style.color = qtd > 0 ? "#B45309" : "#047857";
    }
    if (badgeModal) {
        badgeModal.textContent = `${qtd} pendente${qtd === 1 ? "" : "s"}`;
    }
}

function renderizarOpcoesSelectDestino(selecionado = "aluno") {
    const selNorm = selecionado === "cozinha" ? "admin_cardapio" : selecionado;
    const opcoes = [
        { val: "aluno", label: "🎓 Destinar: Aluno(a)" },
        { val: "funcionario", label: "👔 Destinar: Funcionário(a)" },
        { val: "admin_cardapio", label: "🍽️ Destinar: Responsável pela Cozinha" },
        { val: "admin_avisos", label: "📢 Destinar: Avisos" },
        { val: "admin_detalhes", label: "🔍 Destinar: Detalhes & Gestão" },
        { val: "admin_chef", label: "👑 Destinar: ADM Chefe" }
    ];
    return opcoes.map(o => `<option value="${o.val}" ${selNorm === o.val ? "selected" : ""}>${o.label}</option>`).join("");
}

function renderizarSolicitacoesPermissaoPendentes() {
    atualizarBadgesPendentesAdmin();
    const panel = document.getElementById("pendingAccessRequestsPanel");
    if (!panel) return;

    const pendentes = alunos.filter(a => a.situacaoAcesso === "pendente");
    if (pendentes.length === 0) {
        panel.style.display = "none";
        panel.innerHTML = "";
        return;
    }

    panel.style.display = "block";
    panel.innerHTML = `
        <div style="background: #FFFBEB; border: 1.5px solid #F59E0B; border-radius: 16px; padding: 20px 24px; box-shadow: 0 8px 24px -6px rgba(245, 158, 11, 0.18);">
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <div style="width: 42px; height: 42px; border-radius: 12px; background: #FEF3C7; color: #D97706; display: flex; align-items: center; justify-content: center; font-size: 19px;">
                        <i class="fas fa-user-check"></i>
                    </div>
                    <div>
                        <h3 style="font-size: 17px; font-weight: 800; color: #92400E; margin: 0;">
                            Aprovação de Login & Destinação (${pendentes.length})
                        </h3>
                        <p style="font-size: 13px; color: #B45309; margin: 2px 0 0;">
                            Verifique quem entrou com Google e destine para <strong>Aluno</strong>, <strong>Funcionário</strong>, <strong>Avisos</strong> ou <strong>Detalhes</strong>.
                        </p>
                    </div>
                </div>
                <button type="button" class="btn btn-secondary btn-sm" onclick="abrirModalCentralAprovacoes()">
                    <i class="fas fa-expand"></i> Abrir Central Completa
                </button>
            </div>

            <div style="display: flex; flex-direction: column; gap: 10px;">
                ${pendentes.map(u => `
                    <div style="background: #FFFFFF; border: 1px solid #FDE68A; border-radius: 12px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                        <div style="display: flex; align-items: center; gap: 12px;">
                            <img src="${u.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80'}" alt="${u.nome}" style="width: 42px; height: 42px; border-radius: 50%; object-fit: cover; border: 2px solid #F59E0B;">
                            <div>
                                <strong style="font-size: 14.5px; color: #0F172A; display: block;">${u.nome}</strong>
                                <span style="font-size: 12.5px; color: #64748B;"><i class="fab fa-google" style="color: #4285F4;"></i> ${u.email}</span>
                            </div>
                        </div>

                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <select id="roleSelectApprove_${u.id}" class="filter-select" style="padding: 7px 10px; font-size: 12.5px;">
                                ${renderizarOpcoesSelectDestino(u.tipoPerfil || "aluno")}
                            </select>
                            <button type="button" class="btn btn-primary btn-sm" onclick="aprovarPermissaoUsuario('${u.id}', 'roleSelectApprove_${u.id}')" style="background: #10B981; border-color: #059669; padding: 8px 14px;">
                                <i class="fas fa-check"></i> Aprovar & Destinar
                            </button>
                            <button type="button" class="btn btn-secondary btn-sm" onclick="recusarPermissaoUsuario('${u.id}')" style="color: #DC2626; border-color: #FECACA; background: #FEF2F2; padding: 8px 12px;">
                                <i class="fas fa-ban"></i> Recusar
                            </button>
                        </div>
                    </div>
                `).join("")}
            </div>
        </div>
    `;
}

function abrirModalCentralAprovacoes() {
    renderizarCentralAprovacoesModal();
    abrirModalAdmin("adminCentralAprovacoesModal");
}

function renderizarCentralAprovacoesModal() {
    atualizarBadgesPendentesAdmin();
    const contPendentes = document.getElementById("centralListaPendentes");
    const contAprovados = document.getElementById("centralListaAprovados");
    const termo = (document.getElementById("centralBuscaUsuarios")?.value || "").toLowerCase().trim();

    if (contPendentes) {
        const pendentes = alunos.filter(a => a.situacaoAcesso === "pendente");
        if (pendentes.length === 0) {
            contPendentes.innerHTML = `
                <div style="background: #F8FAFC; border: 1px dashed #CBD5E1; border-radius: 12px; padding: 18px; text-align: center; color: #64748B; font-size: 13px;">
                    <i class="fas fa-circle-check" style="color: #10B981; margin-right: 6px;"></i> Nenhuma solicitação de login pendente no momento.
                </div>
            `;
        } else {
            contPendentes.innerHTML = pendentes.map(u => `
                <div style="background: #FFFBEB; border: 1px solid #FDE68A; border-radius: 12px; padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 12px;">
                    <div style="display: flex; align-items: center; gap: 12px;">
                        <img src="${u.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80'}" alt="${u.nome}" style="width: 40px; height: 40px; border-radius: 50%; object-fit: cover; border: 2px solid #F59E0B;">
                        <div>
                            <strong style="font-size: 14px; color: #0F172A; display: block;">${u.nome}</strong>
                            <span style="font-size: 12px; color: #64748B;"><i class="fab fa-google" style="color: #4285F4;"></i> ${u.email}</span>
                        </div>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                        <select id="modalSelectApprove_${u.id}" class="filter-select" style="padding: 6px 10px; font-size: 12.5px; background: #fff;">
                            ${renderizarOpcoesSelectDestino(u.tipoPerfil || "aluno")}
                        </select>
                        <button type="button" class="btn btn-primary btn-sm" onclick="aprovarPermissaoUsuario('${u.id}', 'modalSelectApprove_${u.id}')" style="background: #10B981; border-color: #059669; padding: 7px 14px;">
                            <i class="fas fa-check"></i> Aprovar & Destinar
                        </button>
                        <button type="button" class="btn btn-secondary btn-sm" onclick="recusarPermissaoUsuario('${u.id}')" style="color: #DC2626; border-color: #FECACA; background: #FEF2F2; padding: 7px 12px;">
                            <i class="fas fa-ban"></i> Recusar
                        </button>
                    </div>
                </div>
            `).join("");
        }
    }

    if (contAprovados) {
        const outros = alunos.filter(a => {
            if (a.situacaoAcesso === "pendente") return false;
            if (!termo) return true;
            return (a.nome || "").toLowerCase().includes(termo) || (a.email || "").toLowerCase().includes(termo);
        });

        if (outros.length === 0) {
            contAprovados.innerHTML = `<div style="padding: 16px; text-align: center; color: #64748B; font-size: 13px;">Nenhum usuário encontrado.</div>`;
        } else {
            contAprovados.innerHTML = outros.map(u => {
                const norm = normalizarCamposUsuario({ ...u });
                const isBloq = norm.situacaoAcesso === "bloqueado";
                return `
                    <div style="background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 10px; padding: 10px 14px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
                        <div style="display: flex; align-items: center; gap: 10px;">
                            <img src="${norm.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80'}" alt="${norm.nome}" style="width: 36px; height: 36px; border-radius: 50%; object-fit: cover;">
                            <div>
                                <div style="display: flex; align-items: center; gap: 6px;">
                                    <strong style="font-size: 13.5px; color: #0F172A;">${norm.nome}</strong>
                                    ${isBloq ? '<span style="font-size:10px;padding:1px 7px;border-radius:999px;background:#FEE2E2;color:#DC2626;font-weight:700;">Bloqueado</span>' : '<span style="font-size:10px;padding:1px 7px;border-radius:999px;background:#ECFDF5;color:#059669;font-weight:700;">Ativo</span>'}
                                </div>
                                <span style="font-size: 11.5px; color: #64748B;">${norm.email}</span>
                            </div>
                        </div>
                        <div style="display: flex; align-items: center; gap: 8px; flex-wrap: wrap;">
                            <select onchange="alterarDestinoUsuarioDireto('${norm.id}', this.value)" class="filter-select" style="padding: 5px 10px; font-size: 12px;">
                                ${renderizarOpcoesSelectDestino(norm.tipoPerfil || "aluno")}
                            </select>
                            <button type="button" class="btn btn-secondary btn-sm" onclick="alternarBloqueioAluno('${norm.id}'); renderizarCentralAprovacoesModal();" style="padding: 5px 10px; font-size: 11.5px; color: ${isBloq ? '#059669' : '#DC2626'};">
                                <i class="fas ${isBloq ? 'fa-lock-open' : 'fa-ban'}"></i> ${isBloq ? 'Liberar' : 'Bloquear'}
                            </button>
                        </div>
                    </div>
                `;
            }).join("");
        }
    }
}

function alterarDestinoUsuarioDireto(id, novoDestino) {
    const idx = alunos.findIndex(a => String(a.id) === String(id) || a.email === id);
    if (idx === -1) return;

    const meta = obterMetaDestino(novoDestino);
    alunos[idx].tipoPerfil = novoDestino;
    alunos[idx].cargo = meta.cargoPadrao;
    alunos[idx].situacaoAcesso = "ativo";

    salvarAlunosNoStorage(alunos);
    renderizarTabelaAlunos();
    renderizarCentralAprovacoesModal();
    mostrarToast(`🎯 Destino de "${alunos[idx].nome}" atualizado para: ${meta.rotulo}!`, "sucesso");
}

function tratarPreAutorizacaoGoogle(event) {
    event.preventDefault();
    const nome = (document.getElementById("preAuthNome")?.value || "").trim();
    const email = (document.getElementById("preAuthEmail")?.value || "").trim().toLowerCase();
    const destino = document.getElementById("preAuthDestino")?.value || "aluno";

    if (!nome || !email) return;

    const meta = obterMetaDestino(destino);
    const idxExistente = alunos.findIndex(a => (a.email || "").toLowerCase() === email);

    if (idxExistente !== -1) {
        alunos[idxExistente].nome = nome;
        alunos[idxExistente].tipoPerfil = destino;
        alunos[idxExistente].cargo = meta.cargoPadrao;
        alunos[idxExistente].situacaoAcesso = "ativo";
    } else {
        alunos.unshift({
            id: "usr_" + Date.now(),
            nome,
            email,
            cgm: "CGM-" + Math.floor(10000 + Math.random() * 90000),
            escolaId: escolas[0] ? escolas[0].id : 1,
            escolaNome: escolas[0] ? escolas[0].nome : "Colégio Estadual Helena Kolody",
            turma: "3º Ano C - Matutino",
            turno: "Manhã",
            tipoPerfil: destino,
            cargo: meta.cargoPadrao,
            statusAcademico: "aprovado",
            statusAcademicoNome: "Passou de ano (Aprovado)",
            situacaoAcesso: "ativo",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
            observacoes: `Pré-autorizado pelo ADM com destino: ${meta.rotulo}`,
            dataCadastro: new Date().toISOString().slice(0, 10)
        });
    }

    salvarAlunosNoStorage(alunos);
    renderizarTabelaAlunos();
    renderizarCentralAprovacoesModal();
    document.getElementById("formPreAutorizarGoogle")?.reset();
    mostrarToast(`✅ Conta Google "${email}" autorizada e destinada para: ${meta.rotulo}!`, "sucesso");
}

function aprovarPermissaoUsuario(id, selectId = null) {
    const idx = alunos.findIndex(a => String(a.id) === String(id) || a.email === id);
    if (idx === -1) return;

    const selectEl = document.getElementById(selectId || `roleSelectApprove_${id}`) || document.getElementById(`modalSelectApprove_${id}`);
    const novoPerfil = selectEl ? selectEl.value : (alunos[idx].tipoPerfil || "aluno");
    const meta = obterMetaDestino(novoPerfil);

    alunos[idx].situacaoAcesso = "ativo";
    alunos[idx].tipoPerfil = novoPerfil;
    alunos[idx].cargo = meta.cargoPadrao;

    salvarAlunosNoStorage(alunos);
    renderizarTabelaAlunos();
    renderizarCentralAprovacoesModal();
    mostrarToast(`✅ Entrada aprovada! "${alunos[idx].nome}" foi destinado(a) para: ${meta.rotulo}.`, "sucesso");
}

function recusarPermissaoUsuario(id) {
    const idx = alunos.findIndex(a => String(a.id) === String(id) || a.email === id);
    if (idx === -1) return;

    alunos[idx].situacaoAcesso = "bloqueado";
    salvarAlunosNoStorage(alunos);
    renderizarTabelaAlunos();
    renderizarCentralAprovacoesModal();
    mostrarToast(`⛔ Solicitação de acesso de "${alunos[idx].nome}" foi recusada/bloqueada.`, "info");
}

function renderizarTabelaAlunos() {
    renderizarSolicitacoesPermissaoPendentes();
    const tbody = document.getElementById("studentsTableBody");
    const noResults = document.getElementById("studentsNoResults");
    const countShown = document.getElementById("studentsCountShown");
    const countTotal = document.getElementById("studentsCountTotal");
    if (!tbody) return;

    const busca = (document.getElementById("studentSearchInput")?.value || "").toLowerCase().trim();
    const filtroEscola = document.getElementById("studentSchoolFilter")?.value || "todas";
    const filtroPerfil = document.getElementById("studentPerfilFilter")?.value || "todos";
    const filtroStatus = document.getElementById("studentStatusFilter")?.value || "todos";
    const filtroAcesso = document.getElementById("studentAccessFilter")?.value || "todos";

    const alunosFiltrados = alunos.filter(aluno => {
        const norm = normalizarCamposUsuario({...aluno});
        const matchesBusca = busca === "" ||
            norm.nome.toLowerCase().includes(busca) ||
            norm.email.toLowerCase().includes(busca) ||
            (norm.cgm && norm.cgm.toLowerCase().includes(busca)) ||
            (norm.turma && norm.turma.toLowerCase().includes(busca)) ||
            (norm.cargo && norm.cargo.toLowerCase().includes(busca)) ||
            norm.escolaNome.toLowerCase().includes(busca);

        const matchesEscola = filtroEscola === "todas" || String(norm.escolaId) === String(filtroEscola);
        const matchesPerfil = filtroPerfil === "todos" ||
            norm.tipoPerfil === filtroPerfil ||
            (filtroPerfil === "admin_detalhes" && norm.tipoPerfil === "admin");
        const matchesStatus = filtroStatus === "todos" || norm.statusAcademico === filtroStatus;
        const matchesAcesso = filtroAcesso === "todos" || norm.situacaoAcesso === filtroAcesso;

        return matchesBusca && matchesEscola && matchesPerfil && matchesStatus && matchesAcesso;
    });

    if (countShown) countShown.textContent = alunosFiltrados.length;
    if (countTotal) countTotal.textContent = alunos.length;

    if (alunosFiltrados.length === 0) {
        tbody.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    const statusBadges = {
        aprovado: '<span class="status-badge status-aprovado"><i class="fas fa-circle-check"></i> Passou de ano</span>',
        retido: '<span class="status-badge status-retido"><i class="fas fa-circle-xmark"></i> Retido</span>',
        andamento: '<span class="status-badge status-andamento"><i class="fas fa-spinner fa-pulse"></i> Em andamento</span>',
        formado: '<span class="status-badge status-formado"><i class="fas fa-graduation-cap"></i> Formado</span>',
        transferido: '<span class="status-badge status-transferido"><i class="fas fa-arrow-right-arrow-left"></i> Transferido</span>'
    };

    tbody.innerHTML = alunosFiltrados.map(aluno => {
        const norm = normalizarCamposUsuario({...aluno});
        const isBloqueado = norm.situacaoAcesso === "bloqueado";
        const isPendente = norm.situacaoAcesso === "pendente";
        const badgeStatus = statusBadges[norm.statusAcademico] || statusBadges.andamento;
        let badgeAcesso = '<span class="access-badge access-ativo"><i class="fas fa-check-circle"></i> Ativo</span>';
        if (isBloqueado) {
            badgeAcesso = '<span class="access-badge access-bloqueado"><i class="fas fa-ban"></i> Bloqueado</span>';
        } else if (isPendente) {
            badgeAcesso = '<span class="access-badge" style="background:#FEF3C7;color:#B45309;border:1px solid #FDE68A;"><i class="fas fa-clock"></i> Pendente ADM</span>';
        }

        const badgePerfil = obterMetaDestino(norm.tipoPerfil).badgeHtml;

        return `
            <tr>
                <td>
                    <div class="student-identity">
                        <img src="${norm.avatar || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80'}" alt="${norm.nome}" class="student-avatar">
                        <div class="student-identity-info">
                            <strong>${norm.nome}</strong>
                            <span class="student-cgm">${norm.cgm || 'CGM Não informado'}</span>
                        </div>
                    </div>
                </td>
                <td>
                    <span class="student-email-link" title="E-mail Institucional">
                        <i class="fas fa-id-card"></i> ${norm.email}
                    </span>
                </td>
                <td>
                    <span class="student-class-badge" title="Cargo / Função">
                        <i class="fas fa-briefcase"></i> ${norm.cargo || 'Sem cargo definido'}
                    </span>
                </td>
                <td>${badgePerfil}</td>
                <td>
                    <div class="student-school-cell">
                        <span class="student-school-name">${norm.escolaNome || '—'}</span>
                        <span class="student-school-type">${norm.turno || 'Turno Regular'}</span>
                    </div>
                </td>
                <td>
                    <span class="student-class-badge">
                        <i class="fas fa-users-viewfinder"></i> ${norm.turma || 'Turma A'}
                    </span>
                </td>
                <td>${badgeStatus}</td>
                <td>${badgeAcesso}</td>
                <td style="text-align: right;">
                    <div class="table-actions">
                        ${isPendente ? `
                            <button type="button" class="btn-table-action btn-unblock-student" onclick="aprovarPermissaoUsuario('${norm.id}')" title="Permitir Entrada (Aprovar Solicitação)" style="background:#ECFDF5;color:#059669;border:1px solid #6EE7B7;">
                                <i class="fas fa-check"></i>
                            </button>
                        ` : ""}
                        <button type="button" class="btn-table-action btn-edit-student" onclick="abrirModalEditarAluno('${norm.id}')" title="Editar dados, cargo e perfil">
                            <i class="fas fa-user-pen"></i>
                        </button>
                        <button type="button" class="btn-table-action ${isBloqueado ? 'btn-unblock-student' : 'btn-block-student'}" onclick="alternarBloqueioAluno('${norm.id}')" title="${isBloqueado ? 'Desbloquear usuário' : 'Bloquear / Desativar usuário'}">
                            <i class="fas ${isBloqueado ? 'fa-lock-open' : 'fa-user-lock'}"></i>
                        </button>
                        <button type="button" class="btn-table-action btn-delete-student" onclick="excluirAluno('${norm.id}')" title="Excluir usuário">
                            <i class="fas fa-trash-can"></i>
                        </button>
                    </div>
                </td>
            </tr>
        `;
    }).join("");
}

function abrirModalAdminNovoAluno() {
    document.getElementById("formAluno").reset();
    document.getElementById("alunoId").value = "";
    document.getElementById("alunoModalTitle").textContent = "Cadastrar Novo Aluno na Rede";
    document.getElementById("alunoEmailFeedback").textContent = "";
    if (document.getElementById("alunoTipoPerfil")) document.getElementById("alunoTipoPerfil").value = "aluno";
    if (document.getElementById("alunoCargo")) document.getElementById("alunoCargo").value = "Estudante — Turma Regular";
    if (document.getElementById("alunoSenhaAcesso")) document.getElementById("alunoSenhaAcesso").value = "";
    if (document.getElementById("alunoTipoPerfilFeedback")) document.getElementById("alunoTipoPerfilFeedback").textContent = "";

    const selectEscola = document.getElementById("alunoEscola");
    if (selectEscola && escolas.length > 0) {
        selectEscola.value = escolas[0].id;
        atualizarSelectTurmasAluno(escolas[0].id);
    }

    abrirModalAdmin("adminAlunoModal");
}

function atualizarCampoCargoPorPerfil(tipo, atualizarCargoInput = true) {
    const fb = document.getElementById("alunoTipoPerfilFeedback");
    const cargoEl = document.getElementById("alunoCargo");
    const meta = obterMetaDestino(tipo);
    const avisosMapa = {
        aluno: "🎓 Destinado ao Espaço do Estudante (Turma, Horários, Merenda e Relato).",
        funcionario: "👔 Destinado a Funcionário da Equipe Escolar.",
        admin_cardapio: "🍽️ Destinado ao Responsável pela Cozinha (Alterar dados do Cardápio, Lanche do Dia e Acesso à Votação da Merenda).",
        cozinha: "🍽️ Destinado ao Responsável pela Cozinha (Alterar dados do Cardápio, Lanche do Dia e Acesso à Votação da Merenda).",
        admin_avisos: "📢 Destinado à Publicação e Gerenciamento de Avisos & Comunicados.",
        admin_detalhes: "🔍 Destinado à Gestão e Detalhes Completos de Ocorrências & Manutenção.",
        admin: "🔍 Destinado à Gestão e Detalhes Completos de Ocorrências & Manutenção.",
        admin_chef: "👑 Acesso Total de Administrador Chefe."
    };
    if (fb) fb.textContent = avisosMapa[tipo] || "";
    if (cargoEl && atualizarCargoInput) cargoEl.value = meta.cargoPadrao;
}

function abrirModalEditarAluno(idAluno) {
    const aluno = alunos.find(a => String(a.id) === String(idAluno));
    if (!aluno) return;

    const norm = normalizarCamposUsuario({...aluno});
    let perfilSelectVal = norm.tipoPerfil || "aluno";
    if (perfilSelectVal === "admin") perfilSelectVal = "admin_detalhes";
    if (perfilSelectVal === "cozinha") perfilSelectVal = "admin_cardapio";
    document.getElementById("alunoId").value = norm.id;
    document.getElementById("alunoNome").value = norm.nome;
    document.getElementById("alunoEmail").value = norm.email;
    document.getElementById("alunoCgm").value = norm.cgm || "";
    document.getElementById("alunoStatusAcademico").value = norm.statusAcademico || "andamento";
    document.getElementById("alunoSituacaoAcesso").value = norm.situacaoAcesso || "ativo";
    document.getElementById("alunoObservacoes").value = norm.observacoes || "";
    if (document.getElementById("alunoTipoPerfil")) document.getElementById("alunoTipoPerfil").value = perfilSelectVal;
    if (document.getElementById("alunoCargo")) document.getElementById("alunoCargo").value = norm.cargo || "";
    if (document.getElementById("alunoSenhaAcesso")) document.getElementById("alunoSenhaAcesso").value = norm.senha || "";
    document.getElementById("alunoModalTitle").textContent = `Editar Usuário: ${norm.nome}`;
    if (document.getElementById("alunoTipoPerfilFeedback")) atualizarCampoCargoPorPerfil(perfilSelectVal, !norm.cargo);

    const selectEscola = document.getElementById("alunoEscola");
    if (selectEscola) {
        selectEscola.value = norm.escolaId;
        atualizarSelectTurmasAluno(norm.escolaId, norm.turma);
    }

    document.getElementById("alunoEmailFeedback").textContent = "";
    abrirModalAdmin("adminAlunoModal");
}

function tratarSubmitAluno(event) {
    event.preventDefault();
    const id = document.getElementById("alunoId").value.trim();
    const nome = document.getElementById("alunoNome").value.trim();
    const email = document.getElementById("alunoEmail").value.trim().toLowerCase();
    const cgm = document.getElementById("alunoCgm").value.trim() || `CGM-${Math.floor(10000 + Math.random() * 90000)}`;
    const escolaId = parseInt(document.getElementById("alunoEscola").value);
    const turma = document.getElementById("alunoTurma").value.trim();
    const statusAcademico = document.getElementById("alunoStatusAcademico").value;
    const situacaoAcesso = document.getElementById("alunoSituacaoAcesso").value;
    const observacoes = document.getElementById("alunoObservacoes").value.trim();
    const tipoPerfil = (document.getElementById("alunoTipoPerfil")?.value || "aluno").trim();
    const cargo = (document.getElementById("alunoCargo")?.value || "").trim() || obterCargoPadrao(tipoPerfil, turma);
    const senhaInput = (document.getElementById("alunoSenhaAcesso")?.value || "").trim();

    if (tipoPerfil === "admin_chef" && usuarioAtual && usuarioAtual.tipoPerfil !== "admin_chef") {
        const isChefe = EMAILS_ADMIN_GOOGLE.includes((usuarioAtual.email || "").toLowerCase()) ||
            USUARIOS_FIXOS.admins.some(a => a.perfil === USUARIOS_SISTEMA.admin_chef && (a.email === usuarioAtual?.email || a.login === usuarioAtual?.usuario));
        if (!isChefe) {
            mostrarToast("⚠ Acesso negado: apenas o Administrador Chefe pode promover usuários a ADM Chefe.", "erro");
            return;
        }
    }

    if (!validarDominioInstitucional(email)) {
        mostrarToast("Erro de validação: Informe um endereço de e-mail válido!", "erro");
        return;
    }

    if (!escolaId && tipoPerfil === "aluno") {
        mostrarToast("Erro: É obrigatório vincular o aluno a uma escola específica!", "erro");
        return;
    }

    const escolaObj = escolas.find(e => e.id === escolaId);
    const escolaNome = escolaObj ? escolaObj.nome : (tipoPerfil === "aluno" ? "Escola Estadual" : "—");

    const statusNomes = {
        aprovado: "Passou de ano (Aprovado)",
        retido: "Retido (Reprovado)",
        andamento: "Em andamento",
        formado: "Formado",
        transferido: "Transferido"
    };

    const metaDestino = obterMetaDestino(tipoPerfil);
    const tipoNomeFinal = metaDestino ? metaDestino.rotulo : "Aluno(a)";

    if (id) {
        const index = alunos.findIndex(a => String(a.id) === String(id));
        if (index !== -1) {
            const senhaFinal = senhaInput.length >= 3 ? senhaInput : (alunos[index].senha || "");
            alunos[index] = normalizarCamposUsuario({
                ...alunos[index],
                nome,
                email,
                cgm,
                escolaId: escolaId || alunos[index].escolaId,
                escolaNome: escolaNome || alunos[index].escolaNome,
                turma: turma || alunos[index].turma,
                statusAcademico,
                statusAcademicoNome: statusNomes[statusAcademico] || "Em andamento",
                situacaoAcesso,
                observacoes,
                tipoPerfil,
                cargo,
                tipoNome: tipoNomeFinal,
                senha: senhaFinal
            });
            mostrarToast(`✅ Dados de "${nome}" atualizados! Destino: ${tipoNomeFinal} | Cargo: ${cargo}`, "sucesso");
        }
    } else {
        const senhaFinal = senhaInput.length >= 3 ? senhaInput : "";
        const novoAluno = normalizarCamposUsuario({
            id: `aluno_${Date.now()}`,
            nome,
            email,
            cgm,
            escolaId: escolaId || (escolas[0]?.id || 1),
            escolaNome: escolaNome || (escolas[0]?.nome || "Escola Estadual"),
            turma: turma || "1º Ano A",
            turno: "Manhã",
            statusAcademico,
            statusAcademicoNome: statusNomes[statusAcademico] || "Em andamento",
            situacaoAcesso,
            avatar: `https://images.unsplash.com/photo-${1534528741775 + (alunos.length * 100)}?w=150&q=80`,
            observacoes,
            dataCadastro: new Date().toISOString().split("T")[0],
            tipoPerfil,
            cargo,
            tipoNome: tipoNomeFinal,
            senha: senhaFinal
        });
        alunos.unshift(novoAluno);
        mostrarToast(`✅ Usuário "${nome}" cadastrado! Destino: ${tipoNomeFinal} | Cargo: ${cargo}`, "sucesso");
    }

    salvarAlunosNoStorage();
    renderizarTabelaAlunos();
    atualizarMetricasDashboard();
    fecharModalAdmin("adminAlunoModal");
}

function obterCargoPadrao(tipoPerfil, turma) {
    if (tipoPerfil === "admin_chef") return "Gestão Geral — Todas as Funções";
    if (tipoPerfil === "admin" || tipoPerfil === "admin_detalhes") return "Gestão & Detalhes de Ocorrências";
    if (tipoPerfil === "admin_cardapio" || tipoPerfil === "cozinha") return "Responsável pela Cozinha — Cardápio & Votação da Merenda";
    if (tipoPerfil === "funcionario") return "Funcionário(a) — Equipe Escolar";
    if (tipoPerfil === "admin_avisos") return "Comunicação — Publicação de Avisos Oficiais";
    return `Estudante — ${turma || "Turma Regular"}`;
}

function alternarBloqueioAluno(idAluno) {
    const aluno = alunos.find(a => String(a.id) === String(idAluno));
    if (!aluno) return;

    const novoStatus = aluno.situacaoAcesso === "bloqueado" ? "ativo" : "bloqueado";
    aluno.situacaoAcesso = novoStatus;
    salvarAlunosNoStorage();
    renderizarTabelaAlunos();

    if (novoStatus === "bloqueado") {
        mostrarToast(`⛔ O aluno "${aluno.nome}" foi bloqueado/desativado. Acesso impedido.`, "erro");
    } else {
        mostrarToast(`✅ O acesso de "${aluno.nome}" foi restabelecido com sucesso.`, "sucesso");
    }
}

function excluirAluno(idAluno) {
    const aluno = alunos.find(a => String(a.id) === String(idAluno));
    if (!aluno) return;

    if (confirm(`Deseja realmente remover o registro acadêmico de "${aluno.nome}"?`)) {
        alunos = alunos.filter(a => String(a.id) !== String(idAluno));
        salvarAlunosNoStorage();
        renderizarTabelaAlunos();
        atualizarMetricasDashboard();
        mostrarToast(`🗑️ Aluno "${aluno.nome}" removido do sistema.`, "info");
    }
}

function tratarSubmitCadastroAluno(event) {
    event.preventDefault();
    const nome = document.getElementById("cadNome").value.trim();
    const email = document.getElementById("cadEmail").value.trim().toLowerCase();
    const escolaId = parseInt(document.getElementById("cadEscola").value);
    const turma = document.getElementById("cadTurma").value.trim();
    const cgm = document.getElementById("cadCgm").value.trim() || `CGM-${Math.floor(10000 + Math.random() * 90000)}`;

    if (!validarDominioInstitucional(email)) {
        mostrarToast("Erro: O e-mail DEVE conter o domínio institucional @escola!", "erro");
        return;
    }

    if (!escolaId) {
        mostrarToast("Erro: Selecione obrigatoriamente a sua instituição de ensino!", "erro");
        return;
    }

    const escolaObj = escolas.find(e => e.id === escolaId);
    const escolaNome = escolaObj ? escolaObj.nome : "Escola Estadual";

    const novoAluno = normalizarCamposUsuario({
        id: `aluno_${Date.now()}`,
        nome,
        email,
        cgm,
        escolaId,
        escolaNome,
        turma: turma || "1º Ano A",
        turno: "Manhã",
        statusAcademico: "andamento",
        statusAcademicoNome: "Em andamento",
        situacaoAcesso: "ativo",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
        observacoes: "Auto-cadastro institucional realizado via portal RAE.",
        dataCadastro: new Date().toISOString().split("T")[0],
        tipoPerfil: "aluno",
        cargo: `Estudante — ${turma || "1º Ano A"}`,
        tipoNome: "Aluno(a)",
        senha: ""
    });

    alunos.unshift(novoAluno);
    salvarAlunosNoStorage();
    renderizarTabelaAlunos();
    atualizarMetricasDashboard();

    usuarioAtual = {
        id: novoAluno.id,
        usuario: email.split("@")[0],
        nome: novoAluno.nome,
        email: novoAluno.email,
        tipo: "aluno",
        tipoNome: "Aluno",
        cgm: novoAluno.cgm,
        turma: novoAluno.turma,
        escola: novoAluno.escolaNome,
        situacaoAcesso: "ativo",
        avatar: novoAluno.avatar
    };

    localStorage.setItem(CHAVE_USUARIO_STORAGE, JSON.stringify(usuarioAtual));
    atualizarInterfaceSessao();
    fecharModalLogin();
    alternarVisaoPerfil("aluno");

    mostrarToast(`🎉 Cadastro concluído! Bem-vindo(a) ao seu Espaço Escolar, ${novoAluno.nome}.`, "sucesso");
}

// ==========================================================================
// INTEGRAÇÃO E IMPORTAÇÃO DE DADOS (SERE / RCO)
// ==========================================================================

function abrirModalSereImport() {
    const overlay = document.getElementById("sereImportModal");
    if (!overlay) return;

    popularSelectsEscolasFormularios();
    dadosSereTemp = [];
    document.getElementById("serePreviewArea").style.display = "none";
    document.getElementById("sereTextData").value = "";

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fecharModalSereImport() {
    const overlay = document.getElementById("sereImportModal");
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
    dadosSereTemp = [];
}

function alternarAbaSere(aba) {
    const tabFile = document.getElementById("sereTabFile");
    const tabText = document.getElementById("sereTabText");
    const panelFile = document.getElementById("serePanelFile");
    const panelText = document.getElementById("serePanelText");

    if (aba === "file") {
        tabFile.classList.add("active");
        tabText.classList.remove("active");
        panelFile.style.display = "block";
        panelText.style.display = "none";
    } else {
        tabText.classList.add("active");
        tabFile.classList.remove("active");
        panelText.style.display = "block";
        panelFile.style.display = "none";
    }
}

function carregarExemploProntoSERE() {
    alternarAbaSere("text");
    const textarea = document.getElementById("sereTextData");
    const selectEscola = document.getElementById("sereEscolaSelect");

    if (selectEscola && selectEscola.options.length > 1) {
        selectEscola.selectedIndex = 1;
    }

    textarea.value = `3º Ano C - Matutino, Felipe Santana Silva, felipe.santana@escola.pr.gov.br, Passou de ano
3º Ano C - Matutino, Larissa Rocha Mendes, larissa.rocha@escola.pr.gov.br, Passou de ano
3º Ano C - Matutino, Thiago Pinheiro, thiago.pinheiro@escola.pr.gov.br, Em andamento
1º DS - Vespertino, Matheus Barbosa, matheus.barbosa@escola.gov.br, Passou de ano`;

    mostrarToast("Exemplo do SERE/RCO carregado! Clique em 'Pré-visualizar e Validar'.", "info");
}

function tratarUploadArquivoSere(event) {
    const file = event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (e) {
        const conteudo = e.target.result;
        alternarAbaSere("text");
        document.getElementById("sereTextData").value = conteudo;
        processarPrevisualizacaoSere();
    };
    reader.readAsText(file, "UTF-8");
}

function processarPrevisualizacaoSere() {
    const escolaId = document.getElementById("sereEscolaSelect").value;
    if (!escolaId) {
        mostrarToast("⚠️ Selecione a Escola de Destino antes de pré-visualizar os dados!", "erro");
        return;
    }

    const texto = document.getElementById("sereTextData").value.trim();
    if (!texto) {
        mostrarToast("⚠️ Insira ou envie os dados da planilha para validação!", "erro");
        return;
    }

    const linhas = texto.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    dadosSereTemp = [];

    linhas.forEach((linha, idx) => {
        if (linha.toLowerCase().startsWith("turma") || linha.toLowerCase().startsWith("nome")) return;

        let colunas = linha.split(/[,;\t]/).map(c => c.trim().replace(/^["']|["']$/g, ""));
        if (colunas.length < 3) return;

        const turma = colunas[0] || "1º Ano A";
        const nome = colunas[1] || `Aluno SERE ${idx + 1}`;
        const email = (colunas[2] || "").toLowerCase();
        const statusRaw = (colunas[3] || "Em andamento").toLowerCase();

        let statusKey = "andamento";
        if (statusRaw.includes("passou") || statusRaw.includes("aprov")) statusKey = "aprovado";
        else if (statusRaw.includes("retid") || statusRaw.includes("reprov")) statusKey = "retido";
        else if (statusRaw.includes("formad") || statusRaw.includes("conclu")) statusKey = "formado";
        else if (statusRaw.includes("transf")) statusKey = "transferido";

        const emailValido = validarDominioInstitucional(email);

        dadosSereTemp.push({
            turma,
            nome,
            email,
            statusAcademico: statusKey,
            statusRaw: colunas[3] || "Em andamento",
            valido: emailValido
        });
    });

    if (dadosSereTemp.length === 0) {
        mostrarToast("Nenhum registro válido encontrado. Verifique o formato.", "erro");
        return;
    }

    const previewArea = document.getElementById("serePreviewArea");
    const previewBody = document.getElementById("serePreviewTableBody");
    const previewSummary = document.getElementById("serePreviewSummary");

    const totalValidos = dadosSereTemp.filter(d => d.valido).length;
    const totalInvalidos = dadosSereTemp.length - totalValidos;

    previewSummary.innerHTML = `<strong>${dadosSereTemp.length}</strong> registros encontrados (<strong>${totalValidos}</strong> válidos com domínio <code>@escola</code>, <strong style="color: var(--danger);">${totalInvalidos}</strong> com alertas).`;

    previewBody.innerHTML = dadosSereTemp.map((item, i) => `
        <tr style="${!item.valido ? 'background: #FFF1F2;' : ''}">
            <td>${i + 1}</td>
            <td><strong>${item.turma}</strong></td>
            <td>${item.nome}</td>
            <td><code>${item.email}</code></td>
            <td><span class="status-badge status-${item.statusAcademico}">${item.statusRaw}</span></td>
            <td>
                ${item.valido
            ? '<span class="valid-badge"><i class="fas fa-check"></i> Válido (@escola)</span>'
            : '<span class="invalid-badge"><i class="fas fa-triangle-exclamation"></i> Fora do domínio</span>'}
            </td>
        </tr>
    `).join("");

    previewArea.style.display = "block";
    previewArea.scrollIntoView({ behavior: "smooth" });
}

function executarImportacaoLoteSere() {
    const escolaId = parseInt(document.getElementById("sereEscolaSelect").value);
    if (!escolaId || dadosSereTemp.length === 0) {
        mostrarToast("Selecione a escola e pré-visualize os dados antes de confirmar.", "erro");
        return;
    }

    const escola = escolas.find(e => e.id === escolaId);
    if (!escola) return;

    let importados = 0;
    const turmasNovas = new Set(escola.turmas || []);

    dadosSereTemp.forEach((item, idx) => {
        let emailFinal = item.email;
        if (!validarDominioInstitucional(emailFinal)) {
            const prefixo = item.nome.toLowerCase().replace(/[^a-z0-9]/g, ".") || `aluno.${idx}`;
            emailFinal = `${prefixo}@escola.pr.gov.br`;
        }

        const novoAluno = {
            id: `sere_${Date.now()}_${idx}`,
            nome: item.nome,
            email: emailFinal,
            cgm: `CGM-SERE-${Math.floor(100000 + Math.random() * 900000)}`,
            escolaId: escola.id,
            escolaNome: escola.nome,
            turma: item.turma,
            turno: item.turma.toLowerCase().includes("noite") ? "Noite" : item.turma.toLowerCase().includes("tarde") ? "Tarde" : "Manhã",
            statusAcademico: item.statusAcademico,
            statusAcademicoNome: item.statusRaw,
            situacaoAcesso: "ativo",
            avatar: `https://images.unsplash.com/photo-${1534528741775 + (importados * 20)}?w=150&q=80`,
            observacoes: "Aluno importado em lote via integração oficial SERE / RCO.",
            dataCadastro: new Date().toISOString().split("T")[0]
        };

        turmasNovas.add(item.turma);
        alunos.unshift(novoAluno);
        importados++;
    });

    escola.turmas = Array.from(turmasNovas);
    salvarEscolasNoStorage();
    salvarAlunosNoStorage();

    renderizarEscolas(escolas);
    popularSelectsEscolasFormularios();
    popularFiltrosEscolasAlunos();
    renderizarTabelaAlunos();
    atualizarMetricasDashboard();

    fecharModalSereImport();
    mostrarToast(`🚀 Sucesso! ${importados} alunos e suas turmas foram importados para ${escola.nome}!`, "sucesso");
}

function baixarPlanilhaModeloSERE() {
    const csvContent = "data:text/csv;charset=utf-8," +
        "Turma,Nome_Aluno,Email_Institucional,Status_Academico\n" +
        "3º Ano C - Matutino,Gabriel Santos Silva,gabriel.santos@escola.pr.gov.br,Passou de ano\n" +
        "3º Ano C - Matutino,Mariana Costa Lima,mariana.costa@escola.pr.gov.br,Passou de ano\n" +
        "1º DS - Vespertino,Pedro Henrique Alves,pedro.henrique@escola.gov.br,Em andamento\n";

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "modelo_importacao_sere_rco.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    mostrarToast("📥 Arquivo 'modelo_importacao_sere_rco.csv' baixado!", "sucesso");
}

// ==========================================================================
// AVISOS
// ==========================================================================

function renderizarAvisos() {
    const grid = document.getElementById("newsGrid");
    if (!grid) return;

    grid.innerHTML = avisos.map(aviso => {
        const podeExcluir = usuarioAtual && (usuarioAtual.tipo === "admin" || usuarioAtual.tipo === "admin_avisos");
        return `
        <article class="news-card" onclick="abrirModalAviso(${aviso.id})">
            <div class="news-image">
                ${podeExcluir ? `<button class="card-admin-delete" onclick="event.stopPropagation(); excluirAviso(${aviso.id})" title="Excluir este aviso"><i class="fas fa-trash-alt"></i></button>` : ""}
                <img src="${aviso.imagem}" alt="${aviso.titulo}" loading="lazy">
                <span class="news-badge ${aviso.badge.tipo}">${aviso.badge.texto}</span>
            </div>
            <div class="news-body">
                <span class="news-date"><i class="far fa-calendar"></i> ${aviso.data}</span>
                <h3>${aviso.titulo}</h3>
                <p>${aviso.resumo}</p>
                <div class="news-link"><span>Ler mais</span> <i class="fas fa-arrow-right"></i></div>
            </div>
        </article>
    `}).join("");
}

function abrirModalAviso(idAviso) {
    const aviso = avisos.find(a => a.id === idAviso);
    if (!aviso) return;

    const overlay = document.getElementById("newsModal");
    const content = document.getElementById("newsModalContent");
    if (!overlay || !content) return;

    content.innerHTML = `
        <div class="modal-hero">
            <img src="${aviso.imagem}" alt="${aviso.titulo}">
            <div class="modal-hero-info">
                <span class="news-badge ${aviso.badge.tipo}"><i class="fas ${aviso.badge.icone}"></i> ${aviso.badge.texto}</span>
                <h2>${aviso.titulo}</h2>
                <div style="font-size: 12px; margin-top: 4px;"><span><i class="far fa-calendar"></i> ${aviso.data}</span></div>
            </div>
        </div>
        <div style="padding: 24px;">
            <p style="font-size: 15px; color: var(--gray-700); margin-bottom: 20px; font-weight: 500;">${aviso.resumo}</p>
            ${aviso.conteudo.map(secao => `
                <div style="margin-bottom: 16px;">
                    <h3 style="font-size: 16px; margin-bottom: 8px;">${secao.subtitulo}</h3>
                    ${secao.paragrafos.map(p => `<p style="margin-bottom: 6px; font-size: 13px; color: var(--gray-600);">${p}</p>`).join("")}
                </div>
            `).join("")}
        </div>
    `;

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fecharModalAviso() {
    const overlay = document.getElementById("newsModal");
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================================================
// AUTENTICAÇÃO E SESSÃO
// ==========================================================================

function alternarAbaAuth(aba) {
    const tabLogin = document.getElementById("tabBtnLogin");
    const tabCad = document.getElementById("tabBtnCadastro");
    const panelLogin = document.getElementById("authPanelLogin");
    const panelCad = document.getElementById("authPanelCadastro");

    if (aba === "login") {
        tabLogin.classList.add("active");
        tabCad.classList.remove("active");
        panelLogin.style.display = "block";
        panelCad.style.display = "none";
    } else {
        tabCad.classList.add("active");
        tabLogin.classList.remove("active");
        panelCad.style.display = "block";
        panelLogin.style.display = "none";
        popularSelectsEscolasFormularios();
    }
}

function carregarSessaoUsuario() {
    localStorage.removeItem(CHAVE_USUARIO_STORAGE);
    usuarioAtual = null;
    atualizarInterfaceSessao();
}

function atualizarInterfaceSessao() {
    const loginOpenBtn = document.getElementById("loginOpenBtn");
    const userSession = document.getElementById("userSession");
    const userSessionAvatar = document.getElementById("userSessionAvatar");
    const userSessionName = document.getElementById("userSessionName");
    const userSessionRole = document.getElementById("userSessionRole");
    const dropdownFullName = document.getElementById("dropdownFullName");
    const dropdownAvatarLarge = document.getElementById("dropdownAvatarLarge");
    const dropdownRoleBadge = document.getElementById("dropdownRoleBadge");
    const adminDropdownActions = document.getElementById("adminDropdownActions");
    const adminAvisosDropdownActions = document.getElementById("adminAvisosDropdownActions");
    const adminCardapioDropdownActions = document.getElementById("adminCardapioDropdownActions");
    const btnLogoutHeader = document.getElementById("btnLogoutHeader");

    const btnRoleAdmin = document.getElementById("roleBtnAdmin");
    const btnRoleAluno = document.getElementById("roleBtnAluno");

    if (usuarioAtual) {
        if (loginOpenBtn) loginOpenBtn.style.display = "none";
        if (userSession) userSession.style.display = "block";
        if (btnLogoutHeader) btnLogoutHeader.style.display = "inline-flex";
        if (userSessionAvatar) userSessionAvatar.src = usuarioAtual.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80";
        if (userSessionName) userSessionName.textContent = usuarioAtual.nome;
        if (userSessionRole) userSessionRole.textContent = usuarioAtual.tipoNome;
        if (dropdownFullName) dropdownFullName.textContent = usuarioAtual.nome;
        if (dropdownAvatarLarge) dropdownAvatarLarge.src = usuarioAtual.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80";

        const isAdmin = usuarioAtual.tipo === "admin";
        const isAdminAvisos = usuarioAtual.tipo === "admin_avisos";
        const isAdminCardapio = usuarioAtual.tipo === "admin_cardapio";
        const isAluno = usuarioAtual.tipo === "aluno";

        if (dropdownRoleBadge) {
            if (isAdmin) {
                dropdownRoleBadge.className = "badge-role role-admin";
                dropdownRoleBadge.innerHTML = `<i class="fas fa-shield-halved"></i> ${usuarioAtual.tipoNome || "Administrador / Gestor"}`;
            } else if (isAdminAvisos) {
                dropdownRoleBadge.className = "badge-role role-admin-avisos";
                dropdownRoleBadge.innerHTML = '<i class="fas fa-bullhorn"></i> Gestor(a) de Avisos';
            } else if (isAdminCardapio) {
                dropdownRoleBadge.className = "badge-role role-admin-cardapio";
                dropdownRoleBadge.innerHTML = `<i class="fas fa-user-tie"></i> ${usuarioAtual.tipoNome || "Funcionário(a) / Cardápio"}`;
            } else {
                dropdownRoleBadge.className = "badge-role role-aluno";
                dropdownRoleBadge.innerHTML = '<i class="fas fa-graduation-cap"></i> Aluno Oficial';
            }
        }

        if (adminDropdownActions) adminDropdownActions.style.display = isAdmin ? "block" : "none";
        if (adminAvisosDropdownActions) adminAvisosDropdownActions.style.display = isAdminAvisos ? "block" : "none";
        if (adminCardapioDropdownActions) adminCardapioDropdownActions.style.display = isAdminCardapio ? "block" : "none";

        const temPermissaoAdm = usuarioTemPermissaoAdmin(usuarioAtual);

        if (btnRoleAdmin) {
            const strong = btnRoleAdmin.querySelector("strong");
            if (strong) {
                if (isAdmin) {
                    const first = (usuarioAtual.nome || "Admin").split(" ")[0];
                    strong.innerHTML = `<i class="fas fa-shield-halved"></i> ${first} (${usuarioAtual.tipoNome || "ADM"})`;
                } else {
                    strong.innerHTML = `<i class="fas fa-shield-halved"></i> Administrador (ADM)`;
                }
            }
            const podeTrocar = isAdmin || temPermissaoAdm;
            btnRoleAdmin.disabled = !podeTrocar;
            btnRoleAdmin.style.opacity = podeTrocar ? "1" : "0.55";
            btnRoleAdmin.style.cursor = podeTrocar ? "pointer" : "not-allowed";
            btnRoleAdmin.classList.toggle("active", isAdmin);
        }
        if (btnRoleAluno) {
            const strong = btnRoleAluno.querySelector("strong");
            if (strong) {
                if (isAluno) {
                    const first = (usuarioAtual.nome || "Aluno").split(" ")[0];
                    strong.innerHTML = `<i class="fas fa-graduation-cap"></i> ${first} (Aluno)`;
                } else {
                    strong.innerHTML = `<i class="fas fa-graduation-cap"></i> Aluno (Espaço do Estudante)`;
                }
            }
            const podeTrocar = isAluno || temPermissaoAdm;
            btnRoleAluno.disabled = !podeTrocar;
            btnRoleAluno.style.opacity = podeTrocar ? "1" : "0.55";
            btnRoleAluno.style.cursor = podeTrocar ? "pointer" : "not-allowed";
            btnRoleAluno.classList.toggle("active", isAluno);
        }
    } else {
        if (loginOpenBtn) loginOpenBtn.style.display = "inline-flex";
        if (userSession) userSession.style.display = "none";
        if (btnLogoutHeader) btnLogoutHeader.style.display = "none";

        if (btnRoleAdmin) {
            const strong = btnRoleAdmin.querySelector("strong");
            if (strong) strong.innerHTML = `<i class="fas fa-shield-halved"></i> Administrador (ADM)`;
            btnRoleAdmin.disabled = false;
            btnRoleAdmin.style.opacity = "1";
            btnRoleAdmin.style.cursor = "pointer";
        }
        if (btnRoleAluno) {
            const strong = btnRoleAluno.querySelector("strong");
            if (strong) strong.innerHTML = `<i class="fas fa-graduation-cap"></i> Aluno (Espaço do Estudante)`;
            btnRoleAluno.disabled = false;
            btnRoleAluno.style.opacity = "1";
            btnRoleAluno.style.cursor = "pointer";
        }
    }
    if (typeof atualizarInterfaceVotacaoMerenda === "function") {
        atualizarInterfaceVotacaoMerenda();
    }
}

function autenticarUsuario(tipo, perfilCustomizado = null) {
    const user = perfilCustomizado || USUARIOS_SISTEMA[tipo];
    if (!user) return;

    if (tipo === "aluno") {
        const alunoCadastrado = alunos.find(a => a.id === user.id || a.email === user.email);
        if (alunoCadastrado && alunoCadastrado.situacaoAcesso === "bloqueado") {
            mostrarToast("⛔ Acesso bloqueado: Sua matrícula escolar foi suspensa pela moderação.", "erro");
            return;
        }
    }

    usuarioAtual = user;
    localStorage.setItem(CHAVE_USUARIO_STORAGE, JSON.stringify(usuarioAtual));
    atualizarInterfaceSessao();
    fecharModalLogin();

    const tipoVisao = user.tipo || tipo;
    alternarVisaoPerfil(tipoVisao);
    mostrarToast(`Bem-vindo(a), ${usuarioAtual.nome}!`, "sucesso");
}

function deslogarUsuario() {
    try {
        if (usuarioAtual && usuarioAtual.loginViaGoogle) {
            if (typeof google !== "undefined" && google.accounts && usuarioAtual.email) {
                try { google.accounts.id.revoke(usuarioAtual.email, () => {}); } catch (e) {}
            }
        }
    } catch (e) {}

    localStorage.removeItem(CHAVE_USUARIO_STORAGE);
    usuarioAtual = null;

    const userSession = document.getElementById("userSession");
    if (userSession) userSession.classList.remove("active");

    atualizarInterfaceSessao();
    aplicarVisaoLanding();

    setTimeout(() => {
        preencherCredenciais("", "");
        abrirModalLogin();
    }, 80);
}

function preencherCredenciais(user, pass) {
    const elEmail = document.getElementById("loginEmail");
    const elSenha = document.getElementById("loginPassword");
    if (elEmail) {
        elEmail.value = user || "";
        validarFeedbackEmailLogin(elEmail);
    }
    if (elSenha) elSenha.value = pass || "";
}

// Login via OAuth 2.0 Oficial do Google (Google Identity Services API ou Supabase OAuth)
async function entrarComPopupGoogleReal() {
    const inputAtual = (document.getElementById("loginEmail")?.value || "").trim().toLowerCase();

    if (window.RAE_GOOGLE_API && typeof window.RAE_GOOGLE_API.abrirPopupOAuthGoogle === "function") {
        window.RAE_GOOGLE_API.abrirPopupOAuthGoogle(inputAtual);
        return;
    }

    if (window.RAE_DB && window.RAE_DB.conectado && typeof window.RAE_DB.loginComGoogleOAuth === "function") {
        await window.RAE_DB.loginComGoogleOAuth();
    }
}

async function entrarComGoogleEscola() {
    return entrarComPopupGoogleReal();
}

let usuarioGooglePendenteAtual = null;

function exibirTelaPermissaoPendente(registro) {
    usuarioGooglePendenteAtual = registro;
    const stepGoogle = document.getElementById("loginStepGoogle");
    const stepPending = document.getElementById("loginStepPending");
    const avatarEl = document.getElementById("pendingUserAvatar");
    const nameEl = document.getElementById("pendingUserName");
    const emailEl = document.getElementById("pendingUserEmail");

    if (stepGoogle) stepGoogle.style.display = "none";
    if (stepPending) stepPending.style.display = "block";

    if (avatarEl) avatarEl.src = registro.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80";
    if (nameEl) nameEl.textContent = registro.nome || "Usuário Google";
    if (emailEl) emailEl.textContent = registro.email || "";

    const overlay = document.getElementById("loginModal");
    if (overlay && !overlay.classList.contains("active")) {
        overlay.classList.add("active");
    }
}

function voltarParaTelaGoogleLogin() {
    usuarioGooglePendenteAtual = null;
    const stepGoogle = document.getElementById("loginStepGoogle");
    const stepPending = document.getElementById("loginStepPending");
    if (stepGoogle) stepGoogle.style.display = "block";
    if (stepPending) stepPending.style.display = "none";
}

function verificarSePermissaoFoiAprovada() {
    if (!usuarioGooglePendenteAtual || !usuarioGooglePendenteAtual.email) return;

    alunos = carregarAlunos();
    const encontrado = alunos.find(a => (a.email || "").toLowerCase() === usuarioGooglePendenteAtual.email.toLowerCase());

    if (!encontrado) {
        mostrarToast("Sua solicitação não foi encontrada. Tente fazer login novamente.", "erro");
        voltarParaTelaGoogleLogin();
        return;
    }

    if (encontrado.situacaoAcesso === "bloqueado") {
        mostrarToast("⛔ Sua solicitação de acesso foi recusada pelo Administrador.", "erro");
        return;
    }

    if (encontrado.situacaoAcesso === "ativo") {
        voltarParaTelaGoogleLogin();
        finalizarLoginGoogleInstitucional(encontrado.email, encontrado.nome, encontrado.avatar);
        return;
    }

    mostrarToast("⏳ Sua solicitação ainda aguarda aprovação do Administrador.", "info");
}

function liberarContaAtualComoAdm() {
    if (!usuarioGooglePendenteAtual || !usuarioGooglePendenteAtual.email) return;

    const idx = alunos.findIndex(a => (a.email || "").toLowerCase() === usuarioGooglePendenteAtual.email.toLowerCase());
    if (idx !== -1) {
        alunos[idx].situacaoAcesso = "ativo";
        alunos[idx].tipoPerfil = "admin_chef";
        alunos[idx].cargo = "Administrador(a) Chefe — Acesso Autorizado";
        salvarAlunos();
        renderizarTabelaAlunos();
    }

    const email = usuarioGooglePendenteAtual.email;
    const nome = usuarioGooglePendenteAtual.nome;
    const avatar = usuarioGooglePendenteAtual.avatar;
    voltarParaTelaGoogleLogin();
    finalizarLoginGoogleInstitucional(email, nome, avatar);
}

function finalizarLoginGoogleInstitucional(emailVal, nomeGoogle = "", fotoGoogle = "") {
    if (!emailVal || !emailVal.includes("@")) {
        mostrarToast("Informe uma conta Google válida.", "erro");
        return;
    }

    // 1. Verifica se é o Administrador Principal (felipe.morais1609@gmail.com) ou um dos gestores/admins fixos
    const adminEncontrado = USUARIOS_FIXOS.admins.find(a => a.email.toLowerCase() === emailVal);
    if (adminEncontrado || EMAILS_ADMIN_GOOGLE.includes(emailVal)) {
        // Caso tenha ficado algum registro antigo como pendente na lista de alunos, atualiza para ativo/admin_chef
        const idxAntigo = alunos.findIndex(a => (a.email || "").toLowerCase() === emailVal);
        if (idxAntigo !== -1) {
            alunos[idxAntigo].situacaoAcesso = "ativo";
            alunos[idxAntigo].tipoPerfil = "admin_chef";
            alunos[idxAntigo].cargo = "Gestão Geral — Administrador Principal";
            if (nomeGoogle) alunos[idxAntigo].nome = nomeGoogle;
            if (fotoGoogle) alunos[idxAntigo].avatar = fotoGoogle;
            salvarAlunos();
        }

        const basePerfil = adminEncontrado ? adminEncontrado.perfil : USUARIOS_SISTEMA.admin_chef;
        const perfilAdmin = {
            ...basePerfil,
            nome: nomeGoogle || basePerfil.nome,
            email: emailVal,
            loginViaGoogle: true
        };
        if (fotoGoogle) perfilAdmin.avatar = fotoGoogle;
        voltarParaTelaGoogleLogin();
        autenticarUsuario(perfilAdmin.tipo || "admin", perfilAdmin);
        return;
    }

    // 2. Verifica se já existe na lista de alunos/usuários cadastrados
    const usuarioEncontrado = alunos.find(a => (a.email || "").toLowerCase() === emailVal);
    if (usuarioEncontrado) {
        if (usuarioEncontrado.situacaoAcesso === "bloqueado") {
            mostrarToast("⛔ Acesso bloqueado ou recusado pela Administração Escolar.", "erro");
            return;
        }

        // Se ainda estiver PENDENTE de permissão do ADM, mostra a tela de espera!
        if (usuarioEncontrado.situacaoAcesso === "pendente") {
            if (fotoGoogle && !usuarioEncontrado.avatar) {
                usuarioEncontrado.avatar = fotoGoogle;
                salvarAlunos();
            }
            exibirTelaPermissaoPendente(usuarioEncontrado);
            mostrarToast("⏳ Seu acesso aguarda permissão do Administrador.", "info");
            return;
        }

        const norm = normalizarCamposUsuario({ ...usuarioEncontrado });
        const meta = obterMetaDestino(norm.tipoPerfil);

        voltarParaTelaGoogleLogin();

        autenticarUsuario(meta.visao, {
            id: norm.id,
            usuario: norm.email.split("@")[0],
            nome: nomeGoogle || norm.nome,
            email: norm.email,
            tipo: meta.visao,
            tipoPerfil: norm.tipoPerfil,
            tipoNome: meta.rotulo,
            cargo: norm.cargo || meta.cargoPadrao,
            cgm: norm.cgm,
            turma: norm.turma,
            escolaId: norm.escolaId || 1,
            escola: norm.escolaNome,
            situacaoAcesso: "ativo",
            statusAcademico: norm.statusAcademico || "aprovado",
            loginViaGoogle: true,
            avatar: fotoGoogle || norm.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80"
        });
        return;
    }

    // 3. Conta Google nova (não cadastrada): cria solicitação com status "pendente" para o ADM aprovar!
    const nomeFormatado = nomeGoogle || emailVal.split("@")[0].split(/[._-]/).map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(" ");
    const novaSolicitacao = {
        id: "sol_" + Date.now(),
        nome: nomeFormatado,
        email: emailVal,
        cgm: "CGM-" + Math.floor(10000 + Math.random() * 90000),
        escolaId: escolas[0] ? escolas[0].id : 1,
        escolaNome: escolas[0] ? escolas[0].nome : "Colégio Estadual Helena Kolody",
        turma: "3º Ano C - Matutino",
        turno: "Manhã",
        tipoPerfil: loginRoleSelecionado === "admin" ? "admin" : "aluno",
        cargo: "Solicitante via Google — Aguardando Permissão do ADM",
        statusAcademico: "andamento",
        statusAcademicoNome: "Em andamento",
        situacaoAcesso: "pendente",
        avatar: fotoGoogle || "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&q=80",
        observacoes: "Solicitou permissão de entrada via login Google em " + new Date().toLocaleString("pt-BR"),
        dataCadastro: new Date().toISOString().slice(0, 10)
    };

    alunos.unshift(novaSolicitacao);
    salvarAlunos();
    renderizarTabelaAlunos();

    exibirTelaPermissaoPendente(novaSolicitacao);
    mostrarToast("🔔 Pedido de permissão enviado ao Administrador!", "info");
}

function tratarSubmitLogin(event) {
    event.preventDefault();
    const emailVal = (document.getElementById("loginEmail")?.value || "").trim().toLowerCase();

    if (!emailVal) {
        mostrarToast("Informe sua conta Google para entrar.", "erro");
        return;
    }

    if (!validarDominioInstitucional(emailVal)) {
        mostrarToast("⛔ Informe um endereço de e-mail Google válido.", "erro");
        const elEmail = document.getElementById("loginEmail");
        if (elEmail) {
            validarFeedbackEmailLogin(elEmail);
            elEmail.focus();
        }
        return;
    }

    // Se o Google OAuth Client ID estiver configurado, abre o popup real do Google (accounts.google.com) com login_hint!
    if (window.RAE_GOOGLE_API && window.RAE_GOOGLE_API.obterClientId() && window.RAE_GOOGLE_API.tokenClient) {
        window.RAE_GOOGLE_API.abrirPopupOAuthGoogle(emailVal);
        return;
    }

    finalizarLoginGoogleInstitucional(emailVal);
}

function abrirModalLogin(roleInicial = "admin") {
    const overlay = document.getElementById("loginModal");
    if (!overlay) return;
    voltarParaTelaGoogleLogin();
    preencherCredenciais("", "");
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
    selecionarRoleLogin(roleInicial || "admin");
    if (window.RAE_GOOGLE_API) {
        window.RAE_GOOGLE_API.inicializarGoogleAPI();
    }
    setTimeout(() => {
        const elEmail = document.getElementById("loginEmail");
        if (elEmail) elEmail.focus();
    }, 100);
}

function abrirModalLoginPerfil(role) {
    abrirModalLogin(role);
}

function fecharModalLogin() {
    const overlay = document.getElementById("loginModal");
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

// ==========================================================================
// SELEÇÃO DE ABA/PERFIL NO MODAL DE LOGIN
// ==========================================================================

const LOGIN_ROLE_HINTS = {
    admin: {
        label: "Conta Google Administrador Chefe",
        hint: "Gmail ADM: <strong>felipe.morais1609@gmail.com</strong> (Acesso Total & Central de Aprovações)"
    },
    avisos: {
        label: "Conta Google Gestor de Avisos",
        hint: "Gmail: <strong>avisos@escola.pr.gov.br</strong><br>Acessa: Publicação de Avisos & Comunicados"
    },
    cardapio: {
        label: "Conta Google Funcionário / Cardápio",
        hint: "Gmail: <strong>cardapio@escola.pr.gov.br</strong><br>Acessa: Cardápio Nutricional & Horários de Lanches"
    },
    aluno: {
        label: "Conta Google do Estudante",
        hint: "Qualquer conta Google (novos acessos aguardam aprovação e destinação do ADM)"
    }
};

let loginRoleSelecionado = "admin";

function selecionarRoleLogin(role) {
    loginRoleSelecionado = role;

    // Atualizar estado visual das abas
    const tabIds = {
        admin: "roleTabAdmin",
        avisos: "roleTabAvisos",
        cardapio: "roleTabCardapio",
        aluno: "roleTabAluno"
    };

    Object.entries(tabIds).forEach(([key, id]) => {
        const btn = document.getElementById(id);
        if (btn) btn.classList.toggle("active", key === role);
    });

    // Exibir dica de credenciais
    const hintEl = document.getElementById("loginRoleHint");
    if (hintEl) {
        const info = LOGIN_ROLE_HINTS[role];
        if (info) {
            hintEl.innerHTML = `<i class="fas fa-circle-info" style="color:var(--primary);margin-right:6px;"></i> ${info.label}: ${info.hint}`;
            hintEl.classList.add("visible");
        } else {
            hintEl.classList.remove("visible");
        }
    }

    const credenciais = {
        admin:    { email: "felipe.morais1609@gmail.com",     senha: "admin" },
        avisos:   { email: "avisos@escola.pr.gov.br",         senha: "avisos123" },
        cardapio: { email: "cardapio@escola.pr.gov.br",       senha: "cardapio123" },
        aluno:    { email: "lucas.silva@escola.pr.gov.br",    senha: "123" }
    };

    const cred = credenciais[role];
    if (cred) preencherCredenciais(cred.email, cred.senha);
}

function inicializarEventosAutenticacao() {
    const loginOpenBtn = document.getElementById("loginOpenBtn");
    const loginModalClose = document.getElementById("loginModalClose");
    const loginModal = document.getElementById("loginModal");
    const userSessionTrigger = document.getElementById("userSessionTrigger");
    const userSession = document.getElementById("userSession");

    if (loginOpenBtn) loginOpenBtn.addEventListener("click", abrirModalLogin);
    if (loginModalClose) loginModalClose.addEventListener("click", fecharModalLogin);

    if (loginModal) {
        loginModal.addEventListener("click", (e) => {
            if (e.target === loginModal) fecharModalLogin();
        });
    }

    if (userSessionTrigger && userSession) {
        userSessionTrigger.addEventListener("click", (e) => {
            e.stopPropagation();
            userSession.classList.toggle("active");
        });
    }

    document.addEventListener("click", (e) => {
        if (userSession && userSession.classList.contains("active") && !userSession.contains(e.target)) {
            userSession.classList.remove("active");
        }
    });
}

// ==========================================================================
// EVENTOS GERAIS & MODAIS
// ==========================================================================

function abrirModalAdmin(idModal) {
    const overlay = document.getElementById(idModal);
    if (!overlay) return;
    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fecharModalAdmin(idModal) {
    const overlay = document.getElementById(idModal);
    if (!overlay) return;
    overlay.classList.remove("active");
    document.body.style.overflow = "";
}

function abrirModalAdminNovoAviso() {
    const tiposPermitidos = ["admin", "admin_avisos"];
    if (!usuarioAtual || !tiposPermitidos.includes(usuarioAtual.tipo)) {
        mostrarToast("Acesso Negado: Somente Administradores ou o Gestor de Avisos podem publicar comunicados.", "erro");
        return;
    }
    abrirModalAdmin("adminAvisoModal");
}
function abrirModalAdminNovaEscola() {
    // Inicializa os chips de turmas com valores padrão
    const turmasPadrao = ["1º Ano A", "2º Ano A", "3º Ano A"];
    document.getElementById("escolaTurmasIniciais").value = turmasPadrao.join(",");
    renderizarChipsNoBox("novaTurmasChipsBox", turmasPadrao, "nova");
    abrirModalAdmin("adminEscolaModal");
}

function tratarSubmitNovoAviso(event) {
    event.preventDefault();
    const titulo = document.getElementById("avisoTitulo").value.trim();
    const categoria = document.getElementById("avisoCategoria").value;
    const data = document.getElementById("avisoData").value.trim() || new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
    const resumo = document.getElementById("avisoResumo").value.trim();
    const conteudoTexto = document.getElementById("avisoConteudo").value.trim();
    const imagem = document.getElementById("avisoImagem").value.trim() || "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=1200&q=80";

    const badgeConfig = {
        urgente: { tipo: "urgente", texto: "Urgente", icone: "fa-triangle-exclamation" },
        geral: { tipo: "geral", texto: "Aviso Geral", icone: "fa-bullhorn" },
        evento: { tipo: "evento", texto: "Evento", icone: "fa-calendar-star" },
        sucesso: { tipo: "sucesso", texto: "Conquista", icone: "fa-trophy" },
        info: { tipo: "info", texto: "Educação", icone: "fa-flask" }
    }[categoria] || { tipo: "geral", texto: "Aviso", icone: "fa-bullhorn" };

    const paragrafos = conteudoTexto.split("\n").map(p => p.trim()).filter(p => p.length > 0);

    const novoAviso = {
        id: Date.now(),
        titulo,
        resumo,
        data,
        badge: badgeConfig,
        imagem,
        conteudo: [{ subtitulo: "📋 Informações Oficiais", paragrafos }]
    };

    avisos.unshift(novoAviso);
    salvarAvisosNoStorage();
    renderizarAvisos();
    fecharModalAdmin("adminAvisoModal");
    document.getElementById("formNovoAviso").reset();
    mostrarToast("✅ Comunicado oficial publicado na rede!", "sucesso");
}

function excluirAviso(id) {
    const aviso = avisos.find(a => a.id === id);
    if (!aviso) return;
    if (confirm(`Deseja excluir o aviso "${aviso.titulo}"?`)) {
        avisos = avisos.filter(a => a.id !== id);
        salvarAvisosNoStorage();
        renderizarAvisos();
        mostrarToast("🗑️ Aviso excluído.", "info");
    }
}

function restaurarDadosPadrao() {
    if (confirm("Deseja restaurar todas as escolas (incluindo a Escola Helena Kolody), alunos, cardápios, avisos e ocorrências para os dados originais?")) {
        localStorage.removeItem(CHAVE_ESCOLAS_STORAGE);
        localStorage.removeItem(CHAVE_ALUNOS_STORAGE);
        localStorage.removeItem(CHAVE_CARDAPIOS_STORAGE);
        localStorage.removeItem(CHAVE_AVISOS_STORAGE);
        localStorage.removeItem(CHAVE_OCORRENCIAS_STORAGE);
        localStorage.removeItem(CHAVE_SNACK_VOTES_STORAGE);
        localStorage.removeItem(CHAVE_GRADES_STORAGE);

        escolas = carregarEscolas();
        alunos = carregarAlunos();
        cardapios = carregarCardapios();
        avisos = carregarAvisos();
        ocorrencias = carregarOcorrencias();
        gradesHorarias = carregarGradesHorarias();

        renderizarEscolas(escolas);
        popularSelectsEscolasFormularios();
        popularFiltrosEscolasAlunos();
        renderizarTabelaAlunos();
        renderizarCardapioPrincipal();
        renderizarAvisos();
        inicializarSnackVoting();
        filtrarOcorrencias();
        atualizarMetricasDashboard();
        alternarVisaoPerfil(perfilAtivoVisao);

        mostrarToast("↻ Dados originais restaurados com sucesso!", "sucesso");
    }
}

function inicializarEventosGerais() {
    const navToggle = document.getElementById("navToggle");

    // Hamburguer → abre/fecha drawer mobile
    if (navToggle) {
        navToggle.addEventListener("click", () => toggleDrawer());
    }

    // Fecha drawer ao clicar em qualquer nav-link do desktop (caso fique visível)
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => fecharDrawer());
    });

    const searchInput = document.getElementById("searchInput");
    if (searchInput) {
        searchInput.addEventListener("input", aplicarFiltrosEscolas);
        searchInput.addEventListener("keypress", (e) => {
            if (e.key === "Enter") aplicarFiltrosEscolas();
        });
    }

    document.querySelector(".search-btn")?.addEventListener("click", aplicarFiltrosEscolas);

    document.getElementById("studentSearchInput")?.addEventListener("input", renderizarTabelaAlunos);
    document.getElementById("studentSchoolFilter")?.addEventListener("change", renderizarTabelaAlunos);
    document.getElementById("studentStatusFilter")?.addEventListener("change", renderizarTabelaAlunos);
    document.getElementById("studentAccessFilter")?.addEventListener("change", renderizarTabelaAlunos);
}

function inicializarEventosFiltros() {
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            filtroAtual = btn.dataset.filter;
            atualizarVisibilidadeFiltrosCursos();
            aplicarFiltrosEscolas();
        });
    });
}

function atualizarVisibilidadeFiltrosCursos() {
    const cursoFilters = document.querySelectorAll(".course-filter");
    const filtrosQueExibemCursos = ["tecnico", "ds", "adm", "enf"];

    if (filtrosQueExibemCursos.includes(filtroAtual)) {
        cursoFilters.forEach(f => f.classList.remove("hidden"));
    } else {
        cursoFilters.forEach(f => {
            f.classList.remove("active");
            f.classList.add("hidden");
        });
        if (["ds", "adm", "enf"].includes(filtroAtual)) {
            filtroAtual = "todos";
        }
    }
}

function inicializarModalGerais() {
    const overlaySchool = document.getElementById("schoolModal");
    const closeSchool = document.getElementById("modalClose");
    if (closeSchool) closeSchool.addEventListener("click", fecharModal);
    if (overlaySchool) {
        overlaySchool.addEventListener("click", (e) => {
            if (e.target === overlaySchool) fecharModal();
        });
    }

    const overlayNews = document.getElementById("newsModal");
    if (overlayNews) {
        overlayNews.addEventListener("click", (e) => {
            if (e.target === overlayNews) fecharModalAviso();
        });
    }

    const overlayOcorrencia = document.getElementById("adminOcorrenciaModal");
    if (overlayOcorrencia) {
        overlayOcorrencia.addEventListener("click", (e) => {
            if (e.target === overlayOcorrencia) fecharModalAdmin("adminOcorrenciaModal");
        });
    }

    const overlayDetalhesOcorrencia = document.getElementById("adminDetalhesOcorrenciaModal");
    if (overlayDetalhesOcorrencia) {
        overlayDetalhesOcorrencia.addEventListener("click", (e) => {
            if (e.target === overlayDetalhesOcorrencia) fecharModalAdmin("adminDetalhesOcorrenciaModal");
        });
    }

    const overlayLightbox = document.getElementById("ocorrenciaLightbox");
    if (overlayLightbox) {
        overlayLightbox.addEventListener("click", (e) => {
            if (e.target === overlayLightbox) fecharLightboxFoto();
        });
    }

    const overlayOnboarding = document.getElementById("onboardingModal");
    if (overlayOnboarding) {
        overlayOnboarding.addEventListener("click", (e) => {
            if (e.target === overlayOnboarding) fecharModalOnboarding();
        });
    }

    const overlaySere = document.getElementById("sereImportModal");
    if (overlaySere) {
        overlaySere.addEventListener("click", (e) => {
            if (e.target === overlaySere) fecharModalSereImport();
        });
    }

    const overlayCardapio = document.getElementById("adminEditarCardapioModal");
    if (overlayCardapio) {
        overlayCardapio.addEventListener("click", (e) => {
            if (e.target === overlayCardapio) fecharModalAdmin("adminEditarCardapioModal");
        });
    }

    const overlayHorarios = document.getElementById("adminHorariosAulasModal");
    if (overlayHorarios) {
        overlayHorarios.addEventListener("click", (e) => {
            if (e.target === overlayHorarios) fecharModalAdmin("adminHorariosAulasModal");
        });
    }

    const overlaySeletorHorarios = document.getElementById("adminSelecionarEscolaHorariosModal");
    if (overlaySeletorHorarios) {
        overlaySeletorHorarios.addEventListener("click", (e) => {
            if (e.target === overlaySeletorHorarios) fecharModalAdmin("adminSelecionarEscolaHorariosModal");
        });
    }

    const overlayTurmas = document.getElementById("adminGerenciarTurmasModal");
    if (overlayTurmas) {
        overlayTurmas.addEventListener("click", (e) => {
            if (e.target === overlayTurmas) fecharModalAdmin("adminGerenciarTurmasModal");
        });
    }

    ["adminCentralAprovacoesModal", "adminEditarLancheDiaModal", "adminEscolaModal", "adminEditarEscolaModal", "adminAlunoModal", "adminAvisoModal"].forEach(modalId => {
        const overlayEl = document.getElementById(modalId);
        if (overlayEl) {
            overlayEl.addEventListener("click", (e) => {
                if (e.target === overlayEl) fecharModalAdmin(modalId);
            });
        }
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            fecharModal();
            fecharModalAviso();
            fecharModalLogin();
            fecharModalOnboarding();
            fecharModalSereImport();
            fecharLightboxFoto();
            fecharModalAdmin("adminCentralAprovacoesModal");
            fecharModalAdmin("adminEditarLancheDiaModal");
            fecharModalAdmin("adminEscolaModal");
            fecharModalAdmin("adminEditarEscolaModal");
            fecharModalAdmin("adminAlunoModal");
            fecharModalAdmin("adminEditarCardapioModal");
            fecharModalAdmin("adminHorariosAulasModal");
            fecharModalAdmin("adminSelecionarEscolaHorariosModal");
            fecharModalAdmin("adminGerenciarTurmasModal");
            fecharModalAdmin("adminAvisoModal");
            fecharModalAdmin("adminOcorrenciaModal");
            fecharModalAdmin("adminDetalhesOcorrenciaModal");
        }
    });
}

function handleSubmit(event) {
    event.preventDefault();
    const email = document.getElementById("email")?.value || "seu email";

    const btn = event.target.querySelector("button[type='submit']");
    const originalContent = btn.innerHTML;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    btn.disabled = true;

    setTimeout(() => {
        mostrarToast(`Mensagem enviada com sucesso! Retornaremos para ${email}.`, "sucesso");
        event.target.reset();
        btn.innerHTML = originalContent;
        btn.disabled = false;
    }, 800);
}

function getIconeRefeicao(tipo) {
    const icones = {
        cafe: '<i class="fas fa-mug-hot"></i>',
        almoco: '<i class="fas fa-utensils"></i>',
        lanche: '<i class="fas fa-cookie-bite"></i>',
        jantar: '<i class="fas fa-moon"></i>'
    };
    return icones[tipo] || '<i class="fas fa-utensils"></i>';
}

// Notificações Toast
function mostrarToast(mensagem, tipo = "sucesso") {
    const container = document.getElementById("toastContainer");
    if (!container) return;

    const icones = {
        sucesso: '<i class="fas fa-circle-check"></i>',
        erro: '<i class="fas fa-circle-exclamation"></i>',
        info: '<i class="fas fa-info-circle"></i>'
    };

    const titulos = {
        sucesso: "RAE Informa",
        erro: "Atenção",
        info: "Gestão Escolar"
    };

    const toast = document.createElement("div");
    toast.className = `toast toast-${tipo}`;
    toast.innerHTML = `
        <div class="toast-icon">${icones[tipo] || icones.sucesso}</div>
        <div class="toast-body">
            <div class="toast-title">${titulos[tipo] || 'RAE'}</div>
            <div class="toast-msg">${mensagem}</div>
        </div>
    `;

    container.appendChild(toast);

    setTimeout(() => {
        toast.style.opacity = "0";
        toast.style.transform = "translateX(100%)";
        setTimeout(() => toast.remove(), 300);
    }, 3600);
}

// ==========================================================================
// MÓDULO DE VOTAÇÃO & PEDIDO DA MERENDA ESCOLAR (SIM OU NÃO)
// ==========================================================================

const CHAVE_LANCHE_DIA_STORAGE = "rae_lanche_do_dia_v2";

const lancheDoDiaPadrao = {
    titulo: "Vitamina de Banana & Aveia + Pão Francês na Chapa",
    categoria: "Merenda Balanceada",
    emoji: "🍌",
    cal: "245 kcal",
    desc: "Vitamina cremosa batida com leite fresco, banana e aveia em flocos. Acompanha pão francês crocante na chapa com manteiga. Alimento rico em energia, cálcio e potássio, preparado com carinho pelas merendeiras com ingredientes da agricultura familiar.",
    nutri: ["Rico em Fibras", "Fonte de Cálcio", "Sem Conservantes", "Produtos Locais"],
    img: "https://images.unsplash.com/photo-1570913149827-d2ac84ab3f9a?w=800&q=80"
};

let lancheDoDia = { ...lancheDoDiaPadrao };

function carregarLancheDoDia() {
    const salvo = localStorage.getItem(CHAVE_LANCHE_DIA_STORAGE);
    if (salvo) {
        try {
            const parsed = JSON.parse(salvo);
            if (parsed && parsed.titulo) {
                lancheDoDia = { ...lancheDoDiaPadrao, ...parsed };
                return lancheDoDia;
            }
        } catch (e) { }
    }
    lancheDoDia = { ...lancheDoDiaPadrao };
    return lancheDoDia;
}

function salvarLancheDoDia(dados = lancheDoDia) {
    lancheDoDia = { ...lancheDoDiaPadrao, ...dados };
    localStorage.setItem(CHAVE_LANCHE_DIA_STORAGE, JSON.stringify(lancheDoDia));
}

function abrirModalEditarLancheDia() {
    const tiposPermitidos = ["admin", "admin_cardapio"];
    const podeEditar = usuarioAtual && (tiposPermitidos.includes(usuarioAtual.tipo) || ["admin", "admin_chef", "admin_detalhes", "admin_cardapio", "cozinha", "funcionario"].includes(usuarioAtual.tipoPerfil));
    if (!podeEditar) {
        mostrarToast("Acesso Negado: Somente o Responsável pela Cozinha ou o Administrador podem alterar o Lanche do Dia.", "erro");
        return;
    }

    carregarLancheDoDia();
    const titInput = document.getElementById("editLancheDiaTitulo");
    const catInput = document.getElementById("editLancheDiaCategoria");
    const calInput = document.getElementById("editLancheDiaCal");
    const descInput = document.getElementById("editLancheDiaDesc");
    const imgInput = document.getElementById("editLancheDiaImg");
    const chkZerar = document.getElementById("editLancheDiaZerarVotos");

    if (titInput) titInput.value = lancheDoDia.titulo || "";
    if (catInput) catInput.value = lancheDoDia.categoria || "Merenda Balanceada";
    if (calInput) calInput.value = lancheDoDia.cal || "245 kcal";
    if (descInput) descInput.value = lancheDoDia.desc || "";
    if (imgInput) imgInput.value = lancheDoDia.img || "";
    if (chkZerar) chkZerar.checked = false;

    abrirModalAdmin("adminEditarLancheDiaModal");
}

function tratarSubmitEditarLancheDia(event) {
    event.preventDefault();
    const titulo = (document.getElementById("editLancheDiaTitulo")?.value || "").trim();
    const categoria = (document.getElementById("editLancheDiaCategoria")?.value || "Merenda Balanceada").trim();
    const cal = (document.getElementById("editLancheDiaCal")?.value || "245 kcal").trim();
    const desc = (document.getElementById("editLancheDiaDesc")?.value || "").trim();
    const img = (document.getElementById("editLancheDiaImg")?.value || "").trim() || lancheDoDiaPadrao.img;
    const zerarVotos = !!document.getElementById("editLancheDiaZerarVotos")?.checked;

    if (!titulo || !desc) {
        mostrarToast("Preencha o nome do prato e a descrição do Lanche do Dia.", "erro");
        return;
    }

    salvarLancheDoDia({
        ...lancheDoDia,
        titulo,
        categoria,
        cal,
        desc,
        img
    });

    if (zerarVotos) {
        salvarVotosMerenda({
            versaoZerada: 2,
            meuVoto: null,
            sim: 0,
            nao: 0,
            votosUsuarios: {}
        });
    }

    renderizarLancheDoDia();
    atualizarInterfaceVotacaoMerenda();
    fecharModalAdmin("adminEditarLancheDiaModal");

    mostrarToast(`🍽️ Lanche do Dia atualizado para "${titulo}"!${zerarVotos ? " Contagem de votos reiniciada em 0." : ""}`, "sucesso");
}

const MARGEM_COZINHA_MERENDA = 0.07; // 7% a mais para a equipe de cozinha

function obterIdentificadorVotanteMerenda() {
    if (usuarioAtual && (usuarioAtual.email || usuarioAtual.id)) {
        return String(usuarioAtual.email || usuarioAtual.id).toLowerCase().trim();
    }
    let deviceId = localStorage.getItem("rae_voter_device_id_v1");
    if (!deviceId) {
        deviceId = "visitante_" + Date.now() + "_" + Math.random().toString(36).slice(2, 7);
        localStorage.setItem("rae_voter_device_id_v1", deviceId);
    }
    return deviceId;
}

function calcularMargemCozinhaMerenda(qtdSim) {
    const baseSim = Math.max(0, Number(qtdSim) || 0);
    const margemExata = baseSim * MARGEM_COZINHA_MERENDA;
    const margemExtra = baseSim > 0 ? Math.ceil(margemExata) : 0;
    const totalPreparar = baseSim + margemExtra;
    return {
        baseSim,
        percentual: 7,
        margemExata: Number(margemExata.toFixed(2)),
        margemExtra,
        totalPreparar
    };
}

function carregarVotosMerenda() {
    const salvo = localStorage.getItem(CHAVE_SNACK_VOTES_STORAGE);
    if (salvo) {
        try {
            const parsed = JSON.parse(salvo);
            // Garante que a votação comece zerada (versaoZerada === 2), descartando os 184/38 fictícios antigos
            if (parsed && parsed.versaoZerada === 2 && typeof parsed.sim === "number" && typeof parsed.nao === "number") {
                if (!parsed.votosUsuarios || typeof parsed.votosUsuarios !== "object") {
                    parsed.votosUsuarios = {};
                }
                return parsed;
            }
        } catch (e) { }
    }
    const inicial = {
        versaoZerada: 2,
        meuVoto: null, // "sim" | "nao" | null
        sim: 0,
        nao: 0,
        votosUsuarios: {}
    };
    salvarVotosMerenda(inicial);
    return inicial;
}

function salvarVotosMerenda(dados) {
    dados.versaoZerada = 2;
    localStorage.setItem(CHAVE_SNACK_VOTES_STORAGE, JSON.stringify(dados));
}

function inicializarSnackVoting() {
    carregarLancheDoDia();
    renderizarLancheDoDia();
    atualizarInterfaceVotacaoMerenda();
}

function renderizarLancheDoDia() {
    const imgEl = document.getElementById("snackDiaImagem");
    const titEl = document.getElementById("snackDiaTitulo");
    const descEl = document.getElementById("snackDiaDescricao");
    const catEl = document.getElementById("snackDiaCategoria");
    const calEl = document.getElementById("snackDiaCal");

    if (imgEl && lancheDoDia.img) imgEl.src = lancheDoDia.img;
    if (titEl && lancheDoDia.titulo) titEl.textContent = lancheDoDia.titulo;
    if (descEl && lancheDoDia.desc) descEl.textContent = lancheDoDia.desc;
    if (catEl && lancheDoDia.categoria) catEl.innerHTML = `<i class="fas fa-bowl-food"></i> ${lancheDoDia.categoria}`;
    if (calEl && lancheDoDia.cal) calEl.innerHTML = `<i class="fas fa-fire"></i> ${lancheDoDia.cal}`;
}

function votarMerendaSimNao(escolha) {
    if (escolha !== "sim" && escolha !== "nao") return;

    const dados = carregarVotosMerenda();
    const idVotante = obterIdentificadorVotanteMerenda();
    if (!dados.votosUsuarios || typeof dados.votosUsuarios !== "object") {
        dados.votosUsuarios = {};
    }

    const votoAnterior = dados.votosUsuarios[idVotante] || dados.meuVoto || null;

    if (votoAnterior === escolha) {
        mostrarToast(
            escolha === "sim"
                ? "Você já confirmou seu pedido de lanche (SIM) para hoje!"
                : "Você já marcou que NÃO irá lanchar hoje!",
            "info"
        );
        return;
    }

    // Registra o voto individual do usuário e recalcula o total real de votos
    dados.votosUsuarios[idVotante] = escolha;
    dados.meuVoto = escolha;

    const listaVotos = Object.values(dados.votosUsuarios);
    if (listaVotos.length > 0) {
        dados.sim = listaVotos.filter(v => v === "sim").length;
        dados.nao = listaVotos.filter(v => v === "nao").length;
    } else {
        if (votoAnterior === "sim" && dados.sim > 0) dados.sim--;
        if (votoAnterior === "nao" && dados.nao > 0) dados.nao--;
        if (escolha === "sim") dados.sim++;
        if (escolha === "nao") dados.nao++;
    }

    salvarVotosMerenda(dados);
    atualizarInterfaceVotacaoMerenda();

    const calculoCozinha = calcularMargemCozinhaMerenda(dados.sim);

    if (escolha === "sim") {
        mostrarToast(`🍽️ Pedido CONFIRMADO! Cozinha: ${calculoCozinha.baseSim} confirmados + ${calculoCozinha.margemExtra} (+7% margem) = ${calculoCozinha.totalPreparar} porções.`, "sucesso");
    } else {
        mostrarToast("👍 Resposta registrada (NÃO). Obrigado por ajudar a evitar desperdício!", "info");
    }
}

function atualizarInterfaceVotacaoMerenda() {
    const dados = carregarVotosMerenda();
    const idVotante = obterIdentificadorVotanteMerenda();
    const meuVotoAtual = (dados.votosUsuarios && dados.votosUsuarios[idVotante]) || dados.meuVoto || null;

    const btnSim = document.getElementById("btnSnackSim");
    const btnNao = document.getElementById("btnSnackNao");
    const meuBox = document.getElementById("snackMeuPedidoBox");
    const meuIcon = document.getElementById("snackMeuPedidoIcon");
    const meuTexto = document.getElementById("snackMeuPedidoTexto");

    const totalTxt = document.getElementById("snackTotalVotosTxt");
    const simCount = document.getElementById("snackSimCount");
    const naoCount = document.getElementById("snackNaoCount");
    const simBar = document.getElementById("snackSimBar");
    const naoBar = document.getElementById("snackNaoBar");

    const badgeMargem = document.getElementById("snackMargemExtraBadge");
    const baseSimEl = document.getElementById("snackCozinhaBaseSim");
    const margemValEl = document.getElementById("snackCozinhaMargemVal");
    const totalPrepararEl = document.getElementById("snackCozinhaTotalPreparar");

    // Botões ativos
    if (btnSim) btnSim.classList.toggle("selected", meuVotoAtual === "sim");
    if (btnNao) btnNao.classList.toggle("selected", meuVotoAtual === "nao");

    // Mensagem de feedback do voto
    if (meuBox && meuTexto) {
        meuBox.classList.remove("voted-sim", "voted-nao");
        if (meuVotoAtual === "sim") {
            meuBox.classList.add("voted-sim");
            if (meuIcon) meuIcon.className = "fas fa-circle-check";
            meuTexto.innerHTML = `<strong>Seu pedido está CONFIRMADO (SIM):</strong> O lanche de hoje (<em>${lancheDoDia.titulo}</em>) está garantido para você no intervalo!`;
        } else if (meuVotoAtual === "nao") {
            meuBox.classList.add("voted-nao");
            if (meuIcon) meuIcon.className = "fas fa-circle-xmark";
            meuTexto.innerHTML = `<strong>Resposta registrada (NÃO):</strong> Você informou que não vai lanchar hoje. As merendeiras não reservarão sua porção, evitando desperdício.`;
        } else {
            if (meuIcon) meuIcon.className = "fas fa-circle-info";
            meuTexto.innerHTML = `Você ainda não respondeu. Selecione <strong>SIM</strong> ou <strong>NÃO</strong> acima para confirmar sua presença no lanche.`;
        }
    }

    // Contadores e Barras de progresso
    const total = (dados.sim || 0) + (dados.nao || 0);
    const pctSim = total > 0 ? Math.round((dados.sim / total) * 100) : 0;
    const pctNao = total > 0 ? Math.round((dados.nao / total) * 100) : 0;

    if (totalTxt) totalTxt.textContent = `${total} ${total === 1 ? "usuário votou" : "usuários votaram"}`;
    if (simCount) simCount.textContent = `${dados.sim} (${pctSim}%)`;
    if (naoCount) naoCount.textContent = `${dados.nao} (${pctNao}%)`;

    if (simBar) simBar.style.width = `${pctSim}%`;
    if (naoBar) naoBar.style.width = `${pctNao}%`;

    // Cálculo da margem de 7% a mais para a equipe de cozinha
    const calc = calcularMargemCozinhaMerenda(dados.sim);
    if (badgeMargem) {
        badgeMargem.textContent = `+${calc.margemExtra} ${calc.margemExtra === 1 ? "porção extra" : "porções extras"} (+7%)`;
    }
    if (baseSimEl) baseSimEl.textContent = `${calc.baseSim}`;
    if (margemValEl) margemValEl.textContent = `+${calc.margemExtra} (+7%)`;
    if (totalPrepararEl) {
        totalPrepararEl.textContent = `${calc.totalPreparar} ${calc.totalPreparar === 1 ? "porção" : "porções"}`;
    }
}

function exportarRelatorioMerenda() {
    const dados = carregarVotosMerenda();
    const total = (dados.sim || 0) + (dados.nao || 0);
    const pctSim = total > 0 ? ((dados.sim / total) * 100).toFixed(1) : 0;
    const pctNao = total > 0 ? ((dados.nao / total) * 100).toFixed(1) : 0;
    const calc = calcularMargemCozinhaMerenda(dados.sim);
    const dataHoje = new Date().toLocaleDateString('pt-BR');

    let csv = "Data,Lanche_Do_Dia,Indicador,Quantidade,Observacao\n";
    csv += `"${dataHoje}","${lancheDoDia.titulo}","SIM (Vão lanchar)",${dados.sim},"${pctSim}% dos votos"\n`;
    csv += `"${dataHoje}","${lancheDoDia.titulo}","NÃO (Não vão lanchar)",${dados.nao},"${pctNao}% dos votos"\n`;
    csv += `"${dataHoje}","${lancheDoDia.titulo}","TOTAL DE VOTOS COMPUTADOS",${total},"100% dos votantes"\n`;
    csv += `"${dataHoje}","${lancheDoDia.titulo}","MARGEM DA COZINHA (+7% A MAIS)",${calc.margemExtra},"+7% sobre os votos SIM (${calc.margemExata} arredondado para cima) para sobrar um pouco de comida"\n`;
    csv += `"${dataHoje}","${lancheDoDia.titulo}","TOTAL RECOMENDADO PARA PREPARO NA COZINHA",${calc.totalPreparar},"Votos SIM (${calc.baseSim}) + Margem 7% (+${calc.margemExtra})"\n`;

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `relatorio_merenda_cozinha_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    mostrarToast(`📥 Relatório da cozinha exportado! Total a preparar com +7%: ${calc.totalPreparar} porções.`, "sucesso");
}

function zerarVotacaoMerenda() {
    if (confirm("Deseja zerar a contagem de confirmações de lanche (Sim/Não) para iniciar um novo dia letivo?")) {
        const zerado = {
            versaoZerada: 2,
            meuVoto: null,
            sim: 0,
            nao: 0,
            votosUsuarios: {}
        };
        salvarVotosMerenda(zerado);
        atualizarInterfaceVotacaoMerenda();
        mostrarToast("🔄 Contagem da merenda zerada com sucesso para o novo dia!", "sucesso");
    }
}

// ==========================================================================
// MÓDULO DE CADASTRO E GESTÃO DE OCORRÊNCIAS (EXCLUSIVO ADMINISTRADOR)
// ==========================================================================

const ocorrenciasIniciais = [
    {
        id: "occ_101",
        titulo: "Ventilador estragado",
        sala: "Sala 11",
        escolaId: 1,
        escolaNome: "Colégio Estadual Helena Kolody",
        categoria: "Eletrico",
        prioridade: "Alta",
        status: "pendente",
        descricao: "O ventilador da Sala 11 parou de funcionar de repente após estalo na fiação e está com forte cheiro de queimado. Alunos e professores estão no calor intenso. Necessita reparo ou troca do motor com urgência.",
        fotos: [
            "https://images.unsplash.com/photo-1585338107529-13afc5f02586?w=700&q=80"
        ],
        data: new Date(Date.now() - 3600000 * 2).toISOString()
    },
    {
        id: "occ_102",
        titulo: "Torneira com vazamento contínuo",
        sala: "Banheiro Feminino - Térreo",
        escolaId: 1,
        escolaNome: "Colégio Estadual Helena Kolody",
        categoria: "Hidraulico",
        prioridade: "Media",
        status: "andamento",
        descricao: "A segunda torneira da bancada está com a vedação rompida, vazando água ininterruptamente e encharcando o piso, com risco de escorregamento para estudantes e equipe.",
        fotos: [
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=700&q=80"
        ],
        data: new Date(Date.now() - 3600000 * 26).toISOString()
    },
    {
        id: "occ_103",
        titulo: "Lâmpadas LED queimadas no fundo da sala",
        sala: "Sala 20 (3º Ano C) - Bloco Central",
        escolaId: 2,
        escolaNome: "Colégio Estadual Tiradentes",
        categoria: "Eletrico",
        prioridade: "Media",
        status: "pendente",
        descricao: "Duas calhas com lâmpadas tubulares LED queimaram e deixaram o fundo da sala muito escuro para a visualização do quadro durante as aulas do período noturno.",
        fotos: [],
        data: new Date(Date.now() - 3600000 * 48).toISOString()
    },
    {
        id: "occ_104",
        titulo: "Cadeiras com encosto desparafusado",
        sala: "Sala dos Professores - 1º Andar",
        escolaId: 1,
        escolaNome: "Colégio Estadual Helena Kolody",
        categoria: "Mobiliario",
        prioridade: "Baixa",
        status: "resolvido",
        descricao: "Duas cadeiras de apoio estavam com parafusos frouxos no encosto. Manutenção apertou a estrutura e reforçou as porcas.",
        fotos: [],
        data: new Date(Date.now() - 3600000 * 96).toISOString(),
        resolvidoEm: new Date(Date.now() - 3600000 * 20).toISOString()
    }
];

function carregarOcorrencias() {
    const salvo = localStorage.getItem(CHAVE_OCORRENCIAS_STORAGE);
    if (salvo) {
        try {
            const parsed = JSON.parse(salvo);
            if (Array.isArray(parsed) && parsed.length > 0) return parsed;
        } catch (e) { }
    }
    salvarOcorrencias(ocorrenciasIniciais);
    return JSON.parse(JSON.stringify(ocorrenciasIniciais));
}

function salvarOcorrencias(dados = ocorrencias) {
    localStorage.setItem(CHAVE_OCORRENCIAS_STORAGE, JSON.stringify(dados));
}

function atualizarStatsOcorrencias() {
    const total = ocorrencias.length;
    const pendentes = ocorrencias.filter(o => o.status === "pendente").length;
    const andamento = ocorrencias.filter(o => o.status === "andamento").length;
    const resolvidos = ocorrencias.filter(o => o.status === "resolvido").length;

    const elTotal = document.getElementById("occStatTotal");
    const elPend = document.getElementById("occStatPend");
    const elAnd = document.getElementById("occStatAndamento");
    const elRes = document.getElementById("occStatResolvido");

    if (elTotal) elTotal.textContent = total;
    if (elPend) elPend.textContent = pendentes;
    if (elAnd) elAnd.textContent = andamento;
    if (elRes) elRes.textContent = resolvidos;
}

function filtrarOcorrencias() {
    const termo = (document.getElementById("occSearchInput")?.value || "").toLowerCase().trim();
    const escolaFiltro = document.getElementById("occFilterEscola")?.value || "todas";
    const categoriaFiltro = document.getElementById("occFilterCategoria")?.value || "todas";
    const statusFiltro = document.getElementById("occFilterStatus")?.value || "todos";
    const prioridadeFiltro = document.getElementById("occFilterPrioridade")?.value || "todas";

    const lista = ocorrencias.filter(occ => {
        const matchTermo = termo === "" ||
            occ.titulo.toLowerCase().includes(termo) ||
            occ.sala.toLowerCase().includes(termo) ||
            occ.descricao.toLowerCase().includes(termo) ||
            (occ.escolaNome && occ.escolaNome.toLowerCase().includes(termo)) ||
            occ.categoria.toLowerCase().includes(termo);

        const matchEscola = escolaFiltro === "todas" || String(occ.escolaId) === String(escolaFiltro);
        const matchCat = categoriaFiltro === "todas" || occ.categoria.toLowerCase() === categoriaFiltro.toLowerCase();
        const matchStatus = statusFiltro === "todos" || occ.status === statusFiltro;
        const matchPrioridade = prioridadeFiltro === "todas" || occ.prioridade.toLowerCase() === prioridadeFiltro.toLowerCase();

        return matchTermo && matchEscola && matchCat && matchStatus && matchPrioridade;
    });

    renderizarOcorrencias(lista);
    atualizarStatsOcorrencias();
}

function renderizarOcorrencias(lista) {
    const grid = document.getElementById("occurrencesGrid");
    const noResults = document.getElementById("occNoResults");
    if (!grid) return;

    if (!lista || lista.length === 0) {
        grid.innerHTML = "";
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    const badgeStatusMap = {
        pendente: { classe: "occ-badge-pendente", rotulo: "Pendente", icone: "fa-clock" },
        andamento: { classe: "occ-badge-andamento", rotulo: "Em Reparo", icone: "fa-wrench" },
        resolvido: { classe: "occ-badge-resolvido", rotulo: "Resolvido", icone: "fa-check-circle" }
    };

    const badgePrioridadeMap = {
        alta: { classe: "occ-prio-alta", rotulo: "Alta Prioridade" },
        media: { classe: "occ-prio-media", rotulo: "Média" },
        baixa: { classe: "occ-prio-baixa", rotulo: "Baixa" }
    };

    grid.innerHTML = lista.map(occ => {
        const st = badgeStatusMap[occ.status] || badgeStatusMap.pendente;
        const prioKey = (occ.prioridade || "media").toLowerCase();
        const pr = badgePrioridadeMap[prioKey] || badgePrioridadeMap.media;
        const dataFmt = new Date(occ.data).toLocaleDateString('pt-BR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit' });
        const temFotos = occ.fotos && occ.fotos.length > 0;

        return `
            <article class="occurrence-card">
                <div class="occ-card-header">
                    <div>
                        <span class="occ-status-badge ${st.classe}"><i class="fas ${st.icone}"></i> ${st.rotulo}</span>
                        <span class="occ-prio-badge ${pr.classe}">${pr.rotulo}</span>
                    </div>
                    <span class="occ-date"><i class="far fa-calendar"></i> ${dataFmt}</span>
                </div>

                <div class="occ-card-body">
                    <h3 class="occ-title">${occ.titulo}</h3>

                    <div class="occ-location-pill">
                        <i class="fas fa-door-open"></i>
                        <span><strong>Sala / Local:</strong> ${occ.sala}</span>
                    </div>

                    <div class="occ-school-meta">
                        <i class="fas fa-school"></i> ${occ.escolaNome || 'Escola Estadual'}
                    </div>

                    <p class="occ-desc">${occ.descricao}</p>

                    ${temFotos ? `
                        <div class="occ-photos-strip">
                            ${occ.fotos.slice(0, 3).map((f, idx) => `
                                <img src="${f}" alt="Foto da ocorrência" class="occ-thumb" onclick="abrirLightboxFoto('${f}', '${occ.titulo} - ${occ.sala}')">
                            `).join("")}
                            ${occ.fotos.length > 3 ? `<span class="occ-thumb-more">+${occ.fotos.length - 3}</span>` : ''}
                        </div>
                    ` : `
                        <div class="occ-no-photos"><i class="fas fa-camera-slash"></i> Sem fotos anexadas</div>
                    `}
                </div>

                <div class="occ-card-footer">
                    <button class="btn-occ-action btn-occ-view" onclick="abrirDetalhesOcorrencia('${occ.id}')" title="Ver detalhes completos">
                        <i class="fas fa-eye"></i> Detalhes
                    </button>
                    <button class="btn-occ-action btn-occ-edit" onclick="abrirModalEditarOcorrencia('${occ.id}')" title="Editar ocorrência">
                        <i class="fas fa-pen-to-square"></i>
                    </button>
                    ${occ.status !== 'resolvido' ? `
                        <button class="btn-occ-action btn-occ-resolve" onclick="marcarResolvidaOcorrencia('${occ.id}')" title="Marcar como resolvida">
                            <i class="fas fa-check"></i>
                        </button>
                    ` : `
                        <button class="btn-occ-action btn-occ-reopen" onclick="reabrirOcorrencia('${occ.id}')" title="Reabrir ocorrência">
                            <i class="fas fa-rotate-left"></i>
                        </button>
                    `}
                    <button class="btn-occ-action btn-occ-delete" onclick="excluirOcorrencia('${occ.id}')" title="Excluir ocorrência">
                        <i class="fas fa-trash-alt"></i>
                    </button>
                </div>
            </article>
        `;
    }).join("");
}

function abrirModalNovaOcorrencia() {
    ocorrenciaFotosTemp = [];
    document.getElementById("occId").value = "";
    document.getElementById("occModalTitle").innerHTML = '<i class="fas fa-triangle-exclamation"></i> Registrar Ocorrência de Manutenção';
    document.getElementById("formOcorrencia").reset();

    popularSelectsEscolasFormularios();
    if (escolas.length > 0) {
        document.getElementById("occEscola").value = escolas[0].id;
    }

    renderizarPreviewFotosOcorrencia();
    abrirModalAdmin("adminOcorrenciaModal");
}

function abrirModalEditarOcorrencia(id) {
    const occ = ocorrencias.find(o => o.id === id);
    if (!occ) return;

    ocorrenciaFotosTemp = [...(occ.fotos || [])];
    document.getElementById("occId").value = occ.id;
    document.getElementById("occModalTitle").innerHTML = '<i class="fas fa-pen-to-square"></i> Editar Ocorrência de Manutenção';

    document.getElementById("occTitulo").value = occ.titulo || "";
    document.getElementById("occSala").value = occ.sala || "";
    document.getElementById("occCategoria").value = occ.categoria || "Eletrico";
    document.getElementById("occPrioridade").value = occ.prioridade || "Media";
    document.getElementById("occStatus").value = occ.status || "pendente";
    document.getElementById("occDescricao").value = occ.descricao || "";

    popularSelectsEscolasFormularios();
    document.getElementById("occEscola").value = occ.escolaId || (escolas[0] ? escolas[0].id : "");

    renderizarPreviewFotosOcorrencia();
    abrirModalAdmin("adminOcorrenciaModal");
}

function tratarUploadFotosOcorrencia(event) {
    const files = event.target.files;
    if (!files || files.length === 0) return;

    Array.from(files).forEach(file => {
        if (!file.type.startsWith("image/")) return;
        const reader = new FileReader();
        reader.onload = (e) => {
            ocorrenciaFotosTemp.push(e.target.result);
            renderizarPreviewFotosOcorrencia();
        };
        reader.readAsDataURL(file);
    });

    event.target.value = "";
}

function adicionarFotoOcorrenciaPorUrl() {
    const input = document.getElementById("occFotoUrlInput");
    if (!input) return;
    const url = input.value.trim();
    if (!url) {
        mostrarToast("Digite ou cole a URL de uma imagem válida.", "erro");
        return;
    }
    ocorrenciaFotosTemp.push(url);
    input.value = "";
    renderizarPreviewFotosOcorrencia();
    mostrarToast("📸 Foto adicionada à ocorrência!", "sucesso");
}

function removerFotoOcorrencia(index) {
    ocorrenciaFotosTemp.splice(index, 1);
    renderizarPreviewFotosOcorrencia();
}

function renderizarPreviewFotosOcorrencia() {
    const grid = document.getElementById("occPhotosPreviewGrid");
    if (!grid) return;

    if (ocorrenciaFotosTemp.length === 0) {
        grid.innerHTML = '<span class="occ-preview-empty"><i class="fas fa-images"></i> Nenhuma foto anexada ainda</span>';
        return;
    }

    grid.innerHTML = ocorrenciaFotosTemp.map((src, idx) => `
        <div class="occ-preview-item">
            <img src="${src}" alt="Anexo ${idx + 1}">
            <button type="button" class="occ-preview-del" onclick="removerFotoOcorrencia(${idx})" title="Remover foto">
                <i class="fas fa-xmark"></i>
            </button>
        </div>
    `).join("");
}

function tratarSubmitOcorrencia(event) {
    event.preventDefault();

    const id = document.getElementById("occId").value.trim();
    const titulo = document.getElementById("occTitulo").value.trim();
    const sala = document.getElementById("occSala").value.trim();
    const escolaId = document.getElementById("occEscola").value;
    const categoria = document.getElementById("occCategoria").value;
    const prioridade = document.getElementById("occPrioridade").value;
    const status = document.getElementById("occStatus").value;
    const descricao = document.getElementById("occDescricao").value.trim();

    const escolaEncontrada = escolas.find(e => String(e.id) === String(escolaId));
    const escolaNome = escolaEncontrada ? escolaEncontrada.nome : "Escola Estadual";

    if (!titulo || !sala || !descricao) {
        mostrarToast("Preencha todos os campos obrigatórios (*)", "erro");
        return;
    }

    if (id) {
        const index = ocorrencias.findIndex(o => o.id === id);
        if (index !== -1) {
            ocorrencias[index] = {
                ...ocorrencias[index],
                titulo,
                sala,
                escolaId: parseInt(escolaId) || escolaId,
                escolaNome,
                categoria,
                prioridade,
                status,
                descricao,
                fotos: [...ocorrenciaFotosTemp]
            };
            salvarOcorrencias();
            filtrarOcorrencias();
            fecharModalAdmin("adminOcorrenciaModal");
            mostrarToast(`✅ Ocorrência "${titulo}" atualizada!`, "sucesso");
            return;
        }
    }

    const novaOcorrencia = {
        id: "occ_" + Date.now(),
        titulo,
        sala,
        escolaId: parseInt(escolaId) || escolaId,
        escolaNome,
        categoria,
        prioridade,
        status,
        descricao,
        fotos: [...ocorrenciaFotosTemp],
        data: new Date().toISOString()
    };

    ocorrencias.unshift(novaOcorrencia);
    salvarOcorrencias();
    filtrarOcorrencias();
    fecharModalAdmin("adminOcorrenciaModal");
    mostrarToast(`🚨 Nova ocorrência registrada com sucesso na sala ${sala}!`, "sucesso");
}

function abrirDetalhesOcorrencia(id) {
    const occ = ocorrencias.find(o => o.id === id);
    if (!occ) return;

    const content = document.getElementById("occDetalhesContent");
    if (!content) return;

    const dataFmt = new Date(occ.data).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
    const temFotos = occ.fotos && occ.fotos.length > 0;

    content.innerHTML = `
        <div class="occ-detail-header">
            <div class="occ-detail-badges">
                <span class="status-badge status-${occ.status}"><i class="fas fa-tag"></i> ${occ.status.toUpperCase()}</span>
                <span class="occ-prio-badge occ-prio-${occ.prioridade.toLowerCase()}">${occ.prioridade} Prioridade</span>
                <span class="occ-cat-pill"><i class="fas fa-screwdriver-wrench"></i> ${occ.categoria}</span>
            </div>
            <h2>${occ.titulo}</h2>
            <div class="occ-detail-meta">
                <span><i class="fas fa-school"></i> <strong>Escola:</strong> ${occ.escolaNome}</span>
                <span><i class="fas fa-door-open"></i> <strong>Sala/Local:</strong> ${occ.sala}</span>
                <span><i class="far fa-clock"></i> <strong>Aberto em:</strong> ${dataFmt}</span>
            </div>
        </div>

        <div class="occ-detail-body">
            <h4 style="margin-bottom: 8px; color: var(--gray-800); font-size: 15px;"><i class="fas fa-align-left"></i> Descrição do Problema:</h4>
            <div class="occ-detail-desc-box">${occ.descricao}</div>

            <h4 style="margin: 20px 0 10px; color: var(--gray-800); font-size: 15px;"><i class="fas fa-images"></i> Evidências Fotográficas (${temFotos ? occ.fotos.length : 0}):</h4>
            ${temFotos ? `
                <div class="occ-detail-gallery">
                    ${occ.fotos.map((src, i) => `
                        <div class="occ-gallery-card" onclick="abrirLightboxFoto('${src}', '${occ.titulo} - Foto ${i + 1}')">
                            <img src="${src}" alt="Foto ${i + 1}">
                            <span class="occ-gallery-zoom"><i class="fas fa-magnifying-glass-plus"></i> Ampliar</span>
                        </div>
                    `).join("")}
                </div>
            ` : `
                <div class="occ-no-photos-box">
                    <i class="fas fa-camera"></i>
                    <p>Nenhuma foto anexada no momento da vistoria.</p>
                </div>
            `}
        </div>

        <div class="occ-detail-actions">
            ${occ.status !== 'resolvido' ? `
                <button class="btn btn-primary" onclick="marcarResolvidaOcorrencia('${occ.id}'); fecharModalAdmin('adminDetalhesOcorrenciaModal');">
                    <i class="fas fa-check-circle"></i> Concluir Reparo
                </button>
            ` : `
                <button class="btn btn-secondary" onclick="reabrirOcorrencia('${occ.id}'); fecharModalAdmin('adminDetalhesOcorrenciaModal');">
                    <i class="fas fa-rotate-left"></i> Reabrir Ocorrência
                </button>
            `}
            <button class="btn btn-secondary" onclick="fecharModalAdmin('adminDetalhesOcorrenciaModal'); abrirModalEditarOcorrencia('${occ.id}');">
                <i class="fas fa-pen-to-square"></i> Editar Dados
            </button>
            <button class="btn btn-outline" onclick="fecharModalAdmin('adminDetalhesOcorrenciaModal')">Fechar</button>
        </div>
    `;

    abrirModalAdmin("adminDetalhesOcorrenciaModal");
}

function marcarResolvidaOcorrencia(id) {
    const occ = ocorrencias.find(o => o.id === id);
    if (!occ) return;

    occ.status = "resolvido";
    occ.resolvidoEm = new Date().toISOString();
    salvarOcorrencias();
    filtrarOcorrencias();
    mostrarToast(`✅ Ocorrência "${occ.titulo}" marcada como RESOLVIDA!`, "sucesso");
}

function reabrirOcorrencia(id) {
    const occ = ocorrencias.find(o => o.id === id);
    if (!occ) return;

    occ.status = "pendente";
    salvarOcorrencias();
    filtrarOcorrencias();
    mostrarToast(`🔄 Ocorrência "${occ.titulo}" reaberta para manutenção!`, "info");
}

function excluirOcorrencia(id) {
    const occ = ocorrencias.find(o => o.id === id);
    if (!occ) return;

    if (confirm(`Tem certeza que deseja excluir permanentemente o registro "${occ.titulo}"?`)) {
        ocorrencias = ocorrencias.filter(o => o.id !== id);
        salvarOcorrencias();
        filtrarOcorrencias();
        mostrarToast("🗑️ Registro de ocorrência excluído com sucesso.", "info");
    }
}

function exportarOcorrenciasCSV() {
    if (ocorrencias.length === 0) {
        mostrarToast("Nenhuma ocorrência para exportar.", "erro");
        return;
    }

    let csv = "ID,Titulo,Sala,Escola,Categoria,Prioridade,Status,Data_Registro,Qtd_Fotos,Descricao\n";
    ocorrencias.forEach(o => {
        const descLimpa = (o.descricao || "").replace(/"/g, '""').replace(/\n/g, ' ');
        const dataFmt = new Date(o.data).toLocaleDateString('pt-BR');
        csv += `"${o.id}","${o.titulo}","${o.sala}","${o.escolaNome || ''}","${o.categoria}","${o.prioridade}","${o.status}","${dataFmt}",${(o.fotos || []).length},"${descLimpa}"\n`;
    });

    const blob = new Blob(["\uFEFF" + csv], { type: "text/csv;charset=utf-8;" });
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = `ocorrencias_manutencao_${new Date().toISOString().slice(0, 10)}.csv`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    mostrarToast("📥 Relatório de ocorrências exportado em formato CSV!", "sucesso");
}

function abrirLightboxFoto(src, caption = "") {
    const lb = document.getElementById("ocorrenciaLightbox");
    const img = document.getElementById("ocorrenciaLightboxImg");
    const cap = document.getElementById("ocorrenciaLightboxCaption");
    if (!lb || !img) return;

    img.src = src;
    if (cap) cap.textContent = caption;
    lb.classList.add("active");
    document.body.style.overflow = "hidden";
}

function fecharLightboxFoto(e) {
    if (e && e.target && e.target.tagName === 'IMG') return;
    const lb = document.getElementById("ocorrenciaLightbox");
    if (!lb) return;
    lb.classList.remove("active");
    document.body.style.overflow = "";
}

