export interface VectorObject { x: number, y: number }

export function isVectorObject(value: any): value is VectorObject {
  const vector = value as VectorObject
  return vector.x !== undefined && vector.y !== undefined
}
