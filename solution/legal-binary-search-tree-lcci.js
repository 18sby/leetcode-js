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
  中序遍历二叉树，判断是否每一个节点值都是递增的，如果是，那么就是二叉搜索树
*/
var isValidBST = function (root) {
  const bst = node => {
    if (!node || !isValid) return;
    bst(node.left);
    let current = node.val;
    if (current <= value) {
      isValid = false;
      return;
    } else {
      value = current;
    }
    bst(node.right);
  }

  let value = -Infinity, isValid = true;
  bst(root);
  return isValid;
};