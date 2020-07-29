/**
 * @param {number[]} nums
 * @return {number[][]}
 */

/*
  基本dfs，因为没有重复数字没所以不用做去重，这题可以作为一个经典的 dfs
  dfs(当前尝试的组合，当前剩余可选数字) :function
*/
var permute = function (nums) {
  function dfs(curr, store) {
    if (curr.length === n) {
      ans.push([...curr]);
      return;
    }

    for (let i = 0; i < store.length; i++) {
      dfs(
        curr.concat(store[i]),
        store.slice(0, i).concat(store.slice(i + 1))
      );
    }
  }

  let ans = [], n = nums.length;
  dfs([], nums);

  return ans;
};