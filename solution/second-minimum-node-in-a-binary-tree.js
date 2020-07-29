/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

/*
  BFS 层次遍历，返回第二小的值
*/
var findSecondMinimumValue = function (root) {
  let arr = [];

  function recursion(node) {
    if (node === null) return;
    arr.push(node.val);
    recursion(node.left);
    recursion(node.right);
  }

  recursion(root);

  arr = [...new Set(arr)];

  arr.sort((a, b) => a - b);

  return arr.length < 2 ? -1 : arr[1];
};