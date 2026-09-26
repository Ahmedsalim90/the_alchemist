import { useEffect, useRef } from 'react'
import Avatar from '../ui/Avatar'
import ThemeToggle from '../ui/ThemeToggle'
import LanguageToggle from '../ui/LanguageToggle'
import { useLanguage } from '../../context/LanguageContext'
import { SOCIAL_LINKS } from './navData'
import { CloseIcon, ChevronIcon, GithubIcon, LinkedinIcon, WhatsappIcon } from '../ui/icons'

const SOCIAL_ICONS = { github: GithubIcon, linkedin: LinkedinIcon, whatsapp: WhatsappIcon }

function MobileNav({ isOpen, onClose, navLinks }) {
  const { t } = useLanguage()
  const closeButtonRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    closeButtonRef.current?.focus()
    function handleKeyDown(event) {
      if (event.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-black/50 transition-opacity duration-200 ${
          isOpen ? 'opacity-100' : 'pointer-events-none opacity-0'
        }`}
        onClick={onClose}
        aria-hidden="true"
      />

      <div
        id="mobile-nav-drawer"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        className={`fixed inset-y-0 right-0 z-50 flex h-full w-full max-w-sm flex-col overflow-y-auto border-l border-border bg-surface transition-transform duration-200 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          ref={closeButtonRef}
          type="button"
          onClick={onClose}
          aria-label="Close menu"
          className="absolute right-5 top-5 z-10 rounded-md border border-border p-3 text-foreground transition-colors hover:border-accent hover:text-accent"
        >
          <CloseIcon className="h-6 w-6" />
        </button>

        <div className="flex flex-1 flex-col items-center justify-center gap-5 border-b border-border px-8 text-center">
          <Avatar size={96} />
          <div className="flex flex-col gap-2">
            <p className="font-display text-xl font-semibold text-foreground">NSANGOU AHMED SALIM</p>
            <p className="text-sm uppercase tracking-widest text-accent">The Alchemist</p>
            <p className="text-base text-foreground-secondary">{t.hero.roleFull}</p>
          </div>
        </div>

        <nav aria-label="Primary" className="flex flex-1 flex-col items-center justify-center gap-6 border-b border-border px-8">
          {navLinks.map((link) => (
            
            <a  
            key={link.href}
              href={link.href}
              onClick={onClose}
              className="flex w-full max-w-xs items-center justify-between rounded-md px-4 py-3 text-lg font-semibold uppercase tracking-widest text-foreground transition-colors hover:bg-elevated hover:text-accent active:bg-accent active:text-background"
            >
              {link.label}
              <ChevronIcon className="h-5 w-5 text-foreground-muted" />
            </a>
          ))}
        </nav>

        <div className="flex flex-1 flex-col items-center justify-center gap-8 px-8 py-8">
          <div className="flex items-center gap-10">
            <LanguageToggle />
            <ThemeToggle />
          </div>
          <div className="flex flex-col items-center gap-4">
            {SOCIAL_LINKS.map((social) => {
              const Icon = SOCIAL_ICONS[social.icon]
              return (
                
                <a  
                key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 rounded-md px-3 py-2 text-base text-foreground-secondary transition-colors hover:text-accent active:bg-accent active:text-background"
                >
                  <Icon className="h-5 w-5" />
                  {social.label}
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MobileNav