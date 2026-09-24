import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import MobileNav from './MobileNav'
import { NAV_LINKS } from './navData'
import { MenuIcon, ThemeIcon } from '../ui/icons'

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    function handleScroll() {
      setIsScrolled(window.scrollY > 8)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-30 transition-colors duration-200 ${
        isScrolled
          ? 'border-b border-border bg-background/90 backdrop-blur'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <Container className="flex items-center justify-between py-6">
        <a href="#hero" className="flex items-center gap-3">
          <Logo />
          <span className="font-display text-lg font-semibold uppercase tracking-widest text-foreground">
            The Alchemist
          </span>
        </a>

        <nav aria-label="Primary" className="hidden items-center gap-12 md:flex">
          {NAV_LINKS.map((link) => (
            
            <a  
            key={link.href}
              href={link.href}
              className="text-sm font-semibold uppercase tracking-widest text-foreground-secondary transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <button
            type="button"
            className="text-sm font-semibold uppercase tracking-widest text-foreground-secondary transition-colors hover:text-accent"
          >
            EN / FR
          </button>
          <button
            type="button"
            aria-label="Toggle theme"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:border-accent hover:text-accent"
          >
            <ThemeIcon className="h-5 w-5" />
          </button>
        </div>

      <button
  type="button"
  onClick={() => setIsMenuOpen(true)}
  aria-label="Open menu"
  aria-expanded={isMenuOpen}
  aria-controls="mobile-nav-drawer"
  className="flex h-12 w-12 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:border-accent hover:text-accent md:hidden"
>
  <MenuIcon className="h-7 w-7" />
</button>
      </Container>

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </header>
  )
}

export default Navbar