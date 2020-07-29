class TrieNode {
  constructor() {
    this.isEnd = false;
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
    if (i === arr.length - 1) {
      currNode.isEnd = true;
    }
  }
};
Trie.prototype.search = function (word) {
  let currNode = this.root;
  let arr = word.split('');
  for (let i = 0, len = arr.length; i < len; i++) {
    if (!currNode.children[arr[i]]) return false;
    currNode = currNode.children[arr[i]];
    if (i === arr.length - 1 && currNode.isEnd === true) {
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
}