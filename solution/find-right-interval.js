/**
 * @param {number[][]} intervals
 * @return {number[]}
 */

/*
  思路：
  - copy 出一份 [索引, 区间起点] 的正序排序数组
  
  - 遍历原数组去找，找到 区间起点 >= 当前终点的值
*/
var findRightInterval = function (intervals) {
  let ans = [],
    copy = [],
    len = intervals.length;

  for (let i = 0; i < len; i++) {
    copy.push([i, intervals[i][0]]);
  }
  copy.sort((a, b) => a[1] - b[1]);

  for (let i = 0; i < len; i++) {
    let c = intervals[i][1];
    for (let j = 0; j < len; j++) {
      if (copy[j][1] >= c) {
        ans[i] = copy[j][0];
        break;
      }
    }
    if (ans[i] === undefined) ans[i] = -1;
  }

  return ans;
};