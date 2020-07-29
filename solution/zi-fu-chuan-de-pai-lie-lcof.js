/**
 * @param {string} s
 * @return {string[]}
 */

/*
  无额外空间去重 + DFS
  
  偷个懒，题解看这里：https://leetcode-cn.com/problems/permutation-ii-lcci/solution/js-hui-su-qu-zhong-by-ignore_express/
*/
var permutation = function (s) {
  let ans = [];

  function dfs(curr, store) {
    if (store.length === 0) {
      return ans.push(curr);
    }

    for (let i = 0; i < store.length; i++) {
      if (i > 0 && store[i] === store[i - 1]) continue;
      curr += store[i];
      dfs(curr, store.slice(0, i).concat(store.slice(i + 1)));
      curr = curr.slice(0, curr.length - 1);
    }
  }

  s = s.split('');
  s.sort((a, b) => {
    if (a > b) return 1;
    return -1;
  });
  s = s.join('');

  dfs('', s);

  return ans;
};