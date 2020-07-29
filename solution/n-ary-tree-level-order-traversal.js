/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[][]}
 */

/*
  基本BFS，把每一层放到单独的数组中
*/
var levelOrder = function (root) {
  let queue = [], ans = [];

  if (root) queue.push(root);
  while (queue.length > 0) {
    let size = queue.length, floor = [];
    while (size > 0) {
      let offer = queue.shift();
      if (offer) {
        floor.push(offer.val);
      }
      if (offer.children) {
        let children = offer.children;
        for (let i = 0, j = children.length; i < j; i++) {
          let child = children[i];
          if (child) {
            queue.push(child);
          }
        }
      }
      size--;
    }
    ans.push(floor);
  }

  return ans;
};