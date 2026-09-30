import Reveal from '../ui/Reveal'
import ToolTag from './ToolTag'

function ToolCategory({ category, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-lg border border-border bg-surface/70 p-5 backdrop-blur-sm card-lift sm:p-6">
        <div className="mb-5 h-px w-10 bg-accent" aria-hidden="true" />
        <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground">
          {category.title}
        </h3>
        <div className="mt-4 flex flex-wrap gap-2.5">
          {category.items.map((item) => (
            <ToolTag key={item}>{item}</ToolTag>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default ToolCategory