import PriorityQueue from '../PriorityQueue'

describe('PriorityQueue', () => {
  const comparator = (a, b) => (a > b ? 1 : -1)
  const pq = new PriorityQueue(comparator)
  test('should work as expected', () => {
    pq.enqueue(5)
    pq.enqueue(2)
    expect(pq.heap).toEqual([5, 2])
    pq.enqueue(9)
    expect(pq.heap).toEqual([9, 2, 5])
    pq.enqueue(20)
    expect(pq.heap).toEqual([20, 9, 5, 2])
    pq.dequeue()
    expect(pq.heap).toEqual([9, 2, 5])
    pq.enqueue(2)
    expect(pq.heap).toEqual([9, 2, 5, 2])
    pq.dequeue()
    pq.dequeue()
    pq.dequeue()
    expect(pq.heap).toEqual([2])
    pq.dequeue()
    pq.dequeue()
    expect(pq.heap).toEqual([])
  })
})
