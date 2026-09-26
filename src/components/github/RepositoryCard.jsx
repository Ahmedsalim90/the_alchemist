import Reveal from '../ui/Reveal'
import { useLanguage } from '../../context/LanguageContext'

function RepositoryCard({ repo, delay = 0 }) {
  const { t } = useLanguage()

  return (
    <Reveal delay={delay}>
      
        <a
        href={repo.url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`View ${repo.name} repository on GitHub`}
        className="group block h-full rounded-lg border border-border bg-surface p-6 transition-colors duration-200 hover:border-accent/60"
      >
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="font-display text-lg font-bold text-foreground">
            {repo.name}
          </h3>
          {repo.teamProject && (
            <span className="rounded border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
              {t.github.teamProject}
            </span>
          )}
        </div>

        <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
          {t.github.repositories[repo.id]}
        </p>

        <p className="mt-4 text-xs text-foreground-secondary">
          {repo.tech.join(' · ')}
        </p>

        <span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors group-hover:text-accent">
          {t.github.viewRepository}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </span>
      </a>
    </Reveal>
  )
}

export default RepositoryCard