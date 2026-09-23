import Container from '../ui/Container'

function Navbar() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur">
      <Container className="flex items-center justify-between py-4">
        <span className="font-display text-sm font-semibold uppercase tracking-widest text-foreground">
          The Alchemist
        </span>
        <span className="text-xs uppercase tracking-widest text-foreground-muted">
          Navbar placeholder
        </span>
      </Container>
    </header>
  )
}

export default Navbar