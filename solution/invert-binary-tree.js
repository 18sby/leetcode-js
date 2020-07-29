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
  把左子树反转后给右子树，右子树反转后给左子树，要使用一个临时变量
*/
var invertTree = function (root) {
  function invert(node) {
    if (node === null) return null;

    let temp = node.left;
    node.left = invert(node.right);
    node.right = invert(temp);

    return node;
  }

  invert(root);

  return root;
};