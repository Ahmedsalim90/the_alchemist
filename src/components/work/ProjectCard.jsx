import Reveal from '../ui/Reveal'
import ProjectImage from './ProjectImage'
import CategoryBadge from './CategoryBadge'

function ProjectCard({ project, delay = 0 }) {
  const link = project.links[0]

  return (
    <Reveal delay={delay} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-200 hover:border-accent/60">
        <div className="p-3">
          <div className="transition-transform duration-300 group-hover:scale-[1.015]">
            <ProjectImage
              label={project.title}
              alt={`${project.title} project preview`}
            />
          </div>
        </div>

        <div className="flex flex-1 flex-col px-5 pb-5">
          <CategoryBadge>{project.category}</CategoryBadge>

          <h3 className="mt-3 font-display text-lg font-bold text-foreground">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
            {project.description}
          </p>

          {project.tech.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-border px-2 py-0.5 text-[11px] text-foreground-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          {link && (
            
            <a  
            href={link.href}
              target="_blank"
              rel="noreferrer"
              className="group/link mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
            >
              {link.label}
              <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                →
              </span>
            </a>
          )}
        </div>
      </article>
    </Reveal>
  )
}

export default ProjectCard