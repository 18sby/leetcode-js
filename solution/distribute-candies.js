/**
 * @param {number[]} candies
 * @return {number}
 */

/*
  思路：
  遍历一次，如果糖果种类超过糖果数的一半，那么结果为糖果树的一半
  否则为糖果树
*/
var distributeCandies = function (candies) {
  let len = candies.length,
    num = 0,
    map = new Map();

  for (let i = 0; i < len; i++) {
    let c = candies[i];
    if (!map.get(c)) {
      map.set(c, 1);
      num++;
    }
  }

  return Math.min(len / 2, num);
};