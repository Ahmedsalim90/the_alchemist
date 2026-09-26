import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import AboutPhoto from '../components/about/AboutPhoto'
import AcademicJourney from '../components/about/AcademicJourney'
import { academicJourney, internship } from '../data/academic'
import { useLanguage } from '../context/LanguageContext'

function About() {
  const { t } = useLanguage()

  return (
    <Section id="about" surface="surface">
      <div className="grid items-start gap-12 md:grid-cols-[2fr_3fr] md:gap-14">
        <Reveal direction="right">
          <AboutPhoto />
        </Reveal>

        <div>
          <Reveal direction="left">
            <p className="flex items-center gap-3 text-xs uppercase tracking-widest text-foreground-muted">
              <span className="h-px w-8 bg-accent" aria-hidden="true" />
              {t.about.eyebrow}
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              {t.about.heading}
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground-secondary">
              {t.about.paragraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <AcademicJourney steps={academicJourney} label={t.about.academicJourney} />

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                {t.about.academicInternship}
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {internship.organization}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                {t.about.internshipDescription}
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 text-xs uppercase tracking-widest text-foreground-muted">
              {t.about.closing}
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export default About