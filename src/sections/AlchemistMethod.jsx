import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import MethodStage from '../components/method/MethodStage'
import { methodSteps } from '../data/methodSteps'

function AlchemistMethod() {
  return (
    <Section id="method" surface="background">
      <Reveal direction="down" className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          The Alchemist Method
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          How I turn problems into software.
        </h2>
        <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
          I start with the problem, shape the solution, build it, test it,
          and keep refining it until an idea becomes something useful.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-5 lg:gap-0">
        {methodSteps.map((step, index) => (
          <MethodStage
            key={step.number}
            step={step}
            delay={index * 80}
            isLast={index === methodSteps.length - 1}
          />
        ))}
      </div>

      <Reveal className="mt-16 border-t border-border pt-8 lg:mt-20">
        <p className="text-xs uppercase tracking-widest text-foreground-muted">
          Think. Build. Transform.
        </p>
      </Reveal>
    </Section>
  )
}

export default AlchemistMethod