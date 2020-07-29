/**
 * @param {number[][]} grid
 * @return {number}
 */

/*
  所有单个柱体的表面积 = 摞起来的每个正方体提供的4个表面积 + 2(上下两个底面)
  减去每两个柱体贴合的表面积：两个之中比较矮的那个的高度 * 2
*/
var surfaceArea = function (grid) {
  if (grid.length === 0 || grid[0].length === 0) return 0;

  let rowLimit = grid.length,
    colLimit = grid[0].length,
    area = 0;

  for (let row = 0; row < rowLimit; row++) {
    for (let col = 0; col < colLimit; col++) {
      // 计算当前柱体的表面积
      let height = grid[row][col];
      if (height === 0) continue;
      area += height * 4 + 2;

      // 计算当前柱体与上面和左面柱体的重叠部分表面积，减去
      let ways = [[-1, 0], [0, -1]];
      for (let way of ways) {
        let last_row = way[0] + row,
          last_col = way[1] + col;

        if (
          last_row < 0 || last_row >= rowLimit ||
          last_col < 0 || last_col >= colLimit
        ) continue;

        area -= Math.min(height, grid[last_row][last_col]) * 2;
      }
    }
  }

  return area;
};