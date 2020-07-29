/**
 * @param {number[]} height
 * @return {number}
 */

/*
  动态规划
  
  1. 两次遍历 height，求出每个柱子的左右两边最高的柱子，保存到两个数组中
  2. 再遍历一次 height，它是否存水以及存多少水取决于它两侧最高的柱子中较矮的那一根
     柱子的高度，两侧最高的柱子我们已经求出来了，直接对比计算即可。
*/
var trap = function (height) {
  let leftMax = [], rightMax = [], count = 0, n = height.length;

  leftMax[0] = 0;
  rightMax[n - 1] = 0;

  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1]);
  }
  for (let i = n - 2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1]);
  }

  for (let i = 0; i < n; i++) {
    let min = Math.min(leftMax[i], rightMax[i]),
      curr = height[i];
    if (curr < min) count += (min - curr);
  }

  return count;
};