import { Vector, VectorLike, VectorObject } from '../../src/vector'

type UnaryVectorOperation<R> = (v: VectorLike) => R
type UnaryVectorAssertion<R> = (v: VectorObject, r: R) => void
type UnaryVectorPropertyAssertion<R> = (v: VectorObject, r: R) => boolean

type BinaryVectorOperation<R> = (v1: VectorLike, v2: VectorLike) => R
type BinaryVectorAssertion<R> = (v1: VectorObject, v2: VectorObject, r: R) => void
type BinaryVectorPropertyAssertion<R> = (v1: VectorObject, v2: VectorObject, r: R) => boolean

export declare const assertWithAllVectorKindsUnary:
  <R>(assertionMessage: string, operation: UnaryVectorOperation<R>) => (assertion: UnaryVectorAssertion<R>) => void

export declare const checkPropertyWithAllVectorKindsUnary:
  <R>(assertionMessage: string, operation: UnaryVectorOperation<R>) => (assertion: UnaryVectorPropertyAssertion<R>) => void

export declare const assertWithAllVectorKindsBinary:
  <R>(assertionMessage: string, operation: BinaryVectorOperation<R>) => (assertion: BinaryVectorAssertion<R>) => void

export declare const checkPropertyWithAllVectorKindsBinary:
  <R>(assertionMessage: string, operation: BinaryVectorOperation<R>) => (assertion: BinaryVectorPropertyAssertion<R>) => void
