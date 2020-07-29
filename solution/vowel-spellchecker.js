/**
 * @param {string[]} wordlist
 * @param {string[]} queries
 * @return {string[]}
 */

/*
  再一种思路 通过了 956ms 46.2MB 时间超过 16% 。。  空间超过 100% ！！
*/
var spellchecker = function (wordlist, queries) {
  // 1.最多遍历3轮 使用 map 存储哪个位置找到结果了
  let ans = [],
    low = 'abcdefghijklmnopqrstuvwxyz',
    total = {
      'a': "A",
      'b': "B",
      'c': "C",
      'd': "D",
      'e': "E",
      'f': "F",
      'g': "G",
      'h': "H",
      'i': "I",
      'j': "J",
      'k': "K",
      'l': "L",
      'm': "M",
      'n': "N",
      'o': "O",
      'p': "P",
      'q': "Q",
      'r': "R",
      's': "S",
      't': "T",
      'u': "U",
      'v': "V",
      'w': "W",
      'x': "X",
      'y': "Y",
      'z': "Z"
    },
    vowel = 'aeiouAEIOU',
    word2 = [], // 忽略大小写
    word3 = []; // 忽略元音

  for (let i = 0, len = wordlist.length; i < len; i++) {
    let word = wordlist[i];
    let w2 = '', w3 = '';

    for (let j = 0, l = word.length; j < l; j++) {
      let curr = word[j];
      w2 += low.indexOf(curr) === -1 ? curr : total[curr];
      w3 += vowel.indexOf(w2[j]) === -1 ? w2[j] : '*';
    }

    word2.push(w2);
    word3.push(w3);
  }

  for (let i = 0, len = queries.length; i < len; i++) {
    let query = queries[i];

    let index = wordlist.indexOf(query);
    if (index !== -1) {
      ans[i] = wordlist[index];
      continue;
    }

    let trans2 = '', trans3 = '';

    for (let j = 0, l = query.length; j < l; j++) {
      let curr = query[j];
      trans2 += low.indexOf(curr) === -1 ? curr : total[curr];
      trans3 += vowel.indexOf(trans2[j]) === -1 ? trans2[j] : '*';
    }

    let index2 = word2.indexOf(trans2);
    if (index2 !== -1) {
      ans[i] = wordlist[index2];
      continue;
    }

    let index3 = word3.indexOf(trans3);
    if (index3 !== -1) {
      ans[i] = wordlist[index3];
      continue;
    }

    ans[i] = '';
  }

  return ans;
};

/*
  再一种思路 超出时间限制
*/
// var spellchecker = function(wordlist, queries) {
//   // 1.最多遍历3轮 使用 map 存储哪个位置找到结果了
//   let ans = [],
//       m1 = new Map(),
//       m2 = new Map(),
//       m3 = new Map(),
//       low = 'abcdefghijklmnopqrstuvwxyz',
//       total = {
//         'a': "A",
//         'b': "B",
//         'c': "C",
//         'd': "D",
//         'e': "E",
//         'f': "F",
//         'g': "G",
//         'h': "H",
//         'i': "I",
//         'j': "J",
//         'k': "K",
//         'l': "L",
//         'm': "M",
//         'n': "N",
//         'o': "O",
//         'p': "P",
//         'q': "Q",
//         'r': "R",
//         's': "S",
//         't': "T",
//         'u': "U",
//         'v': "V",
//         'w': "W",
//         'x': "X",
//         'y': "Y",
//         'z': "Z"
//       },
//       vowel = 'aeiouAEIOU',
//       word2 = [], // 忽略大小写
//       word3 = []; // 忽略元音

//   for (let i = 0, len = wordlist.length; i < len; i++) {
//     let word = wordlist[i];
//     let w2 = '', w3 = '';

//     for (let j = 0, l = word.length; j < l; j++) {
//       let curr = word[j];
//       w2 += low.indexOf( curr ) === -1 ? curr : total[ curr ];
//       w3 += vowel.indexOf( w2[j] ) === -1 ? w2[j] : '*';
//     }

//     word2.push( w2 );
//     word3.push( w3 );
//   }

//   // 查找全等
//   for (let i = 0, len = queries.length; i < len; i++) {
//     let query = queries[i];

//     for (let j = 0, len = wordlist.length; j < len; j++) {
//       let word = wordlist[j];
//       if (query === word) {
//         m1.set( i, 1 );
//         ans[i] = word;
//         break;
//       }
//     }
//   }

//   // 查找忽略大小写
//   for (let i = 0, len = queries.length; i < len; i++) {
//     if (m1.has( i )) continue;
//     let query = queries[i];

//     for (let j = 0, len = word2.length; j < len; j++) {
//       let word = word2[j], trans = '';
//       for (let k = 0, l = query.length; k < l; k++) {
//         let curr = query[k];
//         trans += low.indexOf( curr ) === -1 ? curr : total[ curr ];
//       }

//       if (trans === word) {
//         m2.set( i, 1 );
//         ans[i] = wordlist[j];
//         break;
//       }
//     }
//   }

//   // 查找忽略元音
//   for (let i = 0, len = queries.length; i < len; i++) {
//     let query = queries[i];
//     if (m1.has( i ) || m2.has( i )) continue;

//     for (let j = 0, len = word3.length; j < len; j++) {
//       let word = word3[j], temp = '', trans = '';
//       for (let k = 0, l = query.length; k < l; k++) {
//         let curr = query[k];
//         temp += low.indexOf( curr ) === -1 ? curr : total[ curr ];
//         trans += vowel.indexOf( temp[k] ) === -1 ? temp[k] : '*';
//       }

//       if (trans === word) {
//         m3.set( i, 1 );
//         ans[i] = wordlist[j];
//         break;
//       }
//     }

//     if (!m3.has( i )) ans[i] = '';
//   }

//   return ans;
// };


/*
  优化下面的方法 （第52个超时）
*/
// var spellchecker = function(wordlist, queries) {
//   // 1.最多遍历3轮 使用 map 存储哪个位置找到结果了
//   let m1 = new Map(), // 全等于
//       m2 = new Map(), // 忽略大小写
//       m3 = new Map(), // 忽略元音
//       ans = [];

//   let isSameIgVowel = function(a, b) {
//     let isSame = true;

//     for (let i = 0, len = a.length; i < len; i++) {
//       if (a[i] === b[i] || ( 'AEIOU'.indexOf(a[i]) !== -1 && 'AEIOU'.indexOf(b[i]) !== -1 ) ) {
//         continue;
//       }

//       isSame = false;
//       break;
//     }

//     return isSame;
//   }

//   // 第一轮：查找全等于
//   for (let i = 0, len = queries.length; i < len; i++) {
//     let query = queries[i];

//     let index = wordlist.indexOf( query );
//     if (index !== -1) {
//       ans[i] = wordlist[index];
//     }
//     else {
//       for (let j = 0, wlen = wordlist.length; j < wlen; j++) {
//         let word = wordlist[j];

//         let queryup = query.toUpperCase(),
//             wordup = word.toUpperCase();

//         if (queryup === wordup) {
//           m2.set( i, 1 );
//           ans[i] = word;
//           break;
//         }

//         if (m3.has( i )) continue;

//         if (isSameIgVowel( queryup, wordup )) {
//           m3.set( i, 1 );
//           ans[i] = word;
//           continue;
//         }
//       }
//     }
//   }

//   return ans;
// };

/*
  另一种思路：依然超时（第47个超时）
*/
// var spellchecker = function(wordlist, queries) {
//   // 1.最多遍历3轮 使用 map 存储哪个位置找到结果了
//   let map = new Map(),
//       ans = new Array( queries.length ),
//       vowelReg = /[AEIOU]/g;
//   ans.fill( '' );

//   // 第一轮：查找全等于
//   for (let i = 0, len = wordlist.length; i < len; i++) {
//     let word = wordlist[i];
//     for (let j = 0, len = queries.length; j < len; j++) {
//       let query = queries[j];
//       if (!map.has( j ) && query === word) {
//         map.set( j, 1 );
//         ans[j] = word;
//       }
//     }
//   }

//   // 第二轮：查找忽略大小写
//   for (let i = 0, len = wordlist.length; i < len; i++) {
//     let word = wordlist[i];
//     for (let j = 0, len = queries.length; j < len; j++) {
//       let query = queries[j];
//       if (!map.has( j ) && query.toUpperCase() === word.toUpperCase()) {
//         map.set( j, 1 );
//         ans[j] = word;
//       }
//     }
//   }

//   let isSameIgVowel = function(upperA, upperB) {
//     upperA = upperA.replace( vowelReg, 'A' );
//     upperB = upperB.replace( vowelReg, 'A' );
//     return upperA === upperB;
//   }

//   // 第三轮：查找忽略元音
//   for (let i = 0, len = wordlist.length; i < len; i++) {
//     let word = wordlist[i];
//     for (let j = 0, len = queries.length; j < len; j++) {
//       let query = queries[j];
//       if (!map.has( j ) && isSameIgVowel(query.toUpperCase(), word.toUpperCase())) {
//         map.set( j, 1 );
//         ans[j] = word;
//       }
//     }
//   }

//   return ans;
// };

/*
  可以，但是超时
*/
// var spellchecker = function(wordlist, queries) {
//   let ans = [],
//       vowelReg = /[AEIOU]/g, // 忽略大小写那就改为大写判断
//       mapEq = new Map(),
//       mapIg = new Map(),
//       mapVowel = new Map();

//   let isSameIgVowel = function(upperA, upperB) {
//     upperA = upperA.replace( vowelReg, 'A' );
//     upperB = upperB.replace( vowelReg, 'A' );
//     return upperA === upperB;
//   }

//   // 先遍历 queries
//   for (let i = 0, len = queries.length; i < len; i++) {
//     // 拿到一个query
//     let query = queries[i];
//     for (let j = 0, len = wordlist.length; j < len; j++) {
//       let word = wordlist[j];

//       if (mapEq.has( i )) {
//         break;
//       }

//       // 1.before 如果 eq === undefiend，再执行
//       if (!mapEq.has( i )) {
//         if (query === word) {
//           mapEq.set( i, word );
//         }
//       }

//       wordUpper = word.toUpperCase();
//       queryUpper = query.toUpperCase();
//       // 2.如果 ignore === ''，再执行
//       if (!mapIg.has( i )) {
//         if (wordUpper === queryUpper) {
//           mapIg.set( i, word );
//         }
//       }

//       // 3.如果 vowel === ''，再执行
//       if (!mapVowel.has( i )) {
//         if (isSameIgVowel( queryUpper, wordUpper )) {
//           mapVowel.set( i, word );
//         }
//       }

//     }
//   }

//   for (let i = 0, len = queries.length; i < len; i++) {
//     if (mapEq.has( i )) {
//       ans.push( mapEq.get( i ) );
//       continue;
//     }

//     if (mapIg.has( i )) {
//       ans.push( mapIg.get( i ) );
//       continue;
//     }

//     if (mapVowel.has( i )) {
//       ans.push( mapVowel.get( i ) );
//       continue;
//     }

//     ans.push( '' );
//   }

//   return ans;
// };