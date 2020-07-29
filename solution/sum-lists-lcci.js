/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let carry = 0, ans = new ListNode(null), p = ans;

  while (l1 || l2 || carry > 0) {
    let x = 0, y = 0;

    if (l1) {
      x = l1.val;
      l1 = l1.next;
    }

    if (l2) {
      y = l2.val;
      l2 = l2.next;
    }

    let sum = Number(x) + Number(y) + carry;
    carry = 0;
    if (sum > 9) {
      sum = String(sum);
      let len = sum.length;
      carry = Number(sum.slice(0, len - 1));
      sum = sum.slice(len - 1);
    }

    p.next = new ListNode(Number(sum));
    p = p.next;
  }

  return ans.next;
};