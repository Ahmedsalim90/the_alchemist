function AcademicJourney({ steps }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
        Academic Journey
      </p>
      <ul className="mt-3 flex flex-col gap-2">
        {steps.map((step, index) => (
          <li key={step} className="flex items-center gap-3 text-sm text-foreground-secondary">
            <span className="text-xs text-accent">{String(index + 1).padStart(2, '0')}</span>
            {step}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default AcademicJourney