/**
 * @param {number[]} piles
 * @param {number} H
 * @return {number}
 */

/*
  思路：
  - 问：刚好在 H 小时吃完香蕉的最小速度
  - 初始化最慢为香蕉数组的最小值，最快速度为香蕉数组的最大值
  - 找到刚好可以吃完的最小速度，也就是不超时的最大速度
*/
var minEatingSpeed = function(piles, H) {
  let low = 0,
      high = Math.max( ...piles );
  
  function finished(k) {
    let time = 0;
    
    for (let i = 0; i < piles.length; i++) {
      time += Math.ceil(piles[i] / k);
    }
    
    return time <= H;
  }
  
  while (low < high) {
    let mid = low + ( (high - low) >> 1 );
    if (finished(mid)) {
      high = mid;
    } else {
      low = mid + 1;
    }
  }
  
  return low;
};