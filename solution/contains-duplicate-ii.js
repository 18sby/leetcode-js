/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

/*
  哈希：利用 Set 结构保存最大 k 个数，超过 k 个数，删除最早存进来的数，
  一旦发现即将存入的数在 Set 中有相等的值，直接结束遍历，返回 true
*/
var containsNearbyDuplicate = function (nums, k) {
  let hash = new Set(), ans = false;

  for (let i = 0, n = nums.length; i < n; i++) {
    if (hash.has(nums[i])) {
      ans = true;
      break;
    }
    hash.add(nums[i]);
    if (hash.size > k) {
      hash.delete(nums[i - k]);
    }
  }

  return ans;
}

/*
  1084ms
  暴力法：依次查找
*/
var containsNearbyDuplicate = function (nums, k) {
  let ans = false, n = nums.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= Math.min(i + k, n - 1); j++) {
      if (nums[i] === nums[j]) {
        ans = true;
        break;
      }
    }
    if (ans === true) break;
  }

  return ans;
};