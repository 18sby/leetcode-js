/**
 * @param {string} s
 * @return {boolean}
 */

// 参考作者 beMySun
/*
  理解思路：
    1.建立一个 三组括号对应的 map 类数组
    2.遍历传进来的 字符串
    3.判断 如果出现在 map 的 key上 就push 进来，
      否则 拿到一个没有匹配上的右括号的时候，判断此时栈里是否还有未匹配的左括号 没有 返回 false，
*/

var isValid = function (s) {
  let map = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  let stack = [];
  for (let char of s) {
    if (char in map) {
      stack.push(char);
    } else {
      if (!stack.length || char !== map[stack.pop()]) {
        return false;
      }
    }
  };
  return !stack.length;
}
