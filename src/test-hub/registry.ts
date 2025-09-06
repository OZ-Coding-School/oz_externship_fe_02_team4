import type { ComponentType } from 'react'

type LoaderType = () => Promise<{ default: ComponentType<unknown> }>

const modules = import.meta.glob('../test-pages/**/*Test.tsx') as Record<
  string,
  LoaderType
>

function getFileNameFromPath(path: string) {
  const last = path.split('/').pop() ?? ''
  return last.replace(/\.(t|j)sx?$/, '')
}

function removeTestSuffix(name: string) {
  return name.replace(/Test$/i, '')
}

function toKebabCase(str: string) {
  return str
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase()
}

function toDisplayName(str: string) {
  return str.replace(/([a-z0-9])([A-Z])/g, '$1 $2')
}

export const testPages = Object.entries(modules)
  .map(([key, loader]) => {
    const base = removeTestSuffix(getFileNameFromPath(key))
    const name = toDisplayName(base)
    const route = `test-pages/${toKebabCase(base)}`
    return { key, name, route, loader }
  })
  .sort((a, b) => a.name.localeCompare(b.name))
