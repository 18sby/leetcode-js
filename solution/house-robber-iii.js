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
  树的动态规划，爷爷偷了，儿子就不能偷。。。
  node[5, 10]
  node[0]：当前点没有偷的最大值
  node[1]：当前点偷了的最大值
*/
var rob = function (root) {
  function bst(node) {
    let curr = [0, 0];
    if (!node) return curr;

    let left = bst(node.left),
      right = bst(node.right);

    // 当前点没有偷的最大值 = 左节点偷或不偷的最大值 + 右节点偷或不偷的最大值
    curr[0] = Math.max(...left) + Math.max(...right);

    // 当前点偷了的最大值 = 它的左右节点没有偷的最大值加上当前点的值
    curr[1] = node.val + left[0] + right[0];

    return curr;
  }

  let ans = bst(root);
  return Math.max(ans[0], ans[1]);
};