function selectionSort (arr) {
  const len = arr.length
  for (let i = 0; i < len; i++) {
    let minIdx = i
    for (let j = i + 1; j < len; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j
      }
    }
    // Swap i and minIdx
    let tmp = arr[minIdx]
    arr[minIdx] = arr[i]
    arr[i] = tmp
  }
  return arr
}

export default selectionSort
