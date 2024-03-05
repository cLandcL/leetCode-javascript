function mergeSortButtom(arr) {
  // 自底向上的思想--第一次1个--第二次2个--第三次划分成8个元素--以此类推
  // 对进行merge的元素进行遍历
  //分区域
  for (let size = 1; size <= arr.length; size += size) {
    for (let i = 0; i + size < arr.length; i += 2 * size) {
      merge(arr, i, i + size - 1, Math.min(i + 2 * size - 1, arr.length - 1));
    }
  }
}
const arr = [8, 4, 7, 5, 3, 1, 6, 2, 9];

function merge(arr, left, mid, right) {
  let tempArr = [];
  for (let i = left; i <= right; i++) {
    tempArr[i - left] = arr[i];
  }
  let i = left,
    j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      //左数组的位置大于mid，说明右边的数组没有归并完
      arr[k] = tempArr[j - left];
      j++;
    } else if (j > right) {
      //右边数组的位置大于right，说明左边的数组没有归并完
      arr[k] = tempArr[i - left];
      i++;
    } else if (tempArr[i - left] < tempArr[j - left]) {
      arr[k] = tempArr[i - left];
      i++;
    } else {
      arr[k] = tempArr[j - left];
      j++;
    }
  }
}
mergeSortButtom.sortName = "归并排序";
module.exports = mergeSortButtom;
