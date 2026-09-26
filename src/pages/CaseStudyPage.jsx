import { Link, Navigate, useParams } from 'react-router-dom'
import Container from '../components/ui/Container'
import Reveal from '../components/ui/Reveal'
import ProjectImage from '../components/work/ProjectImage'
import CaseStudySection from '../components/case-study/CaseStudySection'
import TechnologyList from '../components/case-study/TechnologyList'
import ProjectLinks from '../components/case-study/ProjectLinks'
import ProjectNavigation from '../components/case-study/ProjectNavigation'
import { getProjectBySlug, getAdjacentProjects } from '../data/projects'

function CaseStudyPage() {
  const { slug } = useParams()
  const project = getProjectBySlug(slug)

  if (!project) {
    return <Navigate to="/#work" replace />
  }

  const { previous, next } = getAdjacentProjects(slug)

  return (
    <main className="pb-24 pt-16 lg:pt-20">
      <Container>
        <Link
          to="/#work"
          className="text-xs font-semibold uppercase tracking-widest text-foreground-muted transition-colors hover:text-accent"
        >
          ← Back to Selected Work
        </Link>

        <Reveal direction="down" className="mt-8 max-w-3xl">
          <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            {project.category}
          </p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-foreground sm:text-5xl">
            {project.title}
          </h1>
          <p className="mt-4 text-lg text-foreground-secondary">
            {project.description}
          </p>
          {project.teamProject && (
            <span className="mt-4 inline-block rounded border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
              Team Project
            </span>
          )}
        </Reveal>

        <Reveal className="mt-10 grid grid-cols-2 gap-6 border-y border-border py-8 sm:grid-cols-4">
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-muted">Role</p>
            <p className="mt-1 text-sm text-foreground">{project.role}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-muted">Type</p>
            <p className="mt-1 text-sm text-foreground">{project.type}</p>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <p className="text-xs uppercase tracking-widest text-foreground-muted">Technologies</p>
            <p className="mt-1 text-sm text-foreground">{project.tech.join(' · ')}</p>
          </div>
          <div>
            <p className="text-xs uppercase tracking-widest text-foreground-muted">Status</p>
            <p className="mt-1 text-sm text-foreground">{project.status}</p>
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
          <CaseStudySection title="Overview">
            <p>{project.overview}</p>
          </CaseStudySection>

          <CaseStudySection title="Problem">
            <p>{project.problem}</p>
          </CaseStudySection>

          <CaseStudySection title="Approach">
            <p>{project.approach}</p>
          </CaseStudySection>

          <CaseStudySection title="Build">
            <TechnologyList build={project.build} />
          </CaseStudySection>

          <CaseStudySection title="My Contribution">
            <p>{project.contribution}</p>
          </CaseStudySection>

          <CaseStudySection title="Collaboration">
            {project.collaboration && <p>{project.collaboration}</p>}
          </CaseStudySection>

          <CaseStudySection title="Challenges">
            <p>{project.challenges}</p>
          </CaseStudySection>

          <CaseStudySection title="Lessons Learned">
            <p>{project.lessons}</p>
          </CaseStudySection>

          <CaseStudySection title="Current State">
            <p>{project.currentState}</p>
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