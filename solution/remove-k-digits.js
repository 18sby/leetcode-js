/**
 * @param {string} num
 * @param {number} k
 * @return {string}
 */

/*
  思路：
  1.从左到右遍历一次，维护单调栈
  2.删除栈顶元素的条件：当前遍历的元素比此时的栈顶元素小
  3.首位的 '0' 为无效字符，要清除首位的 '0'，例如：'0015' -> '15'
  4.如果以上步骤处理完，字符为空，也要返回 '0'
*/
var removeKdigits = function (num, k) {
  let stack = [];

  for (let i = 0, len = num.length; i < len; i++) {
    let curr = num[i];
    while (stack.length > 0 && k > 0 && curr < stack[stack.length - 1] && k > 0) {
      stack.pop();
      k--;
    }
    stack.push(curr);
  }

  // 如果 k > 0，从末尾删除掉 足够的值即可
  while (k > 0) {
    stack.pop();
    k--;
  }

  // 去除首位的无效 0
  while (stack.length > 0 && stack[0] === '0') {
    stack.shift();
  }

  return stack.length > 0 ? stack.join('') : '0';
};