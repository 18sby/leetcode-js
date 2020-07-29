/**
 * @param {number} n
 * @return {number}
 */

/*
  分析案例：
  30 -> 2 * 3 * 5
  - copy 1 paste 1 copy 1 paste 2 copy 1 paste 4 -> 操作 10 次
  
  18 2 * 3 * 3
  - copy 1 paste 1 copy 1 paste 2 copy 1 paste 2 -> 操作 9 次
  
  40 -> 2 * 2 * 2 * 5
  
  数学问题：
  - 如果 n 是质数，那么只能 copy 1 + paste n - 1 -> n次
  - 如果 n 不是质数，那么操作次数为它的所有最小素数因子的和
*/
var minSteps = function (n) {
  let ans = 0,
    d = 2; // 2 是最小的素数因子，所以从 2 开始

  while (n > 1) {
    while (n % d === 0) { // 如果 d 仍然是当前 n 的最小素数因子，继续遍历
      ans += d;
      n /= d;
    }
    // 如果此时 d 不是当前 n 的最小素数因子了，那么 d++ 继续试探
    // 其实此处应该是把 d 变为比 d 大的下一个素数，但是我们没有必要在构建出一个素数因子的数组，因为得不偿失(还需要创建一个判断是否为素数的方法)，那会花费更多的时间和空间，不如让计算机一个个去试就好了
    d += 1;
  };

  return ans;
};