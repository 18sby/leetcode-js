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
  参考官方题解
  后序遍历二叉树，给每个节点 + 一个额外的属性存储当前节点的子树下是否存在 p 和 q
  
  每个节点增加的额外属性：this.target = { p: null, q: null }
  
  - 某个节点的子节点的 p 为 true，那么它的父节点的 p 为true，q 同理
  - 只要遇到第一个节点，它的 target 中的 p 和 q 都为 true ，那么即为最近公共祖先
*/
var lowestCommonAncestor = function (root, p, q) {
  function bst(node) {
    if (!node) return;

    bst(node.left);
    bst(node.right);

    if (node.target === undefined) node.target = { p: null, q: null };

    if (node.val === p.val ||
      (node.left && node.left.target && node.left.target.p) ||
      (node.right && node.right.target && node.right.target.p)) {
      node.target.p = true;
    }

    if (node.val === q.val ||
      (node.left && node.left.target && node.left.target.q) ||
      (node.right && node.right.target && node.right.target.q)) {
      node.target.q = true;
    }

    if (node.target.p === true && node.target.q === true) {
      if (ans === null) ans = node;
      return;
    }

  }

  let ans = null;
  bst(root);

  return ans;
};