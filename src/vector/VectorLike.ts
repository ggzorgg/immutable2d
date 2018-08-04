export interface VectorLike { x: number, y: number }

export function isVectorLike(value: any): value is VectorLike {
  const vector = value as VectorLike
  return vector.x !== undefined && vector.y !== undefined
}
