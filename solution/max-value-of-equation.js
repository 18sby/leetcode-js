/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number}
 */

/*
  因为 xj 是大于 xi 的，那么把公式变换一下：
    yi + yj + |xi - xj| => xj + yj + yi - xi
  那么对于每一个 j 来说，只需要找到最大的 yi - xi 的值，来更新当前存储的最大值更新即可
  使用队列：
    1. 存储对于当前的 j 来说，满足条件 |xi - xj| <= k 的 points
   ※2. 保持单调递减，保证队列头部就是队列中最大的 yi-xi
*/
var findMaxValueOfEquation = function (points, k) {
  let len = points.length,
    max = -Infinity,
    queue = [];

  for (let j = 0; j < len; j++) {
    let [xj, yj] = points[j];
    // 把队列头部不满足条件 |xi - xj| <= k 的元素 pop 掉
    while (queue.length > 0 && xj - queue[0][0] > k) queue.shift();
    // 更新最大值
    if (queue.length > 0) {
      max = Math.max(queue[0][1] - queue[0][0] + xj + yj, max);
    }
    // 在把当前的 points[j] push 加入到队尾之前，把队列尾部比 points[j] 的 yj-xj 
    // 的元素 pop 掉
    while (queue.length > 0 && (queue[queue.length - 1][1] - queue[queue.length - 1][0]) < (yj - xj)) queue.pop();
    queue.push(points[j]);
  }

  return max;
};

/*
  超时
  遍历所有的点
*/
var findMaxValueOfEquation = function (points, k) {
  let len = points.length,
    max = -Infinity;

  for (let i = 0; i < len; i++) {
    let [xi, yi] = points[i];

    let j = i + 1;
    while (j < len && Math.abs(xi - points[j][0]) <= k) {
      let count = Math.abs(xi - points[j][0]) + yi + points[j][1];
      max = Math.max(count, max);
      j++;
    }

    j = i - 1;
    while (j >= 0 && Math.abs(xi - points[j][0]) <= k) {
      let count = Math.abs(xi - points[j][0]) + yi + points[j][1];
      max = Math.max(count, max);
      j--;
    }
  }

  return max;
};