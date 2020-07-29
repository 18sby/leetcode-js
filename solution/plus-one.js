/**
 * @param {number[]} digits
 * @return {number[]}
 */

var plusOne = function (digits) {
  let len = digits.length;
  digits[len - 1] += 1;

  while (len > 0) {
    if (digits[len - 1] === 10) {
      digits[len - 1] = 0;
      if (digits[len - 2] >= 0) {
        digits[len - 2] += 1;
      }
    }

    len = len - 1;
  }

  if (digits[0] === 0) {
    digits.unshift(1);
  }

  return digits;
};