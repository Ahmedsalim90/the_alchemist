import { Link } from 'react-router-dom'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { useLanguage } from '../../context/LanguageContext'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/icons'
import { githubProfile } from '../../data/repositories'
import { whatsappUrl, contactMethods } from '../../data/contact'

function Footer() {
  const { t } = useLanguage()
  const linkedinUrl = contactMethods.find((m) => m.label === 'LinkedIn').href
  const emailUrl = contactMethods.find((m) => m.label === 'Email').href

  const exploreLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.lab, href: '#lab' },
    { label: t.nav.contact, href: '#contact' },
  ]

  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <Logo />
              <span className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
                The Alchemist
              </span>
            </div>
            <p className="mt-4 text-sm font-semibold text-foreground">Nsangou Ahmed Salim</p>
            <p className="mt-1 text-sm text-foreground-secondary">{t.footer.role}</p>
            <p className="mt-1 text-xs uppercase tracking-widest text-foreground-muted">
              {t.footer.identity}
            </p>
            <p className="mt-3 text-xs uppercase tracking-widest text-foreground-muted">
              {t.footer.location}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              {t.footer.explore}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-foreground-secondary transition-colors hover:text-accent">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              {t.footer.code}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href={githubProfile} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-secondary transition-colors hover:text-accent">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#work" className="text-sm text-foreground-secondary transition-colors hover:text-accent">
                  {t.footer.selectedWork}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
              {t.footer.connect}
            </p>
            <ul className="mt-4 flex flex-col gap-3">
              <li>
                <a href={emailUrl} className="text-sm text-foreground-secondary transition-colors hover:text-accent">
                  thealchemist237@gmail.com
                </a>
              </li>
              <li>
                <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-secondary transition-colors hover:text-accent">
                  +237 657 576 445
                </a>
              </li>
              <li>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="text-sm text-foreground-secondary transition-colors hover:text-accent">
                  Nsangou Ahmed Salim
                </a>
              </li>
            </ul>
            <div className="mt-5 flex items-center gap-4">
              <a href={githubProfile} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="text-foreground-secondary transition-colors hover:text-accent">
                <GithubIcon className="h-5 w-5" />
              </a>
              <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-foreground-secondary transition-colors hover:text-accent">
                <LinkedinIcon className="h-5 w-5" />
              </a>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="text-foreground-secondary transition-colors hover:text-accent">
                <WhatsappIcon className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-6 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="text-xs uppercase tracking-widest text-foreground-muted">{t.footer.tagline}</p>
            <p className="text-xs text-foreground-muted">{t.footer.copyright}</p>
          </div>
          <div className="flex items-center gap-6">
            <LanguageToggle />
            <ThemeToggle />
          </div>
        </div>
      </Container>
    </footer>
  )
}

export default Footer