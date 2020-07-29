/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
var findLadders = function(beginWord, endWord, wordList) {
  let wordSet = new Set(wordList);
  if (!wordSet.has(endWord)) return [];
  wordSet.delete(beginWord);
  let beginSet = new Set([beginWord]);
  let map = new Map();
  let distance = 0;
  let minDistance = 0;
  while(beginSet.size) {
      if (beginSet.has(endWord)) break;
      let trySet = new Set();
      for (let word of beginSet) {
          let mapSet = new Set();
          for (let i = 0; i < word.length; i++) {
              for (let j = 0; j < 26; j++) {
                  let tryWord = word.slice(0, i) + String.fromCharCode(97 + j) + word.slice(i + 1);
                  if (!minDistance && tryWord === endWord) minDistance = distance + 1;
                  if (wordSet.has(tryWord)) {
                      trySet.add(tryWord);
                      mapSet.add(tryWord);
                  }
              }
          }
          map.set(word, mapSet);
      }
      distance++;
      for (let w of trySet) {
          wordSet.delete(w);
      }
      beginSet = trySet;
  }
  let ans = [];
  let path = [beginWord];
  dfs(beginWord, endWord, ans, path, map, minDistance, 0);
  return ans;
};

function dfs (beginWord, endWord, ans, path, map, minDistance, distance) {
  if (distance > minDistance) return ;
  if (beginWord === endWord) {
      ans.push(path.slice());
  }
  let words = map.get(beginWord)
  if (words) {
      for (let word of words) {
          path.push(word)
          dfs(word, endWord, ans, path, map, minDistance, distance + 1);
          path.pop();
      }
  }
}

/*
超时！应该用图的思想
改变单词中的每一个字母，查看 wordList 中是否有命中的单词，是则 bfs 下去，注意
不要形成环，即：dot - dog - dot
*/
var findLadders = function(beginWord, endWord, wordList) {
  let queue = [[beginWord]], ans = [], map = {};

  // 创建哈希，方便在 O(1) 的时间查找单词是否存在于 wordList 中
  for (let i = 0; i < wordList.length; i++) {
    map[ wordList[i] ] = 1;
  }
  let count = 0;

  while (queue.length > 0) {
    let size = queue.length;
  
    while (size > 0) {
      size--;
      let offer = queue.shift(),
          lastWord = offer[offer.length - 1];
      if (lastWord === endWord) {
        ans.push( [...offer] );
      } else {
        for (let i = 0; i < lastWord.length; i++) {
          let originCode = lastWord.charAt(i).charCodeAt();
          for (let j = 97; j <= 122; j++) {
            if (j === originCode) continue; // 自身就不用尝试了
            let newWord = lastWord.slice(0, i).concat(
              String.fromCharCode(j),
              lastWord.slice(i + 1)
            );
            if (!offer.includes(newWord) && map[newWord]) {
              queue.push( [...offer, newWord] );
            }
          }
        }
      }
    }
  
    if (ans.length > 0) break;
  }

  return ans;
}

/*
超时了！！ 第 19 个用例开始
暴力解法: 回溯，只要当前单词和下一单词字母差只有1，那么可以尝试
剪枝：当前尝试单词和上一次相邻尝试的单词相同
终止条件：商店中可尝试的单词没了，或者当前的单词已经变成了 endWord
  => 商店：剩余可尝试的单词

小优化：可以用额外 map 存储两个单词之差，避免每次都重复计算，两个单词差异是否为 1
       用空间换时间，已经计算过的两个单词之差，就不用重复计算了
*/
var findLadders = function(beginWord, endWord, wordList) {
  let map = new Map(),
      ans = [];

  function isByOneStep(a, b) {
    let key = JSON.stringify( [a,b] );
    if (map.has( key )) return map.get( key ) === 1;
  
    let count = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i)) count++;
    }
  
    map.set( key, count );
    return count === 1;
  }

  function dfs(curr, store) {
    if (curr[curr.length - 1] === endWord) {
      return ans.push( [...curr] );
    }
  
    for (let i = 0; i < store.length; i++) {
      if (!isByOneStep(curr[curr.length - 1], store[i])) continue;
      dfs( curr.concat( store[i] ), store.slice(0, i).concat( store.slice(i + 1) ) );
    }
  }

  dfs([beginWord], wordList);

  // 对 ans 进行处理，如果不为空，那么就留下最短的解法，多个解法并列最短，都留下
  ans.sort((a, b) => a.length - b.length);
  if (ans.length !== 0) {
    let shortLen = ans[0].length;
    let i = 1;
    while (i < ans.length && ans[i].length === shortLen) i++;
    ans = ans.slice(0, i);
  }

  return ans;
};