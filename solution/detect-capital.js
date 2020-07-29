/**
 * @param {string} word
 * @return {boolean}
 */

/*
  思路一样：正则匹配
*/
var detectCapitalUse = function (word) {
  let reg1 = /^[A-Z]*$/,
    reg2 = /^[a-z]*$/,
    reg3 = /^[A-Z][a-z]*$/;

  return reg1.test(word) || reg2.test(word) || reg3.test(word);
}

/*
  大写字母对应的 ASCII 码
  "A" -> "Z" : 65 -> 90
  思路：
    1.全为大写或者全为小写
    2.大小写都有，但是只能第一位为大写
*/
var detectCapitalUse = function (word) {
  if (word.toLowerCase() === word || word.toUpperCase() === word) return true;

  for (let i = 0, len = word.length; i < len; i++) {
    let isUp = word.charAt(i).charCodeAt() >= 65 && word.charAt(i).charCodeAt() <= 90;
    if (i === 0 && !isUp) return false;
    if (i !== 0 && isUp) return false;
  }

  return true;
};