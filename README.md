# <img src="docs/assets/LogoWeb_192.png" alt="Logo" width="24" height="24"> immutable2d

[![Build Status](https://travis-ci.org/ggzorgg/immutable2d.svg?branch=master)](https://travis-ci.org/ggzorgg/immutable2d)
[![codecov](https://codecov.io/gh/ggzorgg/immutable2d/branch/master/graph/badge.svg)](https://codecov.io/gh/ggzorgg/immutable2d)
[![Downloads](https://img.shields.io/npm/dm/immutable2d.svg)](https://npmcharts.com/compare/immutable2d?minimal=true)
[![Hits](https://data.jsdelivr.com/v1/package/npm/immutable2d/badge)](https://www.jsdelivr.com/package/npm/immutable2d)
[![Version](https://img.shields.io/npm/v/immutable2d.svg)](https://www.npmjs.com/package/immutable2d)
[![Dependencies Status](https://david-dm.org/ggzorgg/immutable2d/status.svg)](https://david-dm.org/ggzorgg/immutable2d)
[![GitHub license](https://img.shields.io/github/license/ggzorgg/immutable2d.svg)](https://github.com/ggzorgg/immutable2d/blob/master/LICENSE)

Immutable 2D geometry library for Javascript/Typescript

## Goals

- Provide 2D geometry primitives and functions.
- Static typing.
- Composable functions to be used in conjuction with functional programming.
- High performance.
- 100% Test coverage.

## Installation

### npm

```bash
npm install immutable2d
```

CommonJS:

```javascript
const { add, negate, Vector } = require('immutable2d/vector')
```

Typescript:

```typescript
import { add, negate, Vector } from 'immutable2d/vector'
```

ES6 (module):

```javascript
import { add, negate, Vector } from 'immutable2d/lib-esm/vector'
```

### CDN

For CDN, you can use [unpkg](https://unpkg.com/):

https://unpkg.com/immutable2d/dist/immutable2d.min.js

Or [jsdelivr](https://www.jsdelivr.com/):

https://cdn.jsdelivr.net/npm/immutable2d/dist/immutable2d.min.js

```javascript
const { add, negate, Vector } = immutable2d.vector
```

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

- [fromPolarToVector](./docs/Vector.md#from-polar-in-degrees-and-radians)
- [fromPolarRadiansToVector](./docs/Vector.md#from-polar-in-degrees-and-radians)

#### Operations - *Not available yet*

All the operations are static for ease of composition and usability.

```typescript
import { add, Vector } from 'immutable2d/vector'

const v1 = new Vector(10, 10)
const v2 = new Vector(15, 15)

const v3 = add(v1, v2)
const v4 = add(v1, [12, 34])
```

- Unary operators:
  - [negate](./docs/Vector.md#negate)
  - [negateX](./docs/Vector.md#negateX)
  - [negateY](./docs/Vector.md#negateY)
  - [normalize](./docs/Vector.md#normalize)
  - [rotate](./docs/Vector.md#rotate): Rotates the vector by a rotation angle given in degrees
  - [rotateRadians](./docs/Vector.md#rotateRadians): Same as rotate, but in radians
- Binary operators:
  - Basic:
    - [add](./docs/Vector.md#add)
    - [addX](./docs/Vector.md#addX)
    - [addY](./docs/Vector.md#addY)
    - [substract](./docs/Vector.md#substract)
    - [substractX](./docs/Vector.md#substractX)
    - [substractY](./docs/Vector.md#substractY)
    - [multiply](./docs/Vector.md#multiply)
    - [multiplyX](./docs/Vector.md#multiplyX)
    - [multiplyY](./docs/Vector.md#multiplyY)
    - [divide](./docs/Vector.md#divide)
    - [divideX](./docs/Vector.md#divideX)
    - [divideY](./docs/Vector.md#divideY)
  - Functional (curried by default):
    - [map](./docs/Vector.md#map): Applies a function to both components
    - [mapX](./docs/Vector.md#mapX): Applies a function only to the X component
    - [mapY](./docs/Vector.md#mapY): Same as `mapX`, but only to the Y component
    - [zipWith](./docs/Vector.md#zip): Returns a Vector whose components are the result of applying a binary function component-wise to the components
    - [zipWithX](./docs/Vector.md#zipWithX): Same as `zipWith`, but only applies the function to the X component and it leaves untouched the Y component
    - [zipWithY](./docs/Vector.md#zipWithY): Same as `zipWithX`, but with the Y component

The `map` and `zipWith` functions let you define custom operators easily. In fact, many of the operations can be defined in terms of these two:

```typescript
import { map, zipWith } from 'immutable2d/vector'

const negate2 = map(a => -a)
const add2 = zipWith((a, b) => a + b)
```

Note that the actual implementations are different, this is to allow define all the `zipWith` based and `map` based operations in one line.

[See map based functions source](./src/vector/mapBasedFunctions.ts)\
[See zipWith based functions source](./src/vector/zipWithBasedFunctions.ts)