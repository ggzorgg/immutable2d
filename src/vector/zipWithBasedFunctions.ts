import { zipWith, zipWithX, zipWithY } from './zipWith'

export function zipWithFunctionsFor(f: (a: number, b: number) => number) {
  return [zipWith, zipWithX, zipWithY].map(z => z(f))
}

export const [add, addX, addY] = zipWithFunctionsFor((a, b) => a + b)
export const [substract, substractX, substractY] = zipWithFunctionsFor((a, b) => a - b)
