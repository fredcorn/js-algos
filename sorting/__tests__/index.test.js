import bubbleSort from '../bubbleSort'
import selectionSort from '../selectionSort'
import {quickSortRecursive, quickSortIterative} from '../quickSort'
import mergeSort from '../mergeSort'
import headSort from '../heapSort'

describe('Sorting Algorithms', () => {
  let arr = [5, 1, 3, 4, 8, 2]

  beforeEach(() => {
    arr = [5, 1, 3, 4, 8, 2]
  })

  test('bubbleSort', () => {
    expect(bubbleSort(arr)).toEqual([ 1, 2, 3, 4, 5, 8 ])
  })

  test('selectionSort', () => {
    expect(selectionSort(arr)).toEqual([ 1, 2, 3, 4, 5, 8 ])
  })

  test('quickSortRecursive', () => {
    expect(quickSortRecursive(arr)).toEqual([ 1, 2, 3, 4, 5, 8 ])
  })

  test('quickSortIterative', () => {
    expect(quickSortIterative(arr)).toEqual([ 1, 2, 3, 4, 5, 8 ])
  })

  test('mergeSort', () => {
    expect(mergeSort(arr)).toEqual([ 1, 2, 3, 4, 5, 8 ])
  })

  test('headSort', () => {
    expect(headSort(arr)).toEqual([ 1, 2, 3, 4, 5, 8 ])
  })
})
