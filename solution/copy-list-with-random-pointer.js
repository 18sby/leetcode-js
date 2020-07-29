/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */

/*
  1. 第一次遍历拷贝链表的 next 指针
  2. 第二次遍历拷贝链表的 random 指针
*/
var copyRandomList = function (head) {
  if (!head) return null;
  let copy = new Node(),
    temp = copy,
    map = new Map(),
    curr = head;

  while (curr) {
    temp.val = curr.val;
    temp.next = curr.next ? new Node() : null;
    map.set(curr, temp);
    temp = temp.next;
    curr = curr.next;
  }

  temp = copy;
  curr = head;
  while (curr) {
    temp.random = curr.random ? map.get(curr.random) : null;
    curr = curr.next;
    temp = temp.next;
  }

  return copy;
};