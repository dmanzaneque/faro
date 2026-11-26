import type { ReactNode } from 'react'
import type { Icon } from '@tabler/icons-react'

export type BadgeVariant = 'neutral' | 'info' | 'success' | 'warning' | 'danger'
export type BadgeSize = 'sm' | 'md'

export interface BadgeProps {
  /** Texto de la etiqueta. */
  children: ReactNode
  /** Color según el significado. Por defecto, `neutral`. */
  variant?: BadgeVariant
  /** Tamaño de la etiqueta. Por defecto, `md`. */
  size?: BadgeSize
  /** Icono de Tabler opcional a la izquierda del texto. */
  icon?: Icon
  /** Si se pasa, la etiqueta se puede pulsar y se comporta como un botón. */
  onClick?: () => void
  /** Clases de Tailwind extra. */
  className?: string
}

const variantClasses: Record<BadgeVariant, string> = {
  neutral: 'bg-gray-100 text-gray-700',
  info: 'bg-blue-100 text-blue-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-amber-100 text-amber-800',
  danger: 'bg-red-100 text-red-800',
}

const hoverClasses: Record<BadgeVariant, string> = {
  neutral: 'hover:bg-gray-200',
  info: 'hover:bg-blue-200',
  success: 'hover:bg-green-200',
  warning: 'hover:bg-amber-200',
  danger: 'hover:bg-red-200',
}

// Mínimo 4px (py-1) arriba y abajo para que se pueda pulsar con comodidad.
const sizeClasses: Record<BadgeSize, string> = {
  sm: 'gap-1 px-2 py-1 text-xs',
  md: 'gap-1.5 px-3 py-1.5 text-sm',
}

const iconSizes: Record<BadgeSize, number> = { sm: 14, md: 16 }

export function Badge({
  children,
  variant = 'neutral',
  size = 'md',
  icon: IconComponent,
  onClick,
  className = '',
}: BadgeProps) {
  const classes = [
    'inline-flex items-center rounded-full font-medium',
    variantClasses[variant],
    sizeClasses[size],
    onClick
      ? `cursor-pointer transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 ${hoverClasses[variant]}`
      : '',
    className,
  ].join(' ')

  const content = (
    <>
      {IconComponent && (
        <IconComponent size={iconSizes[size]} stroke={2} aria-hidden="true" />
      )}
      {children}
    </>
  )

  if (onClick) {
    return (
      <button type="button" onClick={onClick} className={classes}>
        {content}
      </button>
    )
  }

  return <span className={classes}>{content}</span>
}
