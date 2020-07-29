/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  二分
*/
var searchInsert = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    let mid = left + ((right - left) >> 1);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1
    } else {
      right = mid - 1;
    }
  }
  return left;
};

/*
  遍历一次，终止条件为找到目标值或者第一个大于目标值的位置，返回此索引即可
*/
var searchInsert = function (nums, target) {
  let index = 0, len = nums.length;
  while (index < len) {
    if (nums[index] >= target) {
      break;
    }
    index++;
  }
  return index;
};