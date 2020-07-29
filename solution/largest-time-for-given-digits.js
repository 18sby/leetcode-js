/**
 * @param {number[]} A
 * @return {string}
 */

/*
  组合出所有有效时间的可能，判断哪种的时间比较大
*/
var largestTimeFromDigits = function (A) {
  function dfs(curr, store) {
    if (!isValidTime(curr)) return;
    if (store.length === 0) {
      if (max === null) {
        max = [...curr];
      } else {
        max = maxTime(max, [...curr]);
      }
      return;
    }

    for (let i = 0; i < store.length; i++) {
      dfs(curr.concat(store[i]), store.slice(0, i).concat(store.slice(i + 1)));
    }
  }

  // 不管当前拼成的时间只有前几位，判断到这一位为止，是否有效
  function isValidTime(arr) {
    for (let i = 0; i < arr.length; i++) {
      let c = arr[i];
      if (i === 0 && c > 2) return false;
      if (i === 1) {
        let prev = arr[i - 1];
        if (prev === 2 && c > 3) return false;
      }
      if (i === 2 && c > 5) return false;
    }

    return true;
  }

  // 对比 time1 和 time2，哪个时间比较大，返回哪个
  function maxTime(time1, time2) {
    let n = time1.length;
    for (let i = 0; i < n; i++) {
      let t1 = time1[i], t2 = time2[i];
      if (t1 > t2) return time1;
      if (t2 > t1) return time2;
    }
    return time1;
  }

  let max = null;
  dfs([], A);

  if (max === null) return '';

  max = max.join('');
  max = max.slice(0, 2).concat(':', max.slice(2));
  return max;
};