/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  DFS
  怎么感觉好多题都是一样的，字符串数组来回切换
*/
var subsetsWithDup = function (nums) {
  let ans = [];

  function dfs(curr, store) {
    ans.push([...curr]);

    if (store.length === 0) return;

    for (let i = 0; i < store.length; i++) {
      if (i > 0 && store[i] === store[i - 1]) continue;
      curr.push(store[i]);
      dfs(curr, store.slice(i + 1));
      curr.pop();
    }
  }

  nums.sort((a, b) => a - b);
  dfs([], nums);

  return ans;
};