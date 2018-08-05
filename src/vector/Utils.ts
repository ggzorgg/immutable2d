import { VectorObject } from './VectorObject'

export function isVectorObject(value: any): value is VectorObject {
  const vector = value as VectorObject
  return vector.x !== undefined && vector.y !== undefined
}
