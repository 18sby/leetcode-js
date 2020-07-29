/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */

// 参考作者：ldq
var rotateRight = function (head, k) {
  if (!head) return null;
  let curr = head,
    temp = null,
    n = 0;
  while (curr) {
    n++;
    if (!curr.next) {
      curr.next = head;
      break;
    }
    curr = curr.next;
  }
  k = k % n;
  while (k < n) {
    temp = head;
    head = head.next;
    k = k + 1;
  }
  temp.next = null;
  return head;
};




