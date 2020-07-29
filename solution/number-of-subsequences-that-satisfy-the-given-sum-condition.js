/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  排序 + 二分 + 快速幂
  对于每一个 nums[i] 找到一个最大的 j，使 nums[i] + nums[j] <= target
  统计所有的子序列组合数量 => 使用快速幂算法
*/
var numSubseq = function (nums, target) {
  let count = BigInt(0), mod = BigInt(1e9 + 7);
  nums.sort((a, b) => a - b);
  let len = nums.length;
  for (let i = 0; i < len; i++) {
    let j = findMax(target - nums[i], nums);
    if (j >= i) {
      count = (count + quickPow(2, j - i) % mod) % mod;
    }
  }
  return count;
};

// 快速幂算法
function quickPow(x, n) {
  if (n === 0) return BigInt(1);
  let y = quickPow(x, Math.floor(n / 2));
  return n % 2 === 0 ? BigInt(y) * BigInt(y) : BigInt(y) * BigInt(y) * BigInt(x);
}

// 找到小于 value 的最大的索引
function findMax(value, arr) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    let midIndex = left + ((right - left) >> 1);
    if (arr[midIndex] > value) {
      right = midIndex - 1;
    } else {
      if (midIndex === arr.length - 1 || arr[midIndex + 1] > value) {
        return midIndex;
      } else {
        left = midIndex + 1;
      }
    }
  }
  return -1;
}