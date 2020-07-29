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

/*
  因为二叉搜索树的特点，每一个节点值都大于它的左节点，
  并且小于它的右节点，所以只需要求相邻节点的最小差
*/
var getMinimumDifference = function (root) {
  function recursion(node) {
    if (node === null) return;
    recursion(node.left);
    if (last !== null) {
      ans = Math.min(ans, node.val - last);
    }
    last = node.val;
    recursion(node.right);
  }

  let ans = Infinity, last = null;

  recursion(root);

  return ans;
};