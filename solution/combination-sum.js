/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

/*
  普通回溯 + 巧妙去重
  拿 [2,3,6,7] target = 7 来举例
  递归函数中的 start 跟随遍历的索引向前走，就不至于出现 [2,3,2] [3,2,2] 的情况
*/
var combinationSum = function (candidates, target) {
  let ans = [];

  function backtrack(curr, store, sum, start) {
    // 如果当前和已经超过 target ,终止递归
    if (sum > target) return;

    // 如果和等于目标值并且数组不重复，填入答案数组，终止递归
    if (sum === target) {
      ans.push(curr.slice());
      return;
    }

    // 遍历每一个数，因为可以重复，所以 store 一直不需要改变
    for (let i = start, len = store.length; i < len; i++) {
      curr.push(store[i]);
      backtrack(curr, store, sum + store[i], i);
      curr.pop();
    }
  };
  backtrack([], candidates, 0, 0);

  return ans;
}