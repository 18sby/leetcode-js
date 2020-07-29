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
  利用队列层次遍历二叉树
*/
var levelOrder = function (root) {
  let queue = [root], ans = [];

  while (queue.length > 0) {
    let size = queue.length;
    let temp = [];

    while (size > 0) {
      size--;
      let offer = queue.shift();
      if (offer) temp.push(offer.val);
      if (offer && offer.left) queue.push(offer.left);
      if (offer && offer.right) queue.push(offer.right);
    }

    if (temp.length !== 0) ans.push([...temp]);
  }

  return ans;
};