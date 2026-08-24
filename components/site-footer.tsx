import { SocialLinks } from '@/components/social-links'
import { profile } from '@/lib/portfolio-data'

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row sm:px-6">
        <p className="font-mono text-xs text-muted-foreground">
          <span className="text-primary">$</span> {profile.name.toLowerCase().replace(' ', '_')} —{' '}
          {new Date().getFullYear()}
        </p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  )
}
