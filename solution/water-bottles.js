/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */
var numWaterBottles = function (numBottles, numExchange) {
  let count = numBottles,
    empty = numBottles;

  while (empty >= numExchange) {
    let bot = Math.floor(empty / numExchange),
      rest = empty % numExchange;
    count += bot;
    empty = rest + bot;
  }

  return count;
};