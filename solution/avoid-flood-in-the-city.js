/**
 * @param {number[]} rains
 * @return {number[]}
 */

/*
  思路：
  首先，用一个 map 记录已满水的湖泊，如果遇到下雨，就记录在 map 中，
  如果遇到 0，就积累了一次抽干湖泊的机会，可以再将要发生洪水的时候使用，
  如果将要发生洪水了，但是没有抽干的机会，那么就失败了，没有可行解。
*/
var avoidFlood = function (rains) {
  let map = {}, n = rains.length, choice = [], ans = [];

  for (let i = 0; i < n; i++) {
    let curr = rains[i];
    if (curr === 0) {
      choice.push(i);
    } else {
      ans[i] = -1;
      if (map[curr] === undefined) { // 是干湖泊，可以下雨
        map[curr] = i;
      } else { // 需要使用之前积攒的机会抽干湖泊
        if (choice.length === 0) {
          return []; // 没办法了，没有机会清空，发生洪水了
        }
        let finded = false;
        for (let j = 0; j < choice.length; j++) {
          let index = choice[j];
          if (index > map[curr]) {
            ans[index] = curr;
            map[curr] = i;
            choice.splice(j, 1);
            finded = true;
            break;
          }
        }
        if (!finded) return [];
      }
    }
  }
  // 将没有用到机会填上 1 即可，任意 1 <= x <= 10^9 中的数字都行
  for (let i = 0; i < choice.length; i++) {
    ans[choice[i]] = 1;
  }
  return ans;
};