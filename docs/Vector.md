# Vectors

## Creation

### Constructors

```typescript
import { Vector } from 'immutable2d/vector'

const x = 10
const y = 10

const v1 = new Vector(x, y)
const v2 = new Vector([x, y]) // Tuples
const v3 = new Vector({ x: 10, y: 10 }) // Objects
const v3 = new Vector({ x, y }) // Objects (ES6)
```

### Functions

```typescript
import { toVector } from 'immutable2d/vector'

const x = 10
const y = 10

const v1 = toVector(x, y)
const v2 = toVector([x, y])
const v3 = toVector({ x: 10, y: 10 })
const v3 = toVector({ x, y })
```

### From polar in degrees and radians - *Not available yet*

The functions `fromPolarToVector` and `fromPolarRadiansToVector` have the same interface as `toVector`, with the difference that parameters are named `r` and `t`, instead of `x` and `y`, respectively.

```typescript
import { fromPolarToVector, fromPolarRadiansToVector } from 'immutable2d/vector'

const r = 10
const t = 90

const v1 = fromPolarToVector(r, t)
const v2 = fromPolarRadiansToVector([r, t])
```

## Operators

### Unary operators

#### Negate

Negates each component.

```typescript
import { negate, Vector } from 'immutable2d/vector'

const v1 = new Vector(10, 10)
const v2 = negate(v1)
```

### Binary operators

#### Add

Sums each component.

```typescript
import { add, Vector } from 'immutable2d/vector'

const v1 = new Vector(10, 10)
const v2 = new Vector(20, 20)

const v3 = add(v1, v2)
```