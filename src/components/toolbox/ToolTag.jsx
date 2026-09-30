import TechnologyIcon from '../ui/TechnologyIcon'

function ToolTag({ children, accent = false, compact = false }) {
  return (
    <span
      className={`group/tool inline-flex items-center rounded-md border font-medium transition-all duration-300 hover:-translate-y-0.5 ${compact ? 'gap-1.5 px-2.5 py-1 text-xs' : 'gap-2.5 px-3.5 py-2 text-sm'} ${
        accent
          ? 'border-accent/40 bg-accent-soft text-foreground hover:border-accent'
          : 'border-border bg-background/55 text-foreground-secondary hover:border-accent/50 hover:bg-elevated hover:text-foreground'
      }`}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded bg-elevated transition-transform duration-300 group-hover/tool:scale-110">
        <TechnologyIcon name={children} className="h-4 w-4" />
      </span>
      {children}
    </span>
  )
}

export default ToolTag