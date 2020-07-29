/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
  let num = '', str = '', ans = '', n = s.length;

  for (let i = 0; i < n; i++) {
    let c = s.charAt(i);
    if (Number.isNaN(+c)) {
      str += c;
    } else {
      num += c;
    }
  }

  if (Math.abs(num.length - str.length) > 1) return '';

  let flag = num.length > str.length ? 'num' : 'str';
  let nIndex = 0, sIndex = 0;
  while (n > 0) {
    n--;
    if (flag === 'num') {
      ans += num.charAt(nIndex);
      nIndex++;
      flag = 'str';
    } else {
      ans += str.charAt(sIndex);
      sIndex++;
      flag = 'num';
    }
  }

  return ans;
};