/**
 * @param {string} seq
 * @return {number[]}
 */

/*
  题目也是真难读
  将 seg 分为 A 和 B 两个子序列，他们不相交，（注意：子序列可以是不连续的）
  让属于 A 的括号下标为 0
  让属于 B 的括号下标为 1
  那么:
    给 A 分配一个左括号，给 B 分配一个左括号，这样分就可以了
    给 A 分配一个右括号，给 B 分配一个右括号，这样分就可以了
  这样保证 A 和 B 的左右括号的深度尽可能相等
*/
var maxDepthAfterSplit = function (seq) {
  let ans = [], left = 0, right = 0;

  for (let i = 0; i < seq.length; i++) {
    let c = seq.charAt(i);
    if (c === '(') {
      if (left === 0) {
        ans.push(0);
        left = 1;
      } else {
        ans.push(1);
        left = 0;
      }
    } else {
      if (right === 0) {
        ans.push(0);
        right = 1;
      } else {
        ans.push(1);
        right = 0;
      }
    }
  }

  return ans;
};