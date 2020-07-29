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
  自底向上：
  思路：
  helper函数中做的事情：
  1.返回当前树节点的高度，如果左子树比较高，那么左子树高度 + 1 为它的高度
    否则，右子树高度 + 1 为它的高度
  2.每次判断当前树节点的左右子树的高度差是否超过 1，如果超过 1，返回 false
*/
var isBalanced = function (root) {
  function helper(node) {
    if (ans === true) {
      if (!node) return 0;
      let left = helper(node.left) + 1,
        right = helper(node.right) + 1;

      if (Math.abs(left - right) > 1) ans = false;

      return Math.max(left, right);
    }
  }

  let ans = true;
  helper(root);

  return ans;
}

/*
  自顶向下：80ms
  思路：
  
  两个递归方法：
  1.递归判断当前树的左右子树的高度差是否小于 1
  2.递归获取当前树的高度
  
  两个递归的终止条件：当前树节点为 null
*/
var isBalanced = function (root) {
  function height(node) {
    if (node === null) return 0;
    return Math.max(height(node.left), height(node.right)) + 1;
  }

  if (root === null) return true;
  return isBalanced(root.left) && isBalanced(root.right) &&
    Math.abs(height(root.left) - height(root.right)) < 2;

  return isBalanced(root);
};