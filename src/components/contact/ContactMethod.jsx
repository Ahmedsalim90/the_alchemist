import Reveal from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

function ContactMethod({ method, delay = 0 }) {
  const { t } = useLanguage()
  const translated = t.contact.methods[method.label]

  const externalProps = method.external
    ? { target: '_blank', rel: 'noopener noreferrer' }
    : {}

  return (
    <Reveal delay={delay}>
      
        <a
        href={method.href}
        aria-label={method.ariaLabel}
        {...externalProps}
        className="group block rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/60"
      >
        <p className="text-xs uppercase tracking-widest text-foreground-muted">
          {translated.label}
        </p>
        <p className="mt-2 text-base font-semibold text-foreground">
          {method.value}
        </p>
        <span className="mt-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground-secondary transition-colors group-hover:text-accent">
          {translated.action}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>
    </Reveal>
  )
}

export default ContactMethod