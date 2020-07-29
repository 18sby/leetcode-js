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
  两个节点相等，并且A的左节点等于B的右节点的值
  B的左节点等于A的右节点的值
*/
var isSymmetric = function (root) {
  if (root === null) return true;

  function check(left, right) {
    if (left === null && right === null) return true;
    if (left === null || right === null) return false;
    if (left.val !== right.val) return false;
    return check(left.left, right.right) && check(left.right, right.left);
  }

  let ans = true;
  return check(root.left, root.right);
};