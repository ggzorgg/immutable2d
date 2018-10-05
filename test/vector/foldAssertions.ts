import { expect } from 'chai'
import { describe } from 'mocha'
import { VectorObject } from '../../src/vector'
import { UnaryVectorOperation } from './assertionTypes'
import { assertWithAllVectorKindsUnary } from './checkers'

export type UnaryNumberFunction<T> = (a: number) => T
export type BinaryNumberFunction<T> = (a: number, b: number) => T

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
      expect(r).to.be.equal(description.parameterFunction(v.x, v.y))
    })
  })
}

const testSingleComponentFoldBasedFunction =
  (componentName: string, componentGetter: (v: VectorObject) => number) =>
  <R>(description: FoldLikeBasedFunctionDescription<UnaryNumberFunction<R>, R>) => {
    describe(`The ${description.name} function`, () => {
      assertWithAllVectorKindsUnary(
        `should return the ${description.action} using only the ${componentName} component`,
        description.foldFunction
      )((v, r) => {
        expect(r).to.be.equal(description.parameterFunction(componentGetter(v)))
      })
    })
  }

export const testFoldXBasedFunction = testSingleComponentFoldBasedFunction('X', v => v.x)
export const testFoldYBasedFunction = testSingleComponentFoldBasedFunction('Y', v => v.y)
