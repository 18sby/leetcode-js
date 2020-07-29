/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

/*
  最直观的做法
  1.把链表转换为数组
  2.从数组末尾开始，一遍 pop，一遍计算
*/
var getDecimalValue = function (head) {
  let arr = [], ans = 0, ratio = 1;
  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  while (arr.length > 0) {
    ans += arr.pop() * ratio;
    ratio *= 2;
  }

  return ans;
};