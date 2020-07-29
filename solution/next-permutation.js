/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 参考作者：raymond-yan
var nextPermutation = function (nums) {
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      let first = 0,
        second = 0,
        min = Infinity;
      for (let i = nums.length - 2; i > 0; i--) {
        if (nums[i] < nums[i + 1]) {
          first = i;
          break;
        }
      }

      for (let i = first + 1; i < nums.length; i++) {
        const sub = nums[i] - nums[first];
        if (sub > 0 && sub < min) {
          min = sub;
          second = i;
        }
      }

      [nums[first], nums[second]] = [nums[second], nums[first]];

      for (let i = 0; i < nums.length - first; i++) {
        for (let j = first + 1; j < nums.length - i - 1; j++) {
          if (nums[j] > nums[j + 1]) {
            [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
          }
        }
      }

      return nums;
    }
  }

  return nums.sort((a, b) => a - b);
};