import type { ButtonHTMLAttributes } from 'react'
import type { Icon } from '@tabler/icons-react'

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
export type ButtonSize = 'sm' | 'md' | 'lg'

/**
 * El icono puede ir a la izquierda o a la derecha, pero nunca en los dos lados
 * a la vez: si se intenta pasar `iconLeft` e `iconRight` juntos, TypeScript da error.
 */
type ButtonIconProps =
  | {
      /** Icono de Tabler a la izquierda del texto, por ejemplo `IconPlus`. */
      iconLeft?: Icon
      iconRight?: never
    }
  | {
      iconLeft?: never
      /** Icono de Tabler a la derecha del texto, por ejemplo `IconArrowRight`. */
      iconRight?: Icon
    }

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ButtonIconProps & {
    /** Estilo del botón. Por defecto, `primary`. */
    variant?: ButtonVariant
    /** Tamaño del botón. Por defecto, `md`. */
    size?: ButtonSize
    /** Si es `true`, el botón ocupa todo el ancho disponible. */
    fullWidth?: boolean
  }

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-blue-600 text-white hover:bg-blue-700 active:bg-blue-800',
  secondary:
    'border border-gray-300 bg-white text-gray-900 hover:bg-gray-50 active:bg-gray-100',
  ghost: 'bg-transparent text-blue-700 hover:bg-blue-50 active:bg-blue-100',
  danger: 'bg-red-600 text-white hover:bg-red-700 active:bg-red-800',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-8 gap-1.5 px-3.5 text-sm',
  md: 'h-10 gap-2 px-5 text-sm',
  lg: 'h-12 gap-2 px-6 text-base',
}

const iconSizes: Record<ButtonSize, number> = { sm: 16, md: 18, lg: 20 }

export function Button({
  variant = 'primary',
  size = 'md',
  iconLeft: IconLeft,
  iconRight: IconRight,
  fullWidth = false,
  type = 'button',
  className = '',
  children,
  ...rest
}: ButtonProps) {
  // Por si alguien salta la comprobación de TypeScript (por ejemplo, desde los
  // controles de Storybook): si llegan los dos iconos, solo se pinta el izquierdo.
  if (IconLeft && IconRight && import.meta.env.DEV) {
    console.warn('Button: usa iconLeft o iconRight, pero no los dos a la vez. Se muestra solo iconLeft.')
  }
  const RightIcon = IconLeft ? undefined : IconRight

  return (
    <button
      type={type}
      className={[
        'inline-flex items-center justify-center rounded-full font-medium transition-colors',
        'focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
        'disabled:pointer-events-none disabled:opacity-50',
        variantClasses[variant],
        sizeClasses[size],
        fullWidth ? 'w-full' : '',
        className,
      ].join(' ')}
      {...rest}
    >
      {IconLeft && <IconLeft size={iconSizes[size]} stroke={2} aria-hidden="true" />}
      {children}
      {RightIcon && <RightIcon size={iconSizes[size]} stroke={2} aria-hidden="true" />}
    </button>
  )
}
