/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

/*
  使用小顶堆
  堆中存 k 个数，堆顶为最小的，遍历 nums，遇到比堆顶大的数，就替换掉堆顶的数，
  再把堆进行堆化，变成小顶堆，这样的话，遍历完 nums 之后，堆中的 k 个数就是
  nums 中最大的 k 和数，又因为堆顶的数最小，所以堆顶的数就是第 k 大的数，返回即可
*/
var findKthLargest = function (nums, k) {
  class SmallHeap {
    constructor(arr) {
      this.heap = arr;
      this.init();
    }
    // 初始化小顶堆
    init() {
      let arr = this.heap, len = arr.length;
      let lastLeaf = Math.floor((len - 1) / 2);
      while (lastLeaf >= 0) {
        this.build(lastLeaf, len, arr);
        lastLeaf--;
      }
    }
    // 把小的放到堆顶
    build(index, len, arr) {
      while (index >= 0) {
        let temp = index,
          left = index * 2 + 1,
          right = left + 1;
        if (left < len && arr[left] < arr[temp]) temp = left;
        if (right < len && arr[right] < arr[temp]) temp = right;
        if (temp !== index) {
          this.swap(arr, temp, index);
        }
        index--;
      }
    }
    size() {
      return this.heap.length;
    }
    top() {
      return this.heap[0];
    }
    push(num) {
      if (this.size() > 0 && num > this.heap[0]) {
        let len = this.size();
        this.heap[0] = num;
        this.build(Math.floor((len - 1) / 2), len, this.heap);
      }
    }
    swap(arr, x, y) {
      [arr[x], arr[y]] = [arr[y], arr[x]];
    }
  }

  let heap = new SmallHeap(nums.slice(0, k)), i = k;
  while (i < nums.length) {
    heap.push(nums[i]);
    i++;
  }
  return heap.top();
};

/*
  利用了内置的快排函数
*/
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};