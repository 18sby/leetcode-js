/**
 * @param {number[]} nums
 * @return {number}
 */

/*
  遍历一次，先判断，如果当前的 sum 是负数的话，直接抛弃掉，否则累加
*/
var maxSubArray = function (nums) {
  if (nums.length === 0) return 0;
  let sum = nums[0], ans = nums[0];

  for (let i = 1; i < nums.length; i++) {
    let num = nums[i];
    if (sum <= 0) {
      sum = num;
    } else {
      sum += num;
    }
    ans = Math.max(ans, sum);
  }

  return ans;
};