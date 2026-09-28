export function FacebookIcon({ size = 20, className = '', strokeWidth = 2 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="4" />
      <path d="M13.5 19v-6.5h2l.4-2.5h-2.4v-1.6a1 1 0 0 1 1-1H16V5h-2a3 3 0 0 0-3 3v2.5H9V13h2v6" />
    </svg>
  )
}
