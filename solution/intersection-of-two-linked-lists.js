/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/*
  笨方法：先把一个链表的值存到map中
  遍历另一个直到找到相交点，到最后没有则返回null
*/
var getIntersectionNode = function (headA, headB) {
  if (!headA || !headB) return null;

  let map = new Map();
  while (headA) {
    if (!map.has(headA)) {
      map.set(headA, 1);
    }
    headA = headA.next;
  }

  while (headB) {
    if (map.has(headB)) {
      return headB;
    }
    headB = headB.next;
  }

  return null;
};