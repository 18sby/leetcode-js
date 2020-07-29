const fs = require('fs');
const path = require('path');

// |8|[string-to-integer-atoi](https://github.com/18sby/leetcode-js/solution/string-to-integer-atoi.js) | [JavaScript](https://github.com/18sby/leetcode-js/solution/string-to-integer-atoi.js)|中等|
// |9|[palindrome-number](https://github.com/18sby/leetcode-js/solution/palindrome-number.js) | [JavaScript](https://github.com/18sby/leetcode-js/solution/palindrome-number.js)|中等|


const linkHead = 'https://github.com/18sby/leetcode-js/solution/';
const DIF = { 1: '简单', 2: '中等', 3: '困难' };

let obj = {
  198: {
    name: 'house-robber',
    difficutly: 1
  },
  191: {
    name: 'number-of-1-bits',
    difficutly: 1
  },
  189: {
    name: 'rotate-array',
    difficutly: 1
  },
  188: {
    name: 'best-time-to-buy-and-sell-stock-iv',
    difficutly: 3
  },
  179: {
    name: 'largest-number',
    difficutly: 2
  },
  174: {
    name: 'dungeon-game',
    difficutly: 3
  },
  172: {
    name: 'factorial-trailing-zeroes',
    difficutly: 1
  },
  171: {
    name: 'excel-sheet-column-number',
    difficutly: 1
  },
  169: {
    name: 'majority-element',
    difficutly: 1
  },
  167: {
    name: 'two-sum-ii-input-array-is-sorted',
    difficutly: 1
  },
  165: {
    name: 'compare-version-numbers',
    difficutly: 2
  },
  162: {
    name: 'find-peak-element',
    difficutly: 2
  },
  160: {
    name: 'intersection-of-two-linked-lists',
    difficutly: 1
  },
  155: {
    name: 'min-stack',
    difficutly: 1
  },
  154: {
    name: 'find-minimum-in-rotated-sorted-array-ii',
    difficutly: 3
  },
  153: {
    name: 'find-minimum-in-rotated-sorted-array',
    difficutly: 2
  },
  152: {
    name: 'maximum-product-subarray',
    difficutly: 2
  },
  151: {
    name: 'reverse-words-in-a-string',
    difficutly: 2
  },
  150: {
    name: 'evaluate-reverse-polish-notation',
    difficutly: 2
  },
  148: {
    name: 'sort-list',
    difficutly: 2
  },
  147: {
    name: 'insertion-sort-list',
    difficutly: 2
  },
  146: {
    name: 'lru-cache',
    difficutly: 2
  },
  144: {
    name: 'binary-tree-preorder-traversal',
    difficutly: 2
  },
  142: {
    name: 'linked-list-cycle-ii',
    difficutly: 2
  },
  141: {
    name: 'linked-list-cycle',
    difficutly: 1
  },
  140: {
    name: 'word-break-ii',
    difficutly: 3
  },
  139: {
    name: 'word-break',
    difficutly: 2
  },
  138: {
    name: 'copy-list-with-random-pointer',
    difficutly: 2
  },
  136: {
    name: 'single-number',
    difficutly: 1
  },
  134: {
    name: 'gas-station',
    difficutly: 2
  },
  131: {
    name: 'palindrome-partitioning',
    difficutly: 2
  },
  130: {
    name: 'surrounded-regions',
    difficutly: 2
  },
  129: {
    name: 'sum-root-to-leaf-numbers',
    difficutly: 2
  },
  128: {
    name: 'longest-consecutive-sequence',
    difficutly: 3
  },
  127: {
    name: 'word-ladder',
    difficutly: 2
  },
  126: {
    name: 'word-ladder-ii',
    difficutly: 3
  },
  125: {
    name: 'valid-palindrome',
    difficutly: 1
  },
  124: {
    name: 'binary-tree-maximum-path-sum',
    difficutly: 3
  },
  123: {
    name: 'best-time-to-buy-and-sell-stock-iii',
    difficutly: 3
  },
  122: {
    name: 'best-time-to-buy-and-sell-stock-ii',
    difficutly: 1
  },
  121: {
    name: 'best-time-to-buy-and-sell-stock',
    difficutly: 1
  },
  120: {
    name: 'triangle',
    difficutly: 2
  },
  118: {
    name: 'pascals-triangle',
    difficutly: 1
  },
  117: {
    name: 'populating-next-right-pointers-in-each-node-ii',
    difficutly: 2
  },
  116: {
    name: 'populating-next-right-pointers-in-each-node',
    difficutly: 2
  },
  115: {
    name: 'distinct-subsequences',
    difficutly: 3
  },
  114: {
    name: 'flatten-binary-tree-to-linked-list',
    difficutly: 2
  },
  113: {
    name: 'path-sum-ii',
    difficutly: 2
  },
  112: {
    name: 'path-sum',
    difficutly: 1
  },
  111: {
    name: 'minimum-depth-of-binary-tree',
    difficutly: 1
  },
  110: {
    name: 'balanced-binary-tree',
    difficutly: 1
  },
  108: {
    name: 'convert-sorted-array-to-binary-search-tree',
    difficutly: 1
  },
  107: {
    name: 'binary-tree-level-order-traversal-ii',
    difficutly: 1
  },
  105: {
    name: 'construct-binary-tree-from-preorder-and-inorder-traversal',
    difficutly: 2
  },
  104: {
    name: 'maximum-depth-of-binary-tree',
    difficutly: 1
  },
  103: {
    name: 'binary-tree-zigzag-level-order-traversal',
    difficutly: 2
  },
  102: {
    name: 'binary-tree-level-order-traversal',
    difficutly: 2
  },
  101: {
    name: 'symmetric-tree',
    difficutly: 1
  },
  100: {
    name: 'same-tree',
    difficutly: 1
  },
  98: {
    name: 'validate-binary-search-tree',
    difficutly: 2
  },
  97: {
    name: 'interleaving-string',
    difficutly: 3
  },
  96: {
    name: 'unique-binary-search-trees',
    difficutly: 2
  },
  95: {
    name: 'unique-binary-search-trees-ii',
    difficutly: 2
  },
  94: {
    name: 'binary-tree-inorder-traversal',
    difficutly: 2
  },
  93: {
    name: 'restore-ip-addresses',
    difficutly: 2
  },
  92: {
    name: 'reverse-linked-list-ii',
    difficutly: 2
  },
  91: {
    name: 'decode-ways',
    difficutly: 2
  },
  90: {
    name: 'subsets-ii',
    difficutly: 2
  },
  89: {
    name: 'gray-code',
    difficutly: 2
  },
  88: {
    name: 'merge-sorted-array',
    difficutly: 1
  },
  86: {
    name: 'partition-list',
    difficutly: 2
  },
  85: {
    name: 'maximal-rectangle',
    difficutly: 3
  },
  84: {
    name: 'largest-rectangle-in-histogram',
    difficutly: 3
  },
  83: {
    name: 'remove-duplicates-from-sorted-list',
    difficutly: 1
  },
  82: {
    name: 'remove-duplicates-from-sorted-list-ii',
    difficutly: 2
  },
  81: {
    name: 'search-in-rotated-sorted-array-ii',
    difficutly: 2
  },
  80: {
    name: 'remove-duplicates-from-sorted-array-ii',
    difficutly: 2
  },
  79: {
    name: 'word-search',
    difficutly: 2
  },
  78: {
    name: 'subsets',
    difficutly: 2
  },
  77: {
    name: 'combinations',
    difficutly: 2
  },
  76: {
    name: 'minimum-window-substring',
    difficutly: 3
  },
  75: {
    name: 'sort-colors',
    difficutly: 2
  },
  74: {
    name: 'search-a-2d-matrix',
    difficutly: 2
  },
  73: {
    name: 'set-matrix-zeroes',
    difficutly: 2
  },
  72: {
    name: 'edit-distance',
    difficutly: 3
  },
  71: {
    name: 'simplify-path',
    difficutly: 2
  },
  70: {
    name: 'climbing-stairs',
    difficutly: 1
  },
  69: {
    name: 'sqrtx',
    difficutly: 1
  },
  67: {
    name: 'add-binary',
    difficutly: 1
  },
  66: {
    name: 'plus-one',
    difficutly: 1
  },
  64: {
    name: 'minimum-path-sum',
    difficutly: 2
  },
  63: {
    name: 'unique-paths-ii',
    difficutly: 2
  },
  62: {
    name: 'unique-paths',
    difficutly: 2
  },
  61: {
    name: 'rotate-list',
    difficutly: 2
  },
  60: {
    name: 'permutation-sequence',
    difficutly: 2
  },
  59: {
    name: 'spiral-matrix-ii',
    difficutly: 2
  },
  58: {
    name: 'length-of-last-word',
    difficutly: 1
  },
  57: {
    name: 'insert-interval',
    difficutly: 3
  },
  56: {
    name: 'merge-intervals',
    difficutly: 2
  },
  55: {
    name: 'jump-game',
    difficutly: 2
  },
  54: {
    name: 'spiral-matrix',
    difficutly: 2
  },
  53: {
    name: 'maximum-subarray',
    difficutly: 1
  },
  52: {
    name: 'n-queens-ii',
    difficutly: 3
  },
  51: {
    name: 'n-queens',
    difficutly: 3
  },
  50: {
    name: 'powx-n',
    difficutly: 2
  },
  49: {
    name: 'group-anagrams',
    difficutly: 2
  },
  48: {
    name: 'rotate-image',
    difficutly: 2
  },
  47: {
    name: 'permutations-ii',
    difficutly: 2
  },
  46: {
    name: 'permutations',
    difficutly: 2
  },
  45: {
    name: 'jump-game-ii',
    difficutly: 3
  },
  44: {
    name: 'wildcard-matching',
    difficutly: 3
  },
  43: {
    name: 'multiply-strings',
    difficutly: 2
  },
  42: {
    name: 'trapping-rain-water',
    difficutly: 3
  },
  41: {
    name: 'first-missing-positive',
    difficutly: 3
  },
  40: {
    name: 'combination-sum-ii',
    difficutly: 2
  },
  39: {
    name: 'combination-sum',
    difficutly: 2
  },
  38: {
    name: 'count-and-say',
    difficutly: 1
  },
  36: {
    name: 'valid-sudoku',
    difficutly: 2
  },
  35: {
    name: 'search-insert-position',
    difficutly: 1
  },
  34: {
    name: 'find-first-and-last-position-of-element-in-sorted-array',
    difficutly: 2
  },
  33: {
    name: 'search-in-rotated-sorted-array',
    difficutly: 2
  },
  32: {
    name: 'longest-valid-parentheses',
    difficutly: 3
  },
  31: {
    name: 'next-permutation',
    difficutly: 2
  },
  30: {
    name: 'substring-with-concatenation-of-all-words',
    difficutly: 3
  },
  29: {
    name: 'divide-two-integers',
    difficutly: 2
  },
  28: {
    name: 'implement-strstr',
    difficutly: 1
  },
  27: {
    name: 'remove-element',
    difficutly: 1
  },
  26: {
    name: 'remove-duplicates-from-sorted-array',
    difficutly: 1
  },
  25: {
    name: 'reverse-nodes-in-k-group',
    difficutly: 3
  },
  24: {
    name: 'swap-nodes-in-pairs',
    difficutly: 2
  },
  23: {
    name: 'merge-k-sorted-lists',
    difficutly: 3
  },
  22: {
    name: 'generate-parentheses',
    difficutly: 2
  },
  21: {
    name: 'merge-two-sorted-lists',
    difficutly: 1
  },
  20: {
    name: 'valid-parentheses',
    difficutly: 1
  },
  19: {
    name: 'remove-nth-node-from-end-of-list',
    difficutly: 2
  },
  18: {
    name: '4sum',
    difficutly: 2
  },
  17: {
    name: 'letter-combinations-of-a-phone-number',
    difficutly: 2
  },
  16: {
    name: '3sum-closest',
    difficutly: 2
  },
  15: {
    name: '3sum',
    difficutly: 2
  },
  14: {
    name: 'longest-common-prefix',
    difficutly: 1
  },
  11: {
    name: 'container-with-most-water',
    difficutly: 2
  },
  10: {
    name: 'regular-expression-matching',
    difficutly: 3
  },
};
// console.log(Object.keys(obj).length);

module.exports = obj;

// function run(arr, str) {
//   for (let i = 1800; i >= 1; i--) {
//     if (arr[i] === undefined) continue;
//     let sol = arr[i];
//     str += `|${i}|`; // |8|
//     str += `[${sol.name}]`; // [string-to-integer-atoi]
//     str += `(${linkHead}${sol.name}.js)`; // (https://github.com/18sby/leetcode-js/solution/string-to-integer-atoi.js)
//     str += ` | `; // ' | '
//     str += `[JavaScript]`;
//     str += `(${linkHead}${sol.name}.js)`;
//     str += `|${DIF[sol.difficutly]}|\r\n`;
//   }
//   return str;
// }
// let str = '| # | Title | Solution | Difficulty |\r\n|---| ----- | -------- | ---------- |\r\n';
// str = run(obj, str);
// fs.writeFileSync(path.resolve(__dirname, 'test.md'), str);