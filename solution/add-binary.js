/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let max = Math.max(a.length, b.length);
  a = a.padStart(max, 0);
  b = b.padStart(max, 0);
  let res = '', sum = 0;
  while (max--) {
    sum = (+a[max]) + (+b[max]) + (sum > 1);
    res = (sum & 1) + res;
  }
  return sum > 1 ? '1' + res : res;
};

var addBinary = function (a, b) {
  var add = function (m, n) {
    m = m ? Number(m) : 0;
    n = n ? Number(n) : 0;
    return m + n;
  }
  let alen = a.length - 1,
    blen = b.length - 1,
    carry = 0,
    sum = '';
  while (alen >= 0 || blen >= 0) {
    let x = '', y = '';
    if (alen >= 0) {
      x = a[alen];
      alen--;
    }
    if (blen >= 0) {
      y = b[blen];
      blen--;
    }
    let temp = add(x, y) + carry;
    let overflow = temp - 2;
    carry = overflow < 0 ? 0 : 1;
    overflow = overflow < 0 ? temp : overflow;
    sum = String(overflow) + sum;
  }
  if (carry === 1) {
    sum = String(carry) + sum;
  }
  return sum;
};