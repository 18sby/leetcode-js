/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

/*
  92ms
  直观暴力法:
  先按起始点正序排序所有区间
  一直是相邻区间去对比，只要重叠就合并
  不满足以下条件之一即为重叠：
  1.当前区间的终点小于遍历区间的起点
  2.当前区间的起点大于遍历区间的终点
*/
var merge = function (intervals) {
  let ans = [],
    temp = [];

  intervals.sort((a, b) => a[0] - b[0]);

  for (let i = 0; i < intervals.length; i++) {
    let c = intervals[i];
    if (temp.length === 0) {
      temp = c;
    } else {
      if (c[1] < temp[0] || c[0] > temp[1]) {
        ans.push(temp);
        temp = c;
      } else {
        temp = [Math.min(temp[0], c[0]), Math.max(temp[1], c[1])];
      }
    }
  }

  if (temp.length !== 0) ans.push(temp);

  return ans;
};