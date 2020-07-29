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
  递归判断所有的点是否相同，如果树的根节点为 null，那么也是单值二叉树
  注意：
    1. 0 是有效的节点值
    2. 设定初始值为 null，他只可以变化一次
*/
var isUnivalTree = function (root) {
  function isUnivalTree(node) {
    if (ans === true) {
      if (node === null) return;

      if (node.val !== null && onlyVal === null) {
        onlyVal = node.val;
      }
      if (node.val !== null && node.val !== onlyVal) {
        return ans = false;
      }
      isUnivalTree(node.left);
      isUnivalTree(node.right);
    }
  }

  let ans = true, onlyVal = null;
  isUnivalTree(root);

  return ans;
};