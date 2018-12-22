import { expect } from 'chai'
import { describe } from 'mocha'
import { VectorLike } from '../../src/vector'
import { isVectorObject } from '../../src/vector/Utils'
import { UnaryVectorOperation } from './assertionTypes'
import { assertWithAllVectorKindsUnary } from './checkers'

export type UnaryNumberFunction<T> = (a: number, isVectorObject: boolean) => T
export type BinaryNumberFunction<T> = (a: number, b: number, isVectorObject: boolean) => T

export interface FoldLikeBasedFunctionDescription<F, R> {
  name: string
  action: string
  parameterFunction: F
  foldFunction: UnaryVectorOperation<R>
}

export function testFoldBasedFunction<R>(description: FoldLikeBasedFunctionDescription<BinaryNumberFunction<R>, R>) {
  describe(`The ${description.name} function`, () => {
    assertWithAllVectorKindsUnary(
      `should return the ${description.action} using both components`,
      description.foldFunction
    )((v, r) => {
      if (isVectorObject(v)) {
        expect(r).to.deep.equal(description.parameterFunction(v.x, v.y, true))
      } else {
        expect(r).to.deep.equal(description.parameterFunction(v[0], v[1], false))
      }
    })
  })
}

const testSingleComponentFoldBasedFunction =
  (componentName: string, componentGetter: (v: VectorLike) => number) =>
  <R>(description: FoldLikeBasedFunctionDescription<UnaryNumberFunction<R>, R>) => {
    describe(`The ${description.name} function`, () => {
      assertWithAllVectorKindsUnary(
        `should return the ${description.action} using only the ${componentName} component`,
        description.foldFunction
      )((v, r) => {
        expect(r).to.deep.equal(description.parameterFunction(componentGetter(v), isVectorObject(v)))
      })
    })
  }

export const testFoldXBasedFunction = testSingleComponentFoldBasedFunction('X', v => isVectorObject(v) ? v.x : v[0])
export const testFoldYBasedFunction = testSingleComponentFoldBasedFunction('Y', v => isVectorObject(v) ? v.y : v[1])
