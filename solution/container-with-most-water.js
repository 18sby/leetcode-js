/**
 * @param {number[]} height
 * @return {number}
 */

/*
  双指针：
  1. 两个指针指向 height 数组的头和尾
  2. 不断计算两个指针之间的盛水量 => (较矮指针的高度) * (指针之间的索引距离)
  3. 两指针不断向中间移动，直到相遇，移动的策略是：较矮的一遍向内移动，如果两指针高度相等
     任意移动哪个都可以。
*/
var maxArea = function (height) {
  let max = 0, left = 0, right = height.length - 1;

  while (left !== right) {
    max = Math.max(max, (right - left) * Math.min(height[left], height[right]));
    height[left] >= height[right]
      ? right--
      : left++;
  }

  return max;
};

/*
  暴力 o(n^2) 1788ms
*/
var maxArea = function (height) {
  let n = height.length, max = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      max = Math.max(max, (j - i) * Math.min(height[i], height[j]));
    }
  }

  return max;
};