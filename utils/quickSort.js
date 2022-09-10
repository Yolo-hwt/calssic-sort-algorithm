
/**
 * 以右边界为轴整理并返回整理后右边界有序位置
 * @param {Array} nums 
 * @param {Number} left 
 * @param {Number} right 
 * @param {Boolean} option 
 */
const partition = function (nums = [], left = 0, right = 0, option = true) {
    let index = left;
    for (i = left; i < right; i++) {
        if (option) {
            if (nums[i] < nums[right]) {
                [nums[index], nums[i]] = [nums[i], nums[index]];
                index++;
            }
        } else {
            if (nums[i] > nums[right]) {
                [nums[index], nums[i]] = [nums[i], nums[index]];
                index++;
            }
        }
    }
    [nums[index], nums[right]] = [nums[right], nums[index]];
    return index;
}
/**
 * 
 * @param {Array} nums 
 * @param {Number} low 
 * @param {Number} high 
 * @param {Boolean} option 
 */
const quickSort = function ({ nums = [], low = 0, high, option = true } = {}) {
    if (nums.length == 0) return [];
    if (high == undefined || high == null) {
        high = nums.length - 1;
    }
    if (low < high) {
        let piovt = partition(nums, low, high, option);
        quickSort({ nums, low, high: piovt - 1, option });
        quickSort({ nums, low: piovt + 1, high, option });
    }
    return nums;
}
// const test = [2, 3, 5, 6, 0, 1, 2, 3, 3, 5, 6, 7, 8, 10, 15, 2];
// quickSort({ nums: test, option: true })
// console.log(test);