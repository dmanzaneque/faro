# Auditoría del design system

Revisión de los componentes de `src/components/` tal y como están en `main` el 27 de noviembre de 2026: `Button`, `Input`, `Card` y `Badge`.

Todos los valores vienen de la paleta y las escalas **por defecto de Tailwind**. Todavía no hay tokens propios de faro (nombres como `primary` o `danger` definidos en un único sitio), así que cada componente escribe sus colores y medidas por su cuenta.

Equivalencias usadas en este documento: en Tailwind, cada paso de espaciado vale 4 px (`2` = 8 px, `3.5` = 14 px…).

---

## 1. Inventario de componentes

| Componente | Archivo | Variantes (`variant`) | Tamaños (`size`) | Icono | Otras opciones |
| --- | --- | --- | --- | --- | --- |
| Button | `src/components/Button.tsx` | `primary` (por defecto), `secondary`, `ghost`, `danger` | `sm`, `md` (por defecto), `lg` | `iconLeft` **o** `iconRight`, nunca los dos | `fullWidth`, `disabled` y cualquier atributo de `<button>` |
| Input | `src/components/Input.tsx` | — (no tiene) | `sm`, `md` (por defecto), `lg` | `icon` (siempre a la izquierda) | `label`, `hint`, `error`, `disabled` y cualquier atributo de `<input>` |
| Card | `src/components/Card.tsx` | `outlined` (por defecto), `elevated` | — (no tiene) | `icon` (junto al título) | `title`, `description`, `footer`, contenido (`children`) |
| Badge | `src/components/Badge.tsx` | `neutral` (por defecto), `info`, `success`, `warning`, `danger` | `sm`, `md` (por defecto) | `icon` (siempre a la izquierda) | `onClick` (la convierte en botón), `className` |

### Estados

| Componente | Estados que existen |
| --- | --- |
| Button | normal, al pasar el ratón (`hover`), al pulsar (`active`), con foco de teclado (`focus-visible`), deshabilitado |
| Input | normal, con foco, con error, deshabilitado |
| Card | — (no es interactiva) |
| Badge | normal; si tiene `onClick`, también al pasar el ratón y con foco de teclado |

### Medidas por tamaño

| Componente | `sm` | `md` | `lg` |
| --- | --- | --- | --- |
| Button: alto | 32 px (`h-8`) | 40 px (`h-10`) | 48 px (`h-12`) |
| Button: texto | `text-sm` | `text-sm` | `text-base` |
| Button: icono | 16 px | 18 px | 20 px |
| Input: alto | 32 px (`h-8`) | 40 px (`h-10`) | 48 px (`h-12`) |
| Input: texto | `text-sm` | `text-sm` | `text-base` |
| Input: icono | 18 px | 18 px | 18 px |
| Badge: alto | según el texto, 4 px arriba y abajo | según el texto, 6 px arriba y abajo | — |
| Badge: texto | `text-xs` | `text-sm` | — |
| Badge: icono | 14 px | 16 px | — |

---

## 2. Colores, espaciados y radios de Tailwind por componente

### Button

| Tipo | Clases | Dónde |
| --- | --- | --- |
| Colores `primary` | `bg-blue-600`, `hover:bg-blue-700`, `active:bg-blue-800`, `text-white` | fondo y texto |
| Colores `secondary` | `bg-white`, `hover:bg-gray-50`, `active:bg-gray-100`, `border-gray-300`, `text-gray-900` | fondo, borde y texto |
| Colores `ghost` | `bg-transparent`, `hover:bg-blue-50`, `active:bg-blue-100`, `text-blue-700` | fondo y texto |
| Colores `danger` | `bg-red-600`, `hover:bg-red-700`, `active:bg-red-800`, `text-white` | fondo y texto |
| Color de foco | `focus-visible:outline-blue-600` | contorno al usar el teclado |
| Espaciado `sm` | `px-3.5` (14 px), `gap-1.5` (6 px) | laterales; separación icono-texto |
| Espaciado `md` | `px-5` (20 px), `gap-2` (8 px) | laterales; separación icono-texto |
| Espaciado `lg` | `px-6` (24 px), `gap-2` (8 px) | laterales; separación icono-texto |
| Espaciado de foco | `outline-offset-2` (2 px) | separación del contorno |
| Radio | `rounded-full` | forma de píldora |
| Otros | `border` (1 px, solo `secondary`), `disabled:opacity-50` | — |

### Input

| Tipo | Clases | Dónde |
| --- | --- | --- |
| Colores del campo | `bg-white`, `text-gray-900`, `placeholder:text-gray-400`, `border-gray-300` | campo normal |
| Color de foco | `focus:outline-blue-600` | contorno al escribir |
| Colores de error | `border-red-500`, `focus:outline-red-500`, `text-red-600` | borde, contorno y mensaje |
| Colores deshabilitado | `disabled:bg-gray-100`, `disabled:text-gray-500` | campo apagado |
| Colores de etiqueta, ayuda e icono | `text-gray-900` (etiqueta), `text-gray-500` (ayuda), `text-gray-400` (icono) | textos alrededor |
| Espaciado | `px-3` (12 px), `pl-10` (40 px si hay icono), `left-3` (12 px, posición del icono), `gap-1.5` (6 px entre etiqueta, campo y mensaje) | — |
| Radio | `rounded-lg` (8 px) | campo |
| Otros | `border` (1 px), `outline-2`, `outline-offset-0` | — |

### Card

| Tipo | Clases | Dónde |
| --- | --- | --- |
| Colores | `bg-white`, `text-gray-900` (título), `text-gray-600` (descripción), `text-gray-700` (contenido) | tarjeta y textos |
| Color del borde | `border-gray-200` | borde de `outlined` y línea del pie |
| Colores del icono | `bg-blue-50`, `text-blue-600` | cuadradito del icono |
| Espaciado | `p-6` (24 px interior), `gap-4` (16 px entre bloques), `gap-3` (12 px icono-título), `gap-1` (4 px título-descripción), `gap-2` (8 px en el pie), `pt-4` (16 px encima del pie) | — |
| Tamaño del cuadradito del icono | `size-10` (40 × 40 px) | — |
| Radios | `rounded-xl` (12 px, tarjeta), `rounded-lg` (8 px, cuadradito del icono) | — |
| Otros | `shadow-md` (solo `elevated`), `border` y `border-t` (1 px) | — |

### Badge

| Tipo | Clases | Dónde |
| --- | --- | --- |
| Colores `neutral` | `bg-gray-100`, `text-gray-700`, `hover:bg-gray-200` | — |
| Colores `info` | `bg-blue-100`, `text-blue-800`, `hover:bg-blue-200` | — |
| Colores `success` | `bg-green-100`, `text-green-800`, `hover:bg-green-200` | — |
| Colores `warning` | `bg-amber-100`, `text-amber-800`, `hover:bg-amber-200` | — |
| Colores `danger` | `bg-red-100`, `text-red-800`, `hover:bg-red-200` | — |
| Color de foco | `focus-visible:outline-blue-600` | solo si tiene `onClick` |
| Espaciado `sm` | `px-2` (8 px), `py-1` (4 px), `gap-1` (4 px) | — |
| Espaciado `md` | `px-3` (12 px), `py-1.5` (6 px), `gap-1.5` (6 px) | — |
| Espaciado de foco | `outline-offset-2` (2 px) | — |
| Radio | `rounded-full` | forma de píldora |

### Resumen: qué colores de la paleta se usan

| Color | Tonos usados | Componentes |
| --- | --- | --- |
| `blue` | 50, 100, 200, 600, 700, 800 | Button, Input, Card, Badge |
| `gray` | 50, 100, 200, 300, 400, 500, 600, 700, 900 | Button, Input, Card, Badge |
| `red` | 100, 200, 500, 600, 700, 800 | Button, Input, Badge |
| `green` | 100, 200, 800 | Badge |
| `amber` | 100, 200, 800 | Badge |
| `white` / `transparent` | — | Button, Input, Card |

Radios usados: `rounded-full`, `rounded-xl` (12 px) y `rounded-lg` (8 px).

---

## 3. Valores escritos a mano dentro de los componentes

- **Colores hexadecimales** (`#…`), `rgb()`, `hsl()` u `oklch()`: **ninguno**.
- **Valores entre corchetes de Tailwind** (por ejemplo `w-[13px]`): **ninguno**.

Lo que sí hay son **colores de la paleta de Tailwind escritos directamente** en cada componente, en lugar de nombres con significado, y **tamaños de icono en píxeles**.

### Tamaños de icono y grosor de trazo (en píxeles, fuera de Tailwind)

| Archivo | Línea | Valor | Qué es |
| --- | --- | --- | --- |
| `src/components/Button.tsx` | 47 | `{ sm: 16, md: 18, lg: 20 }` | tamaño del icono según el tamaño del botón |
| `src/components/Button.tsx` | 81 | `stroke={2}` | grosor del trazo del icono izquierdo |
| `src/components/Button.tsx` | 83 | `stroke={2}` | grosor del trazo del icono derecho |
| `src/components/Input.tsx` | 52 | `size={18}` | tamaño del icono, igual en los tres tamaños del campo |
| `src/components/Card.tsx` | 49 | `size={22}` | tamaño del icono de la cabecera |
| `src/components/Badge.tsx` | 44 | `{ sm: 14, md: 16 }` | tamaño del icono según el tamaño de la etiqueta |
| `src/components/Badge.tsx` | 67 | `stroke={2}` | grosor del trazo del icono |

### Colores de Tailwind escritos directamente

| Archivo | Línea | Clases |
| --- | --- | --- |
| `src/components/Button.tsx` | 34 | `bg-blue-600` `text-white` `hover:bg-blue-700` `active:bg-blue-800` |
| `src/components/Button.tsx` | 36 | `border-gray-300` `bg-white` `text-gray-900` `hover:bg-gray-50` `active:bg-gray-100` |
| `src/components/Button.tsx` | 37 | `bg-transparent` `text-blue-700` `hover:bg-blue-50` `active:bg-blue-100` |
| `src/components/Button.tsx` | 38 | `bg-red-600` `text-white` `hover:bg-red-700` `active:bg-red-800` |
| `src/components/Button.tsx` | 72 | `focus-visible:outline-blue-600` |
| `src/components/Input.tsx` | 45 | `text-gray-900` |
| `src/components/Input.tsx` | 54 | `text-gray-400` |
| `src/components/Input.tsx` | 62 | `bg-white` `text-gray-900` `placeholder:text-gray-400` |
| `src/components/Input.tsx` | 64 | `disabled:bg-gray-100` `disabled:text-gray-500` |
| `src/components/Input.tsx` | 66 | `border-red-500` `focus:outline-red-500` |
| `src/components/Input.tsx` | 67 | `border-gray-300` `focus:outline-blue-600` |
| `src/components/Input.tsx` | 77 | `text-red-600` `text-gray-500` |
| `src/components/Card.tsx` | 20 | `border-gray-200` |
| `src/components/Card.tsx` | 39 | `bg-white` `text-gray-900` |
| `src/components/Card.tsx` | 48 | `bg-blue-50` `text-blue-600` |
| `src/components/Card.tsx` | 54 | `text-gray-600` |
| `src/components/Card.tsx` | 58 | `text-gray-700` |
| `src/components/Card.tsx` | 60 | `border-gray-200` |
| `src/components/Badge.tsx` | 23 | `bg-gray-100` `text-gray-700` |
| `src/components/Badge.tsx` | 24 | `bg-blue-100` `text-blue-800` |
| `src/components/Badge.tsx` | 25 | `bg-green-100` `text-green-800` |
| `src/components/Badge.tsx` | 26 | `bg-amber-100` `text-amber-800` |
| `src/components/Badge.tsx` | 27 | `bg-red-100` `text-red-800` |
| `src/components/Badge.tsx` | 31–35 | `hover:bg-gray-200` `hover:bg-blue-200` `hover:bg-green-200` `hover:bg-amber-200` `hover:bg-red-200` |
| `src/components/Badge.tsx` | 59 | `focus-visible:outline-blue-600` |

### Lo que se repite y convendría convertir en tokens

- **El azul principal** (`blue-600`) aparece en tres sitios con tres papeles distintos: fondo del botón `primary` (`Button.tsx:34`), contorno de foco (`Button.tsx:72`, `Input.tsx:67`, `Badge.tsx:59`) e icono de la tarjeta (`Card.tsx:48`).
- **El contorno de foco** `focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600` está copiado igual en `Button.tsx:72` y `Badge.tsx:59`. En `Input.tsx:63` y `:67` se hace de otra forma: con `focus:`, sin separación y en rojo si hay error.
- **El rojo de error** usa tres tonos distintos: `red-500` para el borde del campo (`Input.tsx:66`), `red-600` para el mensaje (`Input.tsx:77`) y el botón `danger` (`Button.tsx:38`), y `red-800` para la etiqueta `danger` (`Badge.tsx:27`).
- **Los bordes grises** usan dos tonos: `gray-300` en Button (`Button.tsx:36`) e Input (`Input.tsx:67`), y `gray-200` en Card (`Card.tsx:20` y `:60`).
- **Los tamaños de icono** no siguen una escala común: 14, 16, 18, 20 y 22 px.

---

## 4. Nombres de props y variantes que un agente no adivinaría

### Button

- **`iconLeft` / `iconRight`, no `icon`.** Input, Card y Badge usan `icon`, pero Button no. No existe `iconPosition`. Si se pasan los dos, TypeScript da error. Si llegan los dos igualmente (por ejemplo, desde Storybook), solo se pinta `iconLeft` y sale un aviso en la consola.
- **`type` vale `'button'` por defecto**, no `'submit'` como en HTML. Para que un botón envíe un formulario hay que poner `type="submit"`.
- **`variant="ghost"`**: solo texto, sin fondo. No se llama `tertiary`, `link`, `text` ni `outline`.
- **`variant="danger"`**: no se llama `destructive` (como en shadcn/ui) ni `error`.
- **`variant="secondary"`**: es blanco con borde. No hay variante `outline`.
- **`fullWidth`**: no se llama `block` ni `wide`.
- No hay variante `success` ni `warning`, aunque Badge sí las tiene.
- No hay estado de carga (`loading`).

### Input

- **`hint`**: el texto de ayuda. No se llama `helperText`, `description` ni `helper`.
- **`error` es un texto, no un sí/no.** `error="Campo obligatorio"` marca el campo en rojo y muestra ese mensaje. `error={true}` no está permitido. Si hay `error`, sustituye a `hint`.
- **`size` es `'sm' | 'md' | 'lg'`.** Sustituye al atributo `size` de HTML, que es un número de caracteres y por eso no se puede usar.
- **`className` va al contenedor**, no al `<input>`. Sirve para colocar el bloque entero (etiqueta, campo y mensaje), no para cambiar el aspecto del campo.
- **`icon` siempre va a la izquierda.** No existe `iconRight` ni `iconLeft` en Input.
- **`label` solo acepta texto**, no elementos de React.
- **`id` se genera solo** si no se pasa. Si se pasa, el mensaje usa `` `${id}-message` `` como identificador.
- No tiene `variant`.

### Card

- **`variant="outlined"` / `"elevated"`**: no se llaman `bordered`, `shadow`, `flat` ni `raised`.
- **`title` sustituye al atributo `title` de HTML** (el texto que sale al dejar el ratón encima). No hay forma de poner ese texto flotante en la tarjeta.
- **`title` siempre se pinta como `<h3>`**: no se puede elegir el nivel del encabezado.
- **`footer`**: no se llama `actions` ni `bottom`. Se pinta debajo de una línea separadora.
- **`children` se envuelve** en un bloque con texto pequeño y gris (`text-sm text-gray-700`). No queda tal cual.
- **`icon` se pinta dentro de un cuadradito azul claro** fijo; no se puede cambiar el color.
- No tiene `size` ni opción para cambiar el relleno (siempre 24 px).

### Badge

- **No tiene variante `primary`** y sí tiene `neutral`, que es la de por defecto. Las cinco variantes son de significado: `neutral`, `info`, `success`, `warning`, `danger`.
- **Solo tiene dos tamaños**, `sm` y `md`. No hay `lg`, aunque Button e Input sí lo tienen.
- **`onClick` cambia el elemento**: sin `onClick` es un `<span>`; con `onClick` pasa a ser un `<button type="button">` con efecto al pasar el ratón y contorno de foco.
- **`onClick` no recibe el evento**: su tipo es `() => void`.
- **No acepta otros atributos HTML.** Solo admite las props de la lista: no se le puede pasar `id`, `aria-label`, `title`, `data-*` ni `disabled`. Es el único componente que no los reenvía.
- **`children` es obligatorio.**
- **`icon` siempre va a la izquierda.**

### En general

- **El tamaño por defecto es `md`** en Button, Input y Badge.
- **Los tamaños `md` de Button e Input miden lo mismo (40 px)** para que encajen en la misma fila. Lo mismo pasa con `sm` (32 px) y `lg` (48 px).
- **Los iconos se pasan como componente, no como elemento**: `iconLeft={IconPlus}`, no `iconLeft={<IconPlus />}`. El tamaño lo decide cada componente.
- **Todos los componentes se pueden importar desde un solo sitio**: `import { Button, Input, Card, Badge } from './components'` (`src/components/index.ts`). Los tipos (`ButtonVariant`, `BadgeSize`…) también se exportan desde ahí.
