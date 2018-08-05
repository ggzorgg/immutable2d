import { expect } from 'chai'
import 'mocha'
import { toVector } from '../../src/vector'
import { assertWithAllVectorKindsUnary } from './checkers'

describe('The "toVector" function', () => {
  it('should return a Vector when called with two parameters', () => {
    const x = 10
    const y = 20
    const r = toVector(x, y)

    expect(r.x).to.equal(x)
    expect(r.y).to.equal(y)
  })
  assertWithAllVectorKindsUnary('should return a Vector with corresponding components', toVector)(
    (v, r) => {
      expect(r.x).to.equal(v.x)
      expect(r.x).to.equal(v.x)
    }
  )
})
