import { UnaryVectorOperation, BinaryVectorOperation, UnaryVectorAssertion, BinaryVectorAssertion } from './assertionTypes'

export declare const assertWithAllVectorKindsUnary:
  <R>(assertionMessage: string, operation: UnaryVectorOperation<R>) => (assertion: UnaryVectorAssertion<R>) => void

export declare const assertWithAllVectorKindsBinary:
  <R>(assertionMessage: string, operation: BinaryVectorOperation<R>) => (assertion: BinaryVectorAssertion<R>) => void
