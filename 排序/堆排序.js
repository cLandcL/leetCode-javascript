const MaxHeap = require("../堆/最大堆");
const arr = [4, 2, 78, -10, 44, 0, 23, 10, 46, 20, 21];
function heapSort(arr) {
  //算法复杂度O(nlog(n))
  let heap = new MaxHeap(arr);
  heap.turnHeap();
  //   for (let i = 0; i < arr.length; i++) {
  //     heap.insert(arr[i]); //将数组组成最大堆
  //   }
  const tempArr = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // arr[i] = heap.extractMax();
    tempArr[i] = heap.extractMax(); //取堆的最大值
  }
  return tempArr;
}
console.log(heapSort(arr));

// 没有子节点的元素，本身就是最大堆--元素下标从1开始时
// 数组构建的树，最后一个不是叶子的元素 Math.ceil(数组的长度/2)
