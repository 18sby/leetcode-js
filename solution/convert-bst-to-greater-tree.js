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
  考点：反向的中序遍历
  中序遍历：左 -> 根 -> 右
  这题我们采用 右 -> 根 -> 左 的顺序，遍历的过程中累加起来即可
  因为二叉搜索树的特点是：右节点值 > 根节点 > 左节点
*/
var convertBST = function (root) {
  function convert(node) {
    if (node === null) return 0;

    convert(node.right);
    sum += node.val;
    node.val = sum;
    convert(node.left);
  }

  let sum = 0;

  convert(root);

  return root;
};