import Vector from './Vector'
import { VectorLike } from './VectorLike'

export function toVector(x: number, y: number): Vector
export function toVector(values: [number, number] | VectorLike): Vector
export default function toVector(x: number | [number, number] | VectorLike, y?: number): Vector {
  if (typeof x === 'number') {
    return new Vector(x, y as number)
  } else {
    return new Vector(x)
  }
}
