import { fold, foldX, foldY } from './fold'
import { toVector } from './toVector'
import { VectorLike } from './types'

export const flip = fold((x, y) => toVector(y, x))

export const lengthSquared = fold((x, y) => x * x + y * y)
export const length = fold((x, y) => Math.sqrt(x * x + y * y))

export const getX = foldX(x => x)
export const getY = foldY(y => y)

export const rotate = (angle: number, v: VectorLike) => {
  const angleRadians = Math.PI / 180 * angle
  return rotateRadians(angleRadians, v)
}

export const rotateRadians = (angle: number, v: VectorLike) => fold((x, y) => {
  const sinA = Math.sin(angle)
  const cosA = Math.cos(angle)
  const nx = x * cosA - y * sinA
  const ny = x * sinA + y * cosA

  return toVector(nx, ny)
})(v)
