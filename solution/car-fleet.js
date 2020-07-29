/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */

/*
  1.计算出每一辆车开到重点所需的时间
  2.按初始距离逆序排序这个时间的数组
  3.遍历这个数组，首先拿出第一辆车作为一个车队
  4.循环：判断后一辆车是否用时比前车短，如果是，那么为同一车队，取当前车队最慢的车的时间维护...
         如果比前车用时长，说明他到终点前是追不上前车的，此时把他作为一个新的车队
*/

var carFleet = function (target, position, speed) {
  let times = [];
  for (let i = 0, len = position.length; i < len; i++) {
    times.push({
      time: (target - position[i]) / speed[i],
      posi: position[i]
    });
  }

  times.sort((a, b) => {
    return b.posi - a.posi;
  });

  if (times.length === 0) return 0;

  let team = 1, longtime = times[0].time;
  for (let i = 1, len = times.length; i < len; i++) {
    let t = times[i].time;
    if (t > longtime) {
      team += 1;
      longtime = t;
    }
  }

  return team;
};