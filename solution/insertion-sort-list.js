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
  思路：在一个新链表上操作
*/
var insertionSortList = function (head) {
  if (!head) return head;

  let top = new ListNode(-Infinity);

  let next = null; // 保存要排序下一个节点
  let curr;
  while (head !== null) {
    next = head.next;
    curr = top;
    while (curr.next && curr.next.val < head.val) {
      curr = curr.next;
    }
    head.next = curr.next;
    curr.next = head;

    head = next;
  }

  return top.next;
}

/*
  思路：在原链表上操作
*/
var insertionSortList = function (head) {
  let top = {
    val: -Infinity,
    next: head
  };

  while (head && head.next !== null) {
    // 1.断链
    let opera = head.next.val; // 当前操作值
    let tail = head.next.next; // 断链后的尾部
    head.next = null;

    // 2.从头开始遍历，找到大于当前节点值的节点，插入到他前面，终止条件，到null
    let curr = top;
    while (curr.next && curr.next.val < opera) {
      curr = curr.next;
    }

    // 3.拼接上断链处和后面的节点
    if (curr.next === null) {
      curr.next = {
        val: opera,
        next: tail
      };
      head = head.next;
    }
    else {
      opera = {
        val: opera,
        next: curr.next
      };
      curr.next = opera;
      head.next = tail;
    }
  }

  return top.next;
};