/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
  1. 从根节点开始遍历树
  2. 如果节点 pp 和节点 qq 都在右子树上，那么以右孩子为根节点继续 1 的操作
  3. 如果节点 pp 和节点 qq 都在左子树上，那么以左孩子为根节点继续 1 的操作
  4. 如果条件 2 和条件 3 都不成立，这就意味着我们已经找到节 pp 和节点 qq 的 LCA 了
*/
var lowestCommonAncestor = function (root, p, q) {
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);
  }
  if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  }
  return root;
};