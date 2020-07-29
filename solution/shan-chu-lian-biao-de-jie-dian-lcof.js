/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */

/*
  注意点：增加一个头结点，防止删除的是头结点不好处理
*/
var deleteNode = function (head, val) {
  let newHead = new ListNode(null);
  let p = newHead;

  while (head) {
    if (head.val === val) {
      p.next = head.next;
      break;
    }

    p.next = head;
    p = p.next;
    head = head.next;
  }

  return newHead.next;
};