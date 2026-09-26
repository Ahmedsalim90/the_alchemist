function ProjectImage({ label, alt, image }) {
  if (image) {
    return (
      <div className="flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-border bg-elevated p-8">
        <img src={image} alt={alt} className="max-h-full max-w-full object-contain" />
      </div>
    )
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className="relative flex aspect-video w-full items-center justify-center overflow-hidden rounded-md border border-border bg-elevated"
    >
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(to_right,var(--border-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-color)_1px,transparent_1px)] [background-size:24px_24px]" />
      <p className="relative text-[11px] font-semibold uppercase tracking-widest text-foreground-muted">
        {label} — screenshot coming soon
      </p>
    </div>
  )
}

export default ProjectImage