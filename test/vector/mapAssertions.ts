import { expect } from 'chai'
import { VectorLike, VectorObject } from '../../src/vector'
import { getComponentsAsObject } from '../../src/vector/Utils'
import { UnaryFunctionBasedUnaryVectorAssertion, UnaryVectorAssertion } from './assertionTypes'

const doAssertion:
  (assertion: (f: (a: number) => number) => UnaryVectorAssertion<VectorObject>)
    => UnaryFunctionBasedUnaryVectorAssertion<number, VectorLike> =
  assertion => f => (v, r) => assertion(f)(v, getComponentsAsObject(r))

const mapAssertion = doAssertion(f => (vector, { x, y }) => {
  const v = getComponentsAsObject(vector)
  expect(x).to.equal(f(v.x))
  expect(y).to.equal(f(v.y))
})

const mapXAssertion = doAssertion(f => (vector, { x, y }) => {
  const v = getComponentsAsObject(vector)
  expect(x).to.equal(f(v.x))
  expect(y).to.equal(v.y)
})

const mapYAssertion = doAssertion(f => (vector, { x, y }) => {
  const v = getComponentsAsObject(vector)
  expect(x).to.equal(v.x)
  expect(y).to.equal(f(v.y))
})

export interface MapLikeAssertionDefinition {
  assertion: UnaryFunctionBasedUnaryVectorAssertion<number, VectorLike>
  predicate: string
  suffix: string
}
export const allMapLikeAssertions: MapLikeAssertionDefinition[] = [
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
