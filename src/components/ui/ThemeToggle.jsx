import { useTheme } from '../../context/ThemeContext'
import { ThemeIcon } from './icons'

function ThemeToggle({ className = '' }) {
  const { theme, toggleTheme } = useTheme()
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme'}
      className={`flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground-secondary transition-colors hover:border-accent hover:text-accent ${className}`}
    >
      <ThemeIcon className="h-4 w-4" />
    </button>
  )
}

export default ThemeToggle