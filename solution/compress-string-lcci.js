/**
 * @param {string} S
 * @return {string}
 */

/*
  按逻辑统计即可
*/
var compressString = function (S) {
  let count = 0, newStr = '';

  for (let i = 0, len = S.length; i < len; i++) {
    let c = S.charAt(i);
    if (i === 0 || c !== S.charAt(i - 1)) {
      if (count !== 0) newStr += count;
      newStr += c;
      count = 1;
    } else {
      count++;
    }
  }

  if (count !== 0) newStr += count;

  return newStr.length < S.length ? newStr : S;
};