import Reveal from '../ui/Reveal'

function CaseStudySection({ title, children }) {
  if (!children) return null

  return (
    <Reveal className="mx-auto max-w-[720px] border-t border-border py-12 first:border-t-0 first:pt-0">
      <h2 className="text-xs font-semibold uppercase tracking-widest text-accent">
        {title}
      </h2>
      <div className="mt-4 text-base leading-relaxed text-foreground-secondary">
        {children}
      </div>
    </Reveal>
  )
}

export default CaseStudySection