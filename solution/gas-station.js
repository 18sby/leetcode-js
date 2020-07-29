/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */

/*
  最慢方法：从每一个点开始尝试
*/
var canCompleteCircuit = function (gas, cost) {
  let glen = gas.length, clen = cost.length, ans = -1;

  for (let i = 0; i < clen; i++) {
    let sum = 0, step = clen, start = i;

    while (step > 0) {
      sum += gas[start];
      sum -= cost[start];
      if (sum < 0) break;
      step--;
      start = start === clen - 1 ? 0 : start + 1;
    }

    if (step === 0) {
      ans = i;
      break;
    }
  }

  return ans;
};