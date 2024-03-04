const swap = require("../工具/交换");
let arr = [3, 7, 1, 2, 4, 9, 5, 6, 8];
// 第一版
// function bubleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] < arr[j - 1]) {
//         swap(arr, j, j - 1);
//       }
//     }
//   }
//   return arr;
// }

// 优化
function bubleSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  for (let i = 0; i < arr.length; i++) {
    let flag = false;
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] < arr[j - 1]) {
        swap(arr, j, j - 1);
        flag = true;
      }
    }
    // 如果这次循环没有数字交换，则已排好序
    if (!flag) return arr;
  }
  return arr;
}
console.log(bubleSort(arr));
bubleSort.sortName = "冒泡排序";
module.exports = bubleSort;

// 希尔排序--每次尝试与第h个元素比较
