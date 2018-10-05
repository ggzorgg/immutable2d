import { flip, fold, foldX, foldY, length, lengthSquared, toVector, Vector } from '../../src/vector'
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

const lengthSquaredDescription = {
  name: 'lengtSquared',
  action: 'squared length of the vector',
  parameterFunction: ((a, b) => a * a + b * b) as (a: number, b: number) => number,
  foldFunction: lengthSquared
}

testFoldBasedFunction(lengthSquaredDescription)

const lengthFunctionDescription = {
  name: 'length',
  action: 'length of the vector',
  parameterFunction: ((a, b) => Math.sqrt(a * a + b * b)) as (a: number, b: number) => number,
  foldFunction: length
}

testFoldBasedFunction(lengthFunctionDescription)
