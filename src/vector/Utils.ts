import { VectorLike } from '../Types'
import { VectorObject } from './VectorObject'

export function isVectorObject(value: any): value is VectorObject {
  const vector = value as VectorObject
  return vector.x !== undefined && vector.y !== undefined
}

export function getComponents(value: VectorLike): [number, number] {
  if (isVectorObject(value)) {
    return [value.x, value.y]
  } else {
    return value
  }
}

export function getComponentsAsObject(value: VectorLike): VectorObject {
  if (isVectorObject(value)) {
    return value
  } else {
    return { x: value[0], y: value[1] }
  }
}
