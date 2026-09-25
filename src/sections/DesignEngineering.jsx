import { Link } from 'react-router-dom'
import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import CapabilityBlock from '../components/design-engineering/CapabilityBlock'
import ProcessLine from '../components/design-engineering/ProcessLine'
import { capabilities, processSteps } from '../data/capabilities'

function DesignEngineering() {
  return (
    <Section id="design-engineering" surface="surface">
      <Reveal direction="down" className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          Design + Engineering
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          From idea to implementation.
        </h2>
        <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
          I combine design thinking, system architecture and software
          development to turn ideas and real-world problems into usable
          digital products.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8 lg:mt-16">
        {capabilities.map((capability, index) => (
          <CapabilityBlock
            key={capability.title}
            capability={capability}
            delay={index * 80}
          />
        ))}
      </div>

      <div className="mt-16 border-t border-border pt-12 lg:mt-20">
        <ProcessLine steps={processSteps} />
      </div>

      <Reveal className="mt-12 border-t border-border pt-8">
        <Link
          to="/work/infraai"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
        >
          See this approach in InfraAI
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </Reveal>
    </Section>
  )
}

export default DesignEngineering