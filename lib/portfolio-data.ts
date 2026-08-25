// ============================================================================
// EDITE AQUI TODAS AS SUAS INFORMACOES
// ============================================================================

export const profile = {
  name: 'Eduardo Bauer',
  role: 'Desenvolvedor Back-end',
  tagline:
    'Desenvolvedor Back-End. Gosto de resolver problemas na camada que ninguém vê: lógica, dados e desempenho. Programo em C, Python, Delphi e Java, com conhecimento em SQL e modelagem de dados.',
  location: 'Brasil',
  about: [
    'Desenvolvedor Back-End. Gosto de resolver problemas na camada que ninguém vê: lógica, dados e desempenho.',
    'Programo em C, Python, Delphi e Java, com conhecimento em SQL e modelagem de dados.',
    'Busco escrever código limpo, otimizar processos e construir sistemas confiáveis e fáceis de manter.',
  ],
}

// Links de contato e redes sociais.
// Substitua os "usuario" pelos seus perfis reais.
export const social = {
  email: 'eduardofbauer@gmail.com',
  github: 'https://github.com/Eduardo-Bauer',
  githubUser: 'Eduardo-Bauer', // usado para exibir @usuario
  linkedin: 'https://www.linkedin.com/in/eduardo-bauer-',
  instagram: 'https://instagram.com/edu.bauer_',
}

// Linguagens / tecnologias principais. level de 0 a 100.
export const skills = [
  { name: 'C', level: 85, category: 'Linguagem' },
  { name: 'Python', level: 90, category: 'Linguagem' },
  { name: 'Delphi', level: 80, category: 'Linguagem' },
  { name: 'Java', level: 82, category: 'Linguagem' },
  { name: 'SQL', level: 85, category: 'Banco de Dados' },
]

// Habilidades complementares (tags simples).
export const otherSkills = [
  'Modelagem de dados',
  'APIs REST',
  'Git & GitHub',
  'Estruturas de dados',
  'Algoritmos',
  'Programacao orientada a objetos',
]

// ============================================================================
// FORMACAO ACADEMICA — substitua pelos seus dados reais
// ============================================================================
export const education = [
  {
    course: 'Ciência da Computação',
    institution: 'Universidade de Caxias do Sul (UCS)',
    period: '2023 — 2029',
    description: 'O objeto de estudo da área de Ciência da Computação envolve compreender o funcionamento dos computadores, do hardware ao software, procurando compreender como as informações são armazenadas e processadas no desenvolvimento de software e aplicativos.',
    status: 'Em andamento',
  },
  {
    course: 'Técnico em Agropecuária',
    institution: 'Escola Técnica Bom Pastor',
    period: '2020 — 2022',
    description: 'Formar profissionais aptos a atuar em diferentes áreas do segmento agropecuário, com conhecimento abrangente em cultivo de plantas, criação de animais, gestão de recursos naturais, infraestrura agrícola, implementação de tecnologias sustentáveis, administração rural e desenvolvimento de projetos agropecuários.',
    status: 'Concluido',
  },
]

// Cursos e certificacoes complementares.
export const courses = [
  {
    title: 'Git e Github',
    provider: 'Udemy',
    year: '2026',
    hours: '12h',
  },
  {
    title: 'Estrutura de Dados e Algoritmos',
    provider: 'Udemy',
    year: '2025',
    hours: '8h',
  },
  {
    title: 'Mysql',
    provider: 'Curso em Vídeo',
    year: '2024',
    hours: '40h',
  },
  {
    title: 'Python',
    provider: 'Curso em Vídeo',
    year: '2024',
    hours: '40h',
  },
  {
    title: 'Cursos-Linguagem C',
    provider: 'Universidade de Caxias do Sul (UCS)',
    year: '2023',
    hours: '15h',
  },
]

// ============================================================================
// EXPERIENCIAS PROFISSIONAIS — substitua pelos seus dados reais
// ============================================================================
export const experiences = [
  {
    role: 'Suporte ao cliente',
    company: 'SW Tecnologia',
    period: '2025 — Atual',
    type: 'Tempo integral',
    description:
      'Atendimento e resolução de problemas operacionais e técnicos de clientes. Minhas atividades combinam suporte direto ao usuário com análise aprofundada de dados, incluindo a execução de scripts e queries SQL para diagnóstico, extração de informações e correções pontuais em banco de dados, visando sempre a disponibilidade e a integridade das regras de negócio do sistema.',
    highlights: [
      'Suporte técnico.',
      'Pensamento crítico.',
      'Trabalho em equipe.',
      'Documentação técnica.'
    ],
    tech: ['SQL', 'Delphi'],
  },
  {
    role: 'Estagiário',
    company: 'Prefeitura de Nova Petrópolis',
    period: '2023 — 2025',
    type: 'Estágio',
    description: 'Atendimento ao público na secretaria de planejamento, desenvolvi os projetos AutomacaoCredencial e web scraper proprietario car durante o meu período de estágio.',
    highlights: [
      'Atendimento ao cliente.',
      'Comunicação.',
    ],
    tech: ['Python', 'Tkinter', 'Pandas', 'Docx'],
  },
]

// ============================================================================
// PROJETOS DO GITHUB — edite manualmente conforme pediu
// ============================================================================
export const projects = [
  {
    name: 'Scramble',
    description: 'O presente trabalho tem como objetivo desenvolver um programa em Assembly 8086 inspirado no jogo Scramble, desenvolvido pela Konami em 1981, conforme as especificações apresentadas na documentação do projeto.',
    tech: ['Assembly'],
    repo: 'https://github.com/Eduardo-Bauer/Scramble',
    featured: true,
    image: '/images/Scramble.png',
  },
  {
    name: 'AutomacaoCredencial',
    description: 'Automação do processo de criação de credenciais para idosos e pessoas com necessidades especiais (PNE), desenvolvido para atividade realizada na prefeitura de Nova Petrópolis.',
    tech: ['Python', 'Pandas', 'Python-docx', 'Openpyxl', 'Ttkbootstrap'],
    repo: 'https://github.com/Eduardo-Bauer/AutomacaoCredencial_Python',
    featured: true,
    image: '/images/AutomacaoCredencial.png',
  },
  {
    name: 'ScoreGame',
    description: 'O ScoreGame é uma aplicação em python sem usar programação orientada a objetos, visando fornecer a análise e visualização das estatísticas de três modalidades esportivas, sendo elas, futebol feminino, basquete e boxe +92kg Masculino nas últimas 4 olimpíadas dos respectivos ganhadores das medalhas, ouro, prata e bronze.',
    tech: ['Python', 'MySQL', 'Tkinter'],
    repo: 'https://github.com/Eduardo-Bauer/ScoreGame_Python',
    featured: true,
    image: '/images/ScoreGame.png',
  },
  {
    name: 'ProjetoCache',
    description: 'Simulador de Memória Cache Configurável.',
    tech: ['C', 'Estrutura de Dados', 'Manipulação de Arquivos'],
    repo: 'https://github.com/Eduardo-Bauer/ProjetoCache_C',
    featured: false,
    image: '/images/ProjetoCache.png',
  },
  {
    name: 'PrjetoABPs',
    description: 'O objetivo deste trabalho é implementar uma estrutura ordenada para acessoa turmas de estudantes, cada turma tem os estudantes ordenados alfabeticamente, utilizando árvores binárias de pesquisa (ABPs).',
    tech: ['C', 'Estrutura de Dados', 'Árvores Binárias de Pesquisa'],
    repo: 'https://github.com/Eduardo-Bauer/PrjetoABPs_C',
    featured: false,
    image: '/images/ABPs.png',
  },
  {
    name: 'SistemaDePedidos',
    description: 'Este sistema tem como objetivo simular uma aplicação de pedidos para uma loja, utilizando os conceitos de Programação Orientada a Objetos (POO) em Java.',
    tech: ['Java', 'Json', 'Estruturas de Dados', 'Programação Orientada a Objetos'],
    repo: 'https://github.com/Eduardo-Bauer/SistemaDePedidos_Java',
    featured: false,
    image: '/images/SistemaDePedidos.png',
  },
]

export const navItems = [
  { href: '/', label: 'início' },
  { href: '/experiencias', label: 'experiências' },
  { href: '/formacao', label: 'formação' },
  { href: '/projetos', label: 'projetos' },
  { href: '/habilidades', label: 'habilidades' },
]
