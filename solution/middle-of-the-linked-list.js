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
  思路：遍历两次
  1.计算链表长度，找到中间节点的位置
  2.遍历一次链表，找到中间节点返回
*/
var middleNode = function (head) {
  let len = 0, headcopy = new ListNode(null);
  headcopy.next = head;
  headcopy = headcopy.next;
  while (head !== null) {
    len++;
    head = head.next;
  }

  let mid = Math.floor(len / 2) + 1;

  while (mid > 1) {
    headcopy = headcopy.next;
    mid--;
  }

  return headcopy;
};