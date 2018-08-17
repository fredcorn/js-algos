function partition (arr, pivot, l, h) {
  let partitionIndex = l
  for (let i = l; i < h; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, partitionIndex)
      partitionIndex++
    }
  }
  swap(arr, pivot, partitionIndex)
  return partitionIndex
}

function swap (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

// Recursive version
function quickSortRecursive (array) {
  function quickSortRecursiveHelper (array, l, h) {
    if (l > h) {
      return array
    }

    const pivot = h
    const partitionIndex = partition(array, pivot, l, h)
    // left
    quickSortRecursiveHelper(array, l, partitionIndex - 1)
    // right
    quickSortRecursiveHelper(array, partitionIndex + 1, h)
  }

  const len = array.length
  quickSortRecursiveHelper(array, 0, len - 1)
  return array
}

// Iterative version
function quickSortIterative (arr) {
  function quickSortIterativeHelper (array, l, h) {
    const stack = []
    stack.push([l, h])
    while (stack.length > 0) {
      const [l, h] = stack.pop()
      if (l < h) {
        const pivot = h
        const partitionIndex = partition(arr, pivot, l, h)
        if (l < partitionIndex - 1) {
          stack.push([l, partitionIndex - 1])
        }
        if (partitionIndex + 1 < h) {
          stack.push([partitionIndex + 1, h])
        }
      }
    }
    return array
  }

  quickSortIterativeHelper(arr, 0, arr.length - 1)
  return arr
}

export {
  quickSortRecursive,
  quickSortIterative
}
