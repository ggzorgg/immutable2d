import { expect } from 'chai'
import 'mocha'
import { Vector } from '../../src/vector'
import { assertWithAllVectorKindsUnary } from './checkers'

describe('A Vector', () => {
  it('can be instantiated with two parameters', () => {
    const x = 10
    const y = 20
    const r = new Vector(x, y)

    expect(r.x).to.equal(x)
    expect(r.y).to.equal(y)
  })
  assertWithAllVectorKindsUnary('can be instantiated', v => new Vector(v))(
    (v, r) => {
      expect(r.x).to.equal(v.x)
      expect(r.x).to.equal(v.x)
    }
  )
})
