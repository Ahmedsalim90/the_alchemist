import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import FeaturedProjectCard from '../components/work/FeaturedProjectCard'
import ProjectCard from '../components/work/ProjectCard'
import { projects } from '../data/projects'

function SelectedWork() {
  const featured = projects.filter((p) => p.featured)
  const secondary = projects.filter((p) => !p.featured)

  return (
    <Section id="work" surface="surface">
      <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
        <Reveal direction="down">
          <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            Selected Work
          </p>
          <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Projects built to solve real problems.
          </h2>
          <p className="mt-4 max-w-xl text-base text-foreground-secondary">
            A selection of web, mobile, backend and AI-powered projects built
            while learning, experimenting and solving real problems.
          </p>
        </Reveal>
      </div>

              <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16">
        {featured.map((project, index) => (
          <FeaturedProjectCard
            key={project.id}
            project={project}
            delay={index * 80}
          />
        ))}
      </div>

      <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:mt-20 lg:grid-cols-3">
        {secondary.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 80} />
        ))}
      </div>
    </Section>
  )
}

export default SelectedWork