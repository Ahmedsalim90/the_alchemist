import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ContactMethod from '../components/contact/ContactMethod'
import { contactMethods, whatsappUrl } from '../data/contact'
import { useLanguage } from '../context/LanguageContext'

function Contact() {
  const { t } = useLanguage()

  return (
    <Section id="contact" surface="elevated">
      <div className="grid gap-12 lg:grid-cols-[3fr_2fr] lg:gap-16">
        <div>
          <Reveal direction="down">
            <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {t.contact.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl lg:text-5xl">
              {t.contact.headingLine1}
              <br />
              <span className="text-accent">{t.contact.headingLine2}</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-foreground-secondary sm:text-lg">
              {t.contact.description}
            </p>
          </Reveal>

          <Reveal delay={100} className="mt-8">
            <Button href={whatsappUrl} variant="primary" target="_blank" rel="noopener noreferrer">
              {t.contact.cta}
            </Button>
          </Reveal>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
          {contactMethods.map((method, index) => (
            <ContactMethod key={method.label} method={method} delay={index * 70} />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Contact