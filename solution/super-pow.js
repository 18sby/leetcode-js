/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */

/*
  模运算特性
  
  推理过程：
  
  设定常数：A B C D 常数 k
  
  a = A * k + B
  b = C * k + D
  
  ab = ACK * 2 + ADK + BCK + BD
  那么：
  ab % k = 0 + 0 + 0 + BD % k
  
  此时还有已知：a = A * k + B   b = C * k + D
  两边同时 模 k 得出：
  a % k = B    b % k = D;
  
  所以：(a % k)(b % k) = BD % k
*/
var superPow = function (a, b) {
  let base = 1337;

  function myPow(a, k) {
    a %= base;
    let res = 1;
    for (let i = 0; i < k; i++) {
      res *= a;
      res %= base;
    }
    return res;
  }

  function mySuperPow(a, b) {
    if (b.length === 0) return 1;
    let last = b.pop();

    let part1 = myPow(a, last);
    let part2 = myPow(mySuperPow(a, b), 10);

    return (part1 * part2) % base;
  }


  return mySuperPow(a, b);
};