import { map, mapX, mapY } from './map'

const allMapLikeFunctions = [map, mapX, mapY]
const createAllMapLikeFunctions = (f: (a: number) => number) => allMapLikeFunctions.map(g => g(f))

export const [negate, negateX, negateY] = createAllMapLikeFunctions(a => -a)
