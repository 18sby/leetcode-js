/**
 * @param {number} a
 * @param {number} b
 * @param {number} c
 * @return {string}
 */

/*
  贪心思路：
  1. 建立一个数组，每一项存储 a b c 的剩余数量以及字符串的值
  2. 重复过程：
     - 逆序排序，剩余数量最多的排到数组头部
     - 遍历这个数组，如果当前字符串与目前已拼接的字符串末尾字符相等就跳过
     - 如果字符串是剩余最多的字符，那么如果它所剩数量大于 2 ，拼两个，否则拼 1 个，
       为 0 就不拼，最后通过判断会跳出循环
     - 如果字符串不是剩余最多的字符，那么如果它还剩 1 个就拼 1 个，否则不拼
     
  重复过程 2 。。。
*/
var longestDiverseString = function (a, b, c) {
  let arr = [
    { str: 'a', count: a },
    { str: 'b', count: b },
    { str: 'c', count: c }
  ], ans = '';

  const last = () => ans.charAt(ans.length - 1);

  while (true) {
    arr.sort((prev, curr) => {
      return curr.count - prev.count;
    });

    let add = null;

    for (let i = 0; i < 3; i++) {
      let obj = arr[i];
      if (obj.str === last()) continue;
      let { str, count } = obj;

      if (i === 0) {
        if (count >= 2) {
          add = str.repeat(2);
          obj.count -= 2;
        } else {
          if (count > 0) {
            add = str;
            obj.count -= 1;
          }
        }
      } else if (count > 0) {
        add = str;
        obj.count -= 1;
      }

      break;
    }

    if (!add) break;
    ans += add;
  }

  return ans;
};