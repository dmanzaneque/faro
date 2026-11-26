import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import {
  IconArrowRight,
  IconCalendarPlus,
  IconChevronRight,
  IconDownload,
  IconPlus,
  IconTrash,
} from '@tabler/icons-react'
import { Button } from './Button'
import type { ButtonProps } from './Button'

/**
 * Quita los iconos que vengan de los controles, para que cada ejemplo ponga el suyo
 * sin que haya nunca dos iconos a la vez.
 */
function sinIconos({ iconLeft, iconRight, ...rest }: ButtonProps) {
  void iconLeft
  void iconRight
  return rest
}

const iconOptions = {
  Ninguno: undefined,
  IconPlus,
  IconArrowRight,
  IconChevronRight,
  IconDownload,
  IconTrash,
}

const iconControl = {
  control: 'select',
  options: Object.keys(iconOptions),
  mapping: iconOptions,
} as const

const meta = {
  title: 'Componentes/Button',
  component: Button,
  args: {
    children: 'Guardar',
    onClick: fn(),
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['primary', 'secondary', 'ghost', 'danger'] },
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    iconLeft: {
      ...iconControl,
      description: 'Icono a la izquierda. No se puede usar a la vez que `iconRight`.',
    },
    iconRight: {
      ...iconControl,
      description: 'Icono a la derecha. No se puede usar a la vez que `iconLeft`.',
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/**
 * Botón que se puede configurar desde el panel de controles.
 * Si eliges un icono a la izquierda y otro a la derecha, solo se muestra el de la izquierda.
 */
export const Playground: Story = {}

export const Variantes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="primary">Primary</Button>
      <Button {...args} variant="secondary">Secondary</Button>
      <Button {...args} variant="ghost">Ghost</Button>
      <Button {...args} variant="danger">Danger</Button>
    </div>
  ),
}

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
}

/** Icono delante del texto. Útil para acciones como añadir, descargar o borrar. */
export const IconoIzquierda: Story = {
  name: 'Icono a la izquierda',
  render: (storyArgs) => {
    const args = sinIconos(storyArgs)
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Button {...args} iconLeft={IconCalendarPlus}>Añadir cita</Button>
        <Button {...args} variant="secondary" iconLeft={IconDownload}>Descargar informe</Button>
        <Button {...args} variant="danger" iconLeft={IconTrash}>Borrar</Button>
      </div>
    )
  },
}

/** Icono detrás del texto. Útil para acciones que llevan a otra pantalla. */
export const IconoDerecha: Story = {
  name: 'Icono a la derecha',
  render: (storyArgs) => {
    const args = sinIconos(storyArgs)
    return (
      <div className="flex flex-wrap items-center gap-3">
        <Button {...args} iconRight={IconArrowRight}>Continuar</Button>
        <Button {...args} variant="secondary" iconRight={IconChevronRight}>Ver análisis</Button>
        <Button {...args} variant="ghost" iconRight={IconArrowRight}>Ver todo</Button>
      </div>
    )
  },
}

export const IconoEnTodosLosTamanos: Story = {
  name: 'Icono en todos los tamaños',
  render: (storyArgs) => {
    const args = sinIconos(storyArgs)
    return (
      <div className="flex flex-col items-start gap-3">
        <div className="flex flex-wrap items-center gap-3">
          <Button {...args} size="sm" iconLeft={IconPlus}>Small</Button>
          <Button {...args} size="md" iconLeft={IconPlus}>Medium</Button>
          <Button {...args} size="lg" iconLeft={IconPlus}>Large</Button>
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <Button {...args} size="sm" iconRight={IconArrowRight}>Small</Button>
          <Button {...args} size="md" iconRight={IconArrowRight}>Medium</Button>
          <Button {...args} size="lg" iconRight={IconArrowRight}>Large</Button>
        </div>
      </div>
    )
  },
}

export const Deshabilitado: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} variant="primary" disabled>Primary</Button>
      <Button {...args} variant="secondary" disabled>Secondary</Button>
      <Button {...args} variant="ghost" disabled>Ghost</Button>
      <Button {...args} variant="danger" disabled>Danger</Button>
    </div>
  ),
}

export const AnchoCompleto: Story = {
  args: { fullWidth: true },
}
