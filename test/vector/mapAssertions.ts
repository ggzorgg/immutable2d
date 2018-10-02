import { expect } from 'chai'
import { UnaryVectorAssertion } from './checkers'

export type FunctionBasedUnaryVectorAssertion = (f: (a: number) => number) => UnaryVectorAssertion

export const mapAssertion: FunctionBasedUnaryVectorAssertion = f => (v, r) => {
  expect(r.x).to.equal(f(v.x))
  expect(r.y).to.equal(f(v.y))
}

export const mapXAssertion: FunctionBasedUnaryVectorAssertion = f => (v, r) => {
  expect(r.x).to.equal(f(v.x))
  expect(r.y).to.equal(v.y)
}

export const mapYAssertion: FunctionBasedUnaryVectorAssertion = f => (v, r) => {
  expect(r.x).to.equal(v.x)
  expect(r.y).to.equal(f(v.y))
}

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
