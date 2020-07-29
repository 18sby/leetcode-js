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
  利用 map，边遍历边移除
  如果节点值没出现过，那么正常两个指针向后走，
  如果节点值出现过了，那么 curr 向后走，prev.next 指向 curr，跳过这个节点
*/
var removeDuplicateNodes = function (head) {
  let map = {},
    newHead = new ListNode(null), // 防止 head 的头结点为 null
    prev = newHead,
    curr = head;

  newHead.next = head;

  while (curr) {
    let currVal = curr.val;
    if (map[currVal] === undefined) {
      map[currVal] = true;
      prev = curr;
      curr = curr.next;
    } else {
      curr = curr.next;
      prev.next = curr;
    }
  }

  return newHead.next;
};