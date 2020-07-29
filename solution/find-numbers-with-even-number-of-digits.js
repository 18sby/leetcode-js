/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function (nums) {
  let count = 0;

  for (let i = 0, len = nums.length; i < len; i++) {
    if (nums[i].toString().length % 2 === 0) {
      count++;
    }
  }

  return count;
};