/**
 * @param {string} S
 * @return {string[]}
 */

/*
  回溯
  思路：一个一个加，加到字母的时候，分别拼接 小写 和 大写 进行回溯，否则，普通回溯即可
*/
var letterCasePermutation = function (S) {
  let ans = [],
    letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  function backtrack(str, i) {
    if (i >= S.length) {
      ans.push(str);
      return;
    }

    let curr = S[i];
    if (letters.indexOf(curr) > -1) {
      let low = str + curr.toLowerCase(),
        high = str + curr.toUpperCase();
      backtrack(low, i + 1);
      backtrack(high, i + 1);
    } else {
      backtrack(str + curr, i + 1);
    }
  }
  backtrack('', 0);

  return ans;
};