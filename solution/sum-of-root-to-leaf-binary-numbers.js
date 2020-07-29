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
  从根节点开始，BFS，层层遍历，一旦遇到没有左右子节点都为 null 的时候
  计算该路径的二进制的值
*/
var sumRootToLeaf = function (root) {
  let sum = 0, DIVISOR = Math.pow(10, 9) + 7, queue = [];

  queue.push(['0', root]);
  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      let offer = queue.shift();

      if (offer[1] !== null && offer[1].left !== null) {
        queue.push([offer[0] + offer[1].val, offer[1].left]);
      }

      if (offer[1] !== null && offer[1].right !== null) {
        queue.push([offer[0] + offer[1].val, offer[1].right]);
      }

      if (offer[1].left === null && offer[1].right === null) {
        sum += parseInt(offer[0] + offer[1].val, 2);
      }

      size--;
    }
  }

  return sum % DIVISOR;
};