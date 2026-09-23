import Container from './components/ui/Container'
import Button from './components/ui/Button'
import Tag from './components/ui/Tag'

function App() {
  return (
    <main className="section">
      <Container>
        <Tag>Design System Test</Tag>

        <h1 className="mt-6 text-4xl font-bold text-foreground sm:text-5xl lg:text-6xl">
          THE ALCHEMIST
        </h1>

        <p className="mt-4 max-w-xl text-lg text-foreground-secondary">
          I turn real-world problems into software. This block exists only to
          verify colors, typography, spacing, borders and buttons before
          Milestone 3.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <Button variant="primary">EXPLORE MY WORK →</Button>
          <Button variant="secondary">LET'S BUILD →</Button>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3">
          <div className="rounded-md border border-border bg-surface p-6">
            <p className="text-xs uppercase tracking-widest text-foreground-muted">Surface</p>
            <p className="mt-2 text-sm text-foreground-secondary">bg-surface</p>
          </div>

          <div className="rounded-md border border-border bg-elevated p-6">
            <p className="text-xs uppercase tracking-widest text-foreground-muted">Elevated</p>
            <p className="mt-2 text-sm text-foreground-secondary">bg-elevated</p>
          </div>

          <div className="rounded-md border border-border bg-accent-soft p-6">
            <p className="text-xs uppercase tracking-widest text-accent">Accent Soft</p>
            <p className="mt-2 text-sm text-foreground-secondary">bg-accent-soft</p>
          </div>
        </div>
      </Container>
    </main>
  )
}

export default App