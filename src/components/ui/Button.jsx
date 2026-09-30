function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base =
    'group btn-shine inline-flex items-center justify-center gap-3 rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition-all duration-300 ease-out active:scale-[0.97] sm:px-8 sm:py-4'

  const variants = {
    primary:
      'bg-accent text-background shadow-[0_10px_40px_-12px_var(--glow)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-12px_var(--glow)]',
    secondary:
      'border border-border bg-surface/40 text-foreground backdrop-blur hover:-translate-y-0.5 hover:border-accent hover:text-accent',
  }

  const classes = `${base} ${variants[variant] || variants.primary} ${className}`

  let content = children
  if (typeof children === 'string' && children.trim().endsWith('→')) {
    const label = children.trim().slice(0, -1).trim()
    content = (
      <>
        {label}
        <span
          className={`grid h-6 w-6 place-items-center rounded-full transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transform-none ${
            variant === 'primary' ? 'bg-background/15' : 'bg-accent-soft text-accent'
          }`}
        >
          →
        </span>
      </>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button className={classes} {...props}>
      {content}
    </button>
  )
}

export default Button
