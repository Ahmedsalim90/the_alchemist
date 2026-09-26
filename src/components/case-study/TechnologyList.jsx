function TechnologyList({ build, categoryLabels }) {
  if (!build) return null

  return (
    <dl className="grid gap-6 sm:grid-cols-2">
      {Object.entries(build).map(([category, items]) => (
        <div key={category}>
          <dt className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
            {categoryLabels?.[category] || category}
          </dt>
          <dd className="mt-2 text-sm text-foreground">{items.join(' · ')}</dd>
        </div>
      ))}
    </dl>
  )
}

export default TechnologyList