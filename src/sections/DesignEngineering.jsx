import { Link } from 'react-router-dom'
import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import CapabilityBlock from '../components/design-engineering/CapabilityBlock'
import ProcessLine from '../components/design-engineering/ProcessLine'
import { capabilities } from '../data/capabilities'
import { useLanguage } from '../context/LanguageContext'

function DesignEngineering() {
  const { t } = useLanguage()

  const mergedCapabilities = capabilities.map((capability, index) => ({
    items: capability.items,
    title: t.designEngineering.capabilities[index].title,
    description: t.designEngineering.capabilities[index].description,
    itemsLabel: t.designEngineering.capabilities[index].itemsLabel,
  }))

  return (
    <Section id="design-engineering" surface="surface">
      <Reveal direction="down" className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {t.designEngineering.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t.designEngineering.heading}
        </h2>
        <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
          {t.designEngineering.description}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
        {mergedCapabilities.map((capability, index) => (
          <CapabilityBlock
            key={capability.title}
            capability={capability}
            delay={index * 80}
          />
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12 lg:mt-20">
        <ProcessLine steps={t.designEngineering.process} />
      </div>

      <Reveal className="mt-12 border-t border-border pt-8">
        <Link
          to="/work/infraai"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
        >
          {t.designEngineering.infraaiLink}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Reveal>
    </Section>
  )
}

export default DesignEngineering