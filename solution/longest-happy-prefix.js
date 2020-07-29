/**
 * @param {string} s
 * @return {string}
 */

/*
  KMP算法：就是求 s 的最长公共前后缀
*/
var longestPrefix = function (s) {
  // 计算字符串的最长公共前后缀
  const lps = (str) => {
    let arr = [], max = 0, i = 1;
    arr[0] = 0;
    while (i < str.length) {
      if (str[i] === str[max]) {
        arr[i++] = ++max;
      } else if (max > 0) {
        max = arr[max - 1];
      } else {
        arr[i++] = max;
      }
    }

    return arr;
  }

  let long = lps(s).pop();

  if (long === 0) return '';
  return s.slice(0, long);
}

/*
  520ms
  暴力法，最短的代码，跑最长的时间
  只需要从最后一个字符开始不断向前截取并对比就好了， leetcodeleet
  对比 l 和 t
  对比 le 和 et
  对比 lee 和 eet
  对比 leet 和 leet，找到结果了
  注意：不要提前结束，因为有可能有更长的快乐前缀
*/
var longestPrefix = function (s) {
  let n = s.length, ans = '';

  for (let i = n - 1; i >= 1; i--) {
    let nums = n - i;
    if (s.slice(i) === s.slice(0, n - i)) {
      ans = s.slice(i);
    }
  }

  return ans;
};