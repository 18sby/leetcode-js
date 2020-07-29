/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} root
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function (root, k) {
  if (k < 2) return [root];

  // 建立 k 个空链表
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans[i] = null;
  }

  // 计算链表长度
  let r = root,
    len = 0;
  while (r) {
    len++;
    r = r.next;
  }

  // 计算每个链表所放的元素数
  let quotient = Math.floor(len / k);
  let remainder = len % k;

  // 开始向数组中填入链表
  for (let i = 0; i < k; i++) {
    let count = 0;
    if (i < remainder) {
      count += 1;
    }
    count += quotient;

    if (!root) continue;

    let node = new ListNode(null);
    let p = node;
    if (count > 0) {
      p.next = root;
      root = root.next;
      p = p.next;
      count--;
    }

    while (count > 0) {
      p.next = root;
      p = p.next;
      root = root.next;
      count--;
    }
    p.next = null;

    ans[i] = node.next;
  }

  return ans;
};