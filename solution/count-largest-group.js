/**
 * @param {number} n
 * @return {number}
 */

/*
  1. 写一个计算数位和的函数
  2. 使用一个哈希表分别统计数位和相同的数字的出现次数，在这个过程中对比记录数字数目最多的值
     maxCount
  3. 查看哈希表中等于 maxCount 的个数
*/
var countLargestGroup = function (n) {
  const calculateSum = num => {
    let strNum = String(num), sum = 0;
    for (let i = 0; i < strNum.length; i++) {
      let c = strNum.charAt(i);
      sum += Number(c);
    }
    return sum;
  }

  let map = {}, maxCount = 0, maxGroup = 0;
  for (let i = 1; i <= n; i++) {
    let sum = calculateSum(i);
    if (map[sum] === undefined) map[sum] = 0;
    map[sum]++;
    maxCount = Math.max(maxCount, map[sum]);
  }

  for (let key in map) {
    if (map[key] === maxCount) maxGroup++;
  }

  return maxGroup;
};