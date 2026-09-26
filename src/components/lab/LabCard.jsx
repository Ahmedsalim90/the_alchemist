import Reveal from '../ui/Reveal'

function LabCard({ item, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-lg border border-border bg-background p-6">
        <div className="flex items-center justify-between gap-3">
          <h3 className="font-display text-lg font-bold text-foreground">
            {item.title}
          </h3>
          <span className="whitespace-nowrap rounded border border-accent/40 px-2 py-1 text-[10px] font-semibold uppercase tracking-widest text-accent">
            {item.status}
          </span>
        </div>
        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
          {item.description}
        </p>
      </div>
    </Reveal>
  )
}

export default LabCard