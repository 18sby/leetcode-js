/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let maxCount = 0, len = flowerbed.length;

  if (len === 1 && flowerbed[0] === 0) maxCount++;
  for (let i = 0; i < len; i++) {
    if (flowerbed[i] === 1) continue;
    if (i !== 0 && i !== len - 1 && flowerbed[i - 1] === 0 && flowerbed[i + 1] === 0) {
      maxCount++;
      flowerbed[i] = 1;
      continue;
    }
    if (
      (i === 0 && flowerbed[i + 1] === 0) ||
      (i === len - 1 && flowerbed[i - 1] === 0)
    ) {
      maxCount++;
      flowerbed[i] = 1;
    }
  }

  return n <= maxCount;
};