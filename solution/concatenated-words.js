/**
 * @param {string[]} words
 * @return {string[]}
 */

/*
  前缀树 + DFS
  对所有单词创建前缀树，如果找到他为多个单词组成，那么即为连接词
*/
var findAllConcatenatedWordsInADict = function (words) {
  // 创建前缀树节点的方法
  function TreeNode(val) {
    this.val = val;
    this.isEnd = false;
    this.children = {};
  }
  // 创建前缀树
  class Trie {
    constructor(val) {
      this.root = new TreeNode(val);
    }
    // 插入前缀树的方法
    insert(word) {
      let node = this.root;
      let arr = word.split('');
      for (let i = 0, len = arr.length; i < len; i++) {
        if (node.children[arr[i]] === undefined) {
          node.children[arr[i]] = new TreeNode(arr[i]);
        }
        node = node.children[arr[i]];
      }
      node.isEnd = true;
    }
    // 重点在这：搜索前缀树的方法 - 递归查找
    search(word) {
      // 递归查找，此单词是否为连接词 dfs(几个单词连接, 当前查找的索引, 当前前缀树)
      function dfs(num, index, curr) {
        // 如果已经找到一条路径，确定 word 为连接词，终止所有递归
        if (connect > 1) return;

        // 如果当前节点不存在，终止递归
        if (curr === undefined) return;

        // 如果已经找到了 word 的最后一个字母，而且恰好为一个单词的结束，那么终止递归，
        // 并且更新 connect
        if (curr.isEnd === true && index === len - 1 && num + 1 > 1) {
          return connect = num + 1;
        }
        // 如果当前 curr 为结束点，并且 index !== len - 1，
        // 继续递归以下一个字母为开头的词是否存在，从字典树根节点开始
        if (curr.isEnd === true && index !== len - 1) {
          dfs(num + 1, index + 1, node.children[arr[index + 1]]);
          /*
            注意此处的回溯，即使找到了可能为一种连接词方式的时候，也要继续当前的
            进度继续查找，要搜索所有可能性
          */
          dfs(num, index + 1, curr.children[arr[index + 1]]);
        }
        if (curr.isEnd === false) {
          dfs(num, index + 1, curr.children[arr[index + 1]]);
        }
      }

      let node = this.root,
        arr = word.split(''),
        len = arr.length,
        connect = 0;

      dfs(0, 0, node.children[arr[0]]);

      return connect > 1;
    }
  }

  // 将单词加入到前缀树中
  let wordsTrie = new Trie(null);
  for (let i = 0, wordsLen = words.length; i < wordsLen; i++) {
    wordsTrie.insert(words[i]);
  }

  // 计算有多少连接词
  let ans = [];
  for (let i = 0, wordsLen = words.length; i < wordsLen; i++) {
    if (wordsTrie.search(words[i])) {
      ans.push(words[i]);
    }
  }

  return ans;
};