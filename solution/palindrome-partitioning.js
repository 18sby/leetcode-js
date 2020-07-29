/**
 * @param {string} s
 * @return {string[][]}
 */

/*
  dfs，回溯所有连续可能性，如果是回文串，就加入答案数组中
  
  - 每次遍历一个新的字符串都有两种做法：
  把当前字符串能拼上最多字符串的方式都尝试一遍
*/
var partition = function (s) {
  let ans = [];

  function dfs(arr, curr, store) {
    if (store === '') {
      if (curr !== '') {
        arr.push(curr);
      }
      ans.push([...arr]);
      return; s
    }

    let i = 0;
    while (i < store.length) {
      let c = store[i];
      if (c === c.split('').reverse().join('')) {
        dfs()
      }
    }

  }
  dfs([''], '', s);

  return ans;
};