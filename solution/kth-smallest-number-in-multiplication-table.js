/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */

/*
  思路：二分法参考「jason」的解法
  
  - 首先，开始一共有 m * n 个数，假设 m = 5, n = 5
    那么一共有 25 个数，第一个数为 1，最后一个数为 25
    设 low = 1, high = 25
    
  - 对上边界 high 进行二分，high = 12，计算矩阵中小于 12 的数有几个
  
    #：计算每一行小于 12 的数 Math.min(m, high / row)
    
  - 判断如果数量小于 k，那么第 k 小的数应该在右边的区间 也就是 12 - 25之间
    否则在 1 - 12 之间
*/
var findKthNumber = function (m, n, k) {
  let low = 1, high = m * n;

  while (low < high) {
    let mid = low + ((high - low) >> 1);
    if (mid === low) break;

    let count = 0;
    for (let i = 1; i <= m; i++) {
      count += Math.min(n, Math.floor(mid / i));
    }

    if (count < k) {
      low = mid;
    } else {
      high = mid;
    }
  }

  return high;
};