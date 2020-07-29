/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */

/*
  1. 层次遍历二叉树，把根节点索引标记为 0，那么把它的左子树的索引当做 -1(0 - 1)，
     右子树的索引当做 1(0 + 1)
  2. 所有节点遍历出来后，同索引的放到一个数组中，因为同索引的为同一列，也就是在
     同一条垂线上
     
  3. 每个数组自定义顺序：层级小在前，层级相等则数值小在前
*/
var verticalTraversal = function (root) {
  if (root === null) return [];

  let map = {}, queue = [[0, root]], deepIndex = 0,
    start = Infinity, end = -Infinity, ans = [], deep = {};

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      size--;
      let offer = queue.shift();
      let [index, node] = offer;
      if (node) {
        if (map[index] === undefined) map[index] = [];
        map[index].push(node.val);
        deep[node.val] = deepIndex;
        start = Math.min(index, start);
        end = Math.max(index, end);
      }

      if (node && node.left) queue.push([index - 1, node.left]);
      if (node && node.right) queue.push([index + 1, node.right]);
    }
    deepIndex++;
  }

  for (let i = start; i <= end; i++) {
    if (map[i] !== undefined) {
      map[i].sort((a, b) => {
        if (deep[a] !== deep[b]) {
          if (deep[a] > deep[b]) return 1;
          return -1;
        } else {
          if (a > b) return 1;
          return -1;
        }
      })
      ans.push(map[i]);
    }
  }

  return ans;
};