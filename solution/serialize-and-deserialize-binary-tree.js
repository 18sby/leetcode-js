var serialize = function (root) {
  let res = [];
  let q = [root];
  while (q.length != 0) { // 层级遍历
    let front = q.shift(); // 队头
    if (front != null) {
      res.push(front.val);
      q.push(front.left);
      q.push(front.right);
    } else {
      res.push('null'); // 需要保存null节点的情况
    }
  }
  return res.join(','); // 返回字符串
};


var deserialize = function (data) {
  data = data.split(','); // 分割
  let parent = []; // 保存上一层的父节点
  let index = 0;
  let root = null;
  while (index < data.length) {
    if (parent.length == 0) {  // 根节点的情况
      if (data[index] == 'null') return null; // 根节点为空
      root = new TreeNode(data[index]);
      parent.push(root);
      index++;
      continue;
    }
    let p = parent.shift();
    if (data[index] == 'null') { // p的左节点
      p.left = null;
    } else {
      let l = new TreeNode(data[index]);
      p.left = l;
      parent.push(l)
    }
    index++;
    if (index >= data.length) break;
    if (data[index] == 'null') {// p的右节点
      p.right = null;
    } else {
      let r = new TreeNode(data[index]);
      p.right = r;
      parent.push(r)
    }
    index++;
  }
  return root;
};