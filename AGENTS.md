# AGENTS.md

Manual de trabajo para este repositorio. Léelo antes de cada tarea.

## Qué es

**faro** es el design system de **faro salud**, una app de salud personal. En faro salud cada persona entra en su portal y ve sus recetas y la medicación que tiene que tomar, los análisis y chequeos que se ha hecho en el año y sus citas. También puede grabar sus consultas y tomar notas, hablar con un agente de IA sobre cómo se siente y ponerse objetivos anuales de revisiones (vista, dientes, medicina general), con un panel de datos y métricas para seguirlo todo.

faro reúne los fundamentos visuales, los componentes y las pautas con los que se construyen todas las pantallas de la app. Más contexto en el [README](README.md).

## Tecnología

- **React con TypeScript**, usando **Vite** como herramienta de desarrollo y compilación.
- **Tailwind CSS** para los estilos.
- **Tabler Icons** para los iconos.
- **Ninguna librería de componentes**: todos los componentes se crean desde cero en este repositorio. No añadas dependencias como MUI, Chakra, Radix, shadcn/ui, Headless UI o similares.

## Cómo trabajamos

- **En español**: conversación, documentación, mensajes de commit y descripciones de PR.
- **Siempre en una rama con PR**: nunca se sube nada directamente a `main`. Cada cambio va en su propia rama y llega a `main` mediante una pull request.
- **Sin jerga**: explica los cambios con palabras sencillas, de forma que los entienda alguien que no programa. Si un término técnico es imprescindible, explícalo.
- **`package.json` y `package-lock.json` van juntos**: si cambias `package.json`, actualiza `package-lock.json` en la misma PR.
