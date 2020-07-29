/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/*
  利用额外指针，先把所有非 0 的数，从头到尾放
  剩下的全部填充为 0
*/
var moveZeroes = function (nums) {
  let n = nums.length,
    j = 0;

  for (let i = 0; i < n; i++) {
    if (nums[i] !== 0) {
      nums[j] = nums[i];
      j++;
    }
  }

  for (let i = j; i < n; i++) {
    nums[i] = 0;
  }
};