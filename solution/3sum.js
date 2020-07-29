/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  标签：数组遍历
     首先对数组进行排序，排序后固定一个数 nums[i]，再使用左右指针指向 nums[i] 后面的两端，
  数字分别为 nums[L] 和 nums[R]，计算三个数的和 sum 判断是否满足为 0，满足则添加进结果集
*/
var threeSum = function (nums) {
  let len = nums.length, ans = [];

  nums.sort((a, b) => a - b);
  for (let i = 0; i < len - 2; i++) {
    if (nums[i] > 0) continue;
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    let L = i + 1, R = len - 1;
    while (L < R) {
      let sum = nums[i] + nums[L] + nums[R];
      if (sum === 0) {
        ans.push([nums[i], nums[L], nums[R]]);
        while (L < R && nums[L] === nums[L + 1]) L++;
        while (L < R && nums[R] === nums[R - 1]) R--;
        L++; R--;
      } else if (sum > 0) {
        R--;
      } else if (sum < 0) {
        L++;
      }
    }
  }

  return ans;
};