// 用数组存储二叉堆--因为堆是一个完全二叉树
// 任意一个子节点都小于其父节点（最大堆），并不意味着层数越高数值越大
// 从1开始标记根节点（自上到下，自左到右的标上序列号）
// parent(i) = i/2
// left (i)= 2*i
// right (i)= 2*i + 1

// 定义一个最大堆
const swap = require("../工具/交换");
class MaxHeap {
  #data;
  #shiftUp(k) {
    while (k > 0 && this.#data[k] > this.#data[Math.ceil(k / 2) - 1]) {
      swap(this.#data, k, Math.ceil(k / 2) - 1);
      k = Math.ceil(k / 2) - 1;
      console.log(k, this.#data[Math.ceil(k / 2) - 1]);
    }
  }
  constructor(data) {
    this.#data = data;
  }
  isEmpty() {
    return this.#data.length == 0;
  }
  size() {
    return this.#data.length;
  }
  getData() {
    return this.#data;
  }
  insert(item) {
    this.#data.push(item);
    this.#shiftUp(this.#data.length - 1);
  }
}
// 数组从0开始--2i 2i-1（左） 2i（右）
const heap = new MaxHeap([62, 41, 30, 28, 16, 22, 13, 19, 17, 15]);
heap.insert(52);
console.log(heap.getData());
// 新插入的元素与父节点进行比较
