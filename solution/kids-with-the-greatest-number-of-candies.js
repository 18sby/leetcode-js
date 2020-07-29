/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
  let arr = [], len = candies.length, max = Math.max(...candies);

  for (let i = 0; i < len; i++) {
    if (candies[i] + extraCandies >= max) {
      arr.push(true);
    } else {
      arr.push(false);
    }
  }

  return arr;
};