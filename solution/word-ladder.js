/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */

/*
  双向BFS
*/
var ladderLength = function (beginWord, endWord, wordList) {
  let map = {},
    n = wordList.length,
    posiVisited = { beginWord: 1 },
    negaVisited = { endWord: 1 },
    posiQueue = [beginWord], // 正向BFS
    negaQueue = [endWord], // 逆向BFS
    order = true, // 第一次 BFS 从 beginWord 开始
    step = 1,
    letters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < n; i++) {
    map[wordList[i]] = 1;
  }

  if (map[endWord] === undefined) return 0;

  while (posiQueue.length > 0 || negaQueue.length > 0) {
    let queue = order ? posiQueue : negaQueue;
    let size = queue.length;
    while (size > 0) {
      size--;
      let top = queue.shift();

      for (let i = 0; i < top.length; i++) {
        let pre = top.slice(0, i),
          suff = top.slice(i + 1);
        for (let j = 0; j < letters.length; j++) {
          let word = pre + letters.charAt(j) + suff;
          if (map[word] === undefined) continue;

          if ((order && word === endWord) || (!order && word === beginWord)) return step + 1;

          if (order) {
            if (posiVisited[word] === 1) {
              continue;
            }
            posiVisited[word] = 1;
            if (negaVisited[word] === 1 && posiVisited[word] === 1) {
              return step + 1;
            }
            queue.push(word);
          } else {
            if (negaVisited[word] === 1) {
              continue;
            }
            negaVisited[word] = 1;
            if (negaVisited[word] === 1 && posiVisited[word] === 1) {
              return step + 1;
            }
            queue.push(word);
          }
        }
      }
    }

    if (order) {
      posiQueue = queue;
    } else {
      negaQueue = queue;
    }

    order = !order;
    step += 1;
  }

  return 0;
}

/*
  912ms
  单向 BFS
*/
var ladderLength = function (beginWord, endWord, wordList) {
  let map = {},
    n = wordList.length,
    visited = { beginWord: 1 },
    queue = [],
    step = 1,
    letters = 'abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < n; i++) {
    map[wordList[i]] = 1;
  }

  if (map[endWord] === undefined) return 0;

  queue.push(beginWord);

  while (queue.length > 0) {
    let size = queue.length;
    while (size > 0) {
      size--;
      let top = queue.shift();

      for (let i = 0; i < top.length; i++) {
        let pre = top.slice(0, i),
          suff = top.slice(i + 1);
        for (let j = 0; j < letters.length; j++) {
          let word = pre + letters.charAt(j) + suff;
          if (word === endWord) return step + 1;
          if (map[word] === undefined || visited[word]) continue;
          queue.push(word);
          visited[word] = 1;
        }
      }
    }

    step += 1;
  }

  return 0;
}

/*
  极慢！！
  1.一个 map 存储每个单词的「所有一个字母的异位词」
  2.dfs
*/
var ladderLength = function (beginWord, endWord, wordList) {
  let map = {}, count = Infinity, n = wordList.length;

  // 判断两个单词是否为一个字母的异位词
  const isNear = (a, b) => {
    let num = 0;
    for (let i = 0; i < a.length; i++) {
      if (a.charAt(i) !== b.charAt(i)) num++;
      if (num > 1) break;
    }
    return num === 1;
  }

  const setToMap = (w1, w2) => {
    if (map[w1] === undefined) map[w1] = {};
    if (map[w2] === undefined) map[w2] = {};
    if (map[w1][w2] === undefined) map[w1][w2] = 1;
    if (map[w2][w1] === undefined) map[w2][w1] = 1;
  }

  // 构建 map
  for (let i = 0; i < n; i++) {
    let word1 = wordList[i];
    for (let j = i + 1; j < n; j++) {
      let word2 = wordList[j];
      if (isNear(word1, word2)) {
        setToMap(word1, word2);
      }
    }
  }

  function dfs(steps, curr, store) {
    if (curr === endWord) {
      count = Math.min(count, steps);
      return;
    }

    if (steps >= count) return;

    for (let i = 0; i < store.length; i++) {
      let word = store[i];
      if (!isNear(curr, word)) continue;
      dfs(steps + 1, word, store.slice(0, i).concat(store.slice(i + 1)));
    }
  }
  dfs(1, beginWord, wordList);

  count = count === Infinity ? 0 : count;

  return count;
};