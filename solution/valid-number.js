/**
 * @param {string} s
 * @return {boolean}
 */

// 参考作者 while(1)
var isNumber = function (s) {
  let state = 0,
    finals = [0, 0, 0, 1, 0, 1, 1, 0, 1],
    transfer = [[0, 1, 6, 2, -1, -1],
    [-1, -1, 6, 2, -1, -1],
    [-1, -1, 3, -1, -1, -1],
    [8, -1, 3, -1, 4, -1],
    [-1, 7, 5, -1, -1, -1],
    [8, -1, 5, -1, -1, -1],
    [8, -1, 6, 3, 4, -1],
    [-1, -1, 5, -1, -1, -1],
    [8, -1, -1, -1, -1, -1]],
    make = (c) => {
      switch (c) {
        case " ": return 0;
        case "+":
        case "-": return 1;
        case ".": return 3;
        case "e": return 4;
        default:
          let code = c.charCodeAt();
          if (code >= 48 && code <= 57) {
            return 2;
          } else {
            return 5;
          }
      }
    };
  for (let i = 0; i < s.length; ++i) {
    state = transfer[state][make(s[i])];
    if (state < 0) return false;
  }
  return finals[state];
};