import { ArrowRight, Clock3 } from 'lucide-react'
import { openCallModal } from '../lib/callModal'
import { useT } from '../i18n/ui'

export function PriceCard({ service }) {
  const t = useT()
  return (
    <div
      className={`group relative flex flex-col justify-between rounded-2xl border border-line bg-white/[0.03] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_0_30px_rgba(47,125,255,0.15)] ${
        service.featured ? 'sm:col-span-2 xl:col-span-3 sm:p-8' : ''
      }`}
    >
      <div>
        <h4
          className={`font-display font-semibold leading-snug text-ivory ${
            service.featured ? 'text-xl sm:text-2xl' : 'text-base'
          }`}
        >
          {service.name}
        </h4>

        {service.description &&
          (service.featured ? (
            <p className="mt-4 max-w-3xl border-l-2 border-accent/50 pl-4 text-[15px] leading-relaxed text-ivory/80 sm:text-base sm:leading-[1.75]">
              {service.description}
            </p>
          ) : (
            <p className="mt-2 text-xs italic leading-relaxed text-muted">{service.description}</p>
          ))}

        {service.duration && (
          <p className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted">
            <Clock3 size={13} className="text-accent-2" />
            {service.duration}
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between gap-3">
        <span
          className={`font-display font-bold text-accent-2 transition-transform duration-300 group-hover:scale-110 ${
            service.featured ? 'text-3xl sm:text-4xl' : 'text-xl'
          }`}
        >
          {service.price}
        </span>
        <button
          type="button"
          onClick={openCallModal}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-line px-4 py-2 font-display text-xs font-semibold text-ivory/85 transition-all duration-300 group-hover:border-accent/50 group-hover:bg-accent/10 group-hover:text-accent-2"
        >
          {t.common.zvanit}
          <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-0.5" />
        </button>
      </div>
    </div>
  )
}
