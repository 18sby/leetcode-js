/**
 * @param {string} s
 * @return {number}
 */

/*
  最笨的办法：从每一个位置开始尝试，找到最多的有效括号
*/
var longestValidParentheses = function (s) {
  let max = 0, len = s.length, stack = [];
  stack.push(-1);

  for (let i = 0; i < len; i++) {
    let curr = s.charAt(i);
    if (curr === '(') {
      stack.push(i);
    } else if (curr === ')') {
      stack.pop();
      if (stack.length === 0) {
        stack.push(i);
      } else {
        max = Math.max(i - stack[stack.length - 1], max);
      }
    }
  }

  return max;
};