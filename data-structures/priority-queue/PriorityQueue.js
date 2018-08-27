class PriorityQueue {
  constructor (comparator) {
    this.heap = []
    this.comparator = comparator
  }

  enqueue (e) {
    this.heap.push(e)
    let currIdx = this.heap.length - 1
    let currParentIdx = parseInt((currIdx - 1) / 2)
    let curr = e
    let parent = this.heap[currParentIdx]
    while (currIdx !== currParentIdx && this.comparator(curr, parent) > 0) {
      console.log('curr %s parent %s', curr, parent)
      this.heap[currIdx] = parent
      this.heap[currParentIdx] = curr
      currIdx = currParentIdx
      currParentIdx = parseInt((currIdx - 1) / 2)
      curr = this.heap[currIdx]
      parent = this.heap[currParentIdx]
    }
  }

  // Swap last and the first element;
  // Top
  dequeue () {
    const res = this.heap[0]
    const last = this.heap.pop()
    if (this.heap.length > 0) {
      this.heap[0] = last

      let currIdx = 0
      let minIdx = 0

      // Bubble down to find minimum-priority element to swap it with the first element
      while (true) {
        let left = (currIdx * 2) + 1
        let right = (currIdx * 2) + 2
        if (left < this.heap.length && this.comparator(this.heap[left], this.heap[minIdx]) > 0) {
          minIdx = left
        }
        if (right < this.heap.length && this.comparator(this.heap[right], this.heap[minIdx]) > 0) {
          minIdx = right
        }

        if (minIdx !== currIdx) {
        // Swap min and curr
          const tmp = this.heap[minIdx]
          this.heap[minIdx] = this.heap[currIdx]
          this.heap[currIdx] = tmp
          currIdx = minIdx
        } else {
          break
        }
      }
    }

    return res
  }

  empty () {
    return this.heap.length === 0
  }
}

export default PriorityQueue
