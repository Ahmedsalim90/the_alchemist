import Reveal from '../ui/Reveal'

function CapabilityBlock({ capability, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-border pt-6">
        <p className="text-xs font-semibold text-foreground-muted">
          {capability.number}
        </p>
        <h3 className="mt-3 font-display text-xl font-bold uppercase tracking-wide text-foreground sm:text-2xl">
          {capability.title}
        </h3>
        <p className="mt-4 text-sm leading-relaxed text-foreground-secondary sm:text-base">
          {capability.description}
        </p>
        <div className="mt-6">
          <p className="text-[11px] uppercase tracking-widest text-foreground-muted">
            {capability.itemsLabel}
          </p>
          <ul className="mt-2 flex flex-wrap gap-2">
            {capability.items.map((item) => (
              <li
                key={item}
                className="rounded border border-border px-2.5 py-1 text-xs text-foreground-secondary"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  )
}

export default CapabilityBlock