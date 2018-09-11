import { expect } from 'chai'
import { BinaryVectorAssertion } from './checkers'

export type FunctionBasedBinaryVectorAssertion = (f: (a: number, b: number) => number) => BinaryVectorAssertion

const zipWithAssertion: FunctionBasedBinaryVectorAssertion = f => (v1, v2, r) => {
  expect(r.x).to.equal(f(v1.x, v2.x))
  expect(r.y).to.equal(f(v1.y, v2.y))
}

const zipWithXAssertion: FunctionBasedBinaryVectorAssertion = f => (v1, v2, r) => {
  expect(r.x).to.equal(f(v1.x, v2.x))
  expect(r.y).to.equal(v1.y)
}

const zipWithYAssertion: FunctionBasedBinaryVectorAssertion = f => (v1, v2, r) => {
  expect(r.x).to.equal(v1.x)
  expect(r.y).to.equal(f(v1.y, v2.y))
}

export interface FunctionBasedBinaryVectorAssertionDefinition {
  assertion: FunctionBasedBinaryVectorAssertion
  predicate: string
  suffix: string
}
export const allZipWithLikeAssertions: FunctionBasedBinaryVectorAssertionDefinition[] = [
  {
    assertion: zipWithAssertion,
    predicate: 'applied component-wise',
    suffix: ''
  },
  {
    assertion: zipWithXAssertion,
    predicate: 'applied only to the X components',
    suffix: 'X'
  },
  {
    assertion: zipWithYAssertion,
    predicate: 'applied only to the Y components',
    suffix: 'Y'
  }
]
