/**
 * @param {number[][]} events
 * @return {number}
 */


/*
  贪心算法
  1.把所有会议按照结束时间排序，我们优先参加早结束的会议
  2.由于一天只能参加一个会议，所以使用一个 哈希(数组也可以) 记录我们
    使用过的天
  3.参加每一个会议时，优先使用比较早的天来参加
  优化：所有会议按照结束时间排序，结束时间一样的按照开始时间排序，这样可以让搜索的区间变小
*/
var maxEvents = function (events) {
  let count = 0, had = [];

  events.sort((a, b) => a[1] - b[1]);

  for (let i = 0, len = events.length; i < len; i++) {
    let [start, end] = events[i];
    // 这里可以做一个优化: 如果哪一天使用过了，那么
    for (let j = start; j <= end; j++) {
      if (had[j] === undefined) {
        had[j] = 1;
        count++;
        break;
      }
    }
  }

  return count;
};

/*
  贪心 + 小根堆
  保证堆顶的会议一定是结束时间最早的
*/
var maxEvents = function (events) {
  class SmallHeap {
    constructor(arr) {
      this.heap = arr;
      this.init();
    }

    // 初始化完全小根堆
    init() {
      let heap = this.heap, n = heap.length;
      let sureIndex = n - 1;
      let lastIndex = Math.floor((sureIndex + 1) / 2) - 1;

      while (sureIndex >= 0) {
        for (let i = lastIndex; i >= 0; i--) {
          let l = 2 * i + 1,
            r = i * 2 + 2,
            temp = i;

          if (
            l <= sureIndex &&
            (
              heap[l][1] > heap[temp][1] ||
              (heap[l][1] === heap[temp][1] && heap[l][0] > heap[temp][0])
            )
          ) {
            temp = l;
          }
          if (
            r <= sureIndex &&
            (
              heap[r][1] > heap[temp][1] ||
              (heap[r][1] === heap[temp][1] && heap[r][0] > heap[temp][0])
            )
          ) {
            temp = r;
          }

          if (temp === i) continue;

          [heap[temp], heap[i]] = [heap[i], heap[temp]];
        }

        [heap[0], heap[sureIndex]] = [heap[sureIndex], heap[0]];
        sureIndex--;
      }
    }

    // 每次 build 只需要把剩下的元素从根向下串一遍，heap 就会重新变成小顶堆
    build() {
      let heap = this.heap,
        n = heap.length,
        i = 0,
        lastIndex = Math.floor(n / 2) - 1;

      while (i <= lastIndex) {
        let l = 2 * i + 1,
          r = 2 * i + 2,
          temp = i;

        if (
          l < n &&
          (
            heap[l][1] < heap[temp][1] ||
            (heap[l][1] === heap[temp][1] && heap[l][0] < heap[temp][0])
          )
        ) {
          temp = l;
        }
        if (
          r < n &&
          (
            heap[r][1] < heap[temp][1] ||
            (heap[r][1] === heap[temp][1] && heap[r][0] < heap[temp][0])
          )
        ) {
          temp = r;
        }

        if (temp === i) break;

        [heap[temp], heap[i]] = [heap[i], heap[temp]];
        i = temp;
      }
    }

    // 把要删除的元素放到数组末尾，删掉
    offer() {
      this.build();
      // console.log( '每次build之后', this.heap );
      let heap = this.heap;
      [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
      return this.heap.pop();
    }

    isEmpty() {
      return this.heap.length === 0;
    }
  }

  // 题解部分，👆是小根堆的实现
  let endTimeArr = [],
    map = [], // 去重用的，记录某一天有没有使用过，undefined 就是未使用过
    count = 0;
  for (let i = 0; i < events.length; i++) {
    // 如果会议开始时间等于结束时间，那么他只有一天可以参加，那就直接优先参加他，不用往堆里放了
    if (events[i][0] === events[i][1]) {
      if (map[events[i][0]] === undefined) {
        count++;
        map[events[i][0]] = 1;
      }
      continue;
    }
    endTimeArr.push(events[i]);
  }
  // console.log( 'endTimeArr: ', endTimeArr );

  let endTimeHeap = new SmallHeap(endTimeArr);
  // console.log( 'endTimeHeap: ', endTimeHeap );

  while (!endTimeHeap.isEmpty()) {
    let [start, end] = endTimeHeap.offer();
    for (let i = start; i <= end; i++) {
      if (map[i] === undefined) {
        count++;
        map[i] = 1;
        break;
      }
    }
  }

  return count;
};