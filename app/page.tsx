import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { SocialLinks } from '@/components/social-links'
import { TerminalWindow } from '@/components/terminal-window'
import { profile, skills } from '@/lib/portfolio-data'

export default function HomePage() {
  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6">
      {/* Hero */}
      <section className="grid items-center gap-10 py-16 sm:py-24 md:grid-cols-2">
        <div>
          <p className="mb-4 font-mono text-sm text-primary">{'// olá, mundo'}</p>
          <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            {profile.name}
          </h1>
          <p className="mt-2 font-mono text-lg text-primary">{profile.role}</p>
          <p className="mt-6 max-w-md text-pretty leading-relaxed text-muted-foreground">
            {profile.tagline}
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projetos"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Ver projetos
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/formacao"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-2.5 font-mono text-sm font-medium text-foreground transition-colors hover:border-primary hover:text-primary"
            >
              Formação
            </Link>
          </div>

          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>

        <TerminalWindow title="eduardo.sh">
          <div className="space-y-1.5">
            <p>
              <span className="text-primary">const</span>{' '}
              <span className="text-foreground">dev</span> = {'{'}
            </p>
            <p className="pl-4 text-muted-foreground">
              nome: <span className="text-primary/90">'{profile.name}'</span>,
            </p>
            <p className="pl-4 text-muted-foreground">
              area: <span className="text-primary/90">'back-end'</span>,
            </p>
            <p className="pl-4 text-muted-foreground">
              stack: [
              {skills.map((s, i) => (
                <span key={s.name}>
                  <span className="text-primary/90">'{s.name}'</span>
                  {i < skills.length - 1 ? ', ' : ''}
                </span>
              ))}
              ],
            </p>
            <p className="pl-4 text-muted-foreground">
              local: <span className="text-primary/90">'{profile.location}'</span>,
            </p>
            <p>
              {'}'}
              <span className="ml-1 inline-block h-4 w-2 animate-pulse bg-primary align-middle" />
            </p>
          </div>
        </TerminalWindow>
      </section>

      {/* Sobre */}
      <section className="border-t border-border py-16">
        <p className="mb-6 font-mono text-sm text-primary">{'// sobre mim'}</p>
        <div className="grid gap-4 md:grid-cols-3">
          {profile.about.map((paragraph, i) => (
            <p key={i} className="text-pretty leading-relaxed text-muted-foreground">
              {paragraph}
            </p>
          ))}
        </div>
      </section>

      {/* Stack resumido */}
      <section className="border-t border-border py-16">
        <div className="flex items-baseline justify-between">
          <p className="font-mono text-sm text-primary">{'// stack principal'}</p>
          <Link
            href="/habilidades"
            className="font-mono text-xs text-muted-foreground transition-colors hover:text-primary"
          >
            ver todas →
          </Link>
        </div>
        <ul className="mt-6 flex flex-wrap gap-3">
          {skills.map((s) => (
            <li
              key={s.name}
              className="rounded-md border border-border bg-card px-4 py-2 font-mono text-sm"
            >
              {s.name}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
