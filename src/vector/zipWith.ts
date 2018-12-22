import { VectorLike } from './types'
import { isVectorObject } from './Utils'
import { Vector } from './Vector'

export const zipWith = (f: (a: number, b: number) => number) => (v1: VectorLike, v2: VectorLike) => {
  if (isVectorObject(v1)) {
    if (isVectorObject(v2)) {
      return new Vector(f(v1.x, v2.x), f(v1.y, v2.y))
    } else {
      return new Vector(f(v1.x, v2[0]), f(v1.y, v2[1]))
    }
  } else {
    if (isVectorObject(v2)) {
      return [f(v1[0], v2.x), f(v1[1], v2.y)] as VectorLike
    } else {
      return [f(v1[0], v2[0]), f(v1[1], v2[1])] as VectorLike
    }
  }
}

export const zipWithX = (f: (a: number, b: number) => number) => (v1: VectorLike, v2: VectorLike) => {
  if (isVectorObject(v1)) {
    if (isVectorObject(v2)) {
      return new Vector(f(v1.x, v2.x), v1.y)
    } else {
      return new Vector(f(v1.x, v2[0]), v1.y)
    }
  } else {
    if (isVectorObject(v2)) {
      return [f(v1[0], v2.x), v1[1]] as VectorLike
    } else {
      return [f(v1[0], v2[0]), v1[1]] as VectorLike
    }
  }
}

export const zipWithY = (f: (a: number, b: number) => number) => (v1: VectorLike, v2: VectorLike) => {
  if (isVectorObject(v1)) {
    if (isVectorObject(v2)) {
      return new Vector(v1.x, f(v1.y, v2.y))
    } else {
      return new Vector(v1.x, f(v1.y, v2[1]))
    }
  } else {
    if (isVectorObject(v2)) {
      return [v1[0], f(v1[1], v2.y)] as VectorLike
    } else {
      return [v1[0], f(v1[1], v2[1])] as VectorLike
    }
  }
}
