import { expect } from 'chai'
import 'mocha'
import { add } from '../../src/vector'
import { assertWithAllVectorKindsBinary } from './checkers'

describe('The "add" function', () => {
  assertWithAllVectorKindsBinary('should return the component-wise sum of two vectors', add)(
    (v1, v2, r) => {
      expect(r.x).to.equal(v1.x + v2.x)
      expect(r.y).to.equal(v1.y + v2.y)
    }
  )
})
