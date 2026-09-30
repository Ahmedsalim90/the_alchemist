import { useTheme } from '../../context/ThemeContext'
import logoDark from '../../assets/images/brand/logo-dark.png'
import logoLight from '../../assets/images/brand/logo-light.png'

function Logo({ className = 'h-16 w-auto -my-4' }) {
  const { theme } = useTheme()

  return (
    <img
      src={theme === 'dark' ? logoDark : logoLight}
      alt="The Alchemist — Think / Build / Transform"
      className={`object-contain ${className}`}
    />
  )
}

export default Logo
