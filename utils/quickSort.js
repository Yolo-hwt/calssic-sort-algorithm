
/**
 * 以升序排列为例，快速排序就是每次找到一个轴点，小于它的交换到它左边，大于它的自然在右边
 * **在递归的过程中从局部有序直到全部有序**
 * 每次 **partition** 操作找到右边界元素合法位置，使右边界元素有序
 * 然后对左右两边进行快速排序，递归直到 **low<=high** 触发边界条件，达到局部有序，递归完全结束后所有局部构成全局有序
 * 以右边界为轴整理并返回整理后右边界有序位置
 * @param {Array} nums 
 * @param {Number} left 
 * @param {Number} right 
 * @param {Boolean} option 
 */
const partition = function (nums = [], left = 0, right = 0, option = true) {
    let index = left;
    for (let i = left; i < right; i++) {
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