/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */

/*
  128ms
  因为是拿最小的k个数，所以我们没必要把所有数排序，这时候可以利用最小堆结构，
  每次拿堆顶的元素然后重新构建最小堆，再拿。。。直到拿完k个数
*/
var getLeastNumbers = function (arr, k) {
  class Heap {
    constructor(array) {
      this.heap = array;
    }

    build() {
      let heap = this.heap, n = this.getSize();
      let lastLeaf = Math.floor(n / 2) - 1;
      for (let i = lastLeaf; i >= 0; i--) {
        let temp = i, left = 2 * i + 1, right = 2 * i + 2;
        if (left < n && heap[left] < heap[temp]) temp = left;
        if (right < n && heap[right] < heap[temp]) temp = right;
        if (temp === i) continue;
        [heap[temp], heap[i]] = [heap[i], heap[temp]];
      }
    }

    delete() {
      this.build();
      let heap = this.heap, n = this.getSize();
      return heap.shift();
    }

    getSize() {
      return this.heap.length;
    }
  }

  let smallHeap = new Heap(arr), ans = [];

  let count = k;
  while (count > 0 && smallHeap.getSize() > 0) {
    ans.push(smallHeap.delete());
    count--;
  }

  return ans;
}

/*
  132ms
  直观方法，直接快排，然后拿前k个小的数
*/
var getLeastNumbers = function(arr, k) {
  arr.sort((a, b) => a - b);
  return arr.slice(0, k);
};