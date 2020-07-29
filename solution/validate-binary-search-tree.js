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
  借用评论区的一句话：中序遍历为升序
*/
var isValidBST = function (root) {
  let ans = true, lastVal = -Infinity;

  function bst(node) {
    if (ans === false) return;
    if (node === null) return;

    bst(node.left);
    if (node.val <= lastVal) return ans = false;
    lastVal = node.val;
    bst(node.right);
  }

  bst(root);

  return ans;
};