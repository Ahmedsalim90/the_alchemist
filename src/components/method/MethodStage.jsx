import Reveal from '../ui/Reveal'

function MethodStage({ step, delay = 0, isLast = false }) {
  return (
    <Reveal delay={delay} className="group h-full">
      <div
        className={`flex h-full flex-col border-t pt-6 transition-colors duration-200 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0 ${
          isLast
            ? 'border-accent/60 group-hover:border-accent'
            : 'border-border group-hover:border-foreground-secondary'
        }`}
      >
        <p
          className={`text-xs font-semibold ${
            isLast ? 'text-accent' : 'text-foreground-muted'
          }`}
        >
          {step.number}
        </p>
        <h3 className="mt-3 font-display text-lg font-bold uppercase tracking-wide text-foreground transition-colors group-hover:text-accent sm:text-xl">
          {step.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
          {step.description}
        </p>
      </div>
    </Reveal>
  )
}

export default MethodStage