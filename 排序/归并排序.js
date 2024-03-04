// 归并排序法--思路

const arr = [8, 4, 5, 7, 1, 3, 6, 2];
// 分 8,4,5,7  && 1,3,6,2  --将数组分成一半
// 分 8,4 && 5,7 -- 1,3 && 6,2 -- 将左边的数组排序 --（先排序，再归并）
// 分 8 4 5 7 1 3 6 2
// 治 4,8  5,7  1,3  2,6
// 治 4,5,7,8 && 1,2,3,6

// 临时存储区temp--缺点
// left  4,5,7,8   leftIndex = 0
// right 1,2,3,6   rightIndex = 0
// 合 1 rightIndex=1 leftIndex=0
// 合 1,2

// 对arr[l...r)的范围进行排序
function _mergeSort(arr) {
  return mergeSort(arr, 0, arr.length - 1);
}
function mergeSort(arr, left, right) {
  // 分
  if (left >= right) return; //当前数据为空
  let mid = Math.floor((left + right) / 2);
  mergeSort(arr, left, mid);
  mergeSort(arr, mid + 1, right);
  // 合
  merge(arr, left, mid, right);
  return arr;
}

// [left...mid]和 [mid+1...right]两部分合并
function merge(arr, left, mid, right) {
  let tempArr = [];
  for (let i = left; i <= right; i++) {
    tempArr[i - left] = arr[i];
  }
//   console.log(tempArr);
  let i = left,
    j = mid + 1;
  for (let k = left; k <= right; k++) {
    if (i > mid) {
      arr[k] = tempArr[j - left];
      j++;
    } else if (j > right) {
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
_mergeSort(arr);
console.log(_mergeSort(arr));
_mergeSort.sortName = "归并排序";
module.exports = _mergeSort;
