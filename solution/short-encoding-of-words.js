/**
 * @param {string[]} words
 * @return {number}
 */

/*
  对每一个单词倒着构建字典树，返回所有叶子节点单词长度的和，因为不是叶子节点的单词一定被包含
  在其他单词中，所以不需要计算
*/
var minimumLengthEncoding = function (words) {
  function TreeNode(val) {
    this.isEnd = false;
    this.children = {};
    this.val = val;
  }

  class Trie {
    constructor() {
      this.tree = new TreeNode(null);
      this.hasSearch = {};
    }

    // 单词倒序插入字典树，因为小的单词如果被包含在其他长的单词中，那一定是后缀相同
    insert(word) {
      let tree = this.tree;
      let n = word.length, index = n - 1;
      while (index >= 0) {
        let curr = word.charAt(index);
        if (tree.children[curr] === undefined) {
          tree.children[curr] = new TreeNode(curr);
        }

        tree = tree.children[curr];

        index--;
      }

      tree.isEnd = true;
      this.hasSearch[word] = true;
    }

    // 查找单词是否存在于字典树中
    search(word) {
      if (this.hasSearch[word] !== undefined) {
        return this.hasSearch[word];
      }

      let tree = this.tree;
      let n = word.length, index = n - 1, flag = true;
      while (index >= 0) {
        let curr = word.charAt(index);
        if (tree.children[curr] === undefined) {
          flag = false;
          break;
        }

        tree = tree.children[curr];
        index--;
      }

      if (this.hasSearch[word] === undefined) {
        this.hasSearch[word] = flag;
      }
      return flag;
    }
  }

  // words = [...new Set(words)];
  words.sort((a, b) => b.length - a.length);

  let wordTree = new Trie(), long = 0;
  for (let i = 0; i < words.length; i++) {
    let c = words[i];
    if (!wordTree.search(c)) {
      wordTree.insert(c);
      long += (c.length + 1); // 1 代表加个 '#' 的长度
    }
  }

  return long;
};