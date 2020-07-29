/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

/*
  不用堆了，直接用快排，会慢一点
  1. 找到中位数
  2. 快排
*/
var getStrongest = function (arr, k) {
  let len = arr.length,
    midIndex = Math.floor((len - 1) / 2);
  let other = [...arr].sort((a, b) => a - b);
  let m = other[midIndex];
  arr.sort((a, b) => {
    if (
      Math.abs(a - m) > Math.abs(b - m) ||
      (Math.abs(a - m) == Math.abs(b - m) && a > b)
    ) { // a 比 b 强
      return -1;
    } else {
      return 1;
    }
  });
  return arr.slice(0, k);
};