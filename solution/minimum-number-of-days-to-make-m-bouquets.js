/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */

/*
  1. 二分查找，范围是 min(arr) ~ max(arr)
  2. 需要一个计算当前开的所有花，够不够制作 m 朵花的方法
*/
var minDays = function (bloomDay, m, k) {
  let len = bloomDay.length,
    allDays = [...new Set(bloomDay)].sort((x, y) => x - y),
    ans = -1;

  let left = 0, right = allDays.length - 1;
  while (left <= right) {
    let midIndex = left + ((right - left) >> 1);
    let day = allDays[midIndex];
    if (isFull(day, bloomDay, m, k)) { // 即使满足条件，但也要继续查找，因为要搜索的是最小的天数
      ans = day;
      right = midIndex - 1;
    } else {
      left = midIndex + 1;
    }
  }

  return ans;
};

// 判断今天所有开放的花朵能制作 m 个花束吗
function isFull(day, bloomDay, m, k) {
  if (day === undefined) return false;
  let count = 0;
  for (let i = 0; i < bloomDay.length; i++) {
    let curr = bloomDay[i];
    if (curr <= day) {
      count++;
    } else {
      m -= makeCount(count, k);
      count = 0;
    }
  }
  if (count !== 0) {
    m -= makeCount(count, k);
  }

  return m <= 0;
}

function makeCount(count, k) {
  return Math.floor(count / k);
}