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
  return (
    <ul className="flex items-center gap-2">
      {links.map(({ href, label, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target={href.startsWith('mailto:') ? undefined : '_blank'}
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
      ))}
    </ul>
  )
}
