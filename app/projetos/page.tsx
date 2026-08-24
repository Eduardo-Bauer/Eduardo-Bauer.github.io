import { ExternalLink, Star } from 'lucide-react'
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
        command="git log --projetos"
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
            className="group flex flex-col rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
          >
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

            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-border px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex items-center gap-4 border-t border-border pt-4">
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="h-3.5 w-3.5" aria-hidden="true" />
                código
              </a>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
                >
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                  demo
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
