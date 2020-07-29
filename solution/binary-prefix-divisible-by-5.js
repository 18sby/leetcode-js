/**
 * @param {number[]} A
 * @return {boolean[]}
 */

/*
  依次把每一位 * 2再加上当前的数 % 5，看看是否等于 0 选择填入 true 或 false
*/
var prefixesDivBy5 = function (A) {
  let ans = [], temp = 0;
  for (let i = 0; i < A.length; i++) {
    temp = (temp << 1) + A[i];
    temp = temp % 5;
    ans.push(
      temp === 0 ? true : false
    );
  }
  return ans;
};