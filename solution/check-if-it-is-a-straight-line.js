/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
  let len = coordinates.length;
  if (len <= 2) return true;

  let slope = (coordinates[1][1] - coordinates[0][1]) / (coordinates[1][0] - coordinates[0][0]).toFixed(2);

  for (let i = 1; i < len - 1; i++) {
    let currSlope = (coordinates[i + 1][1] - coordinates[i][1]) /
      (coordinates[i + 1][0] - coordinates[i][0]).toFixed(2);
    if (currSlope !== slope) return false;
  }

  return true;
};