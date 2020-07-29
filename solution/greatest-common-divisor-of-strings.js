/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

/*
  学习一下欧几里得算法 gcd 
  const gcd = (a, b) => return b === 0 ? a : gcd( b, a % b )
*/
var gcdOfStrings = function (str1, str2) {
  const gcd = (a, b) => {
    if (b === 0) return a;
    return gcd(b, a % b);
  }

  if (str1 + str2 !== str2 + str1) return '';

  return str1.substring(0, gcd(str1.length, str2.length));
};