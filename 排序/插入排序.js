// 比较一次交换一次
// const swap = require("../工具/交换");
// function insertSort(arr) {
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
//       swap(arr, j, j - 1);
//     }
//   }
// }

// 复制一份当前位置的元素，查看该元素是否该放在当前位置（与当前位置的前一个元素进行比较）
// 将前一个位置的元素向后移动
// 插入排序法优化--处理近乎有序的数组时--算法负责度将变成O(n)

function insertSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let e = arr[i];
    let j;
    for (j = i; j > 0 && arr[j - 1] > e; j--) {
      arr[j] = arr[j - 1];
    }
    arr[j] = e;
  }
  return arr;
}
insertSort.sortName = "插入排序";
module.exports = insertSort;
