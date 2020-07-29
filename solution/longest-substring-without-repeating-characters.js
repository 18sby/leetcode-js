/**
 * @param {string} s
 * @return {number}
 */

/*
  优化的滑动窗口
  
  每次遇到重复字母的时候将这个字母出现位置和他之前的字符全部截掉
  
  如：abcdecfa 案例
  
  ['a', 'b', 'c', 'd', 'e'] abcde -> cfa 下一个为字母 'c'，
  此时，前面的窗口中有 'c' 字符了
  
  (因为是子串，所以我们求的是「连续」子串的最大长度，所以 'a' 和 'b'，留着也没用，
  不是连续的子串)
  
  此时直接将 window 中字母 'c' 与他之前的所有字符截掉
  ['a', 'b', 'c', 'd', 'e'] => ['d', 'e'] 再去 push ( 'c' )
*/
var lengthOfLongestSubstring = function (s) {
  let map = {}, window = [], ans = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);

    if (window.indexOf(c) > -1) {
      window = window.slice(window.indexOf(c) + 1);
    }

    window.push(c);
    ans = Math.max(ans, window.length);
  }

  return ans;
}

/*
  哈希表 + 滑动窗口
  对只有字符串为 key 的情况可使用对象 Object 代替 map
*/
var lengthOfLongestSubstring = function (s) {
  let map = {}, window = [], ans = 0;

  for (let i = 0; i < s.length; i++) {
    let c = s.charAt(i);

    while (map[c] !== undefined) {
      map[window.shift()] = undefined;
    }

    window.push(c);
    map[c] = 1;
    ans = Math.max(ans, window.length);
  }

  return ans;
};