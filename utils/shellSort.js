/**
 * 
 * @param {Array} nums 
 * @param {Boolean} option 
 * @returns 
 */
const shellSort = function (nums, option = true) {
    let len = nums.length, temp, gap = 1;
    while (gap < len / 3) {         //动态定义间隔gap
        gap = gap * 3 + 1;
    }
    for (gap; gap > 0; gap = Math.floor(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = nums[i];
            let j = i - gap
            for (; j >= 0 && (option ? (nums[j] > temp) : (nums[j] < temp)); j -= gap) {
                nums[j + gap] = nums[j];
            }
            nums[j + gap] = temp;
        }
    }
    return nums
}
// const test = [2, 3, 5, 6, 0, 1, 2, 3, 3, 5, 6, 7, 8, 10, 15, 2];
// console.log(shellSort(test, false));