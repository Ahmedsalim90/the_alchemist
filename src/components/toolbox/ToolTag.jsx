function ToolTag({ children, accent = false }) {
  return (
    <span
      className={`inline-block rounded border px-3 py-1.5 text-sm transition-colors duration-200 ${
        accent
          ? 'border-accent/40 text-accent hover:border-accent'
          : 'border-border text-foreground-secondary hover:border-foreground-secondary'
      }`}
    >
      {children}
    </span>
  )
}

export default ToolTag