import { expect } from 'chai'
import 'mocha'
import { zipWith, zipWithX, zipWithY } from '../../src/vector'
import { assertWithAllVectorKindsBinary } from './checkers'

const f = (a: number, b: number) => a * b
describe('The "zipWith" function', () => {
  assertWithAllVectorKindsBinary('should return the application of a binary function component-wise', zipWith(f))(
    (v1, v2, r) => {
      expect(r.x).to.equal(f(v1.x, v2.x))
      expect(r.y).to.equal(f(v1.y, v2.y))
    }
  )
})
describe('The "zipWithX" function', () => {
  assertWithAllVectorKindsBinary(
    'should return the application of a binary function only to the X component', zipWithX(f))(
      (v1, v2, r) => {
        expect(r.x).to.equal(f(v1.x, v2.x))
        expect(r.y).to.equal(v1.y)
      }
    )
})
describe('The "zipWithY" function', () => {
  assertWithAllVectorKindsBinary(
    'should return the application of a binary function only to the Y component', zipWithY(f))(
      (v1, v2, r) => {
        expect(r.x).to.equal(v1.x)
        expect(r.y).to.equal(f(v1.y, v2.y))
      }
    )
})
