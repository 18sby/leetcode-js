/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  迭代二分查找
*/
var search = function (nums, target) {
  let ans = -1,
    low = 0,
    high = nums.length - 1;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);

    if (nums[mid] === target) {
      ans = mid;
      break;
    }

    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return ans;
};