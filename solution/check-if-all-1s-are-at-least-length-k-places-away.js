/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*
  1. 把 nums 中所有等于 1 的索引找到，放到到一个数组中
  2. 判断数组中所有索引的间隔是否都至少间隔 k 个元素
*/
var kLengthApart = function (nums, k) {
  let indexArr = [], n = nums.length;

  for (let i = 0; i < n; i++) {
    if (nums[i] === 1) {
      indexArr.push(i);
    }
  }

  // console.log( indexArr );
  if (indexArr.length < 2) return true;

  for (let i = 1; i < indexArr.length; i++) {
    if (indexArr[i] - indexArr[i - 1] <= k) {
      return false;
    }
  }

  return true;
};