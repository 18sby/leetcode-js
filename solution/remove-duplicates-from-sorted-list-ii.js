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
  第一遍循环处理首节点为重复的情况
  第二遍循环处理其余节点为重复的情况
*/
var deleteDuplicates = function (head) {
  if (!head) return head;

  // 消除头节点重复的问题
  let first = new ListNode(null);
  while (head && head.next && head.val === head.next.val) {
    let cur = head.next;
    while (cur.next && head.next.val === cur.next.val) {
      cur = cur.next;
    }
    head = cur.next;
  }
  first.next = head;

  // 消除后面节点重复的问题
  head = first.next;
  while (head && head.next) {
    let next = head.next;
    if (next.next) {
      if (next.next.val !== next.val) {
        head = head.next;
      }
      else {
        while (next.next && next.next.val === next.val) {
          next = next.next;
        }
        head.next = next.next;
      }
    }
    else {
      head = head.next;
    }
  }

  return first.next;

};