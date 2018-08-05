import { expect } from 'chai'
import 'mocha'
import { isVectorObject } from '../../src/vector/utils'

describe('The "isVectorObject" function', () => {
  it('should return true when object has both x and y properties', () => {
    const obj = { x: 10, y: 20, z: 30 }
    expect(isVectorObject(obj)).to.be.true
  }),
  it('should return false when object doesn´t have both x and y properties', () => {
    const obj = { x: 10, z: 40 }
    expect(isVectorObject(obj)).to.be.false
  })
})
