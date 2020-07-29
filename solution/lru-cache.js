/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
  this.cacheList = new Map();
  this.maxLen = capacity;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (this.cacheList.has(key)) {
    let tmp = this.cacheList.get(key);
    this.cacheList.delete(key);
    this.cacheList.set(key, tmp);
    return tmp;
  }
  else {
    return -1;
  }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  if (this.cacheList.has(key)) {
    let tmp = this.cacheList.get(key);
    this.cacheList.delete(key);
    this.cacheList.set(key, value);
  }
  else {
    if (this.cacheList.size === this.maxLen) {
      let i = 0;
      for (var [q, v] of this.cacheList) {
        if (i === 0) {
          this.cacheList.delete(q);
          break;
        }
      }
      this.cacheList.set(key, value);
    }
    else {
      this.cacheList.set(key, value);
    }
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */