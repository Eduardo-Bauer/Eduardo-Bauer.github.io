import { GraduationCap, Award } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { education, courses } from '@/lib/portfolio-data'

export const metadata = {
  title: 'Formação — Eduardo Bauer',
}

export default function FormacaoPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PageHeader
        command="cat formacao.md"
        title="Formação acadêmica"
        description="Minha trajetória acadêmica, cursos e certificações."
      />

      {/* Formação */}
      <section className="mb-16">
        <h2 className="mb-6 flex items-center gap-2 font-mono text-sm text-primary">
          <GraduationCap className="h-4 w-4" aria-hidden="true" />
          formacoes
        </h2>

        <ol className="relative space-y-8 border-l border-border pl-6">
          {education.map((item, i) => (
            <li key={i} className="relative">
              <span
                className="absolute -left-[27px] top-1.5 h-3 w-3 rounded-full border-2 border-primary bg-background"
                aria-hidden="true"
              />
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-mono text-lg font-semibold">{item.course}</h3>
                <span className="rounded-full border border-border px-2.5 py-0.5 font-mono text-xs text-muted-foreground">
                  {item.status}
                </span>
              </div>
              <p className="mt-1 text-sm text-primary">{item.institution}</p>
              <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
              <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </li>
          ))}
        </ol>
      </section>

      {/* Cursos */}
      <section>
        <h2 className="mb-6 flex items-center gap-2 font-mono text-sm text-primary">
          <Award className="h-4 w-4" aria-hidden="true" />
          cursos_e_certificacoes
        </h2>

        <div className="grid gap-4 sm:grid-cols-2">
          {courses.map((course, i) => (
            <div
              key={i}
              className="rounded-lg border border-border bg-card p-5 transition-colors hover:border-primary/50"
            >
              <div className="flex items-start justify-between gap-3">
                <h3 className="font-medium leading-snug">{course.title}</h3>
                <span className="shrink-0 font-mono text-xs text-muted-foreground">
                  {course.year}
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">{course.provider}</p>
              <p className="mt-3 font-mono text-xs text-primary">{course.hours}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
