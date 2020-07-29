/**
 * @param {string[][]} favoriteCompanies
 * @return {number[]}
 */

/*
  1. 首先建立一个 map ，存储所有公司出现的索引位置们，例如：{ 'google': [0,1,2,3] }
  2. 针对每一个清单，遍历清单中的所有公司，在 map 中找到它出现的索引位置，求交集是否为空，
     如果为空，那么说明此清单不是其他任何人收藏的公司清单的子集的收藏清单
*/
var peopleIndexes = function (favoriteCompanies) {
  let map = {}, n = favoriteCompanies.length, ans = [];

  for (let i = 0; i < n; i++) {
    let companies = favoriteCompanies[i];
    for (let c of companies) {
      if (map[c] === undefined) map[c] = [];
      map[c].push(i);
    }
  }

  for (let i = 0; i < n; i++) {
    let companies = favoriteCompanies[i];
    let last = null;

    inner: for (let c of companies) {
      let curr = [...map[c]];
      if (curr === undefined) break inner;
      for (let j = 0; j < curr.length; j++) {
        if (curr[j] === i) {
          curr.splice(j, 1);
        }
      }

      if (last === null) {
        last = [...curr];
      } else {
        last = last.filter(item => curr.includes(item));
        if (last.length === 0) break inner;
      }
    }

    if (last === null || last.length === 0) ans.push(i);
  }

  return ans;
};