import { zipWith, zipWithX, zipWithY } from './zipWith'

const allZipWithLikeFunctions = [zipWith, zipWithX, zipWithY]
const createAllZipWithLikeFunctions = (g: (a: number, b: number) => number) =>
  allZipWithLikeFunctions.map(f => f(g))

export const [add, addX, addY] = createAllZipWithLikeFunctions((a, b) => a + b)
