/**
 * @param {string} s
 * @return {number}
 */

/*
  遍历两次 s：
  第一次记录所有字母出现的次数
  第二次找到第一个出现次数为 0 的字母，返回它在 s 中的索引
  
  因为字母只有26个，将所有字母统计到 26 长度的数组中，返回第一个出现次数为 1 的字母
  
  字母的对应的 code：
  a - z
  97 - 122
  
  用一个 0 - 25 索引的数组记录每个字母的出现次数
*/
var firstUniqChar = function (s) {
  let arr = new Array(26).fill(0), index = -1;

  for (let i = 0; i < s.length; i++) {
    let cIndex = s.charAt(i).charCodeAt() - 97;
    arr[cIndex]++;
  }

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);
    let cIndex = c.charCodeAt() - 97;
    if (arr[cIndex] === 1) {
      index = i;
      break;
    }
  }

  return index;
};