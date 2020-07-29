/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

/*
  思路：
  1.维护一个滑动窗口
  2.移动窗口的时候，先删除应该删除的那个元素，再把新元素插入排序到 window 中
  3.计算中位数，放到结果数组中，注意奇偶数的计算方法的区别
    [1] Math.floor(len / 2)
    [1,2] Math.floor(len / 2) - 1 + Math.floor(len / 2) => 平均数;
    [1,2,3] Math.floor(len / 2)
    [1,2,3,4] Math.floor(len / 2) - 1 + Math.floor(len / 2) => 平均数
*/
var medianSlidingWindow = function (nums, k) {
  if (nums === [] || k === 0) return [];

  let ans = [],
    nlen = nums.length,
    window = nums.slice(0, k);
  window.sort((a, b) => a - b);
  let mid = k % 2 === 0 ? (window[Math.floor(k / 2) - 1] + window[Math.floor(k / 2)]) / 2 : window[Math.floor(k / 2)];
  ans.push(mid);

  for (let i = k; i < nlen; i++) {
    let c = nums[i];
    for (let p = 0; p < k; p++) {
      if (window[p] === nums[i - k]) {
        window.splice(p, 1);
        break;
      }
    }

    let j = window.length - 1;
    while (j >= 0 && window[j] > c) {
      window[j + 1] = window[j];
      j--;
    }
    window[j + 1] = c;
    let mid = k % 2 === 0 ? (window[Math.floor(k / 2) - 1] + window[Math.floor(k / 2)]) / 2 : window[Math.floor(k / 2)];
    ans.push(mid);
  }

  return ans;
};