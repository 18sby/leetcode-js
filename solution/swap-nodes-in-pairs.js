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

/**
 * 参考作者 灵魂画师牧码
 * 理解思路：
 *  1.每次递归传进来两个list，这两个节点交换
 *  2.返回交换后的list，同时，将此时交换节点后的第二个节点的next = 下一组节点交换后的list ( 这个过程是递归 )
 *  3.终于理解了，两个小时理解四行代码，我也是佩服作者了，加油！！！
*/
var swapPairs = function (head) {
  if (head && head.next) {
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    return next;
  }
  return head;
}

// 参考作者 刘子谦
var swapPairs = function (head) {
  var target = new ListNode(null);
  let pre = target;
  pre.next = head;
  while (pre.next && pre.next.next) {
    let cur = pre.next,
      next = cur.next,
      tmp = next.next;
    cur.next = tmp;
    next.next = cur;
    pre.next = next;
    pre = cur;
  }
  return target.next;
};