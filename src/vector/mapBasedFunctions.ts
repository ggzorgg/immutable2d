import { VectorLike } from '.'
import { map, mapX, mapY } from './map'

const allMapLikeFunctions = [map, mapX, mapY]
const createAllMapLikeFunctions = (f: (a: number) => number) => allMapLikeFunctions.map(g => g(f))

export const [negate, negateX, negateY] = createAllMapLikeFunctions(a => -a)

// This is to ensure functions are uncurried by default
export const [multiply, multiplyX, multiplyY] = allMapLikeFunctions.map(
  g => (scalar: number, v: VectorLike) => g(a => a * scalar)(v)
)
