/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  let map = {}, n = bound, max = bound, ans = [];

  // 初始化所有数值
  for (let i = 1; i <= bound; i++) {
    map[i] = 0; // 0 代表不符合要求，1 代表满足
  }

  let startX = 1, startY = 1, i = 0, j = 0;
  while (startX <= max) {
    startY = 1;
    while (startY <= max) {
      let product = startX + startY;
      if (map[product] !== undefined) map[product] = 1;

      startY *= y;
      j++;
      if (y === 1) break;
    }
    startX *= x;
    i++;
    if (x === 1) break;
  }

  const keys = Object.keys(map);
  for (let i = 0; i < keys.length; i++) {
    let value = keys[i];
    if (map[value] === 1) ans.push(Number(value));
  }

  return ans;
};