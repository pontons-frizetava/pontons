export function ScrollMouse({ className = '' }) {
  return (
    <svg width="20" height="32" viewBox="0 0 20 32" fill="none" className={className}>
      <rect x="1" y="1" width="18" height="30" rx="9" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="2" fill="currentColor" className="animate-scroll-dot" />
    </svg>
  )
}
