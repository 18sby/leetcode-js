/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  let arr = [];
  let start = 0;
  while (start < n) {
    arr.push(nums[start], nums[start + n]);
    start++;
  }
  return arr;
};