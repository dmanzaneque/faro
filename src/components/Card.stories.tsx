import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconCalendar, IconPill } from '@tabler/icons-react'
import { Badge } from './Badge'
import { Button } from './Button'
import { Card } from './Card'

const meta = {
  title: 'Componentes/Card',
  component: Card,
  args: {
    title: 'Ibuprofeno 600 mg',
    description: '1 comprimido cada 8 horas',
    children: 'Próxima toma a las 14:00.',
  },
  argTypes: {
    variant: { control: 'inline-radio', options: ['outlined', 'elevated'] },
    icon: {
      control: 'select',
      options: ['Ninguno', 'IconPill', 'IconCalendar'],
      mapping: { Ninguno: undefined, IconPill, IconCalendar },
    },
    footer: { control: false },
  },
  decorators: [
    (Story) => (
      <div className="max-w-md">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

/** Tarjeta que se puede configurar desde el panel de controles. */
export const Playground: Story = {}

export const Variantes: Story = {
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Card {...args} variant="outlined" title="Outlined (con borde)" />
      <Card {...args} variant="elevated" title="Elevated (con sombra)" />
    </div>
  ),
}

export const ConIcono: Story = {
  args: { icon: IconPill },
}

export const ConPie: Story = {
  args: {
    icon: IconPill,
    footer: (
      <>
        <Button size="sm">Marcar tomada</Button>
        <Button size="sm" variant="ghost">Ver receta</Button>
      </>
    ),
  },
}

export const SoloContenido: Story = {
  args: {
    title: undefined,
    description: undefined,
    children: 'Una tarjeta sin título, solo con contenido.',
  },
}

export const EjemploCita: Story = {
  args: {
    variant: 'elevated',
    icon: IconCalendar,
    title: 'Revisión dental',
    description: 'Viernes, 12 de diciembre · 10:30',
    children: <Badge variant="info">Próxima cita</Badge>,
  },
}
