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
var deleteDuplicates = function (head) {
  let tmp = new ListNode(null);
  tmp.next = head;
  while (head && head.next) {
    if (head.val === head.next.val) {
      head.next = head.next.next;
    }
    else {
      head = head.next;
    }
  }
  return tmp.next;
};