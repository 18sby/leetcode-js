/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/*
  每次根据前序遍历的根节点分割中序遍历的左右子树，递归即可
*/
var buildTree = function (preorder, inorder) {
  if (inorder.length === 0) return null;

  let index = inorder.indexOf(preorder[0]);
  let root = new TreeNode(preorder.shift());
  root.left = buildTree(preorder, inorder.slice(0, index));
  root.right = buildTree(preorder, inorder.slice(index + 1));

  return root;
};