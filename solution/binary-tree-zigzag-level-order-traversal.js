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
  BFS 层层遍历，每隔一层，返回的层结果逆序就可以了
*/
var zigzagLevelOrder = function (root) {
  if (!root) return [];
  let ans = [], queue = [root], positive = true;

  while (queue.length > 0) {
    let size = queue.length, temp = [];
    while (size > 0) {
      size--;
      let offer = queue.shift();

      if (positive) {
        temp.push(offer.val);
      } else {
        temp.unshift(offer.val);
      }
      if (offer && offer.left) queue.push(offer.left);
      if (offer && offer.right) queue.push(offer.right);
    }

    ans.push([...temp]);
    positive = positive ? false : true;
  }

  return ans;
};