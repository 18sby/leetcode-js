/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */

/*
  后序遍历，每个节点的指针指向上一个节点
*/
var flatten = function (root) {
  function bst(node) {
    if (!node) return;
    bst(node.right);
    bst(node.left);

    let temp = node.right;
    node.right = node.left;
    node.left = null;
    while (node.right) {
      node = node.right;
    }
    node.right = temp;
  }

  bst(root);
};