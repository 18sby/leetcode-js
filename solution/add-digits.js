/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  if (num < 10) {
    return num;
  }

  num = add(num);

  return addDigits(num);
};

var add = function (num) {
  num = '' + num;
  let count = 0;
  for (let i = 0, len = num.length; i < len; i++) {
    count += (+ num[i]);
  }
  return count;
}