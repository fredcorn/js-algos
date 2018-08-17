import bubbleSort from '../bubbleSort'

test('bubbleSort', () => {
  const array = [5,1,3,4,8,2]
  expect(bubbleSort(array)).toEqual([ 1, 2, 3, 4, 5, 8 ])
})