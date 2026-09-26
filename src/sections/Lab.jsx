import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import LabCard from '../components/lab/LabCard'
import ToolTag from '../components/toolbox/ToolTag'
import { buildingItems, learningItems } from '../data/labItems'

function Lab() {
  return (
    <Section id="lab" surface="background">
      <Reveal direction="down" className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          The Lab
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Still building.
        </h2>
        <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
          Not everything I'm building is finished. That's part of the
          process. The Lab represents work that is currently in development
          and technologies currently being learned.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:mt-16">
        {buildingItems.map((item, index) => (
          <LabCard key={item.title} item={item} delay={index * 80} />
        ))}
      </div>

      <Reveal delay={buildingItems.length * 80} className="mt-12 border-t border-accent/40 pt-6 lg:mt-16">
        <p className="text-xs font-semibold uppercase tracking-widest text-accent">
          {learningItems.label}
        </p>
        <p className="mt-1 text-xs uppercase tracking-widest text-foreground-muted">
          {learningItems.note}
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