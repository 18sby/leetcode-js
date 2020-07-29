/**
 * @param {number} low
 * @param {number} high
 * @return {number[]}
 */

/*
  dfs + 排序
*/
var sequentialDigits = function (low, high) {
  function dfs(curr, store) {
    let num = Number(curr);

    if (num >= low && num <= high && ans.indexOf(num) === -1) {
      ans.push(num);
    }

    if (num > high || store === '') return;

    for (let i = 0; i < store.length; i++) {
      curr += store[i];
      dfs(curr, store.slice(i + 1));
    }
  }

  let ans = [];

  let shop = '123456789';
  for (let i = 0; i < 9; i++) {
    dfs(shop[i], shop.slice(i + 1));
  }

  ans.sort((a, b) => a - b);

  return ans;
};