/**
 * @param {number[]} citations
 * @return {number}
 */

/*
  O(N)
*/
var hIndex = function(citations) {
  let n = citations.length,  ans = 0;
  
  for (let i = 0; i < n; i++) {
    if (citations[i] >= n - i) {
      ans = n - i;
      break;
    }
  }
  
  return ans;
}

/*
  分析题意：
  即：找到第一个下标 i ，满足条件
  citations[i] > citations[0 - i - 1]
  citations[i] <= citations[len - i - 1]
*/
var hIndex = function(citations) {
  let low = 0,
      len = citations.length,
      high = len - 1,
      ans = null;
  
  while (low <= high) {
    let mid = low + ((high - low) >> 1);
    
    if (citations[mid] === len - mid) {
      ans = len - mid;
      break;
    }
    
    if (citations[mid] < len - mid) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  
  return ans || len - low;
};