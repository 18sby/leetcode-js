/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

// 参考作者：user3026
var exist = function (board, word) {
  // 越界处理
  board[-1] = [];
  board.push([]);

  // 回溯
  var backtrack = function (y, x, len) {
    // 终止条件
    if (len + 1 === word.length) return true;

    // 存储当前值
    let temp = board[y][x];
    board[y][x] = false;

    if (board[y - 1][x] === word[len + 1] && backtrack(y - 1, x, len + 1)) return true;
    if (board[y][x + 1] === word[len + 1] && backtrack(y, x + 1, len + 1)) return true;
    if (board[y + 1][x] === word[len + 1] && backtrack(y + 1, x, len + 1)) return true;
    if (board[y][x - 1] === word[len + 1] && backtrack(y, x - 1, len + 1)) return true;

    board[y][x] = temp;
  }

  // 循环
  for (let y = 0; y < board.length; y++) {
    for (let x = 0; x < board[0].length; x++) {
      if (board[y][x] === word[0] && backtrack(y, x, 0)) return true;
    }
  }

  return false;
};

/*
  自己的思想又超出时间限制 !!!
         (y-1, x)
(y, x-1) (y, x)   (y, x+1)
         (y+1, x)
*/
// var exist = function(board, word) {
//   let col = board.length,
//       row = board[0].length,
//       wordLen = word.length,
//       result = false;
//   if( row === 1 && col === 1 ) return board[0][0] === word;
//   if (row * col < wordLen) return false;

//   var findResult = function(x, y, selected, len) {
//     if (len === wordLen) {
//       result = true;
//     };

//     // 判断可选的值是否满足 word[len]的字符串
//     if ( !selected[ [x-1, y] ] && ( (x - 1) >= 0 ) && board[x-1][y] === word[len] ) {
//       let temp = JSON.parse( JSON.stringify( selected ) );
//       temp[ [x-1, y] ] = true;
//       findResult( x-1, y, temp, len+1 );
//     }
//     if ( !selected[ [x, y+1] ] && ( (y + 1) < row ) && board[x][y+1] === word[len] ) {
//       let temp = JSON.parse( JSON.stringify( selected ) );
//       temp[ [x, y+1] ] = true;
//       findResult( x, y+1, temp, len+1 );
//     }
//     if ( !selected[ [x+1, y] ] && ( (x + 1) < col ) && board[x+1][y] === word[len] ) {
//       let temp = JSON.parse( JSON.stringify( selected ) );
//       temp[ [x+1, y] ] = true;
//       findResult( x+1, y, temp, len+1 );
//     }
//     if ( !selected[ [x, y-1] ] && ( (y - 1) >= 0 ) && board[x][y-1] === word[len] ) {
//       let temp = JSON.parse( JSON.stringify( selected ) );
//       temp[ [x, y-1] ] = true;
//       findResult( x, y-1, temp, len+1 );
//     }
//   }

//   for (let i = 0; i < col; i++) {
//     for (let j = 0; j < row; j++) {
//       if (result) {
//         return result;
//       }
//       if (board[i][j] === word[0]) {
//         let choose = {};
//         choose[ [i,j] ] = true;
//         findResult( i, j, choose, 1 );
//       }
//     }
//   }

//   return result;

// };