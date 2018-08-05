import * as fc from 'fast-check'
import 'mocha'
import { toVector } from '../../src/vector'
import { anyNumber } from '../utils'

describe('The "toVector" function', () => {
  it('should return a Vector when called with two parameters', () => {
    fc.assert(
      fc.property(
        anyNumber, anyNumber,
        (x, y) => {
          const v = toVector(x, y)
          return v.x === x && v.y === y
        }
      )
    )
  }),
    it('should return a Vector when called with a tuple of numbers', () => {
      fc.assert(
        fc.property(
          fc.tuple(anyNumber, anyNumber),
          t => {
            const v = toVector(t)
            return v.x === t[0] && v.y === t[1]
          }
        )
      )
    }),
    it('should return a Vector when called with a vector like object', () => {
      fc.assert(
        fc.property(
          fc.tuple(anyNumber, anyNumber).map(([x, y]) => ({ x, y })),
          o => {
            const v = toVector(o)
            return v.x === o.x && v.y === o.y
          }
        )
      )
    })
})
