import { Link } from 'react-router-dom'
import Reveal from '../ui/Reveal'
import ProjectImage from './ProjectImage'
import CategoryBadge from './CategoryBadge'

function FeaturedProjectCard({ project, delay = 0 }) {
  return (
    <Reveal delay={delay} className="group">
      <article className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-surface transition-colors duration-200 hover:border-accent/60">
        <Link to={`/work/${project.id}`} className="p-3">
          <div className="transition-transform duration-300 group-hover:scale-[1.015]">
            <ProjectImage
  label={project.title}
  alt={`${project.title} logo`}
  image={project.image}
/>
          </div>
        </Link>

        <div className="flex flex-1 flex-col px-6 pb-6">
          <div className="flex flex-wrap items-center gap-2">
            <CategoryBadge>{project.category}</CategoryBadge>
            {project.teamProject && (
              <span className="rounded border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
                Team Project
              </span>
            )}
          </div>

          <Link to={`/work/${project.id}`}>
            <h3 className="mt-4 font-display text-2xl font-bold text-foreground transition-colors hover:text-accent">
              {project.title}
            </h3>
          </Link>

          <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
            {project.description}
          </p>

          {project.tech.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <li
                  key={tech}
                  className="rounded border border-border px-2 py-1 text-[11px] text-foreground-secondary"
                >
                  {tech}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <Link
              to={`/work/${project.id}`}
              className="group/link inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
            >
              Case Study
              <span className="inline-block transition-transform duration-200 group-hover/link:translate-x-1">
                →
              </span>
            </Link>
            {project.links.map((link) => (
              
              <a 
              key={link.href}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-semibold uppercase tracking-widest text-foreground-secondary transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export default FeaturedProjectCard