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
  递归 + DFS
  本题没有遇到超大数，如果有的话，可以使用字符串加法
  思路：
  1.从根节点出发，遇到当前左右子节点都为空的情况，统计数值，加上，直接返回
  2.递归左右子树
*/
var sumNumbers = function (root) {
  if (root === null) return 0;

  let ans = 0;

  function dfs(curr, node) {
    if (node.left === null && node.right === null) {
      // +(curr + node.val) -> 隐式将括号中的字符串转换为数值
      return ans += +(curr + node.val);
    }

    if (node.left !== null) {
      dfs(curr + node.val, node.left);
    }

    if (node.right !== null) {
      dfs(curr + node.val, node.right);
    }
  };
  dfs('', root);

  return ans;
};