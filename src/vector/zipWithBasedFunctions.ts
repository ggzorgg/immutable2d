import { VectorLike, VectorObject } from './types'
import { Vector } from './Vector'
import { zipWith, zipWithX, zipWithY } from './zipWith'

const allZipWithLikeFunctions = [zipWith, zipWithX, zipWithY]
const createAllZipWithLikeFunctions = (g: (a: number, b: number) => number) =>
  allZipWithLikeFunctions.map(f => f(g))

export const [add, addX, addY] = createAllZipWithLikeFunctions((a, b) => a + b)
export const [substract, substractX, substractY] = createAllZipWithLikeFunctions((a, b) => a - b)
