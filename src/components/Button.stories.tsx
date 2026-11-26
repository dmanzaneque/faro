import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { IconArrowRight, IconPlus, IconTrash } from '@tabler/icons-react'
import { Button } from './Button'

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
    iconPosition: { control: 'inline-radio', options: ['left', 'right'] },
    icon: {
      control: 'select',
      options: ['Ninguno', 'IconPlus', 'IconArrowRight', 'IconTrash'],
      mapping: { Ninguno: undefined, IconPlus, IconArrowRight, IconTrash },
    },
  },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

/** Botón que se puede configurar desde el panel de controles. */
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

export const ConIcono: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-3">
      <Button {...args} icon={IconPlus}>Añadir cita</Button>
      <Button {...args} variant="ghost" icon={IconArrowRight} iconPosition="right">
        Ver todo
      </Button>
      <Button {...args} variant="danger" icon={IconTrash}>Borrar</Button>
    </div>
  ),
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
