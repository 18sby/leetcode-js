/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*
  思路：使用线段树
  1.求出当前数组的最大值和最小值
  2.创建一个「最小值 - 最大值」之间的线段树
  3.从数组末尾开始倒序遍历，向线段树中放值
  4.放一个元素到线段树中，立即计算右侧比他小的元素：即找出比他小的线段树的元素数总和
  [1 <= x <= 2] -> [1 <= x <= 1] [2 <= x <= 2]
  [1 <= x <= 3] -> [1 <= x <= 2] [3 <= x <= 3]
  [1 <= x <= 4] -> [1 <= x <= 2] [3 <= x <= 4]
  每个元素的属性：{
    start: 1,
    end: 2,
    count: 0
  }
*/
var countSmaller = function (nums) {
  if (nums.length === 0) return [];

  let min = Infinity,
    max = -Infinity,
    nlen = nums.length,
    segmentTree = [],
    c = 0,
    ans = [];

  // 求最大值和最小值
  for (let i = 0; i < nlen; i++) {
    if (nums[i] < min) {
      min = nums[i];
    }
    if (nums[i] > max) {
      max = nums[i];
    }
  }

  // 使用数组构建线段树 - 递归
  function createSegmentTree(start, end, p) {
    segmentTree[p] = {
      start: start,
      end: end,
      count: 0
    };
    if (start === end) return;

    let mid = Math.floor((end - start) / 2) + start;
    createSegmentTree(start, mid, 2 * p + 1);
    createSegmentTree(mid + 1, end, 2 * p + 2);
  }
  createSegmentTree(min, max, 0);

  // 将当前元素放入线段树中
  function setElement(val, p) {
    if (segmentTree[p] !== undefined && val >= segmentTree[p].start && val <= segmentTree[p].end) {
      segmentTree[p].count += 1;
    }

    // 终止条件
    if (segmentTree[p] === undefined) {
      return;
    }
    if (segmentTree[p].start === val && segmentTree.end === val) {
      return;
    }

    // 继续递归左右子线段树
    if (segmentTree[2 * p + 1] !== undefined && val >= segmentTree[2 * p + 1].start && val <= segmentTree[2 * p + 1].end) {
      setElement(val, 2 * p + 1);
    }
    if (segmentTree[2 * p + 2] !== undefined && val >= segmentTree[2 * p + 2].start && val <= segmentTree[2 * p + 2].end) {
      setElement(val, 2 * p + 2);
    }
  }

  // 在线段树中查找比当前元素小的元素的个数，因为是倒序遍历 nums 数组，所以，当前线段树中比当前元素小的元素一定是它右侧的元素
  function searchRightBigCount(el, p) {
    if (segmentTree[p] === undefined) {
      return;
    }

    // 如果当前线段树的区间在 el 的线段区间
    if (segmentTree[p].start >= el.start && segmentTree[p].end <= el.end) {
      c += segmentTree[p].count;
      return;
    }

    // 如果当前线段树与 el 的线段无交叉或者完全相同，终止递归
    if (el.end < segmentTree[p].start || el.start > segmentTree[p].end) {
      return;
    }

    // 如果当前线段树和 el 的线段有交叉，那么把 el 与 当前线段树重复的线段赋值给 el，
    // 继续遍历左右子线段树
    if (el.start <= segmentTree[p].start && el.end >= segmentTree[p].start) {
      el.start = segmentTree[p].start;
      searchRightBigCount(el, 2 * p + 1);
      searchRightBigCount(el, 2 * p + 2);
    }
    else if (el.start <= segmentTree[p].end && el.end >= segmentTree[p].end) {
      el.end = segmentTree[p].end;
      searchRightBigCount(el, 2 * p + 1);
      searchRightBigCount(el, 2 * p + 2);
    }
  }

  // 倒序遍历数组 nums，一遍将元素填入线段树，一遍计算他右侧元素的个数
  for (let i = nlen - 1; i >= 0; i--) {
    setElement(nums[i], 0);

    if (min > nums[i] - 1) {
      ans[i] = 0;
    } else {
      searchRightBigCount({ start: min, end: nums[i] - 1 }, 0);
      ans[i] = c;
    }

    c = 0;
  }

  return ans;
}

/*
  参考作者 NoBey
  1.把 nums 正序排序，放到一个新的数组中
  2.遍历 nums ，去这个新数组中找到他的索引位置就可以了，索引值就是比他小的个数
  3.注意，每次找完一个元素，需要把他在新数组中删掉，因为他如果比下一个要删查找的元素小的话，回导致下一个元素的索引
    错误，因为他是下一个元素左边的元素，题目要求是：求他右边比他小的元素；
    同时还有一个好处就是：防止因为元素重复导致错误
  4.优化的一点是 forEach 直接在原数组操作，没有使用新的内存空间
*/
var countSmaller = function (nums) {
  let newArr = [...nums].sort((a, b) => a - b);

  nums.forEach((v, k) => {
    let index = newArr.indexOf(v);
    nums[k] = index;
    newArr.splice(index, 1);
  });

  return nums;
}

/*
  最慢的方法 时间复杂度 n * n
*/
var countSmaller = function (nums) {
  let ans = [];

  let len = nums.length;
  if (len === 0) return [];

  for (let i = 0; i < len - 1; i++) {
    let curr = nums[i], count = 0;
    for (let j = i + 1; j < len; j++) {
      if (nums[j] < curr) {
        count++;
      }
    }
    ans.push(count);
  }

  ans.push(0);

  return ans;
};