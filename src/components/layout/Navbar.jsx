import { useEffect, useState } from 'react'
import Container from '../ui/Container'
import Logo from '../ui/Logo'
import MobileNav from './MobileNav'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { useLanguage } from '../../context/LanguageContext'
import { MenuIcon } from '../ui/icons'

function Navbar() {
  const { t } = useLanguage()
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

  const navLinks = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.lab, href: '#lab' },
    { label: t.nav.contact, href: '#contact' },
  ]

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
          {navLinks.map((link) => (
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
          <LanguageToggle />
          <ThemeToggle />
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

      <MobileNav isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} navLinks={navLinks} />
    </header>
  )
}

export default Navbar