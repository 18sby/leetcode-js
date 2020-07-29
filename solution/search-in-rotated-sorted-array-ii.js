/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */

/*
  一次二分法：
    判断二分点的条件
*/
var search = function (nums, target) {
  if (nums.length === 0) return false;
  if (nums.length === 1) return nums[0] === target;
  if (nums.length === 2) return nums[0] === target || nums[1] === target;

  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) return true;

    if (nums[right] === nums[0]) {
      right--;
      continue;
    }

    if (nums[mid] >= nums[left]) {
      if (nums[left] <= target && target < nums[mid]) {
        right = mid - 1;
      }
      else {
        left = mid + 1;
      }
    }
    else {
      if (nums[mid] < target && target <= nums[right]) {
        left = mid + 1;
      }
      else {
        right = mid - 1;
      }
    }
  }

  return false;
};