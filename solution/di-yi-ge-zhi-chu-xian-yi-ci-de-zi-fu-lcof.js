/**
 * @param {string} s
 * @return {character}
 */

/*
  84ms
  使用 indexOf 判断，除了当前字符之外，其余部分如果都不存在此字符，那么找到答案
*/
var firstUniqChar = function (s) {
  let ans = ' ';

  for (let i = 0, len = s.length; i < len; i++) {
    let c = s.charAt(i);
    if (s.slice(0, i).indexOf(c) === -1 && s.slice(i + 1).indexOf(c) === -1) {
      ans = c;
      break;
    }
  }

  return ans;
}

/*
  100ms
  直观思路：
  1.建立一个26长度以 'abc...xyz' 为索引的数组
  2.遍历一遍 s，统计所有字符出现的次数
  3.再遍历一遍 s，如果当前字符只出现了一次，那么即为答案，退出循环，返回即可
*/
var firstUniqChar = function (s) {
  let arr = [],
    ans = ' ';

  for (let i = 97; i < 97 + 26; i++) {
    let k = String.fromCharCode(i);
    arr[k] = 0;
  }

  for (let i = 0, len = s.length; i < len; i++) {
    arr[s.charAt(i)]++;
  }

  for (let i = 0, len = s.length; i < len; i++) {
    let k = s.charAt(i);
    if (arr[k] === 1) {
      ans = k;
      break;
    }
  }

  return ans;
};