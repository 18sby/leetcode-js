/**
 * initialize your data structure here.
 */
var MedianFinder = function () {
  this.arr = [];
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function (num) {
  let arr = this.arr;
  let i = arr.length - 1;
  while (i >= 0 && arr[i] > num) {
    arr[i + 1] = arr[i];
    i--;
  }
  arr[i + 1] = num;
};

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function () {
  let arr = this.arr,
    n = arr.length,
    midIndex = Math.ceil(n / 2) - 1;

  if (n % 2 !== 0) {
    return arr[midIndex];
  }

  return (arr[midIndex] + arr[midIndex + 1]) / 2;
};

/**
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */