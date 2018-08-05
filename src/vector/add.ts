import { VectorLike } from '../Types'
import { getComponents } from './Utils'
import Vector from './Vector'

export default function add(v1: VectorLike, v2: VectorLike): Vector {
  const [x1, y1] = getComponents(v1)
  const [x2, y2] = getComponents(v2)

  return new Vector(x1 + x2, y1 + y2)
}
