import { flip, fold, foldX, foldY, toVector, Vector } from '../../src/vector'
import { testFoldBasedFunction, testFoldXBasedFunction, testFoldYBasedFunction } from './foldAssertions'

const f = (a: number, b: number) => a + b
const g = (a: number) => a * 2

const foldDescription = {
  name: 'fold',
  action: 'binary function application',
  parameterFunction: f,
  foldFunction: fold(f)
}

const foldXDescription = {
  name: 'foldX',
  action: 'unary function application',
  parameterFunction: g,
  foldFunction: foldX(g)
}

const foldYDescription = {
  name: 'foldY',
  action: 'unary function application',
  parameterFunction: g,
  foldFunction: foldY(g)
}

testFoldBasedFunction(foldDescription)
testFoldXBasedFunction(foldXDescription)
testFoldYBasedFunction(foldYDescription)

const flipDescription = {
  name: 'flip',
  action: 'flipped components vector',
  parameterFunction: ((a, b) => toVector(b, a)) as (a: number, b: number) => Vector,
  foldFunction: flip
}

testFoldBasedFunction(flipDescription)
