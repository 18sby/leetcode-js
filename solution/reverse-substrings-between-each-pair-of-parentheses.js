/**
 * @param {string} s
 * @return {string}
 */

/*
  参考「typingMonkey」的思路
  
  遇到 '(': 向栈顶压入空字符串
  遇到 ')': 把栈顶的最后一个元素翻转 + 栈顶倒数第二个元素
  遇到 字符: 直接将栈顶最后一个元素与它拼上
*/
var reverseParentheses = function (s) {
  let stack = [''];

  for (let i = 0, len = s.length; i < len; i++) {
    let c = s.charAt(i);
    if (c === '(') {
      stack.push('');
    } else if (c === ')') {
      let last = stack.pop();
      let temp = last.split('').reverse().join('');
      stack[stack.length - 1] += temp;
    } else {
      stack[stack.length - 1] += c;
    }
  }

  return stack.pop();
};