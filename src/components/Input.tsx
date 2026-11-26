import { useId } from 'react'
import type { InputHTMLAttributes } from 'react'
import type { Icon } from '@tabler/icons-react'

export type InputSize = 'sm' | 'md' | 'lg'

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Texto que aparece encima del campo. */
  label?: string
  /** Texto de ayuda que aparece debajo del campo. */
  hint?: string
  /** Mensaje de error. Si lo hay, el campo se marca en rojo y sustituye a la ayuda. */
  error?: string
  /** Icono de Tabler opcional dentro del campo, a la izquierda. */
  icon?: Icon
  /** Tamaño del campo. Por defecto, `md`. */
  size?: InputSize
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'h-8 text-sm',
  md: 'h-10 text-sm',
  lg: 'h-12 text-base',
}

export function Input({
  label,
  hint,
  error,
  icon: IconComponent,
  size = 'md',
  id,
  className = '',
  ...rest
}: InputProps) {
  const autoId = useId()
  const inputId = id ?? autoId
  const messageId = `${inputId}-message`
  const message = error ?? hint

  return (
    <div className={['flex flex-col gap-1.5', className].join(' ')}>
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-900">
          {label}
        </label>
      )}
      <div className="relative">
        {IconComponent && (
          <IconComponent
            size={18}
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-gray-400"
          />
        )}
        <input
          id={inputId}
          aria-invalid={error ? true : undefined}
          aria-describedby={message ? messageId : undefined}
          className={[
            'w-full rounded-lg border bg-white px-3 text-gray-900 placeholder:text-gray-400',
            'focus:outline-2 focus:outline-offset-0',
            'disabled:cursor-not-allowed disabled:bg-gray-100 disabled:text-gray-500',
            error
              ? 'border-red-500 focus:outline-red-500'
              : 'border-gray-300 focus:outline-blue-600',
            IconComponent ? 'pl-10' : '',
            sizeClasses[size],
          ].join(' ')}
          {...rest}
        />
      </div>
      {message && (
        <p
          id={messageId}
          className={['text-sm', error ? 'text-red-600' : 'text-gray-500'].join(' ')}
        >
          {message}
        </p>
      )}
    </div>
  )
}
