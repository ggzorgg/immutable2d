import { expect } from 'chai'
import { VectorLike, VectorObject } from '../../src/vector'
import { getComponentsAsObject } from '../../src/vector/Utils'
import { BinaryFunctionBasedBinaryVectorAssertion, BinaryVectorAssertion } from './assertionTypes'

const doAssertion:
  (assertion: (f: (a: number, b: number) => number) => BinaryVectorAssertion<VectorObject>)
    => BinaryFunctionBasedBinaryVectorAssertion<number, VectorLike> =
  assertion => f => (v1, v2, r) => assertion(f)(v1, v2, getComponentsAsObject(r))

const zipWithAssertion = doAssertion(f => (vector1, vector2, { x, y }) => {
  const v1 = getComponentsAsObject(vector1)
  const v2 = getComponentsAsObject(vector2)

  expect(x).to.equal(f(v1.x, v2.x))
  expect(y).to.equal(f(v1.y, v2.y))
})

const zipWithXAssertion = doAssertion(f => (vector1, vector2, { x, y }) => {
  const v1 = getComponentsAsObject(vector1)
  const v2 = getComponentsAsObject(vector2)

  expect(x).to.equal(f(v1.x, v2.x))
  expect(y).to.equal(v1.y)
})

const zipWithYAssertion = doAssertion(f => (vector1, vector2, { x, y }) => {
  const v1 = getComponentsAsObject(vector1)
  const v2 = getComponentsAsObject(vector2)

  expect(x).to.equal(v1.x)
  expect(y).to.equal(f(v1.y, v2.y))
})

export interface ZipWithLikeAssertionDefinition {
  assertion: BinaryFunctionBasedBinaryVectorAssertion<number, VectorLike>
  predicate: string
  suffix: string
}
export const allZipWithLikeAssertions: ZipWithLikeAssertionDefinition[] = [
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
