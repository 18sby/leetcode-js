/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  function bst(node) {
    if (!node) return;
    arr.push(node.val);
    bst(node.left);
    bst(node.right);
  }
  let arr = [];
  bst(root);
  return arr;
};