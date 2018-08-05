export interface VectorObject { x: number, y: number }
export type VectorLike = VectorObject | [number, number]

import toVector from './toVector'
import Vector from './Vector'

export { toVector, Vector }
export * from './zipWith'
export * from './zipWithBasedFunctions'
