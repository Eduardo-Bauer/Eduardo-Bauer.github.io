import type { ReactNode } from 'react'

export function TerminalWindow({
  title = 'bash',
  children,
}: {
  title?: string
  children: ReactNode
}) {
  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card shadow-lg">
      <div className="flex items-center gap-2 border-b border-border bg-secondary px-4 py-2.5">
        <span className="h-3 w-3 rounded-full bg-destructive/80" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-primary/40" aria-hidden="true" />
        <span className="h-3 w-3 rounded-full bg-primary/70" aria-hidden="true" />
        <span className="ml-2 font-mono text-xs text-muted-foreground">{title}</span>
      </div>
      <div className="p-5 font-mono text-sm leading-relaxed sm:p-6">{children}</div>
    </div>
  )
}
