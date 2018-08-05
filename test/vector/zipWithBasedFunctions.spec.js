const { expect } = require('chai')
const { assertWithAllVectorKindsBinary } = require('./checkers')
const { zip } = require('lodash')
const { describe } = require('mocha')
const ops = require('../../src/vector/zipWithBasedFunctions')

const zipWithLikeBasedFunctions = [
  ['add', 'sum', (a, b) => a + b, [ops.add, ops.addX, ops.addY]],
  ['substract', 'difference', (a, b) => a - b, [ops.substract, ops.substractX, ops.substractY]]
]

const zipWithLikeAssertions = [
  // zipWith
  [f => (v1, v2, r) => {
    expect(r.x).to.equal(f(v1.x, v2.x))
    expect(r.y).to.equal(f(v1.y, v2.y))
  }, 'applied component-wise', ''],
  // zipWithX
  [f => (v1, v2, r) => {
    expect(r.x).to.equal(f(v1.x, v2.x))
    expect(r.y).to.equal(v1.y)
  }, 'applied only to the X component', 'X'],
  // zipWithY
  [f => (v1, v2, r) => {
    expect(r.x).to.equal(v1.x)
    expect(r.y).to.equal(f(v1.y, v2.y))
  }, 'applied only to the Y component', 'Y'],
]

zipWithLikeBasedFunctions.forEach(
  ([name, action, singleFunction, zipWithLikeFunctions]) => {
    zip(zipWithLikeFunctions, zipWithLikeAssertions).forEach(
      ([f, [assertion, predicate, suffix]]) => {
        describe(`The "${name}${suffix}" function`, () => {
          assertWithAllVectorKindsBinary(
            `should return the ${action} ${predicate} of two vectors`, f)(assertion(singleFunction))
        })
      }
    )
  }
)
