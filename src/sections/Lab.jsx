import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import LabCard from '../components/lab/LabCard'
import ToolTag from '../components/toolbox/ToolTag'
import { buildingItems, learningItems } from '../data/labItems'
import { useLanguage } from '../context/LanguageContext'

function Lab() {
  const { t } = useLanguage()

  const mergedItems = buildingItems.map((item) => ({
    ...item,
    status: t.lab.status,
    description: t.lab.items[item.id],
  }))

  return (
    <Section id="lab" surface="background">
      <Reveal direction="down" className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {t.lab.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t.lab.heading}
        </h2>
        <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
          {t.lab.description}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16">
        {mergedItems.map((item, index) => (
          <LabCard key={item.id} item={item} delay={index * 80} />
        ))}
      </div>

      <Reveal delay={mergedItems.length * 80} className="mt-12 border-t border-accent/40 pt-6 lg:mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {t.lab.learningLabel}
        </p>
        <p className="mt-1 text-xs uppercase tracking-widest text-foreground-muted">
          {t.lab.learningNote}
        </p>
        <div className="mt-3 flex flex-wrap gap-2">
          {learningItems.items.map((item) => (
            <ToolTag key={item} accent>
              {item}
            </ToolTag>
          ))}
        </div>
      </Reveal>
    </Section>
  )
}

export default Lab