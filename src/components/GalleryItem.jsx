import { Expand } from 'lucide-react'
import { Media } from './Media'

export function GalleryItem({ image, alt, tall, onOpen }) {
  return (
    <button
      type="button"
      onClick={onOpen}
      className={`group relative mb-4 block w-full overflow-hidden rounded-2xl border border-accent/25 text-left shadow-[0_0_18px_2px_rgba(47,125,255,0.12)] transition-shadow duration-500 hover:border-accent/50 hover:shadow-[0_0_28px_4px_rgba(47,125,255,0.25)] ${
        tall ? 'h-96' : 'h-64'
      }`}
      style={{ breakInside: 'avoid' }}
    >
      <Media
        src={image}
        alt={alt}
        className="h-full w-full"
        imgClassName="transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-ink/0 opacity-0 transition-all duration-400 group-hover:bg-ink/50 group-hover:opacity-100">
        <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white backdrop-blur-sm">
          <Expand size={17} strokeWidth={1.75} />
        </span>
      </div>
    </button>
  )
}
