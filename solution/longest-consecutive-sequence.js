/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  暴力的算法 + hash 优化
  1. 加入 Set 中将数组去重
  2. 从没有比自己小1的数开始查找连续序列
  3. 一旦查找过的直接删除即可，防止重复查找
*/
var longestConsecutive = function (nums) {
  let map = {}, maxCount = 0;
  nums = new Set(nums);

  for (let value of nums) {
    if (nums.has(value - 1)) continue;

    let curr = value, count = 1;
    while (nums.has(value + 1)) {
      nums.delete(value + 1);
      value++;
      count++;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
}

/*
  88ms
  先来个较慢算法，排序 + 遍历统计 O(NlogN)
*/
var longestConsecutive = function (nums) {
  nums.sort((a, b) => a - b);
  let count = 0, max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    if (i === 0 || nums[i] === nums[i - 1] + 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 1;
    }
  }

  max = Math.max(max, count);

  return max;
};