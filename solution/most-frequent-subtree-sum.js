/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

/*
  1. 先「后序遍历」遍历一次树，求所有节点的子树和
  2. 在遍历的过程中记录每个和出现的次数，记录在 map 中
  3. 找到出现次数最多的和，放在 ans 中
*/
var findFrequentTreeSum = function (root) {
  let map = {}, ans = [];

  function calcuSum(node) {
    if (!node) return 0;
    let left = calcuSum(node.left);
    let right = calcuSum(node.right);
    let sum = node.val + left + right;
    node.val = sum;
    if (map[sum] === undefined) {
      map[sum] = 1;
    } else {
      map[sum]++;
    }
    return node.val;
  }
  calcuSum(root);

  let maxCount = 0;
  for (let key in map) {
    let count = map[key];
    if (count === maxCount) {
      ans.push(Number(key));
    }
    if (count > maxCount) {
      maxCount = count;
      ans = [Number(key)];
    }
  }

  return ans;
};