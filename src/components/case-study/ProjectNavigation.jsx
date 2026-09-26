import { Link } from 'react-router-dom'
import { useLanguage } from '../../context/LanguageContext'

function ProjectNavigation({ previous, next }) {
  const { t } = useLanguage()

  if (!previous && !next) return null

  return (
    <div className="flex flex-col gap-6 border-t border-border pt-10 sm:flex-row sm:items-center sm:justify-between">
      <div>
        {previous && (
          <Link
            to={`/work/${previous.id}`}
            className="text-sm font-semibold uppercase tracking-widest text-foreground-secondary transition-colors hover:text-accent"
          >
            ← {previous.title}
          </Link>
        )}
      </div>
      <div className="text-left sm:text-right">
        {next && (
          <Link to={`/work/${next.id}`} className="block text-xs uppercase tracking-widest text-foreground-muted">
            {t.caseStudy.nextProject}
            <span className="mt-1 block text-sm font-semibold text-foreground transition-colors hover:text-accent">
              {next.title} →
            </span>
          </Link>
        )}
      </div>
    </div>
  )
}

export default ProjectNavigation