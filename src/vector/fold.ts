import { VectorLike } from './types'
import { getComponentsAsTuple } from './Utils'

export const fold = <T>(f: (x: number, y: number) => T) => (v: VectorLike) => {
  const [x, y] = getComponentsAsTuple(v)

  return f(x, y)
}

export const foldX = <T>(f: (x: number) => T) => fold((x, _) => f(x))
export const foldY = <T>(f: (y: number) => T) => fold((_, y) => f(y))
