import Reveal from '../ui/Reveal'

function ProcessLine({ steps }) {
  return (
    <Reveal>
      <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:gap-0">
        {steps.map((step, index) => (
          <div key={step} className="flex flex-1 items-center gap-4 sm:flex-col sm:items-start sm:gap-3">
            <div className="flex items-center gap-3 sm:w-full">
              <span className="text-xs font-semibold text-accent">
                {String(index + 1).padStart(2, '0')}
              </span>
              <span className="h-px flex-1 bg-border sm:hidden" aria-hidden="true" />
            </div>
            <p className="text-xs font-semibold uppercase tracking-widest text-foreground">
              {step}
            </p>
            <span className="hidden h-px w-full bg-border sm:block" aria-hidden="true" />
          </div>
        ))}
      </div>
    </Reveal>
  )
}

export default ProcessLine