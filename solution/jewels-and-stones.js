/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */

/*
  思路：判断字符串 S 中每一个字符，在 J 中出现的次数
*/
var numJewelsInStones = function (J, S) {
  let ans = 0;

  for (let i = 0, len = S.length; i < len; i++) {
    let c = S[i];
    if (J.indexOf(c) !== -1) {
      ans++;
    }
  }

  return ans;
};