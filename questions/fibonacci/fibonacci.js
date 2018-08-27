// Given a number N return the index value of the Fibonacci sequence

function fibonacciLoop (n) {
  if (n <= 1) {
    return 1
  }

  let cur = 1
  let next = 1
  let index = 0
  while (index < n) {
    const res = cur + next
    cur = next
    next = res
    index++
  }
  return cur
}
