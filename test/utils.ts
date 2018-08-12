import * as fc from 'fast-check'
import { Tuple2Arbitrary } from 'fast-check/lib/check/arbitrary/TupleArbitrary.generated'
import { toVector } from '../src/vector/toVector'
import { Vector } from '../src/vector/Vector'

export const anyNumber = fc.double(Number.MIN_VALUE, Number.MAX_VALUE)
export const anyNumberTuple = fc.tuple(anyNumber, anyNumber)
export const anyVector = anyNumberTuple.map(toVector)
export const anyVectorObject = anyNumberTuple.map(([x, y]) => ({ x, y }))
