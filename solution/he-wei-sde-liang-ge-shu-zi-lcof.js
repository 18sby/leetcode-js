/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
  双指针
  如果左、右指针的元素和大于 target -> 右指针左移
  如果左、右指针的元素和小于 target -> 左指针右移
  指针相遇或者找到一个解停止
*/
var twoSum = function (nums, target) {
  let right = nums.length - 1, left = 0;

  while (left < right) {
    let sum = nums[left] + nums[right];
    if (sum === target) {
      return [nums[left], nums[right]];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }

  return [];
};