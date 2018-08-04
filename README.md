# <img src="docs/assets/LogoWeb_192.png" alt="Logo" width="24" height="24"> immutable2d

[![npm version](https://badge.fury.io/js/immutable2d.svg)](https://badge.fury.io/js/immutable2d)
[![](https://data.jsdelivr.com/v1/package/npm/immutable2d/badge)](https://www.jsdelivr.com/package/npm/immutable2d)
[![dependencies Status](https://david-dm.org/ggzorgg/immutable2d/status.svg)](https://david-dm.org/ggzorgg/immutable2d)

Immutable 2D geometry library for Javascript/Typescript

## Goals

- Provide 2D geometry primitives and utility functions for manipulation.
- Static typing.
- Composable functions to be used in conjuction with functional programming.
- High performance
- 100% Test coverage

## Usage

>**Note: This is work in progress.**

### Vectors

#### Creation

```typescript
import { toVector, Vector } from 'immutable2d/vector'

const x = 10
const y = 10

const v1 = new Vector(x, y)
const v2 = new Vector([x, y]) // Tuples
const v3 = new Vector({ x: 10, y: 10 }) // Objects
const v4 = new Vector({ x, y }) // Objects (ES6)

// With functions
const v5 = toVector(x, y)
const v6 = toVector([x, y])
const v7 = toVector({ x, y })
```

Vectors can also be created with the next functions:

- [fromPolarToVector](./docs/Vector#from-polar-in-degrees-and-radians)
- [fromPolarRadiansToVector](./docs/Vector#from-polar-in-degrees-and-radians)

#### Operations - *Not available yet*

```typescript
import { add, Vector } from 'immutable2d/vector'

const v1 = new Vector(10, 10)
const v2 = new Vector(15, 15)

const v3 = v1.add(v2) // Instance method
const v4 = add(v1, v2) // Function
```

- Unary operators:
  - [negate](./docs/Vector#negate)
  - [negateX](./docs/Vector#negateX)
  - [negateY](./docs/Vector#negateY)
  - [normalize](./docs/Vector#normalize)
  - [rotate](./docs/Vector#rotate): Rotates the vector by a rotation angle given in degrees
  - [rotateRadians](./docs/Vector#rotateRadians): Same as rotate, but in radians
- Binary operators:
  - Basic:
    - [add](./docs/Vector#add)
    - [addX](./docs/Vector#addX)
    - [addY](./docs/Vector#addY)
    - [substract](./docs/Vector#substract)
    - [substractX](./docs/Vector#substractX)
    - [substractY](./docs/Vector#substractY)
    - [multiply](./docs/Vector#multiply)
    - [multiplyX](./docs/Vector#multiplyX)
    - [multiplyY](./docs/Vector#multiplyY)
    - [divide](./docs/Vector#divide)
    - [divideX](./docs/Vector#divideX)
    - [divideY](./docs/Vector#divideY)
  - Functional:
    - [applyX](./docs/Vector#applyX): Applies a function to the X component
    - [applyY](./docs/Vector#applyY): Applies a function to the Y component
    - [applyBoth](./docs/Ve-r#applyBoth): Applies a function to both components