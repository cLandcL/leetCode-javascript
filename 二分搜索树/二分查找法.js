// 二分查找--查找的是一个有序数组
// 如果找到target，返回对应的下标
// 如果没有找到target，返回-1

// [1,2,3,4,5,6,7] // mid=4 target=4.5 
let arr = [2, 6, 8, 9, 13, 15, 17]
let target = 9
function binarySearch(arr, target) {
    let l = 0, r = arr.length - 1
    while (l <= r) {
        let mid = l + (r - l) / 2
        if (arr[mid] == target) {
            return mid
        }
        // 目标元素  arr[mid+1,...,r]
        if (arr[mid] < target) {
            l = mid + 1
        } else {
            r = mid - 1
        }
    }
    return -1
}

console.log(binarySearch(arr, target));