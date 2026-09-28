import { useState } from 'react'
import { ImageOff } from 'lucide-react'

/**
 * Renders an image, but degrades to a clearly-labeled placeholder (instead of a
 * broken-image icon) when the file hasn't been dropped into /public yet.
 */
export function Media({ src, alt = '', className = '', imgClassName = '', overlay = false, eager = false }) {
  const [failed, setFailed] = useState(false)

  return (
    <div className={`relative overflow-hidden bg-gradient-to-br from-ink-elevated via-ink-soft to-ink ${className}`}>
      {!failed && (
        <img
          src={src}
          alt={alt}
          loading={eager ? 'eager' : 'lazy'}
          onError={() => setFailed(true)}
          className={`h-full w-full object-cover ${imgClassName}`}
        />
      )}
      {failed && (
        <div className="bg-noise absolute inset-0 flex flex-col items-center justify-center gap-2 px-4 text-center">
          <ImageOff size={20} className="text-white/20" />
          <span className="font-display text-[10px] uppercase tracking-[0.2em] text-white/25">
            Ievieto attēlu: {src}
          </span>
        </div>
      )}
      {overlay && (
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/10 to-transparent" />
      )}
    </div>
  )
}
