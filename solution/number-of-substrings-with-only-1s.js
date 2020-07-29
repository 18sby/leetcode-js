/**
 * @param {string} s
 * @return {number}
 */

/*
  找规律 + 构建规律表 + 遍历求每一段连续的 1 的子串数 + 求子串数总和
*/
var numSub = function (s) {
  let count = 0,
    linkone = 0,
    linkMap = {},
    maxLink = 0,
    mod = 1e9 + 7;
  s += '0'; // 特殊处理，最后一段 1
  for (let i = 0, len = s.length; i < len; i++) {
    if (s[i] == 1) {
      linkone++;
    } else {
      linkMap[linkone] === undefined
        ? linkMap[linkone] = 1
        : linkMap[linkone] += 1;
      maxLink = Math.max(maxLink, linkone);
      linkone = 0;
    }
  }

  let map = {}, i = 2;
  map[0] = 0; map[1] = 1;
  while (i <= maxLink) {
    map[i] = map[i - 1] + i;
    i++;
  }

  let keys = Object.keys(linkMap);
  keys.forEach(key => {
    count += (linkMap[key] * map[key]) % mod;
  })

  return count;
};