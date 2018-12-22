import { expect } from 'chai'
import 'mocha'
import { toVector } from '../../src/vector'
import { getComponentsAsObject } from '../../src/vector/Utils'
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
    (vector, r) => {
      const v = getComponentsAsObject(vector)

      expect(r.x).to.equal(v.x)
      expect(r.y).to.equal(v.y)
    }
  )
})
