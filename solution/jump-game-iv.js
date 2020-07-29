/**
 * @param {number[]} arr
 * @return {number}
 */

/*
  参考作者: matteokjh
  
  用栈和队列解题
  思路：
  - 从第一个数开始向后bfs，填充dp数组
  - 需要一个记录重复值索引的 map 对象
  - 首先全部填充 -1，-1 视作没操作过
  - 在填充完某个值相等的所有索引时，把这个键值对清空
  
  小技巧：用 对象代替 map 
*/
var minJumps = function (arr) {
  let dp = [],
    map = {},
    len = arr.length,
    queue = [];

  // 存储相同值的索引
  for (let i = 0; i < len; i++) {
    dp[i] = -1;
    if (!map[arr[i]]) {
      map[arr[i]] = [];
    }
    map[arr[i]].push(i);
  }

  dp[0] = 0;
  queue.push(0);

  while (queue.length > 0) {
    let i = queue.pop(),
      next = [];

    if (i > 0) next.push(i - 1);
    if (i < len - 1) next.push(i + 1);

    if (map[arr[i]]) {
      for (let j of map[arr[i]]) {
        next.push(j)
      }
    }
    map[arr[i]] = undefined; // 清空与该值相等的所有值，避免重复计算

    for (let l of next) {
      if (dp[l] !== -1) continue;
      dp[l] = dp[i] + 1;
      queue.unshift(l);
    }
  }

  return dp[len - 1];
};