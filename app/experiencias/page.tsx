import type { Metadata } from 'next'
import { Briefcase, ChevronRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { experiences } from '@/lib/portfolio-data'

export const metadata: Metadata = {
  title: 'Experiências | Eduardo Bauer',
  description: 'Experiências profissionais de Eduardo Bauer, desenvolvedor back-end.',
}

export default function ExperienciasPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6 sm:py-20">
      <PageHeader
        command="cat experiencias.log"
        title="Experiências profissionais"
        description="Minha trajetória profissional, responsabilidades e principais entregas em cada posição."
      />

      <ol className="relative space-y-8 border-l border-border pl-6 sm:pl-8">
        {experiences.map((exp, i) => (
          <li key={i} className="relative">
            <span
              className="absolute -left-[calc(1.5rem+1px)] top-1.5 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-primary ring-4 ring-background sm:-left-[calc(2rem+1px)]"
              aria-hidden="true"
            />
            <article className="rounded-xl border border-border bg-card p-5 sm:p-6">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                <Briefcase className="h-4 w-4 text-primary" aria-hidden="true" />
                <h2 className="text-lg font-semibold">{exp.role}</h2>
                <span className="text-muted-foreground">·</span>
                <span className="font-medium text-primary">{exp.company}</span>
              </div>

              <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 font-mono text-xs text-muted-foreground">
                <span>{exp.period}</span>
                <span aria-hidden="true">•</span>
                <span>{exp.type}</span>
              </div>

              <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
                {exp.description}
              </p>

              <ul className="mt-4 space-y-2">
                {exp.highlights.map((h, j) => (
                  <li key={j} className="flex gap-2 text-pretty leading-relaxed">
                    <ChevronRight
                      className="mt-1 h-4 w-4 shrink-0 text-primary"
                      aria-hidden="true"
                    />
                    <span className="text-muted-foreground">{h}</span>
                  </li>
                ))}
              </ul>

              <ul className="mt-4 flex flex-wrap gap-2">
                {exp.tech.map((t) => (
                  <li
                    key={t}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          </li>
        ))}
      </ol>
    </main>
  )
}
