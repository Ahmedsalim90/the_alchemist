import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import ContributionSnapshot from '../components/github/ContributionSnapshot'
import RepositoryCard from '../components/github/RepositoryCard'
import { githubProfile, contributionSnapshot, repositories } from '../data/repositories'
import { useLanguage } from '../context/LanguageContext'

function GithubCode() {
  const { t } = useLanguage()

  return (
    <Section id="code" surface="background">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal direction="down" className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {t.github.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            {t.github.heading}
          </h2>
          <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
            {t.github.description}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <ContributionSnapshot
            count={contributionSnapshot.count}
            label={t.github.contributionLabel}
            context={t.github.contributionContext}
          />
        </Reveal>
      </div>

      <Reveal delay={120}>
        
          <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="group mt-8 inline-flex items-center gap-2 rounded-md bg-accent px-9 py-4 text-base font-semibold tracking-wide text-background transition-colors duration-200 hover:bg-accent/90"
        >
          {t.github.viewGithub}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>

      <div className="mt-16 border-t border-border pt-12 lg:mt-20">
        <Reveal>
          <p className="text-xs uppercase tracking-widest text-foreground-muted">
            {t.github.featured}
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {repositories.map((repo, index) => (
            <RepositoryCard key={repo.id} repo={repo} delay={index * 70} />
          ))}
        </div>
      </div>

      <Reveal delay={repositories.length * 70} className="mt-12 border-t border-border pt-8 lg:mt-16">
        
          <a
          href={githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
        >
          {t.github.viewAll}
          <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
            →
          </span>
        </a>
      </Reveal>
    </Section>
  )
}

export default GithubCode