import { zip } from 'lodash'
import * as ops from '../../src/vector'
import { assertWithAllVectorKindsUnary, UnaryVectorOperation } from './checkers'
import { allMapLikeAssertions, FunctionBasedUnaryVectorAssertionDefinition } from './mapAssertions'

export type MapLikeBasedFunctionDefinition = [
  string, string,
  (a: number) => number,
  [UnaryVectorOperation, UnaryVectorOperation, UnaryVectorOperation]
]

const f = (a: number) => a * 2
const mapLikeBasedFunctions: MapLikeBasedFunctionDefinition[] = [
  ['map', 'unary function aplication', f, [ops.map(f), ops.mapX(f), ops.mapY(f)]],
]

mapLikeBasedFunctions.forEach(
  ([name, action, singleFunction, zipWithLikeFunctions]) => {
    zip(zipWithLikeFunctions, allMapLikeAssertions).map(
      ([a, b]) => [a, b] as [UnaryVectorOperation, FunctionBasedUnaryVectorAssertionDefinition]
    ).forEach(
      ([func, [assertion, predicate, suffix]]) => {
        describe(`The "${name}${suffix}" function`, () => {
          assertWithAllVectorKindsUnary(
            `should return the ${action} ${predicate} of two vectors`, func)(assertion(singleFunction))
        })
      }
    )
  }
)
