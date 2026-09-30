import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState('en')
  const [ready, setReady] = useState(false)
  useEffect(() => {
    const saved = localStorage.getItem('portfolio-language')
    if (saved) setLanguage(saved)
    setReady(true)
  }, [])

  useEffect(() => {
    if (!ready) return
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language, ready])

  function toggleLanguage() {
    setLanguage((prev) => (prev === 'en' ? 'fr' : 'en'))
  }

  return (
    <LanguageContext.Provider
      value={{ language, toggleLanguage, t: translations[language] }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  return useContext(LanguageContext)
}