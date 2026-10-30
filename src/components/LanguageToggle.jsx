import { useLanguage } from '../lib/LanguageContext'

export function LanguageToggle({ className = '' }) {
  const { language, toggleLanguage } = useLanguage()

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label="Switch language / Mainīt valodu"
      className={`flex items-center gap-1 rounded-full border border-line px-1 py-1 font-display text-xs font-semibold text-ivory/70 transition-colors duration-300 hover:border-accent/40 ${className}`}
    >
      <span
        className={`rounded-full px-2.5 py-1 transition-colors duration-300 ${
          language === 'lv' ? 'bg-accent/20 text-accent-2' : 'text-ivory/50'
        }`}
      >
        LV
      </span>
      <span
        className={`rounded-full px-2.5 py-1 transition-colors duration-300 ${
          language === 'en' ? 'bg-accent/20 text-accent-2' : 'text-ivory/50'
        }`}
      >
        EN
      </span>
    </button>
  )
}
