import * as fc from 'fast-check'
import 'mocha'
import { add, toVector } from '../../src/vector'

const anyNumber = fc.double(Number.MIN_VALUE, Number.MAX_VALUE)
const anyNumberTuple = fc.tuple(anyNumber, anyNumber)
const anyVector = anyNumberTuple.map(toVector)
const anyVectorObject = anyNumberTuple.map(([x, y]) => ({ x, y }))

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
  }),
    it('should return the sum of the corresponding components when called with a VectorObject', () => {
      fc.assert(
        fc.property(
          anyVectorObject, anyVectorObject,
          (v1, v2) => {
            const v = add(v1, v2)

            return v.x === v1.x + v2.x && v.y === v1.y + v2.y
          }
        )
      )
    }),
    it('should return the sum of the corresponding components when called with tuples', () => {
      fc.assert(
        fc.property(
          anyNumberTuple, anyNumberTuple,
          (t1, t2) => {
            const v = add(t1, t2)

            return v.x === t1[0] + t2[0] && v.y === t1[1] + t2[1]
          }
        )
      )
    }),
    it('should return the sum of the corresponding components when called with a object and a tuple', () => {
      fc.assert(
        fc.property(
          anyVectorObject, anyNumberTuple,
          (t1, t2) => {
            const v = add(t1, t2)

            return v.x === t1.x + t2[0] && v.y === t1.y + t2[1]
          }
        )
      )
    })
})
