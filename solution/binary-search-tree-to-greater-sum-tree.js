/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */

/*
  中序遍历 => 右 - 根 - 左，每次更新节点值为累加和
*/
var bstToGst = function (root) {
  let sum = 0;

  function bst(node) {
    if (!node) return;
    bst(node.right);
    sum += node.val;
    node.val = sum;
    bst(node.left);
  }

  bst(root);
  return root;
};