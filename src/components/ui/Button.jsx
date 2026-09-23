function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold tracking-wide transition-colors duration-200'

  const variants = {
    primary: 'bg-accent text-background hover:bg-accent/90',
    secondary:
      'bg-transparent text-foreground border border-border hover:border-accent hover:text-accent',
  }

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button