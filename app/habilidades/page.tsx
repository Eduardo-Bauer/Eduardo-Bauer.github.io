import { PageHeader } from '@/components/page-header'
import { skills, otherSkills } from '@/lib/portfolio-data'
import Image from 'next/image'

export const metadata = {
  title: 'Habilidades — Eduardo Bauer',
}

export default function HabilidadesPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-16 sm:px-6">
      <PageHeader
        title="Habilidades"
        description="Linguagens, tecnologias e competências."
      />

      <div className="mt-12 grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_auto_1fr] md:gap-8 lg:gap-8">
        
        {/* Coluna Esquerda: Tecnologias e Ferramentas */}
        <section className="flex w-full flex-col items-center md:items-start">
          <h2 className="mb-5 w-full text-center text-xl font-bold leading-tight md:min-h-[3.5rem] md:text-left">
            Tecnologias e Ferramentas
          </h2>
          
          {/* Grid de Cards Quadrados */}
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {skills.map((skill) => {
              // REMOVIDO A LÓGICA ANTIGA E SUBSTITUÍDA PELA PROPRIEDADE DIRETA
              return (
                <div
                  key={skill.name}
                  className="flex h-24 w-24 flex-col items-center justify-center rounded-2xl border border-border bg-card p-3 transition-colors hover:border-primary sm:h-28 sm:w-28"
                >
                  <div className="relative mb-2 h-10 w-10">
                    <Image 
                      src={skill.icon} // PUXA O CAMINHO EXATO DO ARQUIVO DE DADOS
                      alt={`Ícone do ${skill.name}`} 
                      fill
                      className="object-contain"
                      unoptimized // <--- MUITO IMPORTANTE PARA FUNCIONAR NO GITHUB PAGES
                    />
                  </div>
                  <span className="text-center text-sm font-semibold mt-1">{skill.name}</span>
                </div>
              )
            })}
          </div>
        </section>

        {/* Linha Divisória Vertical */}
        <div className="hidden min-h-[300px] w-px bg-border md:block" />

        {/* Coluna Direita: Competências e Soft-Skills */}
        <section className="flex w-full flex-col items-center md:items-start">
          
          <h2 className="mb-5 w-full text-center text-xl font-bold leading-tight md:min-h-[3.5rem] md:text-left">
            Soft-Skills
          </h2>
          
          <ul className="list-inside list-disc space-y-3 text-sm text-muted-foreground sm:text-base">
            {otherSkills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>

        </section>
      </div>
    </main>
  )
}