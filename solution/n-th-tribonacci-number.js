/**
 * @param {number} n
 * @return {number}
 */

/*
  学习递归ok 但是超出输出限制
*/
// var tribonacci = function(n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   if (n === 2) return 1;
//   return tribonacci(n - 1) + tribonacci(n - 2) + tribonacci(n - 3);
// };

/*
  线性链表法
*/
var tribonacci = function (n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (n === 2) return 1;

  let curr = 2,
    l1 = 0,
    l2 = 1,
    l3 = 1,
    res = 0;
  while (curr !== n) {
    res = l1 + l2 + l3;
    l1 = l2;
    l2 = l3;
    l3 = res;
    curr++;
  }

  return res;
}