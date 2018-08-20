function mergeSort (arr) {
  if (!arr || arr.length <= 1) {
    return arr
  }
  const mid = parseInt(arr.length / 2)
  const leftArr = arr.slice(0, mid)
  const rightArr = arr.slice(mid, arr.length)
  return merge(mergeSort(leftArr), mergeSort(rightArr))
}

/**
 * merge 2 sorted array
 * @param {array} arr1 sorted array
 * @param {array} arr2 sorted array
 */
function merge (arr1, arr2) {
  let i = 0
  let j = 0
  let res = []

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  // concat rest
  if (i < arr1.length) {
    res = res.concat(arr1.slice(i))
  } else if (j < arr2.length) {
    res = res.concat(arr2.slice(j))
  }
  return res
}

export default mergeSort
