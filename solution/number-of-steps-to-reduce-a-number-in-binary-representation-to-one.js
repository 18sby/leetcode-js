/**
 * @param {string} s
 * @return {number}
 */
var numSteps = function (s) {
  let index = s.length - 1, step = 0;

  while (index > 0) {
    let c = s.charAt(index);
    if (c == 0) {
      step += 1;
      index -= 1;
    } else {
      step += 1;
      while (index >= 0 && s.charAt(index) == 1) {
        step++;
        index--;
      }
      if (index > 0) {
        s = s.slice(0, index) + '1' + s.slice(index + 1);
      }

    }
  }

  return step;
};