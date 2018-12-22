import { VectorLike } from './types'
import { isVectorObject } from './Utils'

export const fold = <T>(f: (x: number, y: number) => T) => (v: VectorLike) => {
  if (isVectorObject(v)) {
    return f(v.x, v.y)
  } else {
    return f(v[0], v[1])
  }
}

export const foldX = <T>(f: (x: number) => T) => fold((x, _) => f(x))
export const foldY = <T>(f: (y: number) => T) => fold((_, y) => f(y))
