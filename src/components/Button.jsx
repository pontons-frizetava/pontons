const base =
  'group relative inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 font-display text-sm font-semibold tracking-wide transition-all duration-300 whitespace-nowrap'

const variants = {
  primary:
    'bg-accent text-white shadow-[0_0_0_0_rgba(47,125,255,0.5)] hover:shadow-[0_0_32px_6px_rgba(47,125,255,0.45)] hover:bg-accent-2 active:scale-[0.98]',
  secondary:
    'border border-line text-ivory bg-white/[0.03] backdrop-blur hover:border-accent/50 hover:bg-white/[0.06] active:scale-[0.98]',
  ghost: 'text-ivory/80 hover:text-accent-2',
}

export function Button({
  as = 'a',
  href,
  onClick,
  type = 'button',
  variant = 'primary',
  icon: Icon,
  children,
  className = '',
}) {
  const Tag = as
  const tagProps = as === 'a' ? { href } : { type, onClick: onClick }
  const clickProps = as === 'a' && onClick ? { onClick } : {}

  return (
    <Tag {...tagProps} {...clickProps} className={`${base} ${variants[variant]} ${className}`}>
      {children}
      {Icon && (
        <Icon
          size={16}
          strokeWidth={2.25}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </Tag>
  )
}
