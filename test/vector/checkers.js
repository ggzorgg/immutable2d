const fc = require('fast-check')
const { it } = require('mocha')
const { anyNumberTuple, anyVectorObject, anyVector } = require('../utils')
const { getComponentsAsObject } = require('../../src/vector/Utils')
const { Vector } = require('../../src/vector/')
const { zip } = require('lodash')

const vectorExample = new Vector(10, 20)
const vectorObjectExample = { x: 30, y: 40, z: 50 }
const numberTupleExample = [60, 70]

const kindsExamples = [vectorExample, vectorObjectExample, numberTupleExample]
const arbitraries = [anyVector, anyVectorObject, anyNumberTuple]

const names = ['Vector', 'VectorObject', 'NumberTuple']
const namedKindsExamples = zip(names, kindsExamples)
const namedArbitraries = zip(names, arbitraries)

function createAllPairs(a) {
  const res = []

  a.forEach(i =>
    a.forEach(j =>
      res.push([i, j])
    )
  )

  return res
}

const namedKindsExamplesPairs = createAllPairs(namedKindsExamples)
const namedKindsArbitrariesPairs = createAllPairs(namedArbitraries)

exports.assertWithAllVectorKindsUnary = (msg, operation) => assertion => {
  namedKindsExamples.forEach(([name, example]) => {
    it(`${msg} when called with a ${name}`, () => {
      const result = operation(example)
      assertion(getComponentsAsObject(example), getComponentsAsObject(result))
    })
  })
}

exports.checkPropertyWithAllVectorKindsUnary = (msg, operation) => assertion => {
  namedArbitraries.forEach(([name, kind]) => {
    it(`${msg} when called with a ${name}`, () => {
      fc.assert(
        fc.property(kind, value => {
          const result = operation(value)
          assertion(getComponentsAsObject(value), getComponentsAsObject(result))
        })
      )
    })
  })
}

exports.assertWithAllVectorKindsBinary = (msg, operation) => assertion => {
  namedKindsExamplesPairs.forEach(([[name1, example1], [name2, example2]]) => {
    it(`${msg} when called with a ${name1} and a ${name2}`, () => {
      const result = operation(example1, example2)
      assertion(getComponentsAsObject(example1), getComponentsAsObject(example2), getComponentsAsObject(result))
    })
  })
}

exports.checkPropertyWithAllVectorKindsBinary = (msg, operation) => assertion => {
  namedKindsArbitrariesPairs.forEach(([[name1, kind1], [name2, kind2]]) => {
    it(`${msg} when called with a ${name1} and a ${name2}`, () => {
      fc.assert(
        fc.property(kind1, kind2, (value1, value2) => {
          const result = operation(value1, value2)
          assertion(getComponentsAsObject(value1), getComponentsAsObject(value2), getComponentsAsObject(result))
        })
      )
    })
  })
}