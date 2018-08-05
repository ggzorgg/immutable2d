import { isVectorObject, VectorObject } from './VectorObject'

export default class Vector implements VectorObject {
  public readonly x: number
  public readonly y: number

  constructor(x: number, y: number)
  constructor(values: [number, number] | VectorObject)
  constructor(x: number | [number, number] | VectorObject, y?: number) {
    if (typeof x === 'number') {
      this.x = x
      this.y = y as number
    } else if (isVectorObject(x)) {
      this.x = x.x
      this.y = x.y
    } else {
      this.x = x[0]
      this.y = x[1]
    }
  }
}
