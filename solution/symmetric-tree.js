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
       1               1
    2     2         2     2
  3   4 4   3     3   4 4   3
  
  思路：递归比较两颗树
  - 如果根节点都为 null，那么为镜像对称
  - 如果只有一个根节点为 null，那么不是镜像对称，返回false
  - 递归判断：当前节点的值相等，并且当前两个节点的左右子树互为镜像
    也就是root1 的左子树和 root2的右子树互为镜像，并且 root1 的右子树和 root2 的左子树互为镜像
*/
var isSymmetric = function (root) {
  function isMirror(r1, r2) {
    if (r1 === null && r2 === null) return true;
    if (r1 === null || r2 === null) return false;

    return r1.val === r2.val && isMirror(r1.left, r2.right) && isMirror(r1.right, r2.left);
  }

  return isMirror(root, root);
};