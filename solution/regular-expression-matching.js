/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */

/*
  递归判断
  
  定义两个指针，分别指向 s 和 p 的开头字符，依次去比较：
  
  一般情况：都为字符或者 p 的当前字符为 '.'，都是相等的情况
  
  特殊情况：p 当前字符的下一位为 '*'，比如 ab*cd
  这时候我们要把 b* 看成一个整体，分别重复一次两次去和 s 比较
  b* = ''
  b* = 'b'
  b* = 'bb'
  b* = 'bbb'
  ...
*/
var isMatch = function (s, p) {
  if (s === null || p === null) return false;

  function ismatch(s, i, p, j) {
    let m = s.length, n = p.length;

    // 如果 s 呗遍历完了 j 刚好遍历完，那么相等
    if (j === n) return i === m;

    if (j === n - 1 || p.charAt(j + 1) !== '*') {
      return (i < m) && (p.charAt(j) === '.' || s.charAt(i) === p.charAt(j)) && ismatch(s, i + 1, p, j + 1);
    }

    if (j < n - 1 && p.charAt(j + 1) === '*') {
      while (i < m && (p.charAt(j) === '.' || p.charAt(j) === s.charAt(i))) {
        if (ismatch(s, i, p, j + 2)) {
          return true;
        }
        i++;
      }
    }

    return ismatch(s, i, p, j + 2);
  }

  return ismatch(s, 0, p, 0);
};