import { zip } from 'lodash'
import * as ops from '../../src/vector'
import { VectorLike } from '../../src/vector'
import { BinaryVectorOperation } from './assertionTypes'
import { assertWithAllVectorKindsBinary } from './checkers'
import { allZipWithLikeAssertions, ZipWithLikeAssertionDefinition } from './zipWithAssertions'

type BinaryNumberFunction = (a: number, b: number) => number
const f = ((a, b) => a * b) as BinaryNumberFunction
const zipWithLikeBasedFunctions = [
  {
    name: 'zipWith',
    action: 'binary function aplication',
    parameterFunction: f,
    zipWithFunctions: [ops.zipWith(f), ops.zipWithX(f), ops.zipWithY(f)]
  },
  {
    name: 'add',
    action: 'sum',
    parameterFunction: ((a, b) => a + b) as BinaryNumberFunction,
    zipWithFunctions: [ops.add, ops.addX, ops.addY]
  },
  {
    name: 'substract',
    action: 'difference',
    parameterFunction: ((a, b) => a - b) as BinaryNumberFunction,
    zipWithFunctions: [ops.substract, ops.substractX, ops.substractY]
  }
]

zipWithLikeBasedFunctions.forEach(definition => {
  zip(definition.zipWithFunctions, allZipWithLikeAssertions)
    .map(([fu, z]) => [fu, z] as [BinaryVectorOperation<VectorLike>, ZipWithLikeAssertionDefinition])
    .forEach(([func, zipWithAssertion]) => {
      describe(`The "${definition.name}${zipWithAssertion.suffix}" function`, () => {
        assertWithAllVectorKindsBinary(
          `should return the ${definition.action} ${zipWithAssertion.predicate} of two vectors`,
          func
        )(zipWithAssertion.assertion(definition.parameterFunction))
      })
    })
})
