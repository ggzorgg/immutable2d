import { expect } from 'chai'
import { zip } from 'lodash'
import 'mocha'
import { add, addX, addY } from '../../src/vector'
import { assertWithAllVectorKindsBinary, BinaryVectorAssertion, BinaryVectorOperation } from './checkers'

type BinaryFunctionTestDefinition = [
  string, // Function name
  string, // Action name
  (a: number, b: number) => number, // Single function
  [BinaryVectorOperation, BinaryVectorOperation, BinaryVectorOperation] // Vector function
]
const zipWithLikeBasedFunctions: BinaryFunctionTestDefinition[] = [
  ['add', 'sum', (a, b) => a + b, [add, addX, addY]],
]

type ZipWithLikeAssertion = (f: (a: number, b: number) => number) => BinaryVectorAssertion
const zipWithLikeAssertions: Array<[ZipWithLikeAssertion, string]> = [
  // zipWith
  [f => (v1, v2, r) => {
    expect(r.x).to.equal(f(v1.x, v2.x))
    expect(r.y).to.equal(f(v1.y, v2.y))
  }, 'applied component-wise'],
  // zipWithX
  [f => (v1, v2, r) => {
    expect(r.x).to.equal(f(v1.x, v2.x))
    expect(r.y).to.equal(v1.y)
  }, 'applied only to the X component'],
  // zipWithY
  [f => (v1, v2, r) => {
    expect(r.x).to.equal(v1.x)
    expect(r.y).to.equal(f(v1.y, v2.y))
  }, 'applied only to the Y component'],
]

zipWithLikeBasedFunctions.forEach(
  ([name, action, singleFunction, zipWithLikeFunctions]) => {
    zip(zipWithLikeFunctions, zipWithLikeAssertions).forEach(
      ([f, assertionDefinition]) => {
        const func = f as BinaryVectorOperation
        const [assertion, predicate] = assertionDefinition as [ZipWithLikeAssertion, string]
        describe(`The "${name}" function`, () => {
          assertWithAllVectorKindsBinary(
            `should return the ${action} ${predicate} of two vectors`, func)(assertion(singleFunction))
        })
      }
    )
  }
)
