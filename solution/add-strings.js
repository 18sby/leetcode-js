/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  let len1 = num1.length - 1,
    len2 = num2.length - 1,
    lastCarry = null,
    result = '';

  let strPlus = function (a, b, last) {
    let sum = (+a) + (+b);
    if (last) sum += (+last);

    if (sum > 9) {
      sum = String(sum);
      let val = sum[sum.length - 1],
        carry = sum.slice(0, sum.length - 1);
      return {
        val,
        carry
      }
    }
    else {
      return {
        val: sum,
        carry: null
      }
    }
  }

  while (len1 >= 0 && len2 >= 0) {
    let { val, carry } = strPlus(num1[len1], num2[len2], lastCarry);
    lastCarry = carry;
    result = val + result;

    len1--;
    len2--;
  }

  while (len1 >= 0) {
    let { val, carry } = strPlus(num1[len1], null, lastCarry);
    lastCarry = carry;
    result = val + result;

    len1--;
  }

  while (len2 >= 0) {
    let { val, carry } = strPlus(num2[len2], null, lastCarry);
    lastCarry = carry;
    result = val + result;

    len2--;
  }

  if (lastCarry) {
    result = String(lastCarry) + result;
  }

  return String(result);
};