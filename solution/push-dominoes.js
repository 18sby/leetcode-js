/**
 * @param {string} dominoes
 * @return {string}
 */

/*
  计算每个多米诺骨牌两侧最近的受力，根据受力判断状态
*/
var pushDominoes = function (dominoes) {
  let len = dominoes.length,
    ans = '';

  for (let i = 0; i < len; i++) {
    let curr = dominoes[i];

    if (curr !== '.') {
      ans += curr;
      continue;
    }

    let l = i - 1,
      r = i + 1,
      left = null,
      right = null,
      pl, // powerLeft
      pr; // powerRight
    while (l >= 0 && left === null) {
      if (dominoes[l] !== '.') {
        left = dominoes[l];
      }
      l--;
    }
    while (r < len && right === null) {
      if (dominoes[r] !== '.') {
        right = dominoes[r];
      }
      r++;
    }

    // 计算两侧受力
    if (left === null || left === 'L') {
      pl = Infinity;
    } else {
      pl = i - l;
    }
    if (right === null || right === 'R') {
      pr = Infinity;
    } else {
      pr = r - i;
    }

    // 受力数越小，代表越近，力量越强
    if (pl > pr) {
      ans += right;
    } else if (pl < pr) {
      ans += left;
    } else {
      ans += '.';
    }
  }

  return ans;
};