import * as fc from 'fast-check'
import toVector from '../src/vector/toVector'

export const anyNumber = fc.double(Number.MIN_VALUE, Number.MAX_VALUE)
export const anyNumberTuple = fc.tuple(anyNumber, anyNumber)
export const anyVector = anyNumberTuple.map(toVector)
export const anyVectorObject = anyNumberTuple.map(([x, y]) => ({ x, y }))
