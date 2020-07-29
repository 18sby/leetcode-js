/**
 * @param {string} S
 * @return {string}
 */
var removeDuplicates = function (S) {
  let stack = [];
  for (let i = 0, len = S.length; i < len; i++) {
    let curr = S[i];
    if (stack.length > 0 && stack[stack.length - 1] === curr) {
      stack.pop();
      continue;
    }
    stack.push(curr);
  }
  return stack.join('');
};