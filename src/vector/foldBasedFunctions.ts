import { fold, foldX, foldY } from './fold'
import { toVector } from './toVector'

export const flip = fold((x, y) => toVector(y, x))

export const lengthSquared = fold((x, y) => x * x + y * y)
export const length = fold((x, y) => Math.sqrt(x * x + y * y))

export const getX = foldX(x => x)
export const getY = foldY(y => y)
