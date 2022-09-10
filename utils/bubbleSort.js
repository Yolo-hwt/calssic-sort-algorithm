/**
 * 
 * @param {Boolean} option 
 * true: ascending  false: descending
 * @param {Array,Number,String} nums 
 * @returns {Array} 
 */
const bubbleSort = function (nums = [], option = true) {
    if (nums.length == 0) {
        return []
    }
    let len = nums.length;
    //len-1：最后一个元素自然有序，只需循环到i=len-1-1
    //外层循环控制，每次循环有序一个数据
    for (let i = 0; i < len - 1; i++) {
        let isSort = true;
        //len-1-i：两两比较故只需循环到有序部分之前的第二个元素
        for (let j = 0; j < len - 1 - i; j++) {
            if (option) {
                if (nums[j] > nums[j + 1]) {
                    isSort = false;
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                }
            } else {
                if (nums[j] < nums[j + 1]) {
                    isSort = false;
                    [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]]
                }
            }
        }
        if (isSort) {
            break;
        }
    }
    return nums
}
