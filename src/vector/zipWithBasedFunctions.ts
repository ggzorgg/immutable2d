import { zipWith, zipWithX, zipWithY } from './zipWith'

const allZipWithLikeFunctions = [zipWith, zipWithX, zipWithY]
const createAllZipWithLikeFunctions = (f: (a: number, b: number) => number) =>
  allZipWithLikeFunctions.map(z => z(f))

export const [add, addX, addY] = createAllZipWithLikeFunctions((a, b) => a + b)
export const [substract, substractX, substractY] = createAllZipWithLikeFunctions((a, b) => a - b)
