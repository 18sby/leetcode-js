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
var maxDepth = function (root) {
  if (!root) return 0;

  let maxDeep = 0;
  var recurtion = function (tree, deep) {
    if (tree.val === null) return;
    deep = deep + 1;
    maxDeep = Math.max(maxDeep, deep);
    if (tree.left) {
      recurtion(tree.left, deep);
    }
    if (tree.right) {
      recurtion(tree.right, deep);
    }
  }

  recurtion(root, 0);
  return maxDeep;
};