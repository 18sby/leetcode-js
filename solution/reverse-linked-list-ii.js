/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} m
 * @param {number} n
 * @return {ListNode}
 */

/*
  翻转链表，注意边界情况
  1.链表长度不够m
  2.在 m 和 n 之间
  3.链表长度超过 n 正常
*/
var reverseBetween = function (head, m, n) {
  if (!head) return head;
  let node = new ListNode(null);
  node.next = head;
  let left = node,
    right,
    prev,
    next,
    tail;

  let i = 1;
  while (i < m && left.next) {
    left = left.next;
    i++;
  }

  if (left && left.next) {
    prev = left.next;
    tail = prev;
  }

  if (prev && prev.next) {
    right = prev.next;
    next = right;
  }

  while (i < n && right) {
    next = next.next;
    right.next = prev;
    prev = right;
    right = next;
    i++;
  }

  left.next = prev;
  tail.next = right;

  return node.next;
};