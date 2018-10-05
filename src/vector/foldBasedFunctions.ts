import { fold } from './fold'
import { divide } from './mapBasedFunctions'
import { toVector } from './toVector'
import { VectorLike } from './types'

export const flip = fold((a, b) => toVector(b, a))
export const lengthSquared = fold((a, b) => a * a + b * b)
export const length = fold((a, b) => Math.sqrt(a * a + b * b))
export const normalize = (v: VectorLike) => divide(length(v), v)
