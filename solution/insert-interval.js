/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// 依然是将数组插入进来，从左到右遍历，合并区间
var insert = function (intervals, newInterval) {
  intervals.push(newInterval);
  intervals.sort((a, b) => { return a[0] - b[0] });

  let i = 0, len = intervals.length, result = [];
  for (; i < len - 1; i++) {
    let left = intervals[i],
      right = intervals[i + 1];
    if ((left[0] === newInterval[0]) || (right[0] === newInterval[0])) {
      if (left[1] >= right[0]) {
        intervals[i + 1] = [left[0], Math.max(left[1], right[1])];
        newInterval = intervals[i + 1];
      }
      else {
        result.push(left);
      }
    }
    else {
      result.push(left);
    }
  }
  result.push(intervals[len - 1]);
  return result;
};