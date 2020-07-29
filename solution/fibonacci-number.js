/**
 * @param {number} N
 * @return {number}
 */

/*
  链式存储
*/
var fib = function (N) {
  if (N === 0) return 0;
  if (N === 1) return 1;

  let curr = 1,
    l1 = 0,
    l2 = 1,
    res = 0;

  while (curr !== N) {
    res = l1 + l2;
    l1 = l2;
    l2 = res;
    curr++;
  }

  return res;
};

/*
  递归 较慢
*/
var fib = function (N) {
  if (N === 0) return 0;
  if (N === 1) return 1;

  return fib(N - 1) + fib(N - 2);
}