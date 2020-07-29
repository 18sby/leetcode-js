/**
 * @param {string} S
 * @return {string}
 */

/*
  栈
  1.遇到左括号入栈，右括号出栈
  2.初始化的时候不算，然后当栈为 0 的时候，把这段最外层的括号去掉，加入到答案中
*/
var removeOuterParentheses = function (S) {
  let stack = [], ans = '', flag = 0;

  for (let i = 0, len = S.length; i < len; i++) {
    let curr = S[i];
    if (curr === '(') {
      stack.push('(');
    }
    else if (curr === ')') {
      if (stack.length === 0) {
        flag = i + 1;
        continue;
      }
      else if (stack[stack.length - 1] === '(') {
        stack.pop();
      }
    }

    if (stack.length === 0 && i !== 0) {
      ans += S.slice(flag + 1, i);
      flag = i + 1;
    }
  }

  return ans;
};