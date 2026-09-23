import Container from '../ui/Container'

const surfaces = {
  background: 'bg-background',
  surface: 'bg-surface',
  elevated: 'bg-elevated',
}

function Section({ id, children, className = '', surface = 'background' }) {
  return (
    <section id={id} className={`section ${surfaces[surface]} ${className}`}>
      <Container>{children}</Container>
    </section>
  )
}

export default Section