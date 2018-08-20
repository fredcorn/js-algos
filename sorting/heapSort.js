function buildMaxHeap (arr) {
  for (let i = parseInt(arr.length / 2); i >= 0; i--) {
    heapify(arr, arr.length, i)
  }
}

function heapify (arr, size, i) {
  let maxIdx = i
  let leftIdx = 2 * i + 1
  let rightIdx = 2 * i + 2

  if (leftIdx < size && arr[leftIdx] > arr[maxIdx]) {
    maxIdx = leftIdx
  }

  if (rightIdx < size && arr[rightIdx] > arr[maxIdx]) {
    maxIdx = rightIdx
  }

  if (maxIdx !== i) {
    swap(arr, i, maxIdx)
    heapify(arr, size, maxIdx)
  }
}

function swap (arr, i, j) {
  const tmp = arr[i]
  arr[i] = arr[j]
  arr[j] = tmp
}

function heapSort (arr) {
  buildMaxHeap(arr)
  for (let i = arr.length - 1; i >= 0; i--) {
    swap(arr, i, 0)
    heapify(arr, i, 0)
  }
  return arr
}

export default heapSort
