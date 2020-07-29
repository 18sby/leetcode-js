/**
 * @param {character[][]} board
 * @return {boolean}
 */

// 参考作者：官方题解
// 思路：遍历一次，使用map结构( 或者数组 )存储，如果哪一次的遍历过程中，某一个数重复出现了，那么返回false
var isValidSudoku = function (board) {
  let row = [], column = [], block = [], cur = null;
  for (let i = 0; i < 9; i++) {
    row[i] = new Map();
    column[i] = new Map();
    block[i] = new Map();
  }

  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      cur = board[i][j];
      if (cur !== '.') {
        let blockIdx = Math.floor(i / 3) * 3 + Math.floor(j / 3);
        if (row[i].get(cur) || column[j].get(cur) || block[blockIdx].get(cur)) return false;
        if (!row[i].get(cur)) row[i].set(cur, true);
        if (!column[j].get(cur)) column[j].set(cur, true);
        if (!block[blockIdx].get(cur)) block[blockIdx].set(cur, true);

      }
    }
  }
  return true;
}

// 思路：( 自己写的太慢了 击败30%。。。 )
//   1.先写一个检测一组数(9个)是否合格的函数
//   2.9行 9列 9个九宫格去检测
//   难点：拆分为9个9宫格
var isValidSudoku = function (board) {
  let row = JSON.parse(JSON.stringify(board));

  let column = [], block = [], k = 0;
  while (k < 9) {
    block[k] = [];
    k++;
  }

  for (let i = 0; i < 9; i++) {
    column[i] = [];
    for (let j = 0; j < row.length; j++) {
      column[i].push(row[j][i]);
      // 放入每一个九宫格
      block[Math.floor(i / 3) * 3 + Math.floor(j / 3)].push(row[j][i]);
    }
  }

  let validatorArr = [...board, ...column, ...block];
  for (let i = 0; i < validatorArr.length; i++) {
    if (!validator(validatorArr[i])) return false;
  };
  return true;
};

var validator = function (ary) {
  let group = new Map();
  for (let i = 0; i < ary.length; i++) {
    let cur = ary[i];
    if (cur !== '.') {
      if (!group.get(cur)) group.set(cur, true);
      else return false;
    }
  }
  return true;
}