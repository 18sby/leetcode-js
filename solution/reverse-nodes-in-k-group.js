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

/*
  遍历 -> 足够 k 个节点，去翻转，回来拼接，不足直接拼接
*/
var reverseKGroup = function (head, k) {
  let newHead = new ListNode(null); // 返回的新链表
  newHead.next = head;
  let p = newHead; // 新链表的指针
  let prev = null,
    curr = head,
    next = null,
    count = k;
  while (curr !== null) {
    count = k;

    let headcount = 0, temp = curr;
    while (temp !== null) {
      temp = temp.next;
      headcount++;
    }
    if (headcount < k) break;

    while (count-- > 0 && curr !== null) {
      next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }

    let pnext = p.next;
    p.next = prev;
    p = pnext;
    p.next = curr;
  }

  return newHead.next;
}