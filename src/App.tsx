import type { ReactNode } from 'react'
import {
  IconCalendar,
  IconChartBar,
  IconDental,
  IconEye,
  IconHeartbeat,
  IconMicrophone,
  IconPill,
  IconStethoscope,
} from '@tabler/icons-react'

// Todos los valores de esta página son los que Tailwind trae por defecto.
// Todavía no son los de faro: sirven de referencia mientras definimos los nuestros.

const colors = [
  'red', 'orange', 'amber', 'yellow', 'lime', 'green', 'emerald', 'teal',
  'cyan', 'sky', 'blue', 'indigo', 'violet', 'purple', 'fuchsia', 'pink',
  'rose', 'slate', 'gray', 'zinc', 'neutral', 'stone', 'mauve', 'olive',
  'mist', 'taupe',
]

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950]

const spacing = [
  { name: '0', className: 'w-0' },
  { name: 'px', className: 'w-px' },
  { name: '0.5', className: 'w-0.5' },
  { name: '1', className: 'w-1' },
  { name: '1.5', className: 'w-1.5' },
  { name: '2', className: 'w-2' },
  { name: '2.5', className: 'w-2.5' },
  { name: '3', className: 'w-3' },
  { name: '3.5', className: 'w-3.5' },
  { name: '4', className: 'w-4' },
  { name: '5', className: 'w-5' },
  { name: '6', className: 'w-6' },
  { name: '7', className: 'w-7' },
  { name: '8', className: 'w-8' },
  { name: '9', className: 'w-9' },
  { name: '10', className: 'w-10' },
  { name: '11', className: 'w-11' },
  { name: '12', className: 'w-12' },
  { name: '14', className: 'w-14' },
  { name: '16', className: 'w-16' },
  { name: '20', className: 'w-20' },
  { name: '24', className: 'w-24' },
  { name: '28', className: 'w-28' },
  { name: '32', className: 'w-32' },
  { name: '36', className: 'w-36' },
  { name: '40', className: 'w-40' },
  { name: '44', className: 'w-44' },
  { name: '48', className: 'w-48' },
  { name: '52', className: 'w-52' },
  { name: '56', className: 'w-56' },
  { name: '60', className: 'w-60' },
  { name: '64', className: 'w-64' },
  { name: '72', className: 'w-72' },
  { name: '80', className: 'w-80' },
  { name: '96', className: 'w-96' },
]

const radii = [
  { name: 'rounded-none', className: 'rounded-none' },
  { name: 'rounded-xs', className: 'rounded-xs' },
  { name: 'rounded-sm', className: 'rounded-sm' },
  { name: 'rounded-md', className: 'rounded-md' },
  { name: 'rounded-lg', className: 'rounded-lg' },
  { name: 'rounded-xl', className: 'rounded-xl' },
  { name: 'rounded-2xl', className: 'rounded-2xl' },
  { name: 'rounded-3xl', className: 'rounded-3xl' },
  { name: 'rounded-4xl', className: 'rounded-4xl' },
  { name: 'rounded-full', className: 'rounded-full' },
]

const textSizes = [
  { name: 'text-xs', className: 'text-xs' },
  { name: 'text-sm', className: 'text-sm' },
  { name: 'text-base', className: 'text-base' },
  { name: 'text-lg', className: 'text-lg' },
  { name: 'text-xl', className: 'text-xl' },
  { name: 'text-2xl', className: 'text-2xl' },
  { name: 'text-3xl', className: 'text-3xl' },
  { name: 'text-4xl', className: 'text-4xl' },
  { name: 'text-5xl', className: 'text-5xl' },
  { name: 'text-6xl', className: 'text-6xl' },
  { name: 'text-7xl', className: 'text-7xl' },
  { name: 'text-8xl', className: 'text-8xl' },
  { name: 'text-9xl', className: 'text-9xl' },
]

const icons = [
  { name: 'IconPill', Icon: IconPill },
  { name: 'IconHeartbeat', Icon: IconHeartbeat },
  { name: 'IconCalendar', Icon: IconCalendar },
  { name: 'IconStethoscope', Icon: IconStethoscope },
  { name: 'IconEye', Icon: IconEye },
  { name: 'IconDental', Icon: IconDental },
  { name: 'IconMicrophone', Icon: IconMicrophone },
  { name: 'IconChartBar', Icon: IconChartBar },
]

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="mb-4 text-2xl font-semibold">{title}</h2>
      {children}
    </section>
  )
}

function App() {
  return (
    <main className="mx-auto max-w-6xl p-8 text-gray-900">
      <h1 className="text-4xl font-bold">Tailwind</h1>
      <p className="mt-2 text-gray-600">
        Valores que Tailwind trae por defecto. Todavía no son los de faro.
      </p>

      <Section title="Paleta de color">
        <div className="space-y-2">
          {colors.map((color) => (
            <div key={color} className="flex items-center gap-4">
              <span className="w-20 shrink-0 text-sm font-medium">{color}</span>
              <div className="grid flex-1 grid-cols-11 gap-1">
                {shades.map((shade) => (
                  <div key={shade} className="text-center">
                    <div className={`h-10 rounded-md bg-${color}-${shade}`} />
                    <span className="text-xs text-gray-500">{shade}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Espaciado">
        <div className="space-y-1">
          {spacing.map(({ name, className }) => (
            <div key={name} className="flex items-center gap-4">
              <span className="w-12 shrink-0 text-sm font-medium">{name}</span>
              <div className={`h-4 bg-sky-500 ${className}`} />
            </div>
          ))}
        </div>
      </Section>

      <Section title="Radios">
        <div className="flex flex-wrap gap-6">
          {radii.map(({ name, className }) => (
            <div key={name} className="text-center">
              <div className={`size-20 bg-sky-500 ${className}`} />
              <span className="mt-2 block text-xs text-gray-500">{name}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Tamaños de texto">
        <div className="space-y-3">
          {textSizes.map(({ name, className }) => (
            <div key={name} className="flex items-baseline gap-4">
              <span className="w-20 shrink-0 text-sm text-gray-500">{name}</span>
              <span className={`truncate ${className}`}>Faro salud</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Iconos (Tabler Icons)">
        <div className="grid grid-cols-4 gap-6 sm:grid-cols-8">
          {icons.map(({ name, Icon }) => (
            <div key={name} className="flex flex-col items-center gap-2">
              <Icon size={32} stroke={1.5} />
              <span className="text-xs text-gray-500">{name}</span>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}

export default App
