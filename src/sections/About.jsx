import Section from '../components/layout/Section'
import Reveal from '../components/ui/Reveal'
import AboutPhoto from '../components/about/AboutPhoto'
import AcademicJourney from '../components/about/AcademicJourney'
import { academicJourney, internship } from '../data/academic'

function About() {
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
              About The Alchemist
            </p>
            <h2 className="mt-4 font-display text-3xl font-bold leading-tight text-foreground sm:text-4xl">
              Building, learning, and turning ideas into software.
            </h2>

            <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-foreground-secondary">
              <p>
                My name is Nsangou Ahmed Salim, a Software Engineering
                student and developer based in Cameroon. I enjoy turning
                real-world problems and ideas into software that people can
                actually use.
              </p>
              <p>
                My work spans web applications, mobile experiences, backend
                systems and AI-powered tools. I also care about the thinking
                behind the code — from interface design and user flows to
                system architecture and implementation.
              </p>
              <p>
                I am still learning, building and experimenting. For me,
                every project is an opportunity to understand a problem
                better, improve my skills and create something useful.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100} className="mt-8 grid gap-8 border-t border-border pt-8 sm:grid-cols-2">
            <AcademicJourney steps={academicJourney} />

            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-foreground-muted">
                Academic Internship
              </p>
              <p className="mt-3 text-sm font-semibold text-foreground">
                {internship.organization}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-foreground-secondary">
                {internship.description}
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-8 text-xs uppercase tracking-widest text-foreground-muted">
              Still learning. Still building.
            </p>
          </Reveal>
        </div>
      </div>
    </Section>
  )
}

export default About