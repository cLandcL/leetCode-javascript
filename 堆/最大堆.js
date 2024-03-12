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
    }
  }
  #shiftDown(k) {
    // 1.删除根结点的元素，将最后一个元素放到根结点的位置
    // 2.比较左右节点（将左右节点中大的元素与根结点进行替换）
    // 向下移动父节点
    // 完全二叉树中必定有左孩子
    let len = this.#data.length - 1;
    while (2 * k <= len) {
      let j;
      if (2 * k == 0) {
        j = 0;
      } else {
        j = 2 * k - 1;
      }
      if (j <= len && this.#data[j] < this.#data[j + 1]) {
        // console.log("j:", j, "data[j]:", this.#data[j], "data[j+1]:", this.#data[j + 1]);
        j = j + 1;
      }
      if (this.#data[k] >= this.#data[j]) break;
      swap(this.#data, k, j);
      k = j;
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
  // 插入元素
  insert(item) {
    this.#data.push(item);
    this.#shiftUp(this.#data.length - 1);
  }
  extractMax() {
    let result = this.#data[0];
    swap(this.#data, 0, this.#data.length - 1);
    this.#data.pop();
    this.#shiftDown(0);
    return result;
  }
  turnHeap() {
    // 将数组整合成堆
    for (let i = Math.floor(this.#data.length / 2) - 1; i >= 0; i--) {
      this.#shiftDown(i);
    }
    return this.#data;
  }
}
// 数组从0开始--2i 2i-1（左） 2i（右）
// const heap = new MaxHeap();
const heap = new MaxHeap();
// console.log(heap.turnHeap());
module.exports = MaxHeap;
// 新插入的元素与父节点进行比较
