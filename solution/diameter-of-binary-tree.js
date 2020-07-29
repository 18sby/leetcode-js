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
  计算二叉树某个非叶子节点的左右子树的最大高度和
*/
var diameterOfBinaryTree = function (root) {
  function helper(node) {
    if (node === null) return 0;

    let left = helper(node.left),
      right = helper(node.right);

    height = Math.max(left + right, height);
    return Math.max(left, right) + 1;
  }

  let height = 0;
  helper(root);

  return height;
};