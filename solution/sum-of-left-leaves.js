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
  BFS，层层遍历左子树，直到遇到左叶子，加起来即可
  队列的每一项 [节点, 是否为左节点]
*/
var sumOfLeftLeaves = function (root) {
  let sum = 0, queue = [];

  queue.push([root, false]);

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      let offer = queue.shift();
      if (offer[1] === true && offer[0].left === null && offer[0].right === null) {
        sum += offer[0].val;
      }
      if (offer[0] && offer[0].left) queue.push([offer[0].left, true]);
      if (offer[0] && offer[0].right) queue.push([offer[0].right, false])
      size--;
    }
  }

  return sum;
};