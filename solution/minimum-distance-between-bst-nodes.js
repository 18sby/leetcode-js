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
  中序遍历二叉搜索树，不断比较两个相邻节点的差，更新最小差
  需要的额外变量：
  - 上一个按照遍历顺序的相邻节点值
*/
var minDiffInBST = function (root) {
  function recursion(node) {
    if (node === null) return;
    recursion(node.left);
    if (last !== null) {
      ans = Math.min(ans, Math.abs(node.val - last));
    }
    last = node.val;
    recursion(node.right);
  }

  let last = null, ans = Infinity;
  recursion(root);

  return ans;
};