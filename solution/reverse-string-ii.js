/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

/*
  直观做法：每 2k 个字符串处理一次
  1.不足 k，全部翻转
  2.超过 k，正常处理
*/
var reverseStr = function (s, k) {
  let len = s.length,
    ans = '';

  function handle(str) {
    if (str.length < k) {
      return str.split('').reverse().join('');
    } else {
      let left = str.slice(0, k),
        right = str.slice(k);
      left = left.split('').reverse().join('');
      return left + right;
    }
  }

  let i = 0;
  while (i < len) {
    let end = i + 2 * k > len ? len : i + 2 * k;
    ans += handle(s.slice(i, end));
    i += 2 * k;
  }

  return ans;
};