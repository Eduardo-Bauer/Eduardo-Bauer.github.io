'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Menu, X, Terminal } from 'lucide-react'
import { navItems } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

export function SiteNav() {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 sm:px-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-mono text-sm font-semibold text-foreground"
        >
          <Terminal className="h-4 w-4 text-primary" aria-hidden="true" />
          <span>eduardo.bauer</span>
        </Link>

        <ul className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={cn(
                    'rounded-md px-3 py-1.5 font-mono text-sm transition-colors',
                    active
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span className="text-primary/60">/</span>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="rounded-md p-2 text-muted-foreground hover:text-foreground md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {open && (
        <ul className="flex flex-col gap-1 border-t border-border px-4 py-3 md:hidden">
          {navItems.map((item) => {
            const active = pathname === item.href
            return (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    'block rounded-md px-3 py-2 font-mono text-sm transition-colors',
                    active
                      ? 'bg-accent text-primary'
                      : 'text-muted-foreground hover:text-foreground',
                  )}
                >
                  <span className="text-primary/60">/</span>
                  {item.label}
                </Link>
              </li>
            )
          })}
        </ul>
      )}
    </header>
  )
}
