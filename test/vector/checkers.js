const { it } = require('mocha')
const { getComponentsAsObject } = require('../../src/vector/Utils')
const { Vector } = require('../../src/vector/')
const { zip } = require('lodash')

const vectorExample = new Vector(10, 20)
const vectorObjectExample = { x: 30, y: 40, z: 50 }
const numberTupleExample = [60, 70]

function createAllPairs(a) {
  const res = []

  a.forEach(i =>
    a.forEach(j =>
      res.push([i, j])
    )
  )
    
  return res
}

const kindsExamples = [vectorExample, vectorObjectExample, numberTupleExample]
const names = ['Vector', 'VectorObject', 'NumberTuple']
const namedKindsExamples = zip(names, kindsExamples)
const namedKindsExamplesPairs = createAllPairs(namedKindsExamples)

exports.assertWithAllVectorKindsUnary = (assertionMessage, operation) => assertion => {
  namedKindsExamples.forEach(([kindName, example]) => {
    it(`${assertionMessage} when called with a ${kindName}`, () => {
      const result = operation(example)
      assertion(getComponentsAsObject(example), result)
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