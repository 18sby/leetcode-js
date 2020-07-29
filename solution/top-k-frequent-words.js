/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function (words, k) {
  let map = new Map(),
    result = [];

  words.forEach((item) => {
    let num = map.get(item);
    if (num === undefined) {
      map.set(item, 1);
    }
    else {
      map.set(item, num + 1)
    }
  })

  map = Array.from(map);

  map.sort((a, b) => {
    return b[1] - a[1];
  });

  let start = 0, val = null;
  for (let i = 0; i < map.length; i++) {
    if (val === null) {
      val = map[i][1];
    }
    else {
      if (map[i][1] !== val) {
        // 拿出去排序，拿回来拼接
        let section = map.slice(start, i);
        section.sort((a, b) => {
          return a[0] > b[0] ? 1 : -1;
        });
        map.splice(start, i - start, ...section);
        // 初始化 start end val
        start = i;
        val = map[i][1];
      }
    }
  }

  if (start !== null) {
    let section = map.slice(start, map.length);
    section.sort((a, b) => {
      return a[0] > b[0] ? 1 : -1;
    });
    map.splice(start, map.length - start, ...section);
  }

  for (let i = 0; i < k; i++) {
    if (map[i]) {
      result.push(map[i][0]);
    }
  }

  return result;
};