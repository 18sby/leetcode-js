/**
 * @param {number} n
 * @param {number[]} speed
 * @param {number[]} efficiency
 * @param {number} k
 * @return {number}
 */

/*
  1. speed 和 efficiency 同时降序排序
  2. 往 speedHeap 小根堆中不断推入速度，因为速度和效率的数组都是降序排序的，
     所以只需要一个变量 minEffic 记录 speedHeap 的实时最小效率，一个变量 speedSum
     记录 speedHeap 的速度和
  3. 不断地往 speedHeap 堆中推入，如果堆中的元素超过 k ，那么删除小顶堆的元素，在这个
     过程中不断地计算最大团队表现值。
     
  注意：不要忘了在 speedHeap 堆中移除元素的同时，在 speedSum 中减去这个元素的值
*/
var maxPerformance = function(n, speed, efficiency, k) {
  let indexArr = new Array(n), // 代表 efficiency 降序的顺序
      indexP = 0, // indexArr 的指针
      minEffic = null,
      max = 0;
  
  for (let i = 0; i < n; i++) indexArr[i] = i;
  indexArr.sort((a, b) => {
    if (efficiency[a] > efficiency[b]) return -1;
    return 1;
  });
  
  /* 最小堆的类 */
  class Heap {
    constructor(maxSize) {
      this.heap = [];
      this.sum = BigInt(0);
      this.maxSize = maxSize;
    }
    
    buildSmall() {
      let heap = this.heap,
          n = heap.length;
      let leaf = Math.floor(n / 2) - 1;
      
      for (let i = leaf; i >= 0; i--) {
        let tempIndex = i, leftIndex = 2 * i + 1, rightIndex = 2 * i + 2;
        
        if (leftIndex < n && heap[leftIndex] < heap[tempIndex]) {
          tempIndex = leftIndex;
        }
        
        if (rightIndex < n && heap[rightIndex] < heap[tempIndex]) {
          tempIndex = rightIndex;
        }
        
        if (tempIndex === i) continue;
        [ heap[i], heap[tempIndex] ] = [ heap[tempIndex], heap[i] ];
      }
    }
    
    insert(val) {
      val = BigInt( val );
      if (this.heap.length === this.maxSize) {
        this.deleteSmall();
      }
      this.heap.push( val );
      this.sum += val;
      // this.buildSmall();
    }
    
    deleteSmall() {
      this.buildSmall();
      let small = this.heap.shift();
      this.sum -= small;
    }
  }
  /* ----- */
  
  let speedHeap = new Heap(k);
  
  for (let i = 0; i < indexArr.length; i++) {
    let index = indexArr[i];
    
    speedHeap.insert( speed[ index ] );
    minEffic = BigInt( efficiency[index] );
    
    let curr = speedHeap.sum * minEffic;
    max = curr > max ? curr : max;
  }
  
  let mo = BigInt(1);
  for (let i = 0; i < 9; i++) {
    mo *= BigInt(10);
  }
  mo += BigInt(7);
  
  return max % mo;
}

/*
  超时！！最后两个用例过不去，应该是堆没用对
  贪心策略：
  将工程师的效率倒序排序，从工程师的速度中找到效率大于当前选择效率的最多 k 个
  计算并比较，看看是否为最大的团队表现值
  
  将 speed 存成 [索引, 值] 的数组形式
  
  策略很简单 遍历每一个效率的值 然后把比当前效率值高的人员全部找出来，取其中最大的k-1个
通过排序加优先队列的方法可以得到不错的复杂度
*/
var maxPerformance = function(n, speed, efficiency, k) {
  let reverseEfficIndexArr = [], queue = [], speedArr = [];
  
  // 初始化一个索引数组
  for (let i = 0; i < n; i++) {
    reverseEfficIndexArr[i] = i;
  }
  
  // 索引数组按照效率倒序排序
  reverseEfficIndexArr.sort((a, b) => {
    if (efficiency[a] < efficiency[b]) return 1;
    return -1;
  });
  
  for (let i = 0; i < n; i++) {
    let c = [i, speed[i]];
    speedArr.push( c );
  }
  
  speedArr.sort((a, b) => {
    if (efficiency[a[0]] < efficiency[b[0]]) return 1;
    return -1;
  });
  
  function offer(effic) {
    if (speedArr.length === 0) return -1;
    if ( efficiency[ speedArr[0][0] ] < effic ) return -1;
    
    let top = speedArr.shift();
    return top;
  }
  
  function build() {
    for (let i = queue.length - 1;i >= 0; i--) {
      buildQueue(i);
      [queue[0], queue[i]] = [queue[i], queue[0]]
    }
  }
  
  function buildQueue(last) {
    let len = last + 1, lastIndex = Math.floor(len / 2) - 1;
    for (let i = last; i >= 0; i--) {
      let temp = i, l = 2 * i + 1, r = 2 * i + 2;
      if (l < len && queue[l] > queue[temp]) {
        temp = l;
      }
      if (r < len && queue[r] > queue[temp]) {
        temp = r;
      }
      
      if (temp !== i) {
        [queue[i], queue[temp]] = [queue[temp], queue[i]];
      }
    }
  }
  
  build();
  
  let max = -Infinity;
  for (let i = 0; i < n; i++) {
    let currIndex = reverseEfficIndexArr[i],
        curEffic = efficiency[ currIndex ],
        sum = 0;
    
    while (speedArr.length > 0) {
      let top = offer(curEffic);
      if (top === -1) break;
      let [speedIndex, speed] = top;
      if (efficiency[speedIndex] >= curEffic) {
        
        // 改成堆排序
        queue.push( speed );
        build();
        
      } else {
        break;
      }
    }
    
    let count = 0;
    for (let j = queue.length - 1; j >= 0; j--) {
      if (count >= k) break;
      sum += queue[j];
      count += 1;
    }
    
    let performance = sum * curEffic;
    max = Math.max(max, performance);
  }
  
  
  return max % (Math.pow(10, 9) + 7);
}

/*
  超时
  尝试所有组合的 dfs 
  按照 k 的值进行全排列，定然超时
*/
var maxPerformance = function(n, speed, efficiency, k) {
  function calcuMaxPerformance(arr) {
    let minEfficiency = Infinity, speedSum = 0;
    
    for (let i = 0; i < arr.length; i++) {
      speedSum += speed[ arr[i] ];
      minEfficiency = Math.min(minEfficiency, efficiency[ arr[i] ]);
    }
    
    let effic = (minEfficiency * speedSum) % (Math.pow(10, 9) + 7);
    
    max = Math.max(max, effic);
  }
  
  function dfs(curr, store) {
    if (curr.length > 0 && curr.length <= k) calcuMaxPerformance(curr);
    
    if (curr.length > k || store.length === 0) return ;
    
    for (let i = 0; i < store.length; i++) {
      curr.push( store[i] );
      dfs(curr, store.slice(i + 1));
      curr.pop();
    }
  }
  
  let max = -Infinity, indexArr = new Array(n);
  for (let i = 0; i < n; i++) {
    indexArr[i] = i;
  }
  dfs([], indexArr);
  
  return max;
};