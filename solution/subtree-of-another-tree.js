/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function (s, t) {
  if (s === null && t === null) return true;
  if (s === null || t === null) return false;
  if (s.val === t.val) {
    return isEqual(s, t) || isSubtree(s.left, t) || isSubtree(s.right, t);
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t);
};

function isEqual(a, b) {
  if (a === null && b === null) return true;
  if (a === null || b === null) return false;
  if (a.val !== b.val) return false;
  return isEqual(a.left, b.left) && isEqual(a.right, b.right);
}