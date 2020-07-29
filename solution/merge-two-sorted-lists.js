/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

/*
  不断把小的节点加入新链表
*/
var mergeTwoLists = function (l1, l2) {
  let newHead = new ListNode(null), p = newHead, l = l1, r = l2;

  while (l && r) {
    if (l.val < r.val) {
      p.next = l;
      l = l.next;
    } else {
      p.next = r;
      r = r.next
    }

    p = p.next;
  }

  if (l) p.next = l;
  if (r) p.next = r;

  return newHead.next;
};