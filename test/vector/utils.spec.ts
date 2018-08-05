import { expect } from 'chai'
import 'mocha'
import { getComponentsAsObject, getComponentsAsTuple, isVectorObject } from '../../src/vector/utils'

describe('The "isVectorObject" function', () => {
  it('should return true when object has both x and y properties', () => {
    const obj = { x: 10, y: 20, z: 30 }
    expect(isVectorObject(obj)).to.be.true
  })
  it('should return false when object doesn´t have both x and y properties', () => {
    const obj = { x: 10, z: 40 }
    expect(isVectorObject(obj)).to.be.false
  })
})

describe('The "getComponents" function', () => {
  it('should return the same tuple when the parameter is a tuple', () => {
    const obj: [number, number] = [10, 10]
    expect(getComponentsAsTuple(obj)).to.equal(obj)
  })
  it('should return the values of the components in the object as a tuple', () => {
    const x = 10
    const y = 10
    const obj = { x, y }
    const [cx, cy] = getComponentsAsTuple(obj)
    expect(cx === x && cy === y).to.be.true
  })
})

describe('The "getComponentsAsObject" function', () => {
  it('should return the components as an object when parameter is a tuple', () => {
    const x = 10
    const y = 20
    const tuple = [x, y] as [number, number]
    const { x: rx, y: ry } = getComponentsAsObject(tuple)
    expect(rx).to.be.equal(x)
    expect(ry).to.be.equals(y)
  })
  it('should return the same object when parameter is already a VectorObject', () => {
    const obj = { x: 10, y: 10 }
    const result = getComponentsAsObject(obj)
    expect(result).to.be.equal(obj)
  })
})
