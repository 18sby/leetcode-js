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
var detectCycle = function (head) {
  let map = new Map();

  while (head) {
    if (map.has(head)) {
      return head;
    }
    else {
      map.set(head, 1);
      head = head.next;
    }
  }

  return null;
};