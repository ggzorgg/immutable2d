import { zip } from 'lodash'
import * as ops from '../../src/vector'
import { assertWithAllVectorKindsBinary, BinaryVectorOperation } from './checkers'
import { allZipWithLikeAssertions, FunctionBasedBinaryVectorAssertionDefinition } from './zipWithAssertions'

export type ZipWithLikeBasedFunctionDefinition = [
  string, string,
  (a: number, b: number) => number,
  [BinaryVectorOperation, BinaryVectorOperation, BinaryVectorOperation]
]

const f = (a: number, b: number) => a * b
const zipWithLikeBasedFunctions: ZipWithLikeBasedFunctionDefinition[] = [
  ['zipWith', 'binary function aplication', f, [ops.zipWith(f), ops.zipWithX(f), ops.zipWithY(f)]],
  ['add', 'sum', (a, b) => a + b, [ops.add, ops.addX, ops.addY]],
  ['substract', 'difference', (a, b) => a - b, [ops.substract, ops.substractX, ops.substractY]]
]

zipWithLikeBasedFunctions.forEach(
  ([name, action, singleFunction, zipWithLikeFunctions]) => {
    zip(zipWithLikeFunctions, allZipWithLikeAssertions).map(
      ([a, b]) => [a, b] as [BinaryVectorOperation, FunctionBasedBinaryVectorAssertionDefinition]
    ).forEach(
      ([func, [assertion, predicate, suffix]]) => {
        describe(`The "${name}${suffix}" function`, () => {
          assertWithAllVectorKindsBinary(
            `should return the ${action} ${predicate} of two vectors`, func)(assertion(singleFunction))
        })
      }
    )
  }
)
