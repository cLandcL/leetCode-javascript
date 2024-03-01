// 比较一次交换一次
const swap = require("../工具/交换");
function insertSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0 && arr[j] < arr[j - 1]; j--) {
      swap(arr, j, j - 1);
    }
  }
}

insertSort.sortName = "插入排序";
module.exports = insertSort; 
