/**
 * @param {number} num
 * @return {string[]}
 */

/*
  思路：回溯，遍历所有可能亮灯的组合，转为时间输出出来
  建立一个数组长度为 10 代表所有灯
    - 前 4 个代表上面的灯
    - 后面 6 个代表下面一排的灯
    
  剪枝：上面一排超过 11，下面一排超过 59 
*/
var readBinaryWatch = function (num) {
  let lights = new Array(10).fill(0),
    ans = [];

  function backtrack(arr, count, index) {
    // 如果灯亮够 num 个，计算时间并结束递归即可
    if (count === num) {
      let result = calTime(arr);
      if (result.isValid === true) {
        ans.push(result.t);
      }
      return;
    }

    // 回溯
    for (let i = index + 1; i < 10; i++) {
      if (lights[i] === 1) continue;
      lights[i] = 1;
      index++;
      backtrack(lights, count + 1, index);
      lights[i] = 0;
    }
  }
  backtrack(lights, 0, -1);

  // 二进制的表转为时间，判断时间是否合理，进行时间转换
  function calTime(times) {
    let h = 0,
      m = 0,
      hDigit = 3,
      mDigit = 5;

    for (let i = 0, len = times.length; i < len; i++) {
      if (i < 4) {
        h += Math.pow(2, hDigit) * times[i];
        hDigit--;
      } else {
        m += Math.pow(2, mDigit) * times[i];
        mDigit--;
      }
    }

    if (h > 11 || m > 59) {
      return { isValid: false };
    }

    m = m < 10 ? '0' + m : m;

    return {
      isValid: true,
      t: `${h}:${m}`
    }
  }

  return ans;
};