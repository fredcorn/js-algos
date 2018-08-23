/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  let maxLength = 0
  for (let i = 0; i < nums.length - maxLength; i++) {
    let curr = nums[i]
    let tmpLen = 1
    let j = i + 1
    while (j < nums.length) {
      if (nums[j] >= curr) {
        tmpLen++
        maxLength = Math.max(tmpLen, maxLength)
        curr = nums[j]
      }
      j++
    }
  }
  return maxLength
}

var arr = [10, 9, 2, 5, 3, 7, 101, 18]

console.log(lengthOfLIS(arr))
