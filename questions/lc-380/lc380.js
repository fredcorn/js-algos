/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
  this.map = new Map()
  this.values = []
}

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
  if (!this.map.has(val)) {
    this.values.push(val)
    this.map.set(val, this.values.length - 1)
    return true
  }
  return false
}

/**
 * Removes a value from the set. Returns true if the set contained the specified element.
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
  if (this.map.has(val)) {
    const idx = this.map.get(val)
    const length = this.values.length
    if (idx !== length - 1) {
      const last = this.values[length - 1]
      this.values[length - 1] = val
      this.values[idx] = last
      this.map.set(last, idx)
    }
    this.map.delete(val)
    this.values.splice(length - 1, 1)
    return true
  }
  return false
}

function getRandomInt (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
  const randomIdx = getRandomInt(this.values.length)
  return this.values[randomIdx]
}

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = Object.create(RandomizedSet).createNew()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */

const obj = new RandomizedSet()
const commands = ['insert', 'insert', 'remove', 'insert', 'remove', 'getRandom']
const inputs = [[0], [1], [0], [2], [1], []]
console.log(commands)
console.log(inputs)
for (let i = 0; i < commands.length; i++) {
  const res = obj[commands[i]].apply(obj, inputs[i])
  console.log(res)
}
