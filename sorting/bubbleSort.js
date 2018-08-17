function bubbleSort (array) {
  if (!array) {
    return array
  }
  const len = array.length
  for (let i = len - 1; i >= 0; i--) {
    for (let j = 1; j <= i; j++) {
      if (array[j - 1] > array[j]) {
        const tmp = array[j]
        array[j] = array[j - 1]
        array[j - 1] = tmp
      }
    }
  }
  return array
}

export default bubbleSort
