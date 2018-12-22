import { VectorLike } from '../../src/vector'

export type UnaryVectorOperation<R> = (v: VectorLike) => R
export type UnaryVectorAssertion<R> = (v: VectorLike, r: R) => void

export type UnaryFunctionBasedUnaryVectorAssertion<T, R> = (f: (a: number) => T) => UnaryVectorAssertion<R>
export type BinaryFunctionBasedUnaryVectorAssertion<T, R> = (f: (a: number, b: number) => T) => UnaryVectorAssertion<R>

export type BinaryVectorOperation<R> = (v1: VectorLike, v2: VectorLike) => R
export type BinaryVectorAssertion<R> = (v1: VectorLike, v2: VectorLike, r: R) => void

export type UnaryFunctionBasedBinaryVectorAssertion<T, R> = (f: (a: number) => T) => BinaryVectorAssertion<R>
export type BinaryFunctionBasedBinaryVectorAssertion<T, R> =
  (f: (a: number, b: number) => T) => BinaryVectorAssertion<R>
