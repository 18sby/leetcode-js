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
var mergeTwoLists = function (l1, l2) {
  let head = new ListNode(null);
  let p = head,
    i = l1,
    j = l2;

  while (i && j) {
    if (i.val < j.val) {
      p.next = i;
      i = i.next;
    } else {
      p.next = j;
      j = j.next;
    }

    p = p.next;
  }

  if (i) p.next = i;
  if (j) p.next = j;

  return head.next;
};