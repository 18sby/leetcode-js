/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

/*
  二叉树的中序遍历：左 - 根 - 右
*/
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) return null;

  let mid = nums.length >> 1;

  const node = new TreeNode(nums[mid]);

  node.left = sortedArrayToBST(nums.slice(0, mid));
  node.right = sortedArrayToBST(nums.slice(mid + 1));

  return node;
};