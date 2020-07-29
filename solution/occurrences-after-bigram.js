/**
 * @param {string} text
 * @param {string} first
 * @param {string} second
 * @return {string[]}
 */

/*
  正则
*/
var findOcurrences = function (text, first, second) {
  let reg = new RegExp(`(?<=\\b${first}\\s${second}\\s)\\w+`, 'gm');
  let ans = text.match(reg);
  if (ans) return ans;
  return [];
};

/*
  分割成数组之后，找到符合条件的词，加入到结果集中
*/
var findOcurrences = function (text, first, second) {
  let ans = [], textArr = text.split(/\s+/), n = textArr.length;

  for (let i = 0; i < n - 2; i++) {
    if (textArr[i] === first && textArr[i + 1] === second) {
      ans.push(textArr[i + 2]);
    }
  }

  return ans;
};