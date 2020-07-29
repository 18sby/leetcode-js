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
  BFS + 队列
  不断地把每一层放到队列中，计算每一层的平均值放到结果数组中
  因为要分层，所以利用一个临时队列 temp ，每次当前层 queue 空了的时候，
  先计算这一层的平均值，然后把 temp 中存储的下一层所有节点放到 queue 中，
  清空 temp。。。一直遍历下去
  
  其实也可以不用 temp 临时队列，我们可以一直向 queue 中 push 节点，需要一个
  记录当前层总数的 count，下一层总数的 nextCount，用一个 time 每次从 0 开始，
  直到 time === count，则当前 sum 中加了一层的节点值，计算当前层的平均值即可，
  然后 sum 重置，count = nextCount(下一层的节点数)，time = 0，
  继续。。。
  
  这样空间上就会优化很多，少用了一个数组
*/
var averageOfLevels = function (root) {

  let queue = [],
    ans = [],
    sum = 0,
    count = 0,
    time = 0,
    nextCount = 0;

  queue.push(root);
  count = 1;

  while (queue.length !== 0) {
    if (time === count && count !== 0) {
      ans.push(sum / time);
      sum = 0; count = nextCount; time = 0; nextCount = 0;
    }

    let curr = queue.shift();
    if (curr) {
      sum += curr.val;
      time++;

      if (curr.left) {
        queue.push(curr.left);
        nextCount++;
      };
      if (curr.right) {
        queue.push(curr.right);
        nextCount++;
      };
    }
  }

  if (time !== 0) {
    ans.push(sum / time);
  }

  return ans;
};

/*
  BFS + 队列
  不断地把每一层放到队列中，计算每一层的平均值放到结果数组中
  因为要分层，所以利用一个临时队列 temp ，每次当前层 queue 空了的时候，
  先计算这一层的平均值，然后把 temp 中存储的下一层所有节点放到 queue 中，
  清空 temp。。。一直遍历下去
*/
var averageOfLevels = function (root) {

  let queue = [],
    temp = [],
    ans = [],
    sum = 0,
    count = 0;

  queue.push(root);

  while (queue.length !== 0 || temp.length !== 0) {
    if (queue.length === 0) {
      ans.push(sum / count);
      sum = 0; count = 0;
      queue = [...temp];
      temp = [];
    }

    let curr = queue.shift();
    if (curr) {
      sum += curr.val;
      count++;

      if (curr.left) temp.push(curr.left);
      if (curr.right) temp.push(curr.right);
    }
  }

  if (sum !== 0 || count !== 0) {
    ans.push(sum / count);
  }

  return ans;
};