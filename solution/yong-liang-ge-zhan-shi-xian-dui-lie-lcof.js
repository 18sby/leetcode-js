var CQueue = function () {
  this.insertQueue = [];
  this.deleteQueue = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function (value) {
  this.insertQueue.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function () {
  if (this.deleteQueue.length === 0) {
    this.deleteQueue = [...this.insertQueue];
    this.insertQueue = [];
  }

  if (this.deleteQueue.length === 0) return -1;
  return this.deleteQueue.shift();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */