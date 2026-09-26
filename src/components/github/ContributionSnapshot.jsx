function ContributionSnapshot({ count, label, context }) {
  return (
    <div className="inline-flex flex-col items-start rounded-lg border border-border bg-surface px-6 py-5">
      <p className="text-[10px] uppercase tracking-widest text-foreground-muted">
        {context}
      </p>
      <p className="mt-2 font-display text-3xl font-bold text-accent">
        {count}
      </p>
      <p className="mt-1 text-xs uppercase tracking-widest text-foreground-secondary">
        {label}
      </p>
    </div>
  )
}

export default ContributionSnapshot