/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
/*
  一次遍历 + 单调栈
*/
var nextLargerNodes = function (head) {
  let stack = [], // 存储索引
    valArr = [], // 存储每一个索引对应的值
    ans = [];

  let index = 0;
  while (head) {
    let curr = head.val;
    while (stack.length && curr > valArr[stack[stack.length - 1]]) {
      let key = stack.pop();
      ans[key] = curr;
      ;
    }

    stack.push(index);
    valArr.push(curr);
    head = head.next;
    index++;
  }

  for (let i = 0, len = stack.length; i < len; i++) {
    ans[stack[i]] = 0;
  }

  return ans;
};