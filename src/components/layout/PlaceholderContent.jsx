import Reveal from '../ui/Reveal'

function PlaceholderContent({ label, title }) {
  return (
    <Reveal>
      <p className="text-xs uppercase tracking-widest text-foreground-muted">
        {label}
      </p>
      <h2 className="mt-2 text-3xl font-bold text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 max-w-xl text-foreground-secondary">
        Section placeholder — content will be implemented in a later milestone.
      </p>
    </Reveal>
  )
}

export default PlaceholderContent