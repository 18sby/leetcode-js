/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */



// 作者：chitanda-eru
// 理解思路:
//  1.先把数组存成链表 作者的这个循环很巧妙 通过判断每个链表节点的next 是否是 null
//  2.如果数组 length === 1 直接返回 null
//  3.如果删除的倒数索引大于1
//    那么删除索引的位置的 val 和 next 赋值为 删除节点的下一个节点的 val 和 next
var removeNthFromEnd = function (head, n) {
  let listArr = [head];
  for (let cur = head; cur.next; cur = cur.next) {
    listArr.push(cur.next);
  };

  let len = listArr.length;
  if (len === 1) return null;
  if (n > 1) {
    listArr[len - n].val = listArr[len - n].next.val;
    listArr[len - n].next = listArr[len - n].next.next;
  } else listArr[len - n - 1].next = null;
  return listArr[0];

};




