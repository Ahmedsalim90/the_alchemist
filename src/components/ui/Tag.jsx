function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-block rounded border border-border px-3 py-1 text-xs font-medium uppercase tracking-widest text-foreground-secondary ${className}`}
    >
      {children}
    </span>
  )
}

export default Tag