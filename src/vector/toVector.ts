import { VectorLike } from '.'
import Vector from './Vector'

export function toVector(x: number, y: number): Vector
export function toVector(values: VectorLike): Vector
export default function toVector(x: number | VectorLike, y?: number): Vector {
  if (typeof x === 'number') {
    return new Vector(x, y as number)
  } else {
    return new Vector(x)
  }
}
