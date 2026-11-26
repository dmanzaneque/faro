import type { Meta, StoryObj } from '@storybook/react-vite'
import { IconMail, IconSearch } from '@tabler/icons-react'
import { Input } from './Input'

const meta = {
  title: 'Componentes/Input',
  component: Input,
  args: {
    label: 'Email',
    placeholder: 'nombre@ejemplo.com',
  },
  argTypes: {
    size: { control: 'inline-radio', options: ['sm', 'md', 'lg'] },
    icon: {
      control: 'select',
      options: ['Ninguno', 'IconMail', 'IconSearch'],
      mapping: { Ninguno: undefined, IconMail, IconSearch },
    },
  },
  decorators: [
    (Story) => (
      <div className="max-w-sm">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Input>

export default meta
type Story = StoryObj<typeof meta>

/** Campo que se puede configurar desde el panel de controles. */
export const Playground: Story = {}

export const ConAyuda: Story = {
  args: { hint: 'Te enviaremos aquí los recordatorios de tus citas.' },
}

export const ConError: Story = {
  args: { error: 'Escribe un email válido.', defaultValue: 'nombre@' },
}

export const ConIcono: Story = {
  args: { label: 'Buscar', placeholder: 'Medicamento, cita…', icon: IconSearch },
}

export const Deshabilitado: Story = {
  args: { disabled: true, defaultValue: 'nombre@ejemplo.com' },
}

export const Tamanos: Story = {
  name: 'Tamaños',
  render: (args) => (
    <div className="flex flex-col gap-4">
      <Input {...args} size="sm" label="Small" />
      <Input {...args} size="md" label="Medium" />
      <Input {...args} size="lg" label="Large" />
    </div>
  ),
}
