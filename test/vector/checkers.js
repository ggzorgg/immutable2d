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

exports.assertWithAllVectorKindsUnary = (assertionMessage, operation) => assertion => {
  namedKindsExamples.forEach(([kindName, example]) => {
    it(`${assertionMessage} when called with a ${kindName}`, () => {
      const result = operation(example)
      assertion(getComponentsAsObject(example), result)
    })
  })
}

exports.checkPropertyWithAllVectorKindsUnary = (assertionMessage, operation) => assertion => {
  namedArbitraries.forEach(([kindName, kind]) => {
    it(`${assertionMessage} when called with a ${kindName}`, () => {
      fc.assert(
        fc.property(kind, value => {
          const result = operation(value)
          assertion(getComponentsAsObject(value), result)
        })
      )
    })
  })
}

exports.assertWithAllVectorKindsBinary = (assertionMessage, operation) => assertion => {
  namedKindsExamplesPairs.forEach(([[kindName1, example1], [kindName2, example2]]) => {
    it(`${assertionMessage} when called with a ${kindName1} and a ${kindName2}`, () => {
      const result = operation(example1, example2)
      assertion(getComponentsAsObject(example1), getComponentsAsObject(example2), result)
    })
  })
}

exports.checkPropertyWithAllVectorKindsBinary = (assertionMessage, operation) => assertion => {
  namedKindsArbitrariesPairs.forEach(([[kindName1, kind1], [kindName2, kind2]]) => {
    it(`${assertionMessage} when called with a ${kindName1} and a ${kindName2}`, () => {
      fc.assert(
        fc.property(kind1, kind2, (value1, value2) => {
          const result = operation(value1, value2)
          assertion(getComponentsAsObject(value1), getComponentsAsObject(value2), result)
        })
      )
    })
  })
}