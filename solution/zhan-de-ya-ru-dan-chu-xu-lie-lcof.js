/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */

/* 模拟一下 */
var validateStackSequences = function (pushed, popped) {
  let stack = [], i = 0;

  for (let pu of pushed) {
    stack.push(pu);
    while (stack.length > 0 && stack[stack.length - 1] === popped[i]) {
      stack.pop();
      i++;
    }
  }

  return stack.length === 0;
};