import { fold } from './fold'
import { toVector } from './toVector'

export const flip = fold((a, b) => toVector(b, a))
export const lengthSquared = fold((a, b) => a * a + b * b)
export const length = fold((a, b) => Math.sqrt(a * a + b * b))
