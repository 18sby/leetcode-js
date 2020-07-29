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
  快慢指针
  1.找到链表的中间节点
  2.翻转后半段
  3.对比前后半段是否相同
*/
var isPalindrome = function (head) {
  if (!head) return true;

  let fast = head, slow = head, isPalindrome = true;

  while (fast && fast.next && fast.next.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  // 兼容链表长度为奇数的情况，不需要对比中间的节点
  if (slow.next) {
    slow = slow.next;
  }

  // 因为翻转后半部分的链表后，prev就是后半部的头指针，所以直接对比 prev 和 head 即可
  let curr = slow,
    prev = null,
    next = null;
  while (curr !== null) {
    next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }

  while (head && prev) {
    if (head.val === prev.val) {
      head = head.next;
      prev = prev.next;
    }
    else {
      isPalindrome = false;
      break;
    }
  }

  return isPalindrome;
};

/*
  慢的做法，转为数组，再比较
*/
var isPalindrome = function (head) {
  let arr = [];

  while (head !== null) {
    arr.push(head.val);
    head = head.next;
  }

  let len = arr.length,
    loop = Math.floor(len / 2),
    left = 0,
    right = len - 1;

  while (loop > 0) {
    if (arr[left] !== arr[right]) {
      return false;
    }
    left++;
    right--;
    loop--;
  }

  return true;
};