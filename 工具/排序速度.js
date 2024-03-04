// 算法名字，函数
// 测试数组是否排序成功
// 返回多少秒
const fs = require("fs");
const path = require("path");
const random = require("./随机数");
const swap = require("./交换");

function testSort(sortFnList, arr) {
  sortFnList.forEach(sortFn => {
    if (typeof sortFn !== "function") throw new Error("参数错误");
    let startTime = new Date().getTime();
    sortFn(arr);
    let endTime = new Date();
    let sortTime = endTime - startTime;
    console.log(`${sortFn.sortName}算法花了${sortTime}毫秒~~~~~~~~~~`);
  });
}

// 随机数组
function randomArr(count) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(Math.floor(i * Math.random() * 10));
  }
  return arr;
}

// 近乎有序的数组
function nearlyArr(count, swapTime) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    arr.push(i);
  }
  for (let i = 0; i < swapTime; i++) {
    let x = Math.floor(Math.random() * count);
    let y = Math.floor(Math.random() * count);
    console.log(x, y);
    swap(arr, x, y);
  }
  return arr;
}

// 随机范围内数组
function randomRangeArr(count, min, max) {
  const arr = [];
  for (let i = 0; i < count; i++) {
    let randomNum = random(min, max);
    arr.push(randomNum);
  }
  return arr;
}

// 校验数组是否排序成功
function isSorted(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
}
// 读取排序文件
function readSortFile() {
  const directoryPath = "../排序";
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      throw err;
    } else {
      const jsFiles = files.filter(file => path.extname(file) === ".js");
      let sortFunction = [];
      jsFiles.forEach(file => {
        sortFunction.push(require(directoryPath + "/" + file));
      });
      testSort(sortFunction, randomRangeArr(30000, 0, 10));
    }
  });
}
readSortFile();
