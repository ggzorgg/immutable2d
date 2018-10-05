import { expect } from 'chai'
import { VectorLike } from '../../src/vector'
import { getComponentsAsTuple } from '../../src/vector/Utils'
import { BinaryVectorAssertion } from './checkers'

export type FunctionBasedBinaryVectorAssertion =
  (f: (a: number, b: number) => number) => BinaryVectorAssertion<VectorLike>

const doAssertion:
  (assertion: (f: (a: number, b: number) => number) => BinaryVectorAssertion<[number, number]>)
    => FunctionBasedBinaryVectorAssertion =
  assertion => f => (v1, v2, r) => assertion(f)(v1, v2, getComponentsAsTuple(r))

const zipWithAssertion = doAssertion(f => (v1, v2, [x, y]) => {
  expect(x).to.equal(f(v1.x, v2.x))
  expect(y).to.equal(f(v1.y, v2.y))
})

const zipWithXAssertion = doAssertion(f => (v1, v2, [x, y]) => {
  expect(x).to.equal(f(v1.x, v2.x))
  expect(y).to.equal(v1.y)
})

const zipWithYAssertion = doAssertion(f => (v1, v2, [x, y]) => {
  expect(x).to.equal(v1.x)
  expect(y).to.equal(f(v1.y, v2.y))
})

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
