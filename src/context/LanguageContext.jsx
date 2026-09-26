import { createContext, useContext, useEffect, useState } from 'react'
import { translations } from '../data/translations'

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(
    () => localStorage.getItem('portfolio-language') || 'en'
  )

  useEffect(() => {
    localStorage.setItem('portfolio-language', language)
    document.documentElement.lang = language
  }, [language])

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