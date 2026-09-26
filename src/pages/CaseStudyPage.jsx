import { Link, Navigate, useParams } from 'react-router-dom'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import ProjectImage from '../components/work/ProjectImage'
import CaseStudySection from '../components/case-study/CaseStudySection'
import TechnologyList from '../components/case-study/TechnologyList'
import ProjectLinks from '../components/case-study/ProjectLinks'
import ProjectNavigation from '../components/case-study/ProjectNavigation'
import { getProjectBySlug, getAdjacentProjects } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

function CaseStudyPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)
  const { t } = useLanguage()

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  const { previous, next } = getAdjacentProjects(slug)
  const details = t.caseStudies[slug]
  const description = t.projects[slug]

  return (
    <main className="pb-24 pt-16 lg:pt-20">
      <Container>
        <Link
          to="/#work"
          className="text-xs font-semibold uppercase tracking-widest text-foreground-muted transition-colors hover:text-accent"
        >
          {t.caseStudy.back}
        </Link>

        <Reveal direction="down" className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {project.category}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary">{description}</p>
          {project.teamProject && (
            <span className="mt-4 inline-block rounded border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
              {t.caseStudy.teamProject}
            </span>
          )}
        </Reveal>

        <Reveal className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-muted">{t.caseStudy.role}</p>
            <p className="mt-1 text-sm text-foreground">{details.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-muted">{t.caseStudy.type}</p>
            <p className="mt-1 text-sm text-foreground">{details.type}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs uppercase tracking-widest text-foreground-muted">
              {t.caseStudy.technologies}
            </p>
            <p className="mt-1 text-sm text-foreground">{project.tech.join(' · ')}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-muted">{t.caseStudy.status}</p>
            <p className="mt-1 text-sm text-foreground">{details.status}</p>
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <ProjectImage
            label={project.title}
            alt={`${project.title} project preview`}
            image={project.caseStudyImage || project.image}
          />
        </Reveal>

        <div className="mt-4">
          <CaseStudySection title={t.caseStudy.overview}>
            <p>{details.overview}</p>
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.problem}>
            <p>{details.problem}</p>
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.approach}>
            <p>{details.approach}</p>
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.build}>
            <TechnologyList build={project.build} categoryLabels={t.caseStudy.buildCategories} />
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.contribution}>
            <p>{details.contribution}</p>
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.collaboration}>
            {details.collaboration && <p>{details.collaboration}</p>}
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.challenges}>
            <p>{details.challenges}</p>
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.lessons}>
            <p>{details.lessons}</p>
          </CaseStudySection>

          <CaseStudySection title={t.caseStudy.currentState}>
            <p>{details.currentState}</p>
          </CaseStudySection>
        </div>

        <Reveal className="mt-4 border-t border-border pt-12">
          <ProjectLinks links={project.links} />
        </Reveal>

        <div className="mt-16">
          <ProjectNavigation previous={previous} next={next} />
        </div>
      </Container>
    </main>
  )
}

export default CaseStudyPage