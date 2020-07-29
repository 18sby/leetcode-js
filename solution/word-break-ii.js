/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */

/*
  内存爆了，累计的解不断地向多个数组中累计
*/
var wordBreak = function (s, wordDict) {
  let map = {},
    n = s.length,
    ans = [''],
    dp = new Array(n + 1);

  for (let i = 0; i < dp.length; i++) dp[i] = [];

  // 初始化所有单词，方便在查询的时候达到 O(1) 的时间复杂度
  for (const word of wordDict) map[word] = 1;

  // 动态规划
  dp[0].push('');
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      let c = s.slice(j, i);
      if (map[c] === undefined) continue;

      if (dp[j].length > 0) {
        for (let curr of dp[j]) {
          if (curr !== '') curr += ' '; // 如果前面是空字符串的话，就不要拼空格了
          dp[i].push(curr + c);
        }
      }
    }
  }

  return dp[n];
};

/*
  DFS 超时！！
*/
var wordBreak = function (s, wordDict) {
  let map = {},
    n = s.length,
    ans = new Set(),
    maxLong = -Infinity;

  // 初始化所有单词，方便在查询的时候达到 O(1) 的时间复杂度
  for (const word of wordDict) {
    map[word] = 1;
    maxLong = Math.max(maxLong, word.legnth);
  }

  function dfs(curr, start, end) {
    if (start === end && start === n) {
      if (curr.replace(/\s+/g, '').length !== n) return;
      ans.add(curr.trim());
      return;
    }

    if (end >= n) return;

    if (end - start + 1 > maxLong) return;

    for (let i = end; i < n; i++) {
      let c = s.slice(start, i + 1);
      if (map[c] === undefined) continue;
      dfs(curr + ' ' + c, end + 1, end + 1);
      dfs(curr, start, end + 1);
    }
  }
  dfs('', 0, 0);

  return [...ans];
};