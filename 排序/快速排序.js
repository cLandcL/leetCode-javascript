// 基本思想
// 每次从当前的数组中选取一个数，把这个数放到它应该在的位置，
// 该数左边的都比它小，右边的都比他大--递归
// 核心：如何把选定的元素放到正确的位置
// 数组的第一个元素 left
// j记录分解点啊

const swap = require("../工具/交换");

// 当前元素i
const arr = [4, 8, 7, 5, 1, 3, 6, 2];

function quickSort(arr, low, high) {
  // 返回一个索引值
  if (low >= high) return;
  let p = partition(arr, low, high);
  quickSort(arr, low, p - 1);
  quickSort(arr, p + 1, high);

  // 划分两部分--划分大于标签元素的数据和小于标签元素的数据
}
function partition(arr, low, high) {
  // 使得arr[l...p-1]<arr[p],arr[p+1...r]>arr[p]
  let t = low;
  let v = arr[low];
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] < v) {
      swap(arr, i, t + 1);
      t++;
    }
  }
  swap(arr, low, t);
  console.log(t);
  return t;
}
quickSort(arr, 0, arr.length - 1);
console.log(arr);
quickSort.sortName = "快速排序";
module.exports = quickSort;
