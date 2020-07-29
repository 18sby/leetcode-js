/**
 * @param {string[]} tokens
 * @return {number}
 */

/*
  依次遍历 tokens
  遇到数字，保存到栈中
  遇到符号，把栈顶的两个元素拿出来做运算再把运算结果放回栈中
  最终返回栈内的唯一元素
*/
var evalRPN = function (tokens) {
  let stack = [];

  const isSign = (sign) => '+-/*'.indexOf(sign) !== -1;

  // 处理乘除法
  const calcuMultiple = (c, first, second) => {
    if (first * second < 0) { // 异号
      if (c === '/') {
        return Math.ceil(second / first);
      } else {
        return first * second;
      }
    } else { // 同号
      if (c === '/') {
        return Math.floor(second / first);
      } else {
        return first * second;
      }
    }
  }

  for (let i = 0; i < tokens.length; i++) {
    let c = tokens[i];

    if (!isSign(c)) {
      stack.push(Number(c));
    } else {
      let first = stack.pop(),
        second = stack.pop(),
        result = null;

      if (c === '/' || c === '*') {
        result = calcuMultiple(c, first, second);
      } else {
        result = c === '-' ? second - first : first + second;
      }

      stack.push(result);
    }
  }

  return stack[0];
};