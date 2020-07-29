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
  使用额外空间的方法 map 记录
  遍历 root 的所有节点，记录到 map 中，统计众数，返回
*/
var findMode = function (root) {
  function recursion(node) {
    if (node === null) return;

    if (!map.has(node.val)) {
      map.set(node.val, 1);
    } else {
      map.set(node.val, map.get(node.val) + 1);
    }

    recursion(node.left);
    recursion(node.right);
  }

  let map = new Map(), ans = [];
  recursion(root);

  map = [...map];
  map.sort((a, b) => b[1] - a[1]);

  for (let i = 0; i < map.length; i++) {
    if (i === 0 || map[i][1] === map[i - 1][1]) {
      ans.push(map[i][0]);
    } else {
      break;
    }
  }

  return ans;
};