import { length } from './foldBasedFunctions'
import { divide } from './mapBasedFunctions'
import { VectorLike } from './types'

export const normalize = (v: VectorLike) => divide(length(v), v)
