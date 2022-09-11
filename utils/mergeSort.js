/**
 * 1.将一个数组不断二分直到每个小组只有一个元素
 * 2.然后在回溯的过程中不断调用merge合并各个对应的小组，使得每次合并之前各个小组内部保持有序
 * 3.回溯到顶层，合并左右两个部分完成排序
 * 
 * @param {Array} leftNums 
 * @param {Array} rightNums 
 * @param {Boolean} option 
 * @returns 
 */
const merge = function (leftNums = [], rightNums = [], option = true) {
    let result = [];
    while (leftNums.length && rightNums.length) {
        if (option) {
            //升序
            result.push(leftNums[0] < rightNums[0] ? leftNums.shift() : rightNums.shift());
        } else {
            //降序
            result.push(leftNums[0] > rightNums[0] ? leftNums.shift() : rightNums.shift());
        }
    }
    while (leftNums.length) {
        result.push(leftNums.shift())
    }
    while (rightNums.length) {
        result.push(rightNums.shift())
    }
    return result;
}
const mergeSort = function (nums = [], option = true) {
    if (nums.length <= 1) return nums;
    let mid = Math.floor(nums.length / 2);
    let mergeLeft = mergeSort(nums.slice(0, mid), option);
    let mergeRight = mergeSort(nums.slice(mid), option);
    return merge(mergeLeft, mergeRight, option);
}

// const test = [2, 3, 5, 6, 0, 1, 2, 3, 3, 5, 6, 7, 8, 10, 15, 2];
//开辟了新的内存空间保存结果
// console.log(mergeSort(test));
