/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

/*
  1. 先排序
  2. 遍历数组，对于每一个 i，都找到所有的三数之和，定义一个 start = i + 1，
     end = len - 1，如果找到等于 target的情况就不用继续找了，在查找的过程中，
     如果和比 target 大，就左指针向右移动，否则就让右指针向左移动。
*/
var threeSumClosest = function (nums, target) {
  let ans = Infinity, len = nums.length;

  nums = nums.sort((a, b) => a - b);

  outer: for (let i = 0; i < len - 2; i++) {
    let start = i + 1, end = len - 1;
    while (start < end) {
      let sum = nums[i] + nums[start] + nums[end];
      if (sum === target) {
        ans = target;
        break outer;
      } else if (sum > target) {
        end--;
      } else if (sum < target) {
        start++;
      }
      ans = Math.abs(sum - target) > Math.abs(ans - target) ? ans : sum;
    }
  }

  return ans;
};