/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  二分查找法 O(logN)
  思路：
  - 每次查找中位数，判当前中位数的哪一边是有序数组，将有序数组的最小值与当前
    保存的最小值比较，继续二分遍历不是有序数组的那一边，直到左指针大于右指针
*/
var findMin = function (nums) {
  let low = 0,
    high = nums.length - 1,
    ans = Infinity;

  while (low <= high) {
    let mid = low + Math.floor((high - low) / 2);
    if (nums[low] <= nums[mid]) {
      ans = Math.min(ans, nums[low]);
      low = mid + 1;
    } else {
      ans = Math.min(ans, nums[mid]);
      high = mid - 1;
    }
  }

  return ans;
};

/*
  普通遍历法 O(N)
*/
var findMin = function (nums) {
  let ans = Infinity;

  for (let i = 0, len = nums.length; i < len; i++) {
    ans = Math.min(ans, nums[i]);
  }

  return ans;
}