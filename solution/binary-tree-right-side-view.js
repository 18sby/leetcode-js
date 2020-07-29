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
  BFS 层层遍历，每次加入最右侧节点的值
*/
var rightSideView = function (root) {
  if (!root) return [];
  let queue = [root], ans = [];

  while (queue.length > 0) {
    let size = queue.length;

    while (size > 0) {
      size--;
      let offer = queue.shift();

      if (size === 0 && offer) {
        ans.push(offer.val);
      }

      if (offer && offer.left) queue.push(offer.left);
      if (offer && offer.right) queue.push(offer.right);
    }
  }

  return ans;
};