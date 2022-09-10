

/**
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