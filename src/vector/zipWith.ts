import { Vector, VectorLike } from '.'
import { getComponentsAsTuple } from './utils'

export const zipWith = (f: (a: number, b: number) => number) => (v1: VectorLike, v2: VectorLike) => {
  const [x1, y1] = getComponentsAsTuple(v1)
  const [x2, y2] = getComponentsAsTuple(v2)

  return new Vector(f(x1, x2), f(y1, y2))
}

export const zipWithX = (f: (a: number, b: number) => number) => (v1: VectorLike, v2: VectorLike) => {
  const [x1, y1] = getComponentsAsTuple(v1)
  const [x2] = getComponentsAsTuple(v2)

  return new Vector(f(x1, x2), y1)
}

export const zipWithY = (f: (a: number, b: number) => number) => (v1: VectorLike, v2: VectorLike) => {
  const [x1, y1] = getComponentsAsTuple(v1)
  const [_, y2] = getComponentsAsTuple(v2)

  return new Vector(x1, f(y1, y2))
}
