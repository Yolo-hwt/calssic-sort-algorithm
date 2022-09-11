

/**
 * 每次选择满足要求（最小/最大）的一项和当前指定位置项交换，直到列表尾部，全部有序
 * 
 * @param {Array} nums 
 * @param {Boolean} option 
 */
const selectTionSort = function (nums = [], option = true) {
    if (nums.length == 0) return [];
    let len = nums.length;
    let index = null;
    for (let i = 0; i < len - 1; i++) {
        index = i
        for (let j = i; j < len; j++) {
            index = option ? (nums[j] < nums[index] ? j : index) : (nums[j] > nums[index] ? j : index);
        }
        if (index != i) {
            [nums[index], nums[i]] = [nums[i], nums[index]]
        }

    }
    return nums;
}
// const test = [2, 3, 5, 6, 0, 1, 2, 3, 3, 5, 6, 7, 8, 10, 15, 2];
// selectTionSort(test, false)
// console.log(test);