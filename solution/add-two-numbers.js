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

// 1.使用ListNode ( 参考"两数相加 javascript 解法"的思路 )
var addTwoNumbers = function (l1, l2) {
  let result = new ListNode(null);
  let nextRst = result; // 初始化最终结果
  let curVal = 0; // 当前层级的值
  let param = 0; // 传递到下一层级的值
  let tempOrigin = 0; // 每个层级的原始值

  while (l1 != null || l2 != null) {
    let x = (l1 != null) ? l1.val : 0;
    let y = (l2 != null) ? l2.val : 0;

    tempOrigin = x + y + param;
    curVal = tempOrigin % 10;
    param = Math.floor(tempOrigin / 10);

    nextRst.next = new ListNode(curVal);
    nextRst = nextRst.next;

    if (l1 != null) {
      l1 = l1.next;
    }
    if (l2 != null) {
      l2 = l2.next;
    }
  }
  if (param) {
    nextRst.next = new ListNode(param)
  }
  return result.next;
}
addTwoNumbers([2, 4, 3], [5, 6, 4])

// 2.最笨的方法：将两个数组倒序排列，转换为 String，再转成 Number，执行相加，结果再转成 Arr，再倒序排列后返回 !!: 但是在这个编辑器终不能运行正常
var addTwoNumbers = function (l1, l2) {

  let arrToNum = function (arr) {
    return Number(arr.toString().split(',').reverse().join(''))
  }

  let add1 = arrToNum(l1);
  let add2 = arrToNum(l2);
  let sum = add1 + add2;
  let arr = sum.toString().split('').reverse();
  let resArr = [];
  for (let i in arr) {
    resArr[i] = parseInt(arr[i])
  }
  return resArr;
};
addTwoNumbers([2, 4, 3], [5, 6, 4]);