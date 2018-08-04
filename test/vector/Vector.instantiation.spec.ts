import * as fc from 'fast-check'
import 'mocha'
import { Vector } from '../../src/vector'

const anyNumber = fc.double(Number.MIN_VALUE, Number.MAX_VALUE)

describe('A vector', () => {
  it('can be instantiated with two parameters', () => {
    fc.assert(
      fc.property(
        anyNumber, anyNumber,
        (x, y) => {
          const v = new Vector(x, y)
          return v.x === x && v.y === y
        }
      )
    )
  }),
    it('can be instantiated with a tuple of numbers', () => {
      fc.assert(
        fc.property(
          fc.tuple(anyNumber, anyNumber),
          t => {
            const v = new Vector(t)
            return v.x === t[0] && v.y === t[1]
          }
        )
      )
    }),
    it('can be instantiated with a vector like object', () => {
      fc.assert(
        fc.property(
          fc.tuple(anyNumber, anyNumber).map(([x, y]) => ({ x, y })),
          o => {
            const v = new Vector(o)
            return v.x === o.x && v.y === o.y
          }
        )
      )
    })
})
