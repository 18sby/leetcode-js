/**
 * @param {string} croakOfFrogs
 * @return {number}
 */
/*
  用字典计数，凑齐一次 ‘croak’ 就消消乐，没凑齐的时候看看有几个 ‘c' 同时存在就是需要几只青蛙🐸
*/
var minNumberOfFrogs = function (croakOfFrogs) {
  let map = { 'c': 0, 'r': 0, 'o': 0, 'a': 0, 'k': 0 },
    len = croakOfFrogs.length,
    count = 1;

  for (let i = 0; i < len; i++) {
    map[croakOfFrogs.charAt(i)] += 1;
  }

  let nums = Object.values(map);
  let isOk = nums.every((item, index) => {
    if (index === 0) return true;
    return item === nums[index - 1];
  });
  if (!isOk) return -1;

  map = { 'c': 0, 'r': 0, 'o': 0, 'a': 0, 'k': 0 };
  for (let i = 0; i < len; i++) {
    map[croakOfFrogs.charAt(i)] += 1;
    if (
      !(map['c'] >= map['r'] &&
        map['r'] >= map['o'] &&
        map['o'] >= map['a'] &&
        map['a'] >= map['k'])
    ) return -1;

    count = Math.max(map['c'], count);

    if (map['c'] > 0 && map['r'] > 0 && map['o'] > 0 && map['a'] > 0 && map['k'] > 0) {
      for (let key of 'croak') map[key] -= 1;
    }
  }

  return count;
};