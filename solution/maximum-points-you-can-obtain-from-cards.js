/**
 * @param {number[]} cardPoints
 * @param {number} k
 * @return {number}
 */

/*
  1. 如果数组长度小于等于k，那么直接返回数组的所有元素和
  2. 初始化左边 k 个元素的和
  3. 不断尝试去掉左边的最后一个元素并添加右边的最后一个元素到和中，找到最大的
  
  举例：[1,2,3,4,5,6,1]   k = 3
  
  第一次初始化之后：
  
    [1,2,3,4,5,6,1] sum = 6
     - - -
         l       r
    
  不断尝试的过程：
  
    [1,2,3,4,5,6,1]   sum = 4
     - -         -
       l       r
  
    [1,2,3,4,5,6,1]   sum = 8
     -         - -
     l       r
     
    [1,2,3,4,5,6,1]   sum = 12
             - - -
    l      r
*/
var maxScore = function (cardPoints, k) {
  let n = cardPoints.length;

  if (n <= k) return cardPoints.reduce((t, c) => t + c, 0);

  let left = 0, right = n - 1, max = 0, sum = 0;

  while (left < k) sum += cardPoints[left++];
  left -= 1;
  max = Math.max(sum, max);

  while (left >= 0) {
    sum -= cardPoints[left];
    sum += cardPoints[right];
    max = Math.max(sum, max);
    left--;
    right--;
  }

  return max;
};