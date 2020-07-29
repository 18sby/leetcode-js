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
  遍历链表，遍历偶数的节点，把所有的偶数节点插入到第一个节点之后
  使用指针：
  当前排好的偶数链表的最后一个点
  当前正在排的偶数索引节点的下一个奇数索引节点
*/
var oddEvenList = function (head) {
  if (!head || !head.next || !head.next.next) return head;

  let order = head,
    next = order.next,
    curr = next.next;

  while (curr) {
    let nextSingle = curr.next;
    curr.next = order.next;
    next.next = nextSingle;
    order.next = curr;

    if (!nextSingle || !nextSingle.next) break;
    order = order.next;
    curr = nextSingle.next;
    next = nextSingle;
  }

  return head;
};