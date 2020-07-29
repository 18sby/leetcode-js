/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  二分查找：原理就是如果是下坡，那么左边必有峰顶
*/
var findPeakElement = function (nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = low + ((high - low) >> 1);

    if (nums[mid] > nums[mid + 1]) {
      high = mid;
    } else {
      low = mid + 1
    }
  }

  return low;
};