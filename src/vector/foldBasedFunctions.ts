import { fold } from './fold'
import { toVector } from './toVector'

export const flip = fold((a, b) => toVector(b, a))
