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

export type FunctionBasedUnaryVectorAssertionDefinition = [FunctionBasedUnaryVectorAssertion, string, string]
export const allMapLikeAssertions: FunctionBasedUnaryVectorAssertionDefinition[] = [
  [mapAssertion, 'applied to both components', ''],
  [mapXAssertion, 'applied only to the X component', 'X'],
  [mapYAssertion, 'applied only to the Y component', 'Y'],
]
