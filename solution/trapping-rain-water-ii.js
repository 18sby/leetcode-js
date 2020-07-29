/**
 * @param {number[][]} heightMap
 * @return {number}
 */

/*
  看了油管上的姐姐讲的视频，很清楚，推荐学习
  https://www.youtube.com/watch?v=ZEgoEf8HGKI
    
  用一个类来实现最小堆，这个类需要实现的方法：
    - 重新构建当前堆为最小堆
    - 插入元素
    - 拿出堆顶元素
    - 堆是否为空
  
  js 小顶堆 + BFS + 哈希
*/
var trapRainWater = function (heightMap) {
  if (heightMap.length === 0) return 0;

  class Heap {
    constructor(array) {
      this.heap = [...array];
    }

    build() {
      let heap = this.heap;
      for (let i = Math.floor(heap.length / 2 - 1); i >= 0; i--) {
        let left = 2 * i + 1, right = 2 * i + 2, temp = i;
        if (left < heap.length) {
          if (heightMap[heap[temp][0]][heap[temp][1]] >
            heightMap[heap[left][0]][heap[left][1]]) {
            temp = left;
          }
        }
        if (right < heap.length) {
          if (heightMap[heap[temp][0]][heap[temp][1]] >
            heightMap[heap[right][0]][heap[right][1]]) {
            temp = right;
          }
        }
        [heap[i], heap[temp]] = [heap[temp], heap[i]];
      }
    }

    insert(row, col) {
      let heap = this.heap;
      heap.push([row, col]);
      if (heightMap[heap[0][0]][heap[0][1]] > heightMap[row][col]) {
        this.build();
      }
    }

    offer() {
      let heap = this.heap;
      [heap[0], heap[heap.length - 1]] = [heap[heap.length - 1], heap[0]];
      let mini = heap.pop();
      this.build();
      return mini;
    }

    isEmpty() {
      return this.heap.length === 0;
    }
  }

  let arr = [], visited = [], count = 0;

  // 初始化四周的点入一个临时数组中，并设置已访问过
  for (let i = 0; i < heightMap.length; i++) {
    visited.push([]);
    for (let j = 0; j < heightMap[0].length; j++) {
      visited[i][j] = 0;
      if (i === 0 || i === heightMap.length - 1 || j === 0 || j === heightMap[0].length - 1) {
        arr.push([i, j]);
        visited[i][j] = 1;
      }
    }
  }

  // 初始化最小堆
  let heap = new Heap(arr);

  // 遍历队列
  while (!heap.isEmpty()) {
    let small = heap.offer();
    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let way of ways) {
      let curr = [small[0] + way[0], small[1] + way[1]];
      if (curr[0] < 0 || curr[0] > heightMap.length - 1 || curr[1] < 0 || curr[1] > heightMap[0].length - 1) continue; // 越界
      if (visited[curr[0]][curr[1]] === 1) continue; // 已访问过
      visited[curr[0]][curr[1]] = 1;

      if (heightMap[small[0]][small[1]] >= heightMap[curr[0]][curr[1]]) {
        count += heightMap[small[0]][small[1]] - heightMap[curr[0]][curr[1]];
        heightMap[curr[0]][curr[1]] = heightMap[small[0]][small[1]];
      }

      // 不管当前的点是否可以存水，都插入到最小堆中，因为后面还要访问他的邻居
      heap.insert(curr[0], curr[1]);
    }
  }

  return count;
};

/*
  js 插入排序（小顶堆更快） + BFS + 哈希
  第37个测试用例超时!!
  
  原因：
  1.插入排序时间复杂度太高
  2.做了许多无用的操作，我们不需要集合是排好序的，只需要每次拿到的是集合中
    最小的元素即可，所以用数组模拟最小堆来实现
*/
var trapRainWater = function (heightMap) {
  if (heightMap.length === 0) return 0;

  let heap = [], visited = [], count = 0;

  // 初始化四周的点入队，并设置已访问过
  for (let i = 0; i < heightMap.length; i++) {
    visited.push([]);
    for (let j = 0; j < heightMap[0].length; j++) {
      visited[i][j] = 0;
      if (i === 0 || i === heightMap.length - 1 || j === 0 || j === heightMap[0].length - 1) {
        heap.push([i, j]);
        visited[i][j] = 1;
      }
    }
  }

  // 快排 - 从小到大
  heap.sort((a, b) => {
    if (heightMap[a[0]][a[1]] > heightMap[b[0]][b[1]]) {
      return 1;
    } else {
      return -1;
    }
  });

  let temp = [];
  for (let p = 0; p < heap.length; p++) {
    temp.push(heightMap[heap[p][0]][heap[p][1]]);
  }

  // 遍历队列
  while (heap.length > 0) {
    let small = heap.shift();
    let ways = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    for (let way of ways) {
      let curr = [small[0] + way[0], small[1] + way[1]];
      if (curr[0] < 0 || curr[0] > heightMap.length - 1 || curr[1] < 0 || curr[1] > heightMap[0].length - 1) continue; // 越界
      if (visited[curr[0]][curr[1]] === 1) continue; // 已访问过
      visited[curr[0]][curr[1]] = 1;

      if (heightMap[small[0]][small[1]] >= heightMap[curr[0]][curr[1]]) {
        count += heightMap[small[0]][small[1]] - heightMap[curr[0]][curr[1]];
        heightMap[curr[0]][curr[1]] = heightMap[small[0]][small[1]];
      }

      // 插入排序到 heap 中
      let j = heap.length - 1;
      while (j >= 0 && heightMap[curr[0]][curr[1]] <= heightMap[heap[j][0]][heap[j][1]]) {
        heap[j + 1] = JSON.parse(JSON.stringify(heap[j]));
        j--;
      }
      heap[j + 1] = [curr[0], curr[1]];
    }
  }

  return count;
};