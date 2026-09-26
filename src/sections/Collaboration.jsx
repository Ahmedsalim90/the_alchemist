import { Link } from 'react-router-dom'
import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import ProjectImage from '../components/work/ProjectImage'
import CollaborationStep from '../components/collaboration/CollaborationStep'
import { getProjectBySlug } from '../data/projects'
import { useLanguage } from '../context/LanguageContext'

function Collaboration() {
  const { t } = useLanguage()
  const infraai = getProjectBySlug('infraai')

  const steps = t.collaboration.steps.map((step, index) => ({
    ...step,
    number: String(index + 1).padStart(2, '0'),
  }))

  return (
    <Section id="collaboration" surface="surface">
      <Reveal direction="down" className="max-w-2xl">
        <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
          <span className="h-px w-8 bg-accent" aria-hidden="true" />
          {t.collaboration.eyebrow}
        </p>
        <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
          {t.collaboration.heading}
        </h2>
        <p className="mt-4 text-base text-foreground-secondary sm:text-lg">
          {t.collaboration.description}
        </p>
      </Reveal>

      <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-[3fr_2fr] lg:gap-12">
        <Reveal direction="right">
          <ProjectImage
            label={infraai.title}
            alt="InfraAI system architecture workspace"
            image={infraai.caseStudyImage || infraai.image}
          />
        </Reveal>

        <div className="flex flex-col gap-8">
          <Reveal direction="left">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h3 className="font-display text-xl font-bold text-foreground">
                  {infraai.title}
                </h3>
                <span className="rounded border border-border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest text-foreground-muted">
                  {t.collaboration.teamProject}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-foreground-secondary">
                {t.projects.infraai}
              </p>

              <p className="mt-4 text-xs uppercase tracking-widest text-foreground-muted">
                {t.collaboration.technology}
              </p>
              <p className="mt-1 text-sm text-foreground">
                {infraai.tech.join(' · ')}
              </p>

              <p className="mt-4 text-xs uppercase tracking-widest text-foreground-muted">
                {t.collaboration.collaborativeElements}
              </p>
              <p className="mt-1 text-sm text-foreground">
                {t.collaboration.collaborativeElementsValue}
              </p>

              <Link
                to="/work/infraai"
                className="group mt-5 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-accent"
              >
                {t.collaboration.viewCaseStudy}
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1">
            {steps.map((step, index) => (
              <CollaborationStep
                key={step.number}
                step={step}
                delay={index * 80}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Collaboration