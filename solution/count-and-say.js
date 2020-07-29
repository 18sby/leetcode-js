/**
 * @param {number} n
 * @return {string}
 */

// 参考作者：ararin ( 递归！)
var countAndSay = function (n) {
  return createStr(1, ['1'], n);

  function createStr(index, str, n) {
    if (index == n) return str.join('');
    index++;
    let newStr = [];
    let k = 1; // 第一个默认记录一次
    for (let j = 0; j < str.length; j++) {
      if (str[j] == str[j + 1] && j < str.length - 1) {
        k++;
      }
      else {
        newStr.push(k, str[j]);
        k = 1;
      }
    }
    return createStr(index, newStr, n);
  }
}
