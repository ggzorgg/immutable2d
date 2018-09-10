import { map, mapX, mapY } from './map'
import { VectorLike } from './types'

const allMapLikeFunctions = [map, mapX, mapY]
const createAllMapLikeFunctions = (f: (a: number) => number) => allMapLikeFunctions.map(m => m(f))
const createAllMapLikeFunctionsWithScalar = (f: (scalar: number, a: number) => number) =>
// This is to ensure functions are uncurried by default
  allMapLikeFunctions.map(m => (scalar: number, v: VectorLike) => m(a => f(scalar, a))(v))

export const [negate, negateX, negateY] = createAllMapLikeFunctions(a => -a)
export const [multiply, multiplyX, multiplyY] = createAllMapLikeFunctionsWithScalar((scalar, a) => scalar * a)
export const [divide, divideX, divideY] = createAllMapLikeFunctionsWithScalar((scalar, a) => a / scalar)
