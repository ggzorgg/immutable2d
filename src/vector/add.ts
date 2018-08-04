import Vector from './Vector'

export default function add({ x: x1, y: y1 }: Vector, { x: x2, y: y2 }: Vector): Vector {
  return new Vector(x1 + x2, y1 + y2)
}
