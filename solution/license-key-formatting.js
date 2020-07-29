/**
 * @param {string} S
 * @param {number} K
 * @return {string}
 */

/*
  1. 用正则替换所有 '-' 为 ''
  2. 用正则将所有小写字母转换为大写字母
  3. 从后向前不断拼接即可
*/
var licenseKeyFormatting = function (S, K) {
  S = S.replace(/\-/g, '');
  S = S.replace(/[a-z]/g, (args) => args[0].toUpperCase());
  let ans = '', i = S.length - 1, count = 0;
  while (i >= 0) {
    ans = S.charAt(i) + ans;
    count++;
    if (count === K && i !== 0) {
      ans = '-' + ans;
      count = 0;
    }
    i--;
  }

  return ans;
};