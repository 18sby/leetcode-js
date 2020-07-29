/**
 * @param {number} n
 * @param {number[]} leftChild
 * @param {number[]} rightChild
 * @return {boolean}
 */

/*
  @x2211 大佬的思想，用 js 实现下
  满足无环连通图，即为树。
  若要满足无环图，遍历过程中不能出现重复结点。
  若要满足连通图，遍历完成后经过的顶点数需为n个
  至于为什么是二叉树不是三叉树四叉树，因为两个子节点数组可以看作一个邻接表，每个结点的邻居数可能为2、1、0，所以，如果它是树，一定是二叉树。
  
  他的题解链接：https://leetcode-cn.com/problems/validate-binary-tree-nodes/solution/ceng-ci-bian-li-yan-du-you-xian-bian-li-man-zu-wu-/
*/
var validateBinaryTreeNodes = function (n, leftChild, rightChild) {
  let count = 0, visited = [], queue = [0];

  while (queue.length !== 0) {
    let offer = queue.shift();
    if (visited[offer] === true) {
      return false;
    }

    visited[offer] = true;
    count++;

    if (leftChild[offer] !== -1) queue.push(leftChild[offer]);
    if (rightChild[offer] !== -1) queue.push(rightChild[offer]);
  }

  return count === n;
};