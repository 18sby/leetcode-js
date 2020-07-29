/**
 * @param {character[][]} board
 * @param {string[]} words
 * @return {string[]}
 */

/*
  使用前缀树优化下面的方法
  1.把 words 构建为前缀树
    每个节点：
    val: any 无用
    end: boolean 是否存在以当前为结束的单词
    children: {
      'a': {
        val: any,
        isEnd: boolean,
        children: {...}
      }
    }
  2.一边回溯，一遍查找二维网格是否可以构成当前字符串
  
  优化前缀树：
*/
var findWords = function (board, words) {
  if (board.length === 0) return [];

  /* 创建前缀树 */
  class TrieNode {
    constructor(val) {
      this.val = val;
      this.isEnd = 0;
      this.path = 0;
      this.children = {};
    }
  };
  var Trie = function () {
    this.root = new TrieNode();
  };
  Trie.prototype.insert = function (word) {
    let currNode = this.root;
    let arr = word.split('');
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!currNode.children[arr[i]]) {
        currNode.children[arr[i]] = new TrieNode(arr[i]);
      }
      currNode = currNode.children[arr[i]];
      currNode.path++;
      if (i === arr.length - 1) {
        currNode.isEnd++;
      }
    }
  };
  Trie.prototype.search = function (word) {
    let currNode = this.root;
    let arr = word.split('');
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!currNode.children[arr[i]] || currNode.children[arr[i]].path === 0) return false;
      currNode = currNode.children[arr[i]];
      if (i === arr.length - 1 && currNode.isEnd > 0) {
        currNode.isEnd--;
        this.deletePath(word);
        return true;
      }
    }
    return false;
  };
  Trie.prototype.startsWith = function (word) {
    let currNode = this.root;
    let arr = word.split('');
    for (let i = 0, len = arr.length; i < len; i++) {
      if (!currNode.children[arr[i]]) return false;
      currNode = currNode.children[arr[i]];
    }
    return true;
  };
  Trie.prototype.deletePath = function (word) {
    let currNode = this.root;
    let arr = word.split('');
    for (let i = 0, len = arr.length; i < len; i++) {
      currNode = currNode.children[arr[i]];
      currNode.path--;
    }
  }

  let rowLen = board.length,
    colLen = board[0].length,
    ans = [],
    wordsTrie = new Trie(),
    unExists = new Map();

  // 将 words 中的所有单词添加进前缀树中
  for (let word of words) {
    wordsTrie.insert(word);
  }

  // 回溯 board
  function backtrack(str, row, col) {
    // 递归选择其相邻位置未使用的字母进行回溯
    let c = board[row][col];
    str += c;

    if (str !== '') {
      // unExists 优化每次都去查找前缀树的无前缀单词，空间换时间
      if (unExists.get(str) === false) return;
      if (wordsTrie.startsWith(str) === false) {
        unExists.set(str, false);
        return;
      }

      // 这里比较耗时 - 前缀树中增加 path ，代表是否向下走是否还有单词的路径
      if (wordsTrie.search(str) === true && ans.indexOf(str) === -1) {
        ans.push(str);
      }

      if (board[row][col] === -1) return;
    }

    board[row][col] = -1;

    if (row - 1 >= 0) {
      backtrack(str, row - 1, col);
    }
    if (row + 1 < rowLen) {
      backtrack(str, row + 1, col);
    }
    if (col - 1 >= 0) {
      backtrack(str, row, col - 1);
    }
    if (col + 1 < colLen) {
      backtrack(str, row, col + 1);
    }

    board[row][col] = c;
  };
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      backtrack('', i, j);
    }
  };

  return ans;
};

/*
  堆栈溢出
  直观做法：
  1.直接回溯出 board 中所有可能组成的单词
  2.去重
  3.去和 words 中所有的单词进行比较
  标记：用 -1 标记网格使用过的位置，过后复原
*/
var findWords = function (board, words) {
  if (board.length === 0) return [];

  let boardwords = [],
    rowLen = board.length,
    colLen = board[0].length,
    ans = [];

  // 回溯 board
  function backtrack(str, row, col) {

    if (board[row][col] === -1) return;

    // 递归选择其相邻位置未使用的字母进行回溯
    let c = board[row][col];
    str += c;
    boardwords.push(str);
    board[row][col] = -1;

    if (row - 1 >= 0) {
      backtrack(str, row - 1, col);
    }
    if (row + 1 < rowLen) {
      backtrack(str, row + 1, col);
    }
    if (col - 1 >= 0) {
      backtrack(str, row, col - 1);
    }
    if (col + 1 < colLen) {
      backtrack(str, row, col + 1);
    }

    board[row][col] = c;
  };
  for (let i = 0; i < rowLen; i++) {
    for (let j = 0; j < colLen; j++) {
      backtrack('', i, j);
    }
  }

  for (let i = 0, wlen = words.length; i < wlen; i++) {
    let word = words[i];
    for (let j = 0, blen = boardwords.length; j < blen; j++) {
      if (word === boardwords[j]) {
        ans.push(word);
        break;
      }
    }
  }

  return ans;
};