import { expect } from 'chai'
import { describe } from 'mocha'
import { fold, foldX, foldY } from '../../src/vector'
import { assertWithAllVectorKindsUnary } from './checkers'

const f = (a: number, b: number) => a + b
const g = (a: number) => a * 2

describe('The fold function', () => {
  assertWithAllVectorKindsUnary(
    'should return the result of applying the function to both components',
    fold(f)
  )((v, r) => {
    expect(r).to.be.equal(f(v.x, v.y))
  })
})

describe('The foldX function', () => {
  assertWithAllVectorKindsUnary(
    'should return the result of applying the function to the X component',
    foldX(g)
  )((v, r) => {
    expect(r).to.be.equal(g(v.x))
  })
})

describe('The foldY function', () => {
  assertWithAllVectorKindsUnary(
    'should return the result of applying the function to the Y component',
    foldY(g)
  )((v, r) => {
    expect(r).to.be.equal(g(v.y))
  })
})
