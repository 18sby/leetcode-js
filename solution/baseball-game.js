/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let stack = [], score = 0;

  for (let i = 0, len = ops.length; i < len; i++) {
    let op = ops[i], stackLen = stack.length;

    switch (op) {
      case '+':
        let c = 2, total = 0;
        while (c > 0 && stackLen > 0) {
          total += stack[stackLen - 1];
          stackLen--;
          c--;
        }
        stack.push(total);
        score += total;
        break;
      case "D":
        let b = 0;
        if (stackLen > 0) {
          b = stack[stackLen - 1];
        }
        b *= 2;
        stack.push(b);
        score += b;
        break;
      case "C":
        if (stackLen > 0) {
          score -= stack.pop();
        }
        break;
      default:
        op = Number(op);
        stack.push(op);
        score += op;
        break;
    }
  }

  return score;
};