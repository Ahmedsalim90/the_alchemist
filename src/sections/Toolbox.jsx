import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import ToolCategory from '../components/toolbox/ToolCategory'
import ToolTag from '../components/toolbox/ToolTag'
import { toolboxCategories, currentlyLearning } from '../data/toolbox'

function Toolbox() {
  return (
    <Section id="toolbox" surface="background">
      <Reveal direction="down" className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          The Toolbox
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          Tools I use to build.
        </h2>
        <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
          A practical stack built around software development, system
          design, mobile applications, AI-powered tools and the
          technologies I'm currently learning.
        </p>
      </Reveal>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
        {toolboxCategories.map((category, index) => (
          <ToolCategory
            key={category.title}
            category={category}
            delay={index * 70}
          />
        ))}
      </div>

      <Reveal delay={toolboxCategories.length * 70} className="mt-12 lg:mt-16">
        <div className="border-t border-accent/40 pt-5">
          <p className="text-xs font-semibold uppercase tracking-widest text-accent">
            Currently Learning
          </p>
          <p className="mt-1 text-xs uppercase tracking-widest text-foreground-muted">
            {currentlyLearning.label}
          </p>
          <div className="mt-3 flex flex-wrap gap-2">
            {currentlyLearning.items.map((item) => (
              <ToolTag key={item} accent>
                {item}
              </ToolTag>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  )
}

export default Toolbox