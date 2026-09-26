import Reveal from '../ui/Reveal'

function CollaborationStep({ step, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-border pt-4">
        <div className="flex items-baseline gap-3">
          <span className="text-xs font-semibold text-accent">{step.number}</span>
          <h3 className="font-display text-base font-bold uppercase tracking-wide text-foreground">
            {step.title}
          </h3>
        </div>
        <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
          {step.description}
        </p>
      </div>
    </Reveal>
  )
}

export default CollaborationStep