/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function (salary) {
  salary.sort((a, b) => a - b);
  salary.shift();
  salary.pop();
  return salary.reduce((total, curr) => total + curr, 0) / salary.length;
};