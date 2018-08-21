/**
 * @param {number[][]} board
 * @return {number}
 */
const dr = [0, 1, 0, -1]
const dc = [-1, 0, 1, 0]
var slidingPuzzle = function (board) {
  let minMoves = Number.MAX_SAFE_INTEGER
  let zero
  const isSearched = {}
  const minToState = {}
  const targetSequence = '123450'
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        zero = [i, j]
        break
      }
    }
  }

  // minMoves = dfs(board, 0, zero, minMoves, targetSequence, minToState, isSearched)
  minMoves = bfs(board)
  return minMoves === Number.MAX_SAFE_INTEGER ? -1 : minMoves
}

function dfs (board, moves, zero, minMoves, targetSequence, minToState, isSearched) {
  const boardCode = getSequence(board)
  // if (isSearched[boardCode]) {
  //   console.log('boardCode %s, already searched, return', boardCode)
  //   return -1
  // }
  // console.log('current moves %s, boardCode %s, minToState %s', moves, boardCode, minToState[boardCode])
  if (moves >= minMoves) {
    return -1
  } else if (moves < minMoves) {
    if (boardCode === targetSequence) {
      console.log('Cur minMoves %s, Found matched moves %s', minMoves, moves)
      minMoves = moves
      return minMoves
    }
  }

  if (minToState[boardCode] !== undefined) {
    if (minToState[boardCode] > moves) {
      minToState[boardCode] = moves
    } else {
      // console.log('others faster, return')
      // some other paths already reached here with fewer steps, return
      return -1
    }
  } else {
    minToState[boardCode] = moves
  }

  let newMinMoves = minMoves
  for (let i = 0; i < dr.length; i++) {
    const nextZeroR = zero[0] + dr[i]
    const nextZeroC = zero[1] + dc[i]
    if (moves === 0) {
      console.log('nextZeroR %s, nextZeroC %s', nextZeroR, nextZeroC)
    }

    if (nextZeroR >= 0 && nextZeroR < board.length && nextZeroC >= 0 && nextZeroC < board[0].length) {
      // swap
      swap(board, zero[0], zero[1], nextZeroR, nextZeroC)
      const res = dfs(board, moves + 1, [nextZeroR, nextZeroC], newMinMoves, targetSequence, minToState, isSearched)
      if (res !== -1) { newMinMoves = Math.min(newMinMoves, res) }
      swap(board, nextZeroR, nextZeroC, zero[0], zero[1])
    }
  }
  // console.log('boardCode %s is done searched at moves %s, min moves %s.', boardCode, moves, minToState[boardCode])
  // isSearched[boardCode] = true
  return newMinMoves
}

function bfs (board) {
  let zero
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 0) {
        zero = [i, j]
        break
      }
    }
  }

  const targetSeq = '123450'
  const visited = {}
  const queue = []
  const dirs = [[0, 1], [0, -1], [-1, 0], [1, 0]]
  visited[getSequence(board)] = true
  queue.push({
    depth: 0,
    board: cloneBoard(board),
    zero
  })
  while (queue.length > 0) {
    const node = queue.shift()
    const { board: testBoard, zero: ctxZero, depth } = node
    const seq = getSequence(testBoard)
    if (seq === targetSeq) {
      return depth
    }

    const [zeroR, zeroC] = ctxZero
    dirs.forEach((dir) => {
      const nextR = zeroR + dir[0]
      const nextC = zeroC + dir[1]
      if (nextR >= 0 && nextR < board.length && nextC >= 0 && nextC < board[0].length) {
        const cloned = cloneBoard(testBoard)
        swap(cloned, nextR, nextC, zeroR, zeroC)
        const nextSeq = getSequence(cloned)
        if (!visited[nextSeq]) {
          queue.push({
            depth: depth + 1,
            board: cloned,
            zero: [nextR, nextC]
          })
        }
        visited[nextSeq] = true
      }
    })
  }
  return -1
}

function cloneBoard (board) {
  const cloned = []
  for (let i = 0; i < board.length; i++) {
    cloned[i] = []
    for (let j = 0; j < board[0].length; j++) {
      cloned[i][j] = board[i][j]
    }
  }
  return cloned
}

function swap (board, r1, c1, r2, c2) {
  const tmp = board[r1][c1]
  board[r1][c1] = board[r2][c2]
  board[r2][c2] = tmp
}

function getSequence (board) {
  const n = board.length
  const m = board[0].length
  let sequence = ''
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      sequence += board[i][j]
    }
  }
  return sequence
}

var board = [[4, 1, 2], [5, 0, 3]]
console.log(slidingPuzzle(board))
