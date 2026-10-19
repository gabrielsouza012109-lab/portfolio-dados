export type Lang = "pt" | "en";

const pt = {
  langAttr: "pt-BR",
  nav: [
    { name: "Sobre", href: "#sobre" },
    { name: "Especialidades", href: "#especialidades" },
    { name: "Projetos", href: "#projetos" },
    { name: "Experiência", href: "#experiencia" },
    { name: "Contato", href: "#contato" },
  ],
  cta: "Vamos conversar",
  menuOpen: "Abrir menu",
  menuClose: "Fechar menu",
  themeToDark: "Mudar para o modo escuro",
  themeToLight: "Mudar para o modo claro",
  langSwitch: "Mudar para inglês",
  whatsappAria: "Conversar no WhatsApp",
  hero: {
    badge: "ANALISTA DE DADOS · BI · SUPPLY CHAIN",
    hello: "Olá, eu sou",
    tagline:
      "Transformo dados em decisões mais inteligentes para negócios e operações de Supply Chain.",
    projects: "Explorar projetos",
    resume: "Baixar currículo",
    location: "João Pessoa, PB",
    cardTitle: "Dados com propósito",
    cardSub: "Insights para ação",
    discover: "Descubra mais",
  },
  about: {
    label: "01 / SOBRE MIM",
    headingA: "Dados, visão e",
    headingB: "impacto real.",
    lead: "Sou profissional de tecnologia e Supply Chain com atuação em análise de dados, inteligência de negócio e automação.",
    body: "Combino Python, SQL, Power BI, Qlik Sense, Tableau e conhecimento operacional para transformar informações em indicadores, análises e soluções práticas. Meu trabalho conecta dados às decisões de Compras, Comercial e Logística — da gestão de estoques ao planejamento de demanda.",
    stats: [
      { key: "BI", sub: "Visualização & indicadores" },
      { key: "SQL", sub: "Análise & integração" },
      { key: "IA", sub: "Inovação aplicada" },
    ],
  },
  skills: {
    label: "02 / O QUE EU FAÇO",
    heading: "Minhas especialidades",
    sub: "Tecnologia e contexto de negócio trabalhando juntos para gerar resultados relevantes.",
    items: [
      {
        title: "Business Intelligence",
        description: "Indicadores e visualizações que tornam decisões mais claras.",
        tags: ["Power BI", "DAX", "Power Query", "Qlik Sense", "Tableau"],
      },
      {
        title: "Dados & automação",
        description: "Da extração à entrega: dados organizados, confiáveis e acessíveis.",
        tags: ["Python", "SQL", "Pandas", "KNIME", "ETL", "ERP Protheus TOTVS"],
      },
      {
        title: "Supply Chain",
        description: "Análises aplicadas a abastecimento, demanda e gestão de estoques.",
        tags: ["Curva ABC", "DDE", "Ruptura", "Reposição"],
      },
      {
        title: "IA aplicada",
        description: "Soluções de IA generativa conectadas aos desafios do negócio.",
        tags: ["LLMs", "Engenharia de Prompt", "Chatbots"],
      },
    ],
  },
  projects: {
    label: "03 / PORTFÓLIO",
    heading: "Projetos em destaque",
    seeGithub: "Ver GitHub",
    seeRepo: "Ver repositório",
    art: {
      question: "Como está a cobertura de estoque?",
      answer: "Analisando indicadores de estoque",
      overview: "VISÃO GERAL / ESTOQUE",
      indicators: "Indicadores",
      breakdown: "Ruptura · Giro · Cobertura",
      sources: "Fontes",
      insights: "Insights",
      agenda: "AGENDA",
    },
    items: [
      {
        label: "IA + SUPPLY CHAIN",
        title: "SupplyAI",
        description:
          "Ferramenta de pesquisa de produtos com inteligência artificial, conectando tecnologia e análises para apoiar o trabalho em Supply Chain.",
        tags: ["IA", "Pesquisa de produtos", "Supply Chain"],
      },
      {
        label: "AUTOMAÇÃO + DADOS",
        title: "Relatórios & pipelines ETL",
        description:
          "Fluxos de extração, limpeza e integração de dados para reduzir rotinas manuais e manter relatórios atualizados.",
        tags: ["Python", "Pandas", "SQL", "KNIME"],
      },
      {
        label: "BUSINESS INTELLIGENCE",
        title: "Analytics de Supply Chain",
        description:
          "Painéis e indicadores para acompanhar ruptura, cobertura, giro e dias de estoque na operação.",
        tags: ["Power BI", "DAX", "Qlik Sense", "ERP Protheus"],
      },
      {
        label: "ENGENHARIA DE DADOS",
        title: "Integração de dados",
        description:
          "Consultas SQL e fluxos analíticos para integrar informações do ERP e dar suporte ao planejamento de demanda.",
        tags: ["SQL", "KNIME", "ERP", "Modelagem"],
      },
      {
        label: "DESENVOLVIMENTO WEB",
        title: "Sistema de agendamento",
        description:
          "Aplicação web para organizar e gerenciar agendamentos operacionais, com interface responsiva.",
        tags: ["React", "TypeScript", "Supabase"],
      },
    ],
  },
  history: {
    label: "04 / TRAJETÓRIA",
    headingA: "Experiência",
    headingB: "profissional.",
    sub: "Uma trajetória que une operações, tecnologia e inteligência de dados.",
    groups: [
      {
        company: "CRJLOG LTDA · Carajás Home Center",
        city: "João Pessoa, PB",
        positions: [
          {
            role: "Analista de Supply Chain Sênior",
            date: "Mar 2026 — Atual",
            description:
              "Dashboards em Power BI, integração de dados do Protheus com SQL e automação de processos com Python e KNIME.",
          },
          {
            role: "Analista de Supply Chain Pleno",
            date: "Nov 2025 — Mar 2026",
            description:
              "Planejamento de reposição, análise de demanda e acompanhamento de indicadores de ruptura, cobertura e giro.",
          },
        ],
      },
      {
        company: "Armazém Mateus S.A.",
        city: "João Pessoa, PB",
        positions: [
          {
            role: "Analista de Inteligência Comercial Júnior",
            date: "Mai 2025 — Nov 2025",
            description:
              "Análises da cadeia de suprimentos para abastecimento, reposição e melhoria operacional.",
          },
          {
            role: "Assistente de Inteligência Comercial",
            date: "Jan 2023 — Mai 2025",
            description:
              "Gestão dos estoques da Regional Paraíba e análises de ruptura, cobertura e giro.",
          },
        ],
      },
    ],
  },
  education: {
    label: "05 / FORMAÇÃO",
    heading: "Base para evoluir",
    items: [
      {
        course: "Pós-graduação em Supply Chain Management e Logística",
        school: "FPB · Faculdade da Paraíba",
        year: "2026",
      },
      {
        course: "Análise e Desenvolvimento de Sistemas",
        school: "Universidade Estácio de Sá",
        year: "2023",
      },
      {
        course: "Técnico em Informática",
        school: "Educação Profissional Server",
        year: "2016",
      },
    ],
  },
  contact: {
    badge: "DISPONÍVEL PARA CONVERSAR",
    headingA: "Vamos transformar dados em ",
    headingB: "possibilidades?",
    sub: "Se você tem uma oportunidade, projeto ou ideia em mente, ficarei feliz em conversar.",
    button: "Entre em contato",
    whatsapp: "WhatsApp",
    email: "E-mail",
    networks: "Redes profissionais",
    location: "João Pessoa, Paraíba · Brasil",
  },
  footer: { backToTop: "Voltar ao topo" },
};

const en: typeof pt = {
  langAttr: "en",
  nav: [
    { name: "About", href: "#sobre" },
    { name: "Expertise", href: "#especialidades" },
    { name: "Projects", href: "#projetos" },
    { name: "Experience", href: "#experiencia" },
    { name: "Contact", href: "#contato" },
  ],
  cta: "Let's talk",
  menuOpen: "Open menu",
  menuClose: "Close menu",
  themeToDark: "Switch to dark mode",
  themeToLight: "Switch to light mode",
  langSwitch: "Mudar para português",
  whatsappAria: "Chat on WhatsApp",
  hero: {
    badge: "DATA ANALYST · BI · SUPPLY CHAIN",
    hello: "Hi, I'm",
    tagline:
      "I turn data into smarter decisions for businesses and Supply Chain operations.",
    projects: "Explore projects",
    resume: "Download résumé",
    location: "João Pessoa, Brazil",
    cardTitle: "Data with purpose",
    cardSub: "Insights for action",
    discover: "Discover more",
  },
  about: {
    label: "01 / ABOUT ME",
    headingA: "Data, vision and",
    headingB: "real impact.",
    lead: "I'm a technology and Supply Chain professional working in data analysis, business intelligence and automation.",
    body: "I combine Python, SQL, Power BI, Qlik Sense, Tableau and operational knowledge to turn information into indicators, analyses and practical solutions. My work connects data to decisions in Procurement, Sales and Logistics — from inventory management to demand planning.",
    stats: [
      { key: "BI", sub: "Visualization & indicators" },
      { key: "SQL", sub: "Analysis & integration" },
      { key: "AI", sub: "Applied innovation" },
    ],
  },
  skills: {
    label: "02 / WHAT I DO",
    heading: "My areas of expertise",
    sub: "Technology and business context working together to deliver meaningful results.",
    items: [
      {
        title: "Business Intelligence",
        description: "Indicators and visualizations that make decisions clearer.",
        tags: ["Power BI", "DAX", "Power Query", "Qlik Sense", "Tableau"],
      },
      {
        title: "Data & automation",
        description: "From extraction to delivery: organized, reliable and accessible data.",
        tags: ["Python", "SQL", "Pandas", "KNIME", "ETL", "Protheus TOTVS ERP"],
      },
      {
        title: "Supply Chain",
        description: "Analyses applied to replenishment, demand and inventory management.",
        tags: ["ABC analysis", "DDE", "Stockouts", "Replenishment"],
      },
      {
        title: "Applied AI",
        description: "Generative AI solutions connected to real business challenges.",
        tags: ["LLMs", "Prompt Engineering", "Chatbots"],
      },
    ],
  },
  projects: {
    label: "03 / PORTFOLIO",
    heading: "Featured projects",
    seeGithub: "View GitHub",
    seeRepo: "View repository",
    art: {
      question: "How is stock coverage?",
      answer: "Analyzing stock indicators",
      overview: "OVERVIEW / INVENTORY",
      indicators: "Indicators",
      breakdown: "Stockouts · Turns · Coverage",
      sources: "Sources",
      insights: "Insights",
      agenda: "SCHEDULE",
    },
    items: [
      {
        label: "AI + SUPPLY CHAIN",
        title: "SupplyAI",
        description:
          "AI-powered product search tool, connecting technology and analytics to support Supply Chain work.",
        tags: ["AI", "Product search", "Supply Chain"],
      },
      {
        label: "AUTOMATION + DATA",
        title: "Reports & ETL pipelines",
        description:
          "Data extraction, cleaning and integration flows that reduce manual routines and keep reports up to date.",
        tags: ["Python", "Pandas", "SQL", "KNIME"],
      },
      {
        label: "BUSINESS INTELLIGENCE",
        title: "Supply Chain analytics",
        description:
          "Dashboards and indicators to track stockouts, coverage, inventory turns and days of stock in the operation.",
        tags: ["Power BI", "DAX", "Qlik Sense", "Protheus ERP"],
      },
      {
        label: "DATA ENGINEERING",
        title: "Data integration",
        description:
          "SQL queries and analytical flows to integrate ERP information and support demand planning.",
        tags: ["SQL", "KNIME", "ERP", "Modeling"],
      },
      {
        label: "WEB DEVELOPMENT",
        title: "Scheduling system",
        description:
          "Web application to organize and manage operational scheduling, with a responsive interface.",
        tags: ["React", "TypeScript", "Supabase"],
      },
    ],
  },
  history: {
    label: "04 / CAREER",
    headingA: "Professional",
    headingB: "experience.",
    sub: "A career path that combines operations, technology and data intelligence.",
    groups: [
      {
        company: "CRJLOG LTDA · Carajás Home Center",
        city: "João Pessoa, Brazil",
        positions: [
          {
            role: "Senior Supply Chain Analyst",
            date: "Mar 2026 — Present",
            description:
              "Power BI dashboards, Protheus data integration with SQL and process automation with Python and KNIME.",
          },
          {
            role: "Supply Chain Analyst",
            date: "Nov 2025 — Mar 2026",
            description:
              "Replenishment planning, demand analysis and monitoring of stockout, coverage and inventory turnover indicators.",
          },
        ],
      },
      {
        company: "Armazém Mateus S.A.",
        city: "João Pessoa, Brazil",
        positions: [
          {
            role: "Junior Commercial Intelligence Analyst",
            date: "May 2025 — Nov 2025",
            description:
              "Supply chain analyses for replenishment, supply and operational improvement.",
          },
          {
            role: "Commercial Intelligence Assistant",
            date: "Jan 2023 — May 2025",
            description:
              "Inventory management for the Paraíba regional branch and analyses of stockouts, coverage and turnover.",
          },
        ],
      },
    ],
  },
  education: {
    label: "05 / EDUCATION",
    heading: "A foundation to grow",
    items: [
      {
        course: "Postgraduate degree in Supply Chain Management and Logistics",
        school: "FPB · Faculdade da Paraíba",
        year: "2026",
      },
      {
        course: "Systems Analysis and Development",
        school: "Universidade Estácio de Sá",
        year: "2023",
      },
      {
        course: "IT Technician",
        school: "Educação Profissional Server",
        year: "2016",
      },
    ],
  },
  contact: {
    badge: "AVAILABLE FOR A CHAT",
    headingA: "Ready to turn data into ",
    headingB: "possibilities?",
    sub: "If you have an opportunity, project or idea in mind, I'd be happy to chat.",
    button: "Get in touch",
    whatsapp: "WhatsApp",
    email: "E-mail",
    networks: "Professional networks",
    location: "João Pessoa, Paraíba · Brazil",
  },
  footer: { backToTop: "Back to top" },
};

export const content = { pt, en };
export type Content = typeof pt;
