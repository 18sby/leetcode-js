/**
 * @param {number[]} numbers
 * @return {number}
 */

/*
  二分查找
  
  - 先处理重复值，如果左指针的值等于左指针右侧的值，指针右移
  - 如果右指针的值等于右指针左侧的值，右指针左移

  判断哪一侧的数组是有序的，在有序的半区选出最小值与当前保存的最小值比较，更新结果
  继续二分查找另一侧
*/
var minArray = function (numbers) {
  let low = 0,
    high = numbers.length - 1,
    ans = Infinity;

  while (low <= high) {
    while (numbers[low] === numbers[low + 1] && low < high) low++;
    while (numbers[high] === numbers[high - 1] && low < high) high--;

    let mid = low + ((high - low) >> 1);

    if (numbers[low] <= numbers[mid]) {
      ans = Math.min(numbers[low], ans);
      low = mid + 1;
    } else {
      ans = Math.min(numbers[high], ans);
      high = mid;
    }
  }

  return ans;
};