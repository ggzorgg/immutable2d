import { VectorLike } from '../Types'
import { getComponentsAsTuple } from './Utils'
import Vector from './Vector'

export default function add(v1: VectorLike, v2: VectorLike): Vector {
  const [x1, y1] = getComponentsAsTuple(v1)
  const [x2, y2] = getComponentsAsTuple(v2)

  return new Vector(x1 + x2, y1 + y2)
}
