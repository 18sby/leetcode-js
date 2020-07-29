/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function (hour, minutes) {
  // 表盘分为 60 小格
  let rate = 360 / 60; // 6度 1格

  // 先求出 时针、分针的指向刻度

  // 再求 刻度相减的度数 和 360度减去当前度数，也就是另外半圈的度数，绝对值比较小的那个刻度

  let m = minutes,
    h = minutes / 60 * 5 + hour * 5;
  h = h >= 60 ? h - 60 : h;
  m = m >= 60 ? m - 60 : m;

  let block = Math.min(Math.abs(h - m), 60 - Math.abs(h - m));

  return block * 6;
};