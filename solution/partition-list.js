/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

/*
  分隔链表，把小于x的链表放在一个新的链表中，最后拼接他们
*/
var partition = function (head, x) {
  let lessNode = new ListNode(-1),
    moreNode = new ListNode(-1);
  let less = lessNode,
    more = moreNode;

  while (head) {
    if (head.val < x) {
      less.next = head;
      less = less.next;
    }
    else {
      more.next = head;
      more = more.next;
    }
    head = head.next;
  }

  more.next = null;
  less.next = moreNode.next;
  return lessNode.next;
};