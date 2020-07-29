/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} k
 * @return {boolean}
 */

/*
  笨方法：遍历二叉树，放到数组中，进行双指针查找目标值
*/
var findTarget = function (root, k) {
  let arr = [], ans = false;

  function bst(node) {
    if (node === null) return;

    bst(node.left);
    arr.push(node.val);
    bst(node.right);
  }

  bst(root);

  let left = 0, right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === k) {
      ans = true;
      break;
    } else if (sum > k) {
      right--;
    } else {
      left++;
    }
  }

  return ans;
};