/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
  递归实现：
  helper 函数：
    - 计算当前树的高度
  isbalance 函数：
    - 递归判断当前树以及它的所有子树是否平衡
*/
var isBalanced = function (root) {
  function helper(node) {
    if (node === null) return 0;

    let left = helper(node.left),
      right = helper(node.right);

    return Math.max(left, right) + 1;
  }

  function isbalance(node) {
    if (node === null) return true;

    let left = helper(node.left),
      right = helper(node.right);

    if (Math.abs(left - right) > 1) return false;

    return isbalance(node.left) && isbalance(node.right);
  }

  return isbalance(root);
};