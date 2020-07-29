/**
 * @param {number[]} asteroids
 * @return {number[]}
 */

/*
  思路：只需要一个栈，遍历数组，判断栈顶元素和当前元素有没有发生碰撞就 ok 了
  只有当栈顶元素大于0 并且 当前遍历的元素小于0 的时候才需要考虑碰撞
*/
var asteroidCollision = function (asteroids) {
  let stack = [];

  for (let i = 0, len = asteroids.length; i < len; i++) {
    let asteroid = asteroids[i];

    if (stack.length === 0) {
      stack.push(asteroid);
      continue;
    }

    while (stack.length > 0 && stack[stack.length - 1] > 0 && asteroid < 0) {
      // 1.栈顶元素质量 小于 asteroid质量 -> pop
      if (Math.abs(stack[stack.length - 1]) < Math.abs(asteroid)) {
        stack.pop();
        continue;
      }

      // 2.栈顶元素质量 等于 asteroid 的质量 -> 同时爆炸 break，不需要把当前元素入栈了，把它设置为 null
      if (stack[stack.length - 1] + asteroid === 0) {
        stack.pop();
        asteroid = null;
        break;
      }

      // 3.栈顶元素质量 大于 asteroid 的质量，不需要把它入栈了，设置为 null
      if (Math.abs(stack[stack.length - 1]) > Math.abs(asteroid)) {
        asteroid = null;
        break;
      }
    }

    if (asteroid) stack.push(asteroid);
  }

  return stack;
};