/**
 * @param {number} N
 * @return {number}
 */

/*
  思路：使用正则，不匹配 3 4 7，匹配 2 5 6 9
*/
var rotatedDigits = function (N) {
  let ans = 0,
    reg1 = /[3,4,7]/,
    reg2 = /[2,5,6,9]/;

  for (let i = 0; i <= N; i++) {
    if (!reg1.test(i) && reg2.test(i)) {
      ans++;
    }
  }

  return ans;
};