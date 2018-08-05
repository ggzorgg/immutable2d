import { VectorObject } from '.'
import Vector from './Vector'

export function toVector(x: number, y: number): Vector
export function toVector(values: [number, number] | VectorObject): Vector
export default function toVector(x: number | [number, number] | VectorObject, y?: number): Vector {
  if (typeof x === 'number') {
    return new Vector(x, y as number)
  } else {
    return new Vector(x)
  }
}
