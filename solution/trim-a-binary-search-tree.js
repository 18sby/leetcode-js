/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} L
 * @param {number} R
 * @return {TreeNode}
 */
/*
  结合二叉搜索树的特点，节点值大于它的左节点并且小于它的右节点
  那么：
    当节点值 < L ，把它的左子树抛弃掉，继续修剪它的右子树
    当节点值 > R ，把它的右子树抛弃掉，继续修剪它的左子树
    
    否则当前节点值满足 L < node.val < R ，那么它的左右子树都有可能仍然有符合条件
    的节点值，所以要继续修剪左、右子树
*/
var trimBST = function (root, L, R) {
  if (root === null) return root;

  if (root.val < L) return trimBST(root.right, L, R);
  if (root.val > R) return trimBST(root.left, L, R);

  root.left = trimBST(root.left, L, R);
  root.right = trimBST(root.right, L, R);

  return root;
};