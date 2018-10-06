import {
  flip, fold, foldX, foldY,
  getX, getY, length, lengthSquared, normalize, rotate, rotateRadians, toVector, Vector, VectorLike
} from '../../src/vector'
import { UnaryVectorOperation } from './assertionTypes'
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

const normalizeFunctionDescription = {
  name: 'normalize',
  action: 'normalized vector',
  parameterFunction: ((a, b) => {
    const vectorLength = Math.sqrt(a * a + b * b)
    return toVector(a / vectorLength, b / vectorLength)
  }) as (a: number, b: number) => VectorLike,
  foldFunction: normalize
}

testFoldBasedFunction(normalizeFunctionDescription)

const getXFunctionDescription = {
  name: 'getX',
  action: 'X component',
  parameterFunction: (a => a) as (a: number) => number,
  foldFunction: getX
}

testFoldXBasedFunction(getXFunctionDescription)

const getYFunctionDescription = {
  name: 'getY',
  action: 'Y component',
  parameterFunction: (b => b) as (b: number) => number,
  foldFunction: getY
}

testFoldYBasedFunction(getYFunctionDescription)

const rotationAngleRadians = Math.PI / 4
const rotateRadiansFunctionDescription = {
  name: 'rotateRadians',
  action: 'rotated vector in radians',
  parameterFunction: ((a, b) => {
    const sinA = Math.sin(rotationAngleRadians)
    const cosA = Math.cos(rotationAngleRadians)
    const x = a * cosA - b * sinA
    const y = a * sinA + b * cosA

    return toVector(x, y)
  }) as (a: number, b: number) => Vector,
  foldFunction: (v => rotateRadians(rotationAngleRadians, v)) as UnaryVectorOperation<Vector>
}

testFoldBasedFunction(rotateRadiansFunctionDescription)

const rotationAngleDegrees = 45
const rotateFunctionDescription = {
  name: 'rotate',
  action: 'rotated vector in degrees',
  parameterFunction: ((a, b) => {
    const angleRadians = Math.PI / 180 * rotationAngleDegrees
    const sinA = Math.sin(angleRadians)
    const cosA = Math.cos(angleRadians)
    const x = a * cosA - b * sinA
    const y = a * sinA + b * cosA

    return toVector(x, y)
  }) as (a: number, b: number) => Vector,
  foldFunction: (v => rotate(rotationAngleDegrees, v)) as UnaryVectorOperation<Vector>
}

testFoldBasedFunction(rotateFunctionDescription)
