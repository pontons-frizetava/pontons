import { createContext, useContext, useEffect, useState } from 'react'

const LanguageContext = createContext(null)

// Latvian is the salon's default audience — English is opt-in and remembered per browser so a
// returning visitor doesn't have to switch again.
export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState(() => {
    try {
      const stored = localStorage.getItem('pontons-lang')
      return stored === 'en' ? 'en' : 'lv'
    } catch {
      return 'lv'
    }
  })

  useEffect(() => {
    document.documentElement.lang = language
    try {
      localStorage.setItem('pontons-lang', language)
    } catch {
      // ignore (private browsing, storage disabled, etc.)
    }
  }, [language])

  const toggleLanguage = () => setLanguage((l) => (l === 'lv' ? 'en' : 'lv'))

  return (
    <LanguageContext.Provider value={{ language, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}
