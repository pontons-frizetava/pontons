import { useState } from 'react'
import { Scissors } from 'lucide-react'

export function Logo({ className = '' }) {
  const [failed, setFailed] = useState(false)

  if (!failed) {
    return (
      <img
        src="/images/logo.png"
        alt="PONTONS"
        onError={() => setFailed(true)}
        className={`h-10 w-auto object-contain ${className}`}
      />
    )
  }

  return (
    <span className={`flex items-center gap-2 ${className}`}>
      <span className="flex h-9 w-9 items-center justify-center rounded-full border border-accent/40 bg-accent/10">
        <Scissors size={17} className="text-accent-2" strokeWidth={2.25} />
      </span>
      <span className="font-display text-xl font-bold tracking-[0.08em] text-ivory">PONTONS</span>
    </span>
  )
}
