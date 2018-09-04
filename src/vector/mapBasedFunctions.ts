import { map, mapX, mapY } from './map'
import { VectorLike } from './types'

const allMapLikeFunctions = [map, mapX, mapY]
const createAllMapLikeFunctions = (f: (a: number) => number) => allMapLikeFunctions.map(g => g(f))
const createAllMapLikeFunctionsWithScalar = (f: (scalar: number, a: number) => number) => allMapLikeFunctions.map(
  // This is to ensure functions are uncurried by default
  g => (scalar: number, v: VectorLike) => g(a => f(scalar, a))(v)
)

export const [negate, negateX, negateY] = createAllMapLikeFunctions(a => -a)
export const [multiply, multiplyX, multiplyY] = createAllMapLikeFunctionsWithScalar((scalar, a) => scalar * a)
export const [divide, divideX, divideY] = createAllMapLikeFunctionsWithScalar((scalar, a) => a / scalar)
