// O(n^2)的排序算法
// 为什么要学--编码简单，易于实现，简单情景的首选
// 在一些特殊情况下，简单的排序算法更有效
// 简单的排序算法衍生出复杂的排序算法
// 作为子过程，改进复杂的算法
// 思路--每次找出当前最小的元素的位置--与当前第一的位置进行交换
const swap = require("../工具/交换");
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    // 记录当前最小元素的index
    let minIndex = i;
    for (let j = i; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    swap(arr, i, minIndex);
  }
  return arr;
}
selectionSort.sortName = "选择排序";
module.exports = selectionSort;
