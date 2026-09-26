import { useLanguage } from '../../context/LanguageContext'

function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage } = useLanguage()
  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={language === 'en' ? 'Switch to French' : 'Switch to English'}
      className={`flex items-center gap-1 text-xs font-semibold uppercase tracking-widest ${className}`}
    >
      <span className={language === 'en' ? 'text-accent' : 'text-foreground-secondary'}>EN</span>
      <span className="text-foreground-muted">/</span>
      <span className={language === 'fr' ? 'text-accent' : 'text-foreground-secondary'}>FR</span>
    </button>
  )
}

export default LanguageToggle