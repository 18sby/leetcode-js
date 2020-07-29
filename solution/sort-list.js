/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/* 最笨的方法 用数组排序 进行转换 */
var sortList = function (head) {
  if (!head) return null;

  let ary = [],
    result = new ListNode(null),
    curr = result;
  while (head) {
    ary.push(head.val);
    head = head.next;
  }

  ary.sort((a, b) => b - a);
  while (ary.length > 0) {
    curr.next = new ListNode(ary.pop());
    curr = curr.next;
  }

  return result.next;
};