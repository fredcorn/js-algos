import PriorityQueue from './PriorityQueue'
function ListNode (val) {
  this.val = val
  this.next = null
}
const listArrs = [[-9, -7, -7], [-6, -4, -1, 1], [-6, -5, -2, 0, 0, 1, 2], [-9, -8, -6, -5, -4, 1, 2, 4], [-10], [-5, 2, 3]]
const lists = []
listArrs.forEach(listArr => {
  const listHead = new ListNode(0)
  let currNode = listHead
  listArr.forEach(num => {
    currNode.next = new ListNode(num)
    currNode = currNode.next
  })
  lists.push(listHead.next)
})

var mergeKLists = function (lists) {
  const fakeHead = new ListNode(0)
  const comparator = (ln1, ln2) => {
    if (ln1.val < ln2.val) {
      return 1
    } else {
      return 0
    }
  }
  const comparator4Val = (val1, val2) => {
    if (val1 < val2) {
      return 1
    } else {
      return 0
    }
  }
  const pq = new PriorityQueue(comparator4Val)
  for (let i = 0; i < lists.length; i++) {
    let node = lists[i]
    console.log('node', node)
    while (node) {
      pq.enqueue(node.val)
      console.log('pq %s', pq.heap)
      node = node.next
    }
  }

  let currNode = fakeHead
  while (!pq.empty()) {
    const val = pq.dequeue()
    currNode.next = new ListNode(val)
    currNode = currNode.next
  }
  console.log('pq', pq)

  return fakeHead.next
}
const mergedList = mergeKLists(lists)
let currNode = mergedList
while (currNode) {
  console.log(currNode.val)
  currNode = currNode.next
}
