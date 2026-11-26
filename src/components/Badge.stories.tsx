import type { Meta, StoryObj } from '@storybook/react-vite'
import { fn } from 'storybook/test'
import { IconAlertTriangle, IconCalendar, IconCheck, IconX } from '@tabler/icons-react'
import { Badge } from './Badge'

const meta = {
  title: 'Componentes/Badge',
  component: Badge,
  args: {
    children: 'Pendiente',
  },
  argTypes: {
    variant: {
      control: 'inline-radio',
      options: ['neutral', 'info', 'success', 'warning', 'danger'],
    },
    size: { control: 'inline-radio', options: ['sm', 'md'] },
    icon: {
      control: 'select',
      options: ['Ninguno', 'IconCalendar', 'IconCheck', 'IconAlertTriangle', 'IconX'],
      mapping: { Ninguno: undefined, IconCalendar, IconCheck, IconAlertTriangle, IconX },
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

/** Etiqueta que se puede configurar desde el panel de controles. */
export const Playground: Story = {}

export const Variantes: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} variant="neutral">Neutral</Badge>
      <Badge {...args} variant="info">Info</Badge>
      <Badge {...args} variant="success">Success</Badge>
      <Badge {...args} variant="warning">Warning</Badge>
      <Badge {...args} variant="danger">Danger</Badge>
    </div>
  ),
}

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} size="sm">Small</Badge>
      <Badge {...args} size="md">Medium</Badge>
    </div>
  ),
}

export const ConIcono: Story = {
  render: (args) => (
    <div className="flex flex-wrap items-center gap-2">
      <Badge {...args} variant="info" icon={IconCalendar}>Próxima cita</Badge>
      <Badge {...args} variant="success" icon={IconCheck}>Tomada</Badge>
      <Badge {...args} variant="warning" icon={IconAlertTriangle}>Revisión pendiente</Badge>
      <Badge {...args} variant="danger" icon={IconX}>Olvidada</Badge>
    </div>
  ),
}

/** Con `onClick`, la etiqueta se puede pulsar (también con el teclado). */
export const Clicable: Story = {
  args: { onClick: fn(), variant: 'info', icon: IconCalendar, children: 'Filtrar por citas' },
}
