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
  思路：对每个节点使用递归，求以每一个节点为最大路径和
  参考作者：大大大肥凯
*/

var maxPathSum = function (root) {
  let max = -Infinity;

  var loop = function (node) {
    if (!node) return 0;

    const left = loop(node.left);
    const right = loop(node.right);

    let curr = Math.max(left, 0) + Math.max(right, 0) + node.val;
    max = Math.max(curr, max);

    return Math.max(left, right, 0) + node.val;
  }

  loop(root);
  return max;
};