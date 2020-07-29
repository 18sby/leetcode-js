


const fs = require('fs');
const path = require('path');

const obj1 = require('./gen-md');
const obj2 = require('./gen-md2');
const obj3 = require('./gen-md3');
const obj4 = require('./gen-md4');
const obj5 = require('./gen-md5');
const obj6 = require('./gen-md6');

// |8|[string-to-integer-atoi](https://github.com/18sby/leetcode-js/solution/string-to-integer-atoi.js) | [JavaScript](https://github.com/18sby/leetcode-js/solution/string-to-integer-atoi.js)|中等|
// |9|[palindrome-number](https://github.com/18sby/leetcode-js/solution/palindrome-number.js) | [JavaScript](https://github.com/18sby/leetcode-js/solution/palindrome-number.js)|中等|



let obj = {
  '剑指 Offer 03': {
    name: 'shu-zu-zhong-zhong-fu-de-shu-zi-lcof',
    difficutly: 1
  },
  '剑指 Offer 05': {
    name: 'ti-huan-kong-ge-lcof',
    difficutly: 1
  },
  '剑指 Offer 07': {
    name: 'zhong-jian-er-cha-shu-lcof',
    difficutly: 2
  },
  '剑指 Offer 09': {
    name: 'yong-liang-ge-zhan-shi-xian-dui-lie-lcof',
    difficutly: 1
  },
  '剑指 Offer 11': {
    name: 'xuan-zhuan-shu-zu-de-zui-xiao-shu-zi-lcof',
    difficutly: 1
  },
  '剑指 Offer 12': {
    name: 'ju-zhen-zhong-de-lu-jing-lcof',
    difficutly: 2
  },
  '剑指 Offer 13': {
    name: 'ji-qi-ren-de-yun-dong-fan-wei-lcof',
    difficutly: 2
  },
  '剑指 Offer 15': {
    name: 'er-jin-zhi-zhong-1de-ge-shu-lcof',
    difficutly: 1
  },
  '剑指 Offer 17': {
    name: 'da-yin-cong-1dao-zui-da-de-nwei-shu-lcof',
    difficutly: 1
  },
  '剑指 Offer 18': {
    name: 'shan-chu-lian-biao-de-jie-dian-lcof',
    difficutly: 1
  },
  '剑指 Offer 20': {
    name: 'biao-shi-shu-zhi-de-zi-fu-chuan-lcof',
    difficutly: 2
  },
  '剑指 Offer 21': {
    name: 'diao-zheng-shu-zu-shun-xu-shi-qi-shu-wei-yu-ou-shu-qian-mian-lcof',
    difficutly: 1
  },
  '剑指 Offer 22': {
    name: 'lian-biao-zhong-dao-shu-di-kge-jie-dian-lcof',
    difficutly: 1
  },
  '剑指 Offer 25': {
    name: 'he-bing-liang-ge-pai-xu-de-lian-biao-lcof',
    difficutly: 1
  },
  '剑指 Offer 26': {
    name: 'shu-de-zi-jie-gou-lcof',
    difficutly: 2
  },
  '剑指 Offer 27': {
    name: 'er-cha-shu-de-jing-xiang-lcof',
    difficutly: 1
  },
  '剑指 Offer 28': {
    name: 'dui-cheng-de-er-cha-shu-lcof',
    difficutly: 1
  },
  '剑指 Offer 29': {
    name: 'shun-shi-zhen-da-yin-ju-zhen-lcof',
    difficutly: 1
  },
  '剑指 Offer 31': {
    name: 'zhan-de-ya-ru-dan-chu-xu-lie-lcof',
    difficutly: 2
  },
  '剑指 Offer 34': {
    name: 'er-cha-shu-zhong-he-wei-mou-yi-zhi-de-lu-jing-lcof',
    difficutly: 2
  },
  '剑指 Offer 38': {
    name: 'zi-fu-chuan-de-pai-lie-lcof',
    difficutly: 2
  },
  '剑指 Offer 39': {
    name: 'shu-zu-zhong-chu-xian-ci-shu-chao-guo-yi-ban-de-shu-zi-lcof',
    difficutly: 1
  },
  '剑指 Offer 40': {
    name: 'zui-xiao-de-kge-shu-lcof',
    difficutly: 1
  },
  '剑指 Offer 42': {
    name: 'lian-xu-zi-shu-zu-de-zui-da-he-lcof',
    difficutly: 1
  },
  '剑指 Offer 50': {
    name: 'di-yi-ge-zhi-chu-xian-yi-ci-de-zi-fu-lcof',
    difficutly: 1
  },
  '剑指 Offer 51': {
    name: 'shu-zu-zhong-de-ni-xu-dui-lcof',
    difficutly: 3
  },
  '剑指 Offer 57': {
    name: 'he-wei-sde-liang-ge-shu-zi-lcof',
    difficutly: 1
  },
  '面试题 01.02': {
    name: 'check-permutation-lcci',
    difficutly: 1
  },
  '面试题 01.06': {
    name: 'compress-string-lcci',
    difficutly: 1
  },
  '面试题 01.07': {
    name: 'rotate-matrix-lcci',
    difficutly: 2
  },
  '面试题 01.09': {
    name: 'string-rotation-lcci',
    difficutly: 1
  },
  '面试题 02.01': {
    name: 'remove-duplicate-node-lcci',
    difficutly: 1
  },
  '面试题 02.05': {
    name: 'sum-lists-lcci',
    difficutly: 2
  },
  '面试题 02.06': {
    name: 'palindrome-linked-list-lcci',
    difficutly: 1
  },
  '面试题 03.06': {
    name: 'animal-shelter-lcci',
    difficutly: 1
  },
  '面试题 04.02': {
    name: 'minimum-height-tree-lcci',
    difficutly: 1
  },
  '面试题 04.04': {
    name: 'check-balance-lcci',
    difficutly: 1
  },
  '面试题 04.05': {
    name: 'legal-binary-search-tree-lcci',
    difficutly: 2
  },
  '面试题 04.06': {
    name: 'successor-lcci',
    difficutly: 2
  },
  '面试题 08.01': {
    name: 'three-steps-problem-lcci',
    difficutly: 1
  },
  '面试题 08.04': {
    name: 'power-set-lcci',
    difficutly: 2
  },
  '面试题 08.09': {
    name: 'bracket-lcci',
    difficutly: 2
  },
  '面试题 08.10': {
    name: 'color-fill-lcci',
    difficutly: 1
  },
}

const linkHead = 'https://github.com/18sby/leetcode-js/solution/';
const DIF = { 1: '简单', 2: '中等', 3: '困难' };
function run(arr, str) {
  let keys = Object.keys(arr);
  for (let i = keys.length - 1; i >= 0; i--) {
    let key = keys[i];
    if (arr[key] === undefined) continue;
    let sol = arr[key];
    str += `|${key}|`; // |8|
    str += `[${sol.name}]`; // [string-to-integer-atoi]
    str += `(${linkHead}${sol.name}.js)`; // (https://github.com/18sby/leetcode-js/solution/string-to-integer-atoi.js)
    str += ` | `; // ' | '
    str += `[JavaScript]`;
    str += `(${linkHead}${sol.name}.js)`;
    str += `|${DIF[sol.difficutly]}|\r\n`;
  }
  return str;
}
let str = '| # | Title | Solution | Difficulty |\r\n|---| ----- | -------- | ---------- |\r\n';
let allObj = {
  ...obj,
  ...obj1,
  ...obj2,
  ...obj3,
  ...obj4,
  ...obj5,
  ...obj6,
}
str = run(allObj, str);
fs.writeFileSync(path.resolve(__dirname, 'README.md'), str);