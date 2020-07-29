/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */

/*
  1. 把链表中的所有值放在一个数组中
  2.头尾指针向中间走判断数组是否回文
*/
var isPalindrome = function (head) {
  let arr = [];
  while (head) {
    arr.push(head.val);
    head = head.next;
  }

  let l = 0, r = arr.length - 1;
  while (l <= r) {
    if (arr[l] !== arr[r]) return false;
    l++; r--;
  }

  return true;
};