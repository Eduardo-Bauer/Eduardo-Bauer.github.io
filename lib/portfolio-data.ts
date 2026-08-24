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
    course: 'Nome do Curso / Graduacao',
    institution: 'Nome da Instituicao',
    period: '2022 — Atual',
    description: 'Breve descricao do curso, area de foco ou principais disciplinas.',
    status: 'Em andamento',
  },
  {
    course: 'Curso Tecnico / Ensino Medio',
    institution: 'Nome da Instituicao',
    period: '2019 — 2021',
    description: 'Breve descricao.',
    status: 'Concluido',
  },
]

// Cursos e certificacoes complementares.
export const courses = [
  {
    title: 'Nome do Curso Complementar',
    provider: 'Plataforma / Instituicao',
    year: '2023',
    hours: '40h',
  },
  {
    title: 'Outro Curso ou Certificacao',
    provider: 'Plataforma / Instituicao',
    year: '2024',
    hours: '20h',
  },
]

// ============================================================================
// EXPERIENCIAS PROFISSIONAIS — substitua pelos seus dados reais
// ============================================================================
export const experiences = [
  {
    role: 'Cargo / Posição',
    company: 'Nome da Empresa',
    period: '2023 — Atual',
    type: 'Tempo integral',
    description:
      'Breve descrição das suas responsabilidades e do que você entrega no dia a dia.',
    highlights: [
      'Principal responsabilidade ou conquista nesta posição.',
      'Outra entrega relevante, projeto ou impacto gerado.',
      'Tecnologias e ferramentas que você utiliza aqui.',
    ],
    tech: ['Python', 'SQL'],
  },
  {
    role: 'Cargo Anterior',
    company: 'Outra Empresa',
    period: '2021 — 2023',
    type: 'Estágio',
    description: 'Breve descrição das suas responsabilidades nessa experiência.',
    highlights: [
      'Principal responsabilidade ou conquista.',
      'Outra entrega ou aprendizado relevante.',
    ],
    tech: ['Delphi', 'C'],
  },
]

// ============================================================================
// PROJETOS DO GITHUB — edite manualmente conforme pediu
// ============================================================================
export const projects = [
  {
    name: 'projeto-cache',
    description: 'Sistema de caching desenvolvido em C.',
    tech: ['C', 'Estrutura de Dados'],
    repo: 'https://github.com/Eduardo-Bauer/projeto-cache',
    featured: true,
    image: '/caminho/para/imagem1.png',
  },
  {
    name: 'estudos-FastApi',
    description: 'Web application Full-stack com FastAPI REST backend e React frontend para rastreamento de obras.',
    tech: ['Python', 'FastAPI', 'React', 'SQLAlchemy'],
    repo: 'https://github.com/Eduardo-Bauer/estudos-FastApi',
    featured: true,
    image: '/caminho/para/imagem2.jpg',
  },
  {
    name: 'projeto-em-c',
    description: 'Descricao curta do projeto.',
    tech: ['C'],
    repo: 'https://github.com/Eduardo-Bauer/projeto-em-c',
    featured: false,
    image: '',
  },
]

export const navItems = [
  { href: '/', label: 'início' },
  { href: '/experiencias', label: 'experiências' },
  { href: '/formacao', label: 'formação' },
  { href: '/projetos', label: 'projetos' },
  { href: '/habilidades', label: 'habilidades' },
]
