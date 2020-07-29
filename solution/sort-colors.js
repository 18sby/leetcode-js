/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

/* 参考官方题解 */
var sortColors = function (nums) {
  if (nums.length < 2) return nums;

  let left = 0,
    curr = 0,
    right = nums.length - 1;
  while (curr <= right) {
    if (nums[curr] === 0) {
      let temp = nums[curr];
      nums[curr++] = nums[left];
      nums[left] = temp;
      left++;
    }
    else if (nums[curr] === 2) {
      let temp = nums[curr];
      nums[curr] = nums[right];
      nums[right] = temp;
      right--;
    }
    else {
      curr++;
    }
  }
  return nums;
};