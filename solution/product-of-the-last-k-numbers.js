var ProductOfNumbers = function () {
  this.arr = [];
  this.list = []; // 存储从当前位置开始到数组末尾的积
  this.notZero = 0; // 后缀积第一个不为 0 的索引
};

/** 
 * @param {number} num
 * @return {void}
 */
/* 维护后缀积 */
ProductOfNumbers.prototype.add = function (num) {
  if (num === 0) {
    this.notZero = this.list.length;
  } else {
    for (let i = this.notZero; i < this.list.length; i++) {
      this.list[i] *= num;
    }
  }
  this.list.push(num);
  this.arr.push(num);
};

/** 
 * @param {number} k
 * @return {number}
 */
ProductOfNumbers.prototype.getProduct = function (k) {
  return this.list.length - k < this.notZero ? 0 : this.list[this.list.length - k];
};