/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
  滑动窗口
  1. 找到任意奇数的左右两边有多少偶数，记录为一个数组
  2. 找到所有 k 个奇数的最小子数组，计算包含它的「优美子数组」有几个，统计起来
  
  arr中的元素含义：
  [1, 2, 5] -> [奇数，左边有2个偶数，右边有5个偶数]
  [0] -> [偶数]
  
*/
var numberOfSubarrays = function (nums, k) {
  let start = 0,
    end = 0,
    count = 0,
    even = 0,
    odd = 0,
    arr = [],
    lastOddIndex = null,
    n = nums.length;

  for (let i = 0; i < n; i++) {
    let c = nums[i];
    if (c % 2 === 0) {
      even += 1;
      arr.push([0]);
    } else {
      arr.push([1, even]);
      if (lastOddIndex !== null) {
        arr[lastOddIndex][2] = even;
      }
      lastOddIndex = i;
      even = 0;
    }
  }
  if (arr[arr.length - 1].length > 1 && lastOddIndex !== null) arr[arr.length - 1][2] = 0;
  if (arr[arr.length - 1].length === 1 && lastOddIndex !== null) arr[lastOddIndex][2] = even;

  const nextOddIndex = index => {
    let targetIndex = index + 1;
    while (targetIndex < n) {
      if (nums[targetIndex] % 2 !== 0) return targetIndex;
      targetIndex++;
    }
    return targetIndex;
  }

  // 滑动窗口 + 计算
  start = nextOddIndex(-1);
  end = nextOddIndex(-1);
  odd += 1;
  while (start < n && end < n) {
    if (odd === k) {
      let [, left,] = arr[start];
      let [, , right] = arr[end];
      count += (1 + left + right + (left * right));
      end = nextOddIndex(end);
      odd++;
    } else if (odd > k) {
      start = nextOddIndex(start);
      odd--;
    } else if (odd < k) {
      end = nextOddIndex(end);
      odd++;
    }
  }

  return count;
};