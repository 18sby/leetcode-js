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
  链表的基本的操作：删除链表节点
  思路：
  1.遍历链表，遇到等于给定值的节点，那么把这个值的上一个节点连接到这个值的下一个节点上，就相当于删除该值
  2.需要的指针 prev，curr
*/
var removeElements = function (head, val) {
  let newHead = new ListNode(null),
    prev = newHead,
    curr = head;
  newHead.next = head;

  while (curr) {
    if (curr.val === val) {
      prev.next = curr.next;
      curr = prev.next;
    }
    else {
      prev = curr;
      curr = curr.next;
    }
  }

  return newHead.next;
};