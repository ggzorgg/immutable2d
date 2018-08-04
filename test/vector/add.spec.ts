import * as fc from 'fast-check'
import 'mocha'
import { add, toVector } from '../../src/vector'

const anyNumber = fc.double(Number.MIN_VALUE, Number.MAX_VALUE)
const anyVector = fc.tuple(anyNumber, anyNumber).map(toVector)

describe('The "add" function', () => {
  it('should return the component-wise sum of two vectors', () => {
    fc.assert(
      fc.property(
        anyVector, anyVector,
        (v1, v2) => {
          const v = add(v1, v2)

          return v.x === v1.x + v2.x && v.y === v1.y + v2.y
        }
      )
    )
  })
})
