import PriorityQueue from '../PriorityQueue'

describe('PriorityQueue', () => {
  function ListNode (val) {
    this.val = val
    this.next = null
  }
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

  test('Leetcode case', () => {
    let arr = [-10, -10, -9, -9, -5, -5, -8, 2, -3, 1, 3, 4, 2, -4, -2, 3, 4, -1, -3, 3, 4]
    let toInsert = -9
    const comparator = (a, b) => (a > b ? 0 : 1)
    const pq = new PriorityQueue(comparator)
    arr.forEach(num => {
      pq.enqueue(num)
    })
    pq.enqueue(toInsert)
    expect(pq.heap).toEqual([ -10, -10, -9, -9, -9, -5, -5, -8, -3, 2, 1, 4, 2, -4, -2, 3, 4, -1, -3, 3, 4, 3 ])
  })

  test('leetcode test case', () => {
    const list1Head = new ListNode(0)
    let currNode = list1Head
    var list1Arr = [[-3, 2, 2], [-9], [-10, -5, -4, -2, -1, 1, 3, 4], [-10, -9, -8, 3, 4], [-5, -3, 3, 4], [-9, -8, -5, -4, -2, -1, 3]]
    list1Arr.forEach(num => {
      currNode.next = new ListNode(num)
      currNode = currNode.next
    })

    const list1 = list1Head.next
    const list2 = null

    const lists = [list1, list2]
    var mergeKLists = function (lists) {
      const fakeHead = new ListNode(0)
      const comparator = (ln1, ln2) => {
        if (ln1.val < ln2.val) {
          return 1
        } else {
          return 0
        }
      }
      const pq = new PriorityQueue(comparator)
      for (let i = 0; i < lists.length; i++) {
        let node = lists[i]
        console.log('node', node)
        while (node) {
          pq.enqueue(node)
          console.log('pq', pq)
          node = node.next
        }
      }

      let currNode = fakeHead
      while (!pq.empty()) {
        const node = pq.dequeue()
        currNode.next = new ListNode(node.val)
        currNode = currNode.next
      }
      console.log('pq', pq)

      return fakeHead.next
    }
    const mergedList = mergeKLists(lists)
    currNode = mergedList
    while (currNode) {
      console.log(currNode.val)
      currNode = currNode.next
    }
  })
})
