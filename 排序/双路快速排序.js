const swap = require("../工具/交换");
const random = require("../工具/随机数");

// 当有大量重复元素时，优化快速排序法
function _quickSort2(arr) {
  quickSort2(arr, 0, arr.length);
  return arr;
}

function quickSort2(arr, left, right) {
  if (left > right) {
    return;
  }
  let p = partition2(arr, left, right);
  quickSort2(arr, left, p - 1);
  quickSort2(arr, p + 1, right);
}
function partition2(arr, left, right) {
  let i = left + 1,
    j = right;
  let rand = random(left, right);
  swap(arr, left, rand);
  let temp = arr[left];
  while (true) {
    while (i < right && arr[i] <= temp) i++;
    while (j > left + 1 && arr[j] >= temp) j--;
    if (i > j) break;
    swap(arr, i, j);
    i++;
    j--;
  }
  swap(arr, left, j);
  return j;
}
_quickSort2.sortName = "双路快速排序法";
module.exports = _quickSort2;
