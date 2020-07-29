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
  1. 中序遍历二叉树的所有节点，求每个节点的左右子树连续起来的路径值，比较当前的 ans
  2. 对每个节点递归：从节点往两侧延伸，寻找同值路径的最大长度
*/
var longestUnivaluePath = function (root) {
  // 遍历二叉树
  function bst(node) {
    if (node === null) return;
    bst(node.left);
    ans = Math.max(
      ans,
      findRoad(node.left, node.val) + findRoad(node.right, node.val)
    );
    bst(node.right);
  }

  // 返回当前节点的最大同值子树的路径数
  function findRoad(node, val) {
    if (node === null || node.val !== val) return 0;

    let left = findRoad(node.left, val) + 1,
      right = findRoad(node.right, val) + 1;

    return Math.max(left, right);
  }

  let ans = 0;
  bst(root);

  return ans;
};