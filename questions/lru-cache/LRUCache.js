class DLinkedNode {
  constructor (key, value) {
    this.key = key
    this.value = value
    this.pre = null
    this.post = null
  }
}

/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cache = new Map()
  this.capacity = capacity
  this.count = 0
  this.head = new DLinkedNode()
  this.tail = new DLinkedNode()
  this.head.post = this.tail
  this.tail.pre = this.head
}

LRUCache.prototype._addNode = function (node) {
  node.pre = this.head
  node.post = this.head.post

  this.head.post.pre = node
  this.head.post = node
}

LRUCache.prototype._removeNode = function (node) {
  const pre = node.pre
  const post = node.post
  pre.post = post
  post.pre = pre
}

LRUCache.prototype._moveToHead = function (node) {
  this._removeNode(node)
  this._addNode(node)
}

LRUCache.prototype._popTail = function () {
  const node = this.tail.pre
  this._removeNode(node)
  return node
}

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.cache.has(key)) {
    return -1
  }

  const node = this.cache.get(key)
  this._moveToHead(node)
  return node.value
}

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const newNode = new DLinkedNode(key, value)
  if (this.cache.has(key)) {
    this._removeNode(this.cache.get(key))
  } else {
    if (this.count === this.capacity) {
      const popped = this._popTail()
      this.cache.delete(popped.key)
    } else {
      this.count++
    }
  }
  this.cache.set(key, newNode)
  this._addNode(newNode)
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = Object.create(LRUCache).createNew(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
