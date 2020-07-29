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
 * @return {number}
 */

/*
  遍历所有节点：
  搜索思路：
    1. 如果当前节点值满足条件，那么累加这个值，继续搜索左右子树
    2. 如果当前节点小于 L，那么只需要搜索它的右子树即可，因为左子树小于当前节点，必然小于 L
    3.如果当前节点大于 R，那么只需要搜索它的左子树即可，因为右子树大于当前节点，必然大于 L
*/
var rangeSumBST = function (root, L, R) {
  let sum = 0;

  function recursion(node) {
    if (node === null) return;

    if (node.val >= L && node.val <= R) {
      sum += node.val;
      recursion(node.left);
      recursion(node.right);
    } else if (node.val < L) {
      recursion(node.right);
    } else if (node.val > R) {
      recursion(node.left);
    }
  }

  recursion(root);

  return sum;
};