import { VectorLike } from './types'
import { isVectorObject } from './Utils'
import { Vector } from './Vector'

export const map = (f: (a: number) => number) => (v: VectorLike) => {
  if (isVectorObject(v)) {
    return new Vector(f(v.x), f(v.y)) as VectorLike
  } else {
    return [f(v[0]), f(v[1])] as VectorLike
  }
}

export const mapX = (f: (a: number) => number) => (v: VectorLike) => {
  if (isVectorObject(v)) {
    return new Vector(f(v.x), v.y) as VectorLike
  } else {
    return [f(v[0]), v[1]] as VectorLike
  }
}

export const mapY = (f: (a: number) => number) => (v: VectorLike) => {
  if (isVectorObject(v)) {
    return new Vector(v.x, f(v.y)) as VectorLike
  } else {
    return [v[0], f(v[1])] as VectorLike
  }
}
