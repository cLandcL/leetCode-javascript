// 基本思想
// 每次从当前的数组中选取一个数，把这个数放到它应该在的位置，
// 该数左边的都比它小，右边的都比他大--递归
// 核心：如何把选定的元素放到正确的位置
// 数组的第一个元素 left
// p_index记录分解点啊

// 数组划分成三部分---v，小于v，大于v的部分
const swap = require("../工具/交换");
const random = require("../工具/随机数");
function _quickSort(arr) {
  quickSort(arr, 0, arr.length - 1);
  return arr;
}
function quickSort(arr, low, high) {
  // 返回一个索引值--
  // 小于15的时候可以使用插入排序算法优化
  if (low >= high) {
    return;
  }
  let p = partition(arr, low, high);
  quickSort(arr, low, p - 1);
  quickSort(arr, p + 1, high);

  // 划分两部分--划分大于标签元素的数据和小于标签元素的数据
}
function partition(arr, low, high) {
  // arr[l...p-1]<arr[p],arr[p+1...r]>arr[p]
  // 解决快速排序的平衡问题---当数组近乎有序的情况时，快速排序会退化成O(n^2)
  let rand = random(high, low); //随机选择一个元素作为标定点
  swap(arr, low, rand);
  let v = arr[low];
  let p_index = low;
  for (let i = low + 1; i <= high; i++) {
    if (arr[i] <= v) {
      swap(arr, i, p_index + 1);
      p_index++;
    }
  }
  swap(arr, p_index, low);
  return p_index;
}
_quickSort.sortName = "快速排序";
module.exports = _quickSort;
