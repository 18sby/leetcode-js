/**
 * @param {number} n
 * @return {string[]}
 */

/*
  回溯法(DFS)：
  
  看给出的 n 个左括号和右括号能组成多少种有效且不重复的子集
  
  关键点：当前尝试的子集中 「右括号数量」必须 <= 「左括号数量」
  
  dfs(此时的子集，当前左括号数量，当前右括号数量，剩余左括号数量，剩余右括号数量)
*/
var generateParenthesis = function (n) {
  let ans = [];

  function dfs(curr, l, r, restl, restr) {
    // 如果当前子集右括号数量大于左括号，终止此次递归
    if (r > l) return;

    // 如果剩余左右括号都为0，那么记录此时的子集到结果集中，终止此次递归
    if (restl === 0 && restr === 0) {
      ans.push(curr);
      return;
    }

    // 继续拿左右括号尝试
    if (restl > 0) {
      curr += '(';
      dfs(curr, l + 1, r, restl - 1, restr);
      curr = curr.slice(0, curr.length - 1);
    }
    if (restr > 0) {
      curr += ')';
      dfs(curr, l, r + 1, restl, restr - 1);
      curr = curr.slice(0, curr.length - 1);
    }
  };
  dfs('', 0, 0, n, n);

  return ans;
};