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

/*
  放到数组中然后建立链表
*/
var reverseList = function (head) {
  if (!head) return null;

  let ary = [],
    rever = new ListNode(null);
  let curr = rever;
  while (head) {
    ary.push(head.val);
    head = head.next;
  }

  while (ary.length) {
    let p = ary.pop();
    curr.next = new ListNode(p);
    curr = curr.next;
  }

  return rever.next;
};