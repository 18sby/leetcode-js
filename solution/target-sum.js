/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */

/*
  深度优先搜索
  初始数值为0，递归过程中每一个数都可以选择加上或减去
*/
var findTargetSumWays = function (nums, S) {
  let ans = 0;

  function dfs(curr, index, store) {
    /*
      如果 store 空了
        如果 curr === S，记录
        终止递归
    */
    if (index === store.length) {
      if (curr === S) ans++;
      return;
    }

    // 分别进行加减递归
    for (let i = 0; i < 2; i++) {
      if (i === 0) {
        dfs(curr + store[index], index + 1, store);
      } else {
        dfs(curr - store[index], index + 1, store);
      }
    }
  };
  dfs(0, 0, nums);

  return ans;
};