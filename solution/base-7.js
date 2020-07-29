/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  if (num === 0) return '0';

  let isNegative = false;
  if (num < 0) isNegative = true;
  num = Math.abs(num);
  let radix = 7,
    ans = '';

  while (num > 0) {
    ans = num % radix + ans;
    num = Math.floor(num / radix);
  }

  return isNegative ? '-' + ans : ans;
};