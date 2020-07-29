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
  1. 中序遍历二叉树：左 - 右 - 中
  2. 把每一个节点的值更改为它以及它的所有字数的节点值的和
  3. 先序遍历二叉树，尝试断裂每一条键，去计算乘积然后对比，可能需要 BigInt 类型
*/
var maxProduct = function (root) {
  function bst(node) {
    if (!node) return;
    bst(node.left);
    bst(node.right);
    let curr = node.val;
    if (node.left && node.left.val) curr += node.left.val;
    if (node.right && node.right.val) curr += node.right.val;
    node.val = curr;
  }

  let ans = 0, sum = 0;
  bst(root);
  if (root) sum = root.val;

  // 先序遍历二叉树，断裂每一个键求乘积对比
  function bstFirst(node) {
    if (!node) return;
    let left = node.left && node.left.val ? node.left.val : 0;
    let right = node.right && node.right.val ? node.right.val : 0;
    if (left !== 0) ans = Math.max((sum - left) * left, ans);
    if (right !== 0) ans = Math.max((sum - right) * right, ans);
    bstFirst(node.left);
    bstFirst(node.right);
  }

  bstFirst(root);

  return ans % (1e9 + 7);
};