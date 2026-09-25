function Button({ children, variant = 'primary', href, className = '', ...props }) {
  const base =
  'group inline-flex items-center justify-center gap-2.5 rounded-md px-9 py-4 text-base font-semibold tracking-wide transition-colors duration-200'
  
  const variants = {
    primary: 'bg-accent text-background hover:bg-accent/90',
    secondary:
      'bg-transparent text-foreground border border-border hover:border-accent hover:text-accent',
  }

  const classes = `${base} ${variants[variant]} ${className}`

  let content = children
  if (typeof children === 'string' && children.trim().endsWith('→')) {
    const label = children.trim().slice(0, -1).trim()
    content = (
      <>
        {label}
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:transform-none">
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