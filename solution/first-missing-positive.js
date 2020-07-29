/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  O(n)
  先根据 nums 创建一个 map
  然后从 1 开始遍历，找到第一个没有的最小正整数返回即可
*/
var firstMissingPositive = function (nums) {
  let map = {}, len = nums.length;

  for (let i = 0; i < len; i++) {
    map[nums[i]] = true;
  }

  let i = 1;
  while (true) {
    if (!map[i]) return i;
    i++;
  }
};