import Reveal from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'
import { Mail, Phone, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/icons'

const methodIcons = { Email: Mail, WhatsApp: WhatsappIcon, Phone, LinkedIn: LinkedinIcon, GitHub: GithubIcon }

function ContactMethod({ method, delay = 0 }) {
  const { t } = useLanguage()
  const translated = t.contact.methods[method.label]
  const Icon = methodIcons[method.label] || ArrowUpRight

  const externalProps = method.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Reveal delay={delay}>
      
        <a
        href={method.href}
        aria-label={method.ariaLabel}
        {...externalProps}
        className="group flex items-start gap-4 rounded-lg border border-border bg-surface p-5 transition-colors duration-200 hover:border-accent/60 card-lift sm:p-6"
      >
        <span className={`grid h-11 w-11 shrink-0 place-items-center rounded-md border border-border bg-elevated contact-icon-${method.label.toLowerCase()}`}>
          <Icon className="h-5 w-5" />
        </span>
        <span className="min-w-0">
          <span className="block text-xs uppercase tracking-widest text-foreground-muted">{translated.label}</span>
          <span className="mt-2 block break-words text-sm font-semibold text-foreground sm:text-base">{method.value}</span>
          <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-secondary transition-colors group-hover:text-accent">
            {translated.action}<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </span>
        </span>
      </a>
    </Reveal>
  )
}

export default ContactMethod