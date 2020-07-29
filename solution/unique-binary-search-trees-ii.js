/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function (n) {

  const buildTreeArr = (arr) => {
    let treeArr = [],
      t = new TreeNode();

    if (!arr.length) {
      return [];
    } else if (arr.length === 1) {
      t.val = arr[0];
      treeArr.push(t);
      return treeArr;
    } else if (arr.length === 2) {
      t.val = arr[1];
      t.left = new TreeNode(arr[0]);
      treeArr.push(t);
      t = new TreeNode(arr[0]);
      t.right = new TreeNode(arr[1]);
      treeArr.push(t);
      return treeArr;
    }

    arr.forEach((val, idx, array) => {
      let leftTreeArr = buildTreeArr(array.slice(0, idx));
      let rightTreeArr = buildTreeArr(array.slice(idx + 1, array.length));

      if (leftTreeArr.length && rightTreeArr.length) {
        leftTreeArr.forEach(leftNode => {
          rightTreeArr.forEach(rightNode => {
            t = new TreeNode(val);
            if (leftNode) t.left = leftNode;
            if (rightNode) t.right = rightNode;
            treeArr.push(t);
          })
        });
      } else if (leftTreeArr.length && !rightTreeArr.length) {
        leftTreeArr.forEach(leftNode => {
          t = new TreeNode(val);
          if (leftNode) t.left = leftNode;
          treeArr.push(t);
        });
      } else if (!leftTreeArr.length && rightTreeArr.length) {
        rightTreeArr.forEach(rightNode => {
          t = new TreeNode(val);
          if (rightNode) t.right = rightNode;
          treeArr.push(t);
        });
      }
    })
    return treeArr;
  }

  let nArr = [];
  for (let i = 1; i <= n; i++) {
    nArr.push(i);
  }
  return buildTreeArr(nArr);
};