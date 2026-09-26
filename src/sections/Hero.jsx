import Section from '../components/layout/Section'
import Button from '../components/ui/Button'
import { PinIcon } from '../components/ui/icons'
import { useTypedSequence } from '../hooks/useTypewriter'
import useDelayedReveal from '../hooks/useDelayedReveal'
import { useLanguage } from '../context/LanguageContext'
import heroPhoto from '../assets/images/hero/hero-photo.jpg'

function Hero() {
  const { t, language } = useLanguage()
  const imageRevealed = useDelayedReveal(700)

  const roleSequence = [
    { text: t.hero.roleDesigner, typeSpeed: 90, holdAfter: 700, eraseSpeed: 45 },
    { text: t.hero.roleFull, typeSpeed: 55, holdAfter: 0, eraseSpeed: 0 },
  ]
  const { text, done } = useTypedSequence(roleSequence, true, 300, language)

  const headlineSequence = [
    { text: `${t.hero.headlineLine1}\n${t.hero.headlineLine2}`, typeSpeed: 55, holdAfter: 0, eraseSpeed: 0 },
  ]
  const { text: headlineText, done: headlineDone } = useTypedSequence(headlineSequence, done, 250, language)
  return (
    <Section id="hero" surface="background" className="pt-20 pb-24 lg:pt-24 lg:pb-32">
      <div className="grid items-center gap-12 md:grid-cols-[3fr_2fr] md:gap-10 lg:gap-16">
        {/* LEFT — content */}
        <div className="text-left">
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-accent" aria-hidden="true" />
            <p className="text-xs uppercase tracking-widest text-foreground-muted">
              Nsangou Ahmed Salim
            </p>
          </div>

          <p className="mt-4 whitespace-nowrap font-display text-base font-semibold uppercase tracking-widest text-accent sm:text-lg">
            {text}
            {!done && (
              <span
                className="ml-1 inline-block h-[0.9em] w-[2px] translate-y-[1px] animate-pulse bg-accent align-middle"
                aria-hidden="true"
              />
            )}
          </p>

        <h1 className="mt-9 min-h-[2.2em] font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-[52px] xl:text-[58px]">
  {headlineText.split('\n').map((line, index) => (
    <span key={index} className={`block ${index === 1 ? 'text-accent' : ''}`}>
      {line}
    </span>
  ))}
  {!headlineDone && (
    <span
      className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-[3px] animate-pulse bg-accent align-middle"
      aria-hidden="true"
    />
  )}
</h1>

          <p className="mt-9 max-w-xl text-base leading-loose text-foreground-secondary sm:text-lg">
  {t.hero.paragraph}
</p>

<div className="mt-8 h-px w-full max-w-xs bg-border" aria-hidden="true" />

<p className="mt-8 text-xs uppercase tracking-widest text-foreground-secondary">
  {t.hero.capabilityLine}
</p>

<div className="mt-10 flex flex-wrap gap-4">
  <Button href="#work" variant="primary">{t.hero.ctaPrimary}</Button>
  <Button href="#contact" variant="secondary">{t.hero.ctaSecondary}</Button>
</div>

<div className="mt-12 flex items-center gap-2 text-xs uppercase tracking-widest text-foreground-muted">
  <PinIcon className="h-4 w-4" />
  {t.hero.location}
</div>
        </div>

        {/* RIGHT — portrait panel, fills its grid column exactly */}
        <div className="relative w-full">
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg border border-border bg-surface">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-1/2 w-1/2 rounded-full bg-elevated opacity-40 blur-3xl" />
            </div>
<img
  src={heroPhoto}
  alt="Nsangou Ahmed Salim — Full-Stack & Mobile Developer"
  className={`h-full w-full object-cover transition-all duration-700 ease-out ${
    imageRevealed ? 'scale-100 opacity-100' : 'scale-105 opacity-0'
  }`}
/>

            <div className="absolute right-5 top-5 text-right">
              <p className="text-[10px] font-semibold uppercase leading-tight tracking-widest text-foreground-muted">
                Building
                <br />
                Better
                <br />
                Solutions
              </p>
              <span className="mt-2 inline-block h-px w-8 bg-accent" aria-hidden="true" />
            </div>
          </div>

          <div
  className={`pointer-events-none absolute -left-2 -top-2 h-10 w-10 border-l-2 border-t-2 border-accent transition-transform duration-700 ease-out ${
    imageRevealed ? 'translate-x-0 translate-y-0' : 'translate-x-[100%] translate-y-[100%]'
  }`}
  aria-hidden="true"
/>
<div
  className={`pointer-events-none absolute -bottom-2 -right-2 h-10 w-10 border-b-2 border-r-2 border-accent transition-transform duration-700 ease-out ${
    imageRevealed ? 'translate-x-0 translate-y-0' : '-translate-x-[100%] -translate-y-[100%]'
  }`}
  aria-hidden="true"
/>
        </div>
      </div>
    </Section>
  )
}

export default Hero