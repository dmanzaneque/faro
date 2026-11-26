import type { HTMLAttributes, ReactNode } from 'react'
import type { Icon } from '@tabler/icons-react'

export type CardVariant = 'outlined' | 'elevated'

export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Título de la tarjeta. */
  title?: ReactNode
  /** Texto corto debajo del título. */
  description?: ReactNode
  /** Icono de Tabler opcional junto al título. */
  icon?: Icon
  /** Contenido de la parte de abajo, por ejemplo botones. */
  footer?: ReactNode
  /** Estilo de la tarjeta: con borde (`outlined`) o con sombra (`elevated`). Por defecto, `outlined`. */
  variant?: CardVariant
}

const variantClasses: Record<CardVariant, string> = {
  outlined: 'border border-gray-200',
  elevated: 'shadow-md',
}

export function Card({
  title,
  description,
  icon: IconComponent,
  footer,
  variant = 'outlined',
  className = '',
  children,
  ...rest
}: CardProps) {
  const hasHeader = title || description || IconComponent

  return (
    <div
      className={[
        'flex flex-col gap-4 rounded-xl bg-white p-6 text-gray-900',
        variantClasses[variant],
        className,
      ].join(' ')}
      {...rest}
    >
      {hasHeader && (
        <div className="flex items-start gap-3">
          {IconComponent && (
            <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
              <IconComponent size={22} aria-hidden="true" />
            </span>
          )}
          <div className="flex flex-col gap-1">
            {title && <h3 className="text-lg font-semibold">{title}</h3>}
            {description && <p className="text-sm text-gray-600">{description}</p>}
          </div>
        </div>
      )}
      {children && <div className="text-sm text-gray-700">{children}</div>}
      {footer && (
        <div className="flex items-center gap-2 border-t border-gray-200 pt-4">
          {footer}
        </div>
      )}
    </div>
  )
}
