function flatten (arr, depth = 1) {
  if (!arr) { return [] }
  let res = arr
  for (let i = 0; i < depth; i++) {
    res = baseFlattenIterative(res)
  }
  return res
}

function deepFlattenIterative (arr) {
  if (!arr) { return [] }
  const stack = [...arr]
  const res = []
  while (stack.length) {
    const e = stack.pop()
    if (Array.isArray(e)) {
      stack.push(...e)
    } else {
      res.push(e)
    }
  }
  return res.reverse()
}

function deepFlattenRecursive (arr) {
  if (!arr) return []
  return arr.reduce((res, e) => {
    if (Array.isArray(e)) {
      res = res.concat(baseFlattenIterative(e))
    } else {
      res.push(e)
    }
    return res
  }, [])
}

function baseFlattenIterative (arr) {
  if (!arr) return []
  return arr.reduce((res, e) => {
    if (Array.isArray(e)) {
      res = res.concat(e)
    } else {
      res.push(e)
    }
    return res
  }, [])
}

export {
  deepFlattenIterative,
  deepFlattenRecursive,
  flatten
}
