/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */

/*
  优化空间与时间，使用下标记录滑动窗口的范围
*/
var minSubArrayLen = function (s, nums) {
  let left = 0,
    sum = 0,
    ans = Infinity,
    n = nums.length;

  for (let right = 0; right < n; right++) {
    sum += nums[right];

    while (sum >= s) {
      ans = Math.min(ans, right - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return ans === Infinity ? 0 : ans;
}

/*
  68ms
  思路：滑动窗口：求窗口和大于等于 s 的最小窗口
*/
var minSubArrayLen = function (s, nums) {
  let window = [],
    sum = 0,
    ans = Infinity,
    n = nums.length;

  for (let i = 0; i < n; i++) {
    window.push(nums[i]);
    sum += nums[i];

    while (sum >= s) {
      ans = Math.min(ans, window.length);
      sum -= window.shift();
    }
  }

  return ans === Infinity ? 0 : ans;
};