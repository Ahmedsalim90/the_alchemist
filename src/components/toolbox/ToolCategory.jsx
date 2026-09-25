import Reveal from '../ui/Reveal'
import ToolTag from './ToolTag'

function ToolCategory({ category, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <div className="border-t border-border pt-5">
        <h3 className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
          {category.title}
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {category.items.map((item) => (
            <ToolTag key={item}>{item}</ToolTag>
          ))}
        </div>
      </div>
    </Reveal>
  )
}

export default ToolCategory