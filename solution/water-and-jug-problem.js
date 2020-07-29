/**
 * @param {number} x
 * @param {number} y
 * @param {number} z
 * @return {boolean}
 */

var canMeasureWater = function (x, y, z) {
  if (x + y < z) return false;
  if (x === 0 || y === 0) return z === 0 || x + y === z;
  const gcd = (a, b) => b === 0 ? a : gcd(b, a % b);
  return z % gcd(x, y) === 0;
}

/*
  DFS
  在开始进行dfs的时候，我们给两种状态
    1. x 满，y 空
    2. y 满，x 空
    因为第一次只能有这两种情况
    
  每次操作有几种选择:
    1. 把 X 壶的水灌进 Y 壶，直至灌满或倒空；
    2. 把 Y 壶的水灌进 X 壶，直至灌满或倒空；
    3. 把 X 壶灌满；
    4. 把 Y 壶灌满；
    5. 把 X 壶倒空；
    6. 把 Y 壶倒空。
  
  终止条件，一旦出现 x 和 y 都空了，我们就终止即可，因为这个状态无论再做什么操作
  都会回到我们的两种初始状态
*/
var canMeasureWater = function (x, y, z) {
  if (z === 0) return true;

  function dfs(m, n) {
    if (m === 0 && n === 0) return;
    if (m + n === z) return ans = true;

    if (n < y) {
      let diff = y - n;
      if (m >= diff) {
        dfs(m - diff, y);
      } else {
        dfs(0, n + m);
      }
    }

    if (m < x) {
      let diff = x - m;
      if (n >= diff) {
        dfs(x, n - diff);
      } else {
        dfs(0, n + m);
      }
    }

    dfs(x, n);
    dfs(0, n);
    dfs(m, y);
    dfs(m, 0);
  }

  let ans = false;
  dfs(x, 0);
  dfs(0, y);

  return ans;
};