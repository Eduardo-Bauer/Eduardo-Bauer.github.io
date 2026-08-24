import { PageHeader } from '@/components/page-header'
import { skills, otherSkills } from '@/lib/portfolio-data'

export const metadata = {
  title: 'Habilidades — Eduardo Bauer',
}

export default function HabilidadesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PageHeader
        command="./listar_habilidades.sh"
        title="Habilidades"
        description="Linguagens, tecnologias e competências que utilizo no dia a dia."
      />

      {/* Barras de nível */}
      <section className="mb-16">
        <h2 className="mb-6 font-mono text-sm text-primary">{'// linguagens & bancos'}</h2>
        <div className="space-y-6">
          {skills.map((skill) => (
            <div key={skill.name}>
              <div className="mb-2 flex items-baseline justify-between font-mono text-sm">
                <span className="font-medium">{skill.name}</span>
                <span className="text-xs text-muted-foreground">{skill.category}</span>
              </div>
              <div
                className="h-2 overflow-hidden rounded-full bg-secondary"
                role="progressbar"
                aria-valuenow={skill.level}
                aria-valuemin={0}
                aria-valuemax={100}
                aria-label={skill.name}
              >
                <div
                  className="h-full rounded-full bg-primary"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Outras habilidades */}
      <section>
        <h2 className="mb-6 font-mono text-sm text-primary">{'// competências complementares'}</h2>
        <ul className="flex flex-wrap gap-3">
          {otherSkills.map((skill) => (
            <li
              key={skill}
              className="rounded-md border border-border bg-card px-4 py-2 font-mono text-sm text-muted-foreground"
            >
              <span className="mr-1.5 text-primary">▹</span>
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </main>
  )
}
