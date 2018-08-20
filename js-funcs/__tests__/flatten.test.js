import {deepFlattenIterative, deepFlattenRecursive, flatten} from '../flatten'

describe('flatten', () => {
  const testCases = {
    1: {
      input: [1, 2, 3, [4, 5, 6], [[6, 7, 8]]],
      output: [1, 2, 3, 4, 5, 6, 6, 7, 8]
    },
    2: {
      input: [[2, 3, 5], 1, [34, 5, 6], [[2, 3, 1], [2, 4, 6]]],
      output: [2, 3, 5, 1, 34, 5, 6, 2, 3, 1, 2, 4, 6]
    },
    3: {
      input: null,
      output: []
    }
  }

  test('deepFlattenIterative', () => {
    expect(deepFlattenIterative(testCases[1].input)).toEqual(testCases[1].output)
    expect(deepFlattenIterative(testCases[2].input)).toEqual(testCases[2].output)
    expect(deepFlattenIterative(testCases[3].input)).toEqual(testCases[3].output)
  })

  test('deepFlattenRecursive', () => {
    expect(deepFlattenRecursive(testCases[1].input)).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 8])
  })

  test('flatten', () => {
    expect(flatten(testCases[1].input, 1)).toEqual([1, 2, 3, 4, 5, 6, [6, 7, 8]])
    expect(flatten(testCases[1].input, 2)).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 8])
    expect(flatten(testCases[1].input, 3)).toEqual([1, 2, 3, 4, 5, 6, 6, 7, 8])
  })
})
