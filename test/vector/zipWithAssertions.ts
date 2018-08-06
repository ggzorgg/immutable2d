import { expect } from 'chai'
import { BinaryVectorAssertion } from './checkers'

export type FunctionBasedBinaryVectorAssertion = (f: (a: number, b: number) => number) => BinaryVectorAssertion

export const zipWithAssertion: FunctionBasedBinaryVectorAssertion = f => (v1, v2, r) => {
  expect(r.x).to.equal(f(v1.x, v2.x))
  expect(r.y).to.equal(f(v1.y, v2.y))
}

export const zipWithXAssertion: FunctionBasedBinaryVectorAssertion = f => (v1, v2, r) => {
  expect(r.x).to.equal(f(v1.x, v2.x))
  expect(r.y).to.equal(v1.y)
}

export const zipWithYAssertion: FunctionBasedBinaryVectorAssertion = f => (v1, v2, r) => {
  expect(r.x).to.equal(v1.x)
  expect(r.y).to.equal(f(v1.y, v2.y))
}

export type FunctionBasedBinaryVectorAssertionDefinition = [FunctionBasedBinaryVectorAssertion, string, string]
export const allZipWithLikeAssertions: FunctionBasedBinaryVectorAssertionDefinition[] = [
  [zipWithAssertion, 'applied component-wise', ''],
  [zipWithXAssertion, 'applied only to the X components', 'X'],
  [zipWithYAssertion, 'applied only to the Y components', 'Y'],
]
