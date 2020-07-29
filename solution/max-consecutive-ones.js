/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let max = 0, count = 0;
  for (let i = 0, j = nums.length; i < j; i++) {
    let c = nums[i];
    if (c === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
  }
  if (count) max = Math.max(max, count);
  return max;
};