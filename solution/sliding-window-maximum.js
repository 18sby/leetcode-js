/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
  思路：双端队列
  1.维护一个滑动窗口和一个双端队列的数组
  2.在窗口创建和滑动的过程中
    - 如果下一个进入窗口中的值大于当前队列中的最后一个值，那么将他弹出...
    - 如果当前队列中的头部的值已经到了窗口外部，那么将他弹出...
  3.将当前队列中的队列头，放到答案数组里面
*/
var maxSlidingWindow = function (nums, k) {
  if (nums.length < k || nums.length === 0) return nums;

  let nlen = nums.length,
    ans = [],
    window = [];

  for (let i = 0; i < k; i++) {
    let c = nums[i];

    while (window.length > 0 && c > nums[window[window.length - 1]]) {
      window.pop();
    }

    window.push(i);
  }
  ans.push(nums[window[0]]);

  for (let i = k; i < nlen; i++) {
    let c = nums[i];

    while (window.length > 0 && window[0] < i + 1 - k) {
      window.shift();
    }

    while (window.length > 0 && c > nums[window[window.length - 1]]) {
      window.pop();
    }

    window.push(i);
    ans.push(nums[window[0]]);
  }

  return ans;
};