/**
 * @param {number[]} stones
 * @return {number}
 */

/*
  1. 先倒序排序
  2. 如果石头总数大于等于 2，不断拿出最终的两块最重石头的石头来粉碎，如果剩下了一块石头
     那么把它，插入排序到数组中，继续参与粉碎
*/
var lastStoneWeight = function (stones) {
  stones.sort((a, b) => b - a);

  function insertStone(st, stones) {
    let i = stones.length - 1;
    while (i >= 0 && stones[i] < st) {
      stones[i + 1] = stones[i];
      i--;
    }
    stones[i + 1] = st;
  }

  while (stones.length > 1) {
    let first = stones.shift(),
      second = stones.shift();
    if (first !== second) {
      insertStone(Math.abs(first - second), stones);
    }
  }

  return stones.length === 0 ? 0 : stones[0];
};