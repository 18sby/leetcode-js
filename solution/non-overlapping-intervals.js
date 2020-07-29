/**
 * @param {number[][]} intervals
 * @return {number}
 */

/*
  贪心策略
  1.将区间按照起始时间正序排序（从小到大）
  2.初始化当前不重叠的最小结束点为 intervals[0][1] 为 minEnd，
    从左到右遍历区间，如果发现当前区间的起始点大于等于这个 minEnd，
    那么不重叠，更新 minEnd 为 intervals[i][1]，
    
    否则就是有重叠，那么统计数量加 1，删除结束较晚的区间，更新当前的
    minEnd 为当前存储的 minEnd 和当前遍历到的结束点比较小的那个结束点
    
    即：Math.min(minEnd, intervals[i][1]) 
*/
var eraseOverlapIntervals = function (intervals) {
  if (intervals.length === 0) return [];

  intervals.sort((a, b) => a[0] - b[0]);
  let count = 0, minEnd = intervals[0][1];

  for (let i = 1, len = intervals.length; i < len; i++) {
    let [start, end] = intervals[i];
    if (start >= minEnd) {
      minEnd = end;
    } else {
      minEnd = Math.min(minEnd, end);
      count++;
    }
  }

  return count;
}

/*
  递归尝试 超时!
  每次前一个区间和当前区间为重叠的话，删除当前区间
  如果前一个区间和当前区间不重叠的话，我们也尝试删除当前区间，看看会不会一共删的更少
*/
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);

  function recursion(prev, curr) {
    if (curr === intervals.length) return 0;

    let taken = Infinity, notTaken = 0;

    if (prev === -1 || intervals[curr][0] >= intervals[prev][1]) {
      taken = recursion(curr, curr + 1);
    }

    notTaken = recursion(prev, curr + 1) + 1;

    return Math.min(taken, notTaken);
  }

  return recursion(-1, 0);
};