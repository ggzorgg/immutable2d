import { isVectorLike, VectorLike } from './VectorLike'

export default class Vector {
  public readonly x: number
  public readonly y: number

  constructor(x: number, y: number)
  constructor(values: [number, number] | VectorLike)
  constructor(x: number | [number, number] | VectorLike, y?: number) {
    if (typeof x === 'number') {
      this.x = x
      this.y = y as number
    } else if (isVectorLike(x)) {
      this.x = x.x
      this.y = x.y
    } else {
      this.x = x[0]
      this.y = x[1]
    }
  }
}
