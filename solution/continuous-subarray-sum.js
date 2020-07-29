/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*
  哈希，一直计算前缀和，直到出现前缀和 % k 的余数也出现在前缀和的哈希表中
*/
var checkSubarraySum = function (nums, k) {
  let map = { 0: -1 }, sum = 0, n = nums.length;

  for (let i = 0; i < n; i++) {
    sum += nums[i];
    if (k !== 0) sum = sum % k;
    if (map[sum] !== undefined) {
      if (i - map[sum] > 1) return true;
    } else {
      map[sum] = i;
    }
  }

  return false;
};