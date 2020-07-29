/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  let len = nums.length;

  nums = [...new Set(nums)];
  nums.sort((a, b) => a - b);
  console.log(nums);

  let i = 1;
  while (i < len) {
    if (nums[i] === i) {
      i = i + 1;
    }
    else {
      nums.push(i);
    }
  }

  console.log(nums);
};