const swap = require("../工具/交换");
const arr = [1, 2, 2, 3, 8, 8, 0, 2, 2, 6, 6, 1, 19, 9, 9, 9, 2, 22, 2, 2, 2, 2222, 7777, 77, 0, 0];
function _quickSort3Ways(arr) {
  quickSort3Ways(arr, 0, arr.length - 1);
}
function quickSort3Ways(arr, left, right) {
  if (left >= right) {
    return;
  }
  let lt = left,
    i = lt + 1,
    gt = right + 1;
  let temp = arr[left];
  while (i < gt) {
    if (arr[i] < temp) {
      swap(arr, i, lt + 1);
      lt++;
      i++;
    } else if (arr[i] > temp) {
      swap(arr, i, gt - 1);
      gt--;
    } else if (arr[i] == temp) {
      i++;
    }
  }
  swap(arr, left, lt);
  quickSort3Ways(arr, left, lt - 1);
  quickSort3Ways(arr, gt, right);
}
_quickSort3Ways.sortName = "三路快速排序";
module.exports = _quickSort3Ways;
