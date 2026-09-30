import { createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext(null)

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('dark')
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme')
    if (saved) setTheme(saved)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem('portfolio-theme', theme)
    document.documentElement.classList.toggle('light', theme === 'light')
  }, [theme, ready])

  function toggleTheme() {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}