import { VectorLike } from './types'
import { getComponentsAsTuple } from './Utils'
import { Vector } from './Vector'

export const map = (f: (a: number) => number) => (v: VectorLike) => {
  const [x, y] = getComponentsAsTuple(v)

  return new Vector(f(x), f(y))
}

export const mapX = (f: (a: number) => number) => (v: VectorLike) => {
  const [x, y] = getComponentsAsTuple(v)

  return new Vector(f(x), y)
}

export const mapY = (f: (a: number) => number) => (v: VectorLike) => {
  const [x, y] = getComponentsAsTuple(v)

  return new Vector(x, f(y))
}
