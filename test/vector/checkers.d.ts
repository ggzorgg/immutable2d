import { VectorLike } from '../../src/Types'
import { Vector } from '../../src/vector'
import { VectorObject } from '../../src/vector/VectorObject'

type UnaryVectorOperation = (v: VectorLike) => Vector
type UnaryVectorAssertion = (v: VectorObject, r: VectorObject) => void
type UnaryVectorPropertyAssertion = (v: VectorObject, r: VectorObject) => boolean

type BinaryVectorOperation = (v1: VectorLike, v2: VectorLike) => Vector
type BinaryVectorAssertion = (v1: VectorObject, v2: VectorObject, r: VectorObject) => void
type BinaryVectorPropertyAssertion = (v1: VectorObject, v2: VectorObject, r: VectorObject) => boolean

export declare const assertWithAllVectorKindsUnary:
  (message: string, operation: UnaryVectorOperation) => (assertion: UnaryVectorAssertion) => void

export declare const checkPropertyWithAllVectorKindsUnary:
  (message: string, operation: UnaryVectorOperation) => (assertion: UnaryVectorPropertyAssertion) => void

export declare const assertWithAllVectorKindsBinary:
  (message: string, operation: BinaryVectorOperation) => (assertion: BinaryVectorAssertion) => void

export declare const checkPropertyWithAllVectorKindsBinary:
  (message: string, operation: BinaryVectorOperation) => (assertion: BinaryVectorPropertyAssertion) => void
