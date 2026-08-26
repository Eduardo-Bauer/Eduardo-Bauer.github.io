'use client'

import { Mail } from 'lucide-react'
import { GithubIcon, LinkedinIcon, InstagramIcon } from '@/components/brand-icons'
import { social } from '@/lib/portfolio-data'
import { cn } from '@/lib/utils'

const links = [
  { href: social.github, label: 'GitHub', icon: GithubIcon },
  { href: social.linkedin, label: 'LinkedIn', icon: LinkedinIcon },
  { href: social.instagram, label: 'Instagram', icon: InstagramIcon },
  { href: `mailto:${social.email}`, label: 'E-mail', icon: Mail },
]

export function SocialLinks({ size = 'md' }: { size?: 'sm' | 'md' }) {
  const handleEmailClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault() // Impede que o navegador tente abrir o app de e-mail
    navigator.clipboard.writeText(social.email)
    alert('E-mail copiado com sucesso!')
  }

  return (
    <ul className="flex items-center gap-2">
      {links.map(({ href, label, icon: Icon }) => {
        const isEmail = href.startsWith('mailto:')

        return (
          <li key={label}>
            <a
              href={isEmail ? '#' : href}
              onClick={isEmail ? handleEmailClick : undefined}
              target={isEmail ? undefined : '_blank'}
              rel="noopener noreferrer"
              aria-label={label}
              className={cn(
                'flex items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:border-primary hover:text-primary',
                size === 'sm' ? 'h-8 w-8' : 'h-10 w-10',
              )}
            >
              <Icon className={size === 'sm' ? 'h-4 w-4' : 'h-5 w-5'} aria-hidden="true" />
            </a>
          </li>
        )
      })}
    </ul>
  )
}