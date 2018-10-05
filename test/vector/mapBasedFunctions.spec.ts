import { zip } from 'lodash'
import * as ops from '../../src/vector'
import { VectorLike } from '../../src/vector'
import { UnaryVectorOperation } from './assertionTypes'
import { assertWithAllVectorKindsUnary } from './checkers'
import { allMapLikeAssertions, MapLikeAssertionDefinition } from './mapAssertions'

type UnaryNumberFunction = (a: number) => number
const f = (a => a * 2) as UnaryNumberFunction
const scalar = 2
const mapLikeBasedFunctions = [
  {
    name: 'map',
    action: 'unary function aplication',
    parameterFunction: f,
    mapFunctions: [ops.map(f), ops.mapX(f), ops.mapY(f)]
  },
  {
    name: 'negate',
    action: 'negation',
    parameterFunction: (a => -a) as UnaryNumberFunction,
    mapFunctions: [ops.negate, ops.negateX, ops.negateY]
  },
  {
    name: 'multiply',
    action: 'multiplication',
    parameterFunction: (a => a * scalar) as UnaryNumberFunction,
    mapFunctions: [
      v => ops.multiply(scalar, v),
      v => ops.multiplyX(scalar, v),
      v => ops.multiplyY(scalar, v)
    ] as Array<UnaryVectorOperation<VectorLike>>
  },
  {
    name: 'divide',
    action: 'division',
    parameterFunction: (a => a / scalar) as UnaryNumberFunction,
    mapFunctions: [
      v => ops.divide(scalar, v),
      v => ops.divideX(scalar, v),
      v => ops.divideY(scalar, v)
    ] as Array<UnaryVectorOperation<VectorLike>>
  }
]

mapLikeBasedFunctions.forEach(definition => {
  zip(definition.mapFunctions, allMapLikeAssertions)
    .map(([fun, m]) => [fun, m] as [UnaryVectorOperation<VectorLike>, MapLikeAssertionDefinition])
    .forEach(([func, mapAssertion]) => {
      describe(`The "${definition.name}${mapAssertion.suffix}" function`, () => {
        assertWithAllVectorKindsUnary(
          `should return the ${definition.action} ${mapAssertion.predicate} of two vectors`,
          func
        )(mapAssertion.assertion(definition.parameterFunction))
      })
    })
})
