export function PageHeader({
  command,
  title,
  description,
}: {
  command: string
  title: string
  description?: string
}) {
  return (
    <div className="mb-10">
      <p className="mb-3 font-mono text-sm text-primary">
        <span className="text-muted-foreground">eduardo@portfolio:~$</span> {command}
      </p>
      <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">{title}</h1>
      {description && (
        <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      )}
    </div>
  )
}
