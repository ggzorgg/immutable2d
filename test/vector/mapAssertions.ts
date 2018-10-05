import { expect } from 'chai'
import { VectorLike } from '../../src/vector'
import { getComponentsAsTuple } from '../../src/vector/Utils'
import { UnaryVectorAssertion } from './checkers'

export type FunctionBasedUnaryVectorAssertion = (f: (a: number) => number) => UnaryVectorAssertion<VectorLike>

const doAssertion:
  (assertion: (f: (a: number) => number) => UnaryVectorAssertion<[number, number]>)
    => FunctionBasedUnaryVectorAssertion =
  assertion => f => (v, r) => assertion(f)(v, getComponentsAsTuple(r))

const mapAssertion = doAssertion(f => (v, [x, y]) => {
  expect(x).to.equal(f(v.x))
  expect(y).to.equal(f(v.y))
})

const mapXAssertion = doAssertion(f => (v, [x, y]) => {
  expect(x).to.equal(f(v.x))
  expect(y).to.equal(v.y)
})

const mapYAssertion = doAssertion(f => (v, [x, y]) => {
  expect(x).to.equal(v.x)
  expect(y).to.equal(f(v.y))
})

export interface FunctionBasedUnaryVectorAssertionDefinition {
  assertion: FunctionBasedUnaryVectorAssertion
  predicate: string
  suffix: string
}
export const allMapLikeAssertions: FunctionBasedUnaryVectorAssertionDefinition[] = [
  {
    assertion: mapAssertion,
    predicate: 'applied to both components',
    suffix: ''
  },
  {
    assertion: mapXAssertion,
    predicate: 'applied only to the X component',
    suffix: 'X'
  },
  {
    assertion: mapYAssertion,
    predicate: 'applied only to the Y component',
    suffix: 'Y'
  }
]
