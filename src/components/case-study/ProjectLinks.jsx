function ProjectLinks({ links }) {
  if (!links || links.length === 0) return null

  return (
    <div className="flex flex-wrap gap-x-8 gap-y-3">
      {links.map((link) => (
        <a
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
        >
          {link.label}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      ))}
    </div>
  )
}

export default ProjectLinks