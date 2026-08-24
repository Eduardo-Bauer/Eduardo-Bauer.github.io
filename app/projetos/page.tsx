import { Star } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { PageHeader } from '@/components/page-header'
import { projects, social } from '@/lib/portfolio-data'

export const metadata = {
  title: 'Projetos — Eduardo Bauer',
}

export default function ProjetosPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PageHeader
        title="Projetos"
        description="Uma seleção de repositórios e projetos que desenvolvi. Confira todos no meu GitHub."
      />

      <div className="mb-10">
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 font-mono text-sm transition-colors hover:border-primary hover:text-primary"
        >
          <GithubIcon className="h-4 w-4" aria-hidden="true" />@{social.githubUser}
        </a>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.name}
            className="group relative flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:cursor-pointer hover:border-primary/50"
          >
            {/* Link invisível que se expande para cobrir todo o card */}
            <a
              href={project.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-0"
            >
              <span className="sr-only">Acessar repositório do projeto {project.name}</span>
            </a>

            {/* IMAGEM DO PROJETO */}
            {project.image && (
              <div className="mb-4 aspect-video w-full overflow-hidden rounded-md border border-border bg-muted">
                <img
                  src={project.image}
                  alt={`Captura de tela do projeto ${project.name}`}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
            )}

            <div className="mb-3 flex items-start justify-between gap-2">
              <div className="flex items-center gap-2">
                <GithubIcon className="h-4 w-4 text-muted-foreground" aria-hidden="true" />
                <h2 className="font-mono font-semibold">{project.name}</h2>
              </div>
              {project.featured && (
                <Star
                  className="h-4 w-4 fill-primary text-primary"
                  aria-label="Projeto em destaque"
                />
              )}
            </div>

            <p className="flex-1 text-pretty text-sm leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-4 flex flex-wrap gap-2 relative z-10">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </main>
  )
}
