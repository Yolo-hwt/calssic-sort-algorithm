/**
 * 二分法又可以被称为二分查找，它描述了在有序集合中搜索特定值的过程。
 * 广义的二分查找是将问题的规模尽可能的缩小到原有的一半。
 * @param {Array} nums 
 * @param {Number} target 
 * @returns 
 */
//非递归实现
const binarySearch = function (nums = [], target) {
    if (nums.length <= 0) {
        return -1;
    }
    if (nums.length == 1) {
        return nums[0] == target ? 0 : -1;
    }
    let start = 0, end = nums.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) >> 1);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            start = mid + 1;
        } else if (nums[mid] > target) {
            end = mid - 1;
        }
    }
    return -1;
}
/**
 * 
 * @param {Array} nums 
 * @param {Number} target 
 * @param {Number} left 
 * @param {Number} right 
 * @returns 
 */
//递归实现
const binarySearch_recursion = function (nums = [], target, left = 0, right) {
    if (nums.length <= 0) {
        return -1;
    }
    if (nums.length == 1) {
        return nums[0] == target ? 0 : -1;
    }
    if (right == undefined || right == null) {
        right = nums.length;
    }
    if (left <= right) {
        let mid = Math.floor((left + right) >> 1);
        if (nums[mid] == target) {
            return mid;
        } else if (nums[mid] < target) {
            return binarySearch_recursion(nums, target, mid + 1, right);
        } else {
            return binarySearch_recursion(nums, target, left, mid - 1);
        }
    }
    return -1;
}
// const test = [1, 3, 5, 6, 7, 8, 9, 11];
// console.log(binarySearch_recursion(test, 1));