/**
 * Median of Two Sorted Arrays
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  let m = nums1.length
  let n = nums2.length
  let A = nums1
  let B = nums2

  if (nums1.length > nums2.length) {
    A = nums2
    B = nums1
    m = nums2.length
    n = nums1.length
  }

  let i = 0
  let iMin = 0
  let iMax = m
  while (iMin <= iMax) {
    i = parseInt((iMin + iMax) / 2)
    const j = parseInt((m + n) / 2) - i
    if (A[i] > B[j - 1]) {
      iMax = i - 1
    } else if (A[i - 1] > B[j]) {
      iMin = i + 1
    } else {
      let maxLeft
      // correct i
      if (i === 0) {
        maxLeft = B[j - 1]
      } else if (j === 0) {
        maxLeft = A[i - 1]
      } else {
        maxLeft = Math.max(A[i - 1], B[j - 1])
      }
      if ((m + n) % 2 === 1) return maxLeft

      let minRight
      if (i === m) {
        minRight = B[j]
      } else if (j === n) {
        minRight = A[i]
      } else {
        minRight = Math.min(A[i], B[j])
      }
      if ((m + n) % 2 === 0) return (maxLeft + minRight) / 2
    }
  }

  return 0.0
}
