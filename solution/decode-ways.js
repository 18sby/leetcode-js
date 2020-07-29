/**
 * @param {string} s
 * @return {number}
 */

/*
  动态规划
  思路：
  1.求到当前点的所有路径和，也就是求到上一个点和上上个点的路径总和
*/
var numDecodings = function (s) {
  if (s.length === 0) return 0;

  let path = new Array(s.length + 1).fill(0);
  path[0] = 1;
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] !== '0') {
      path[i + 1] += path[i];
      if (i + 2 < path.length && s[i] + s[i + 1] <= '26') {
        path[i + 2] = path[i];
      }
    }
  }

  return path[path.length - 1];
}

/*
  思路：递归 + 回溯 效率极低
  1.从前向后解码
    成功的条件：
    - 当前索引大于 s.length - 1
    失败的条件：
    - 遇到当前位为 '0'
*/
var numDecodings = function (s) {
  let ans = 0;

  function recursion(str, i) {
    if (i > str.length - 1) {
      ans++;
      return;
    }

    if (str[i] === '0') return;

    recursion(str, i + 1);
    if (i + 1 <= str.length - 1 && '26' >= str[i] + str[i + 1] >= '1') {
      recursion(str, i + 2);
    }
  }

  recursion(s, 0);

  return ans;
};