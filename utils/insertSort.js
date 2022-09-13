/**
 * 
 * @param {*} nums 
 * @param {*} option 
 * @returns 
 */
const insertSort = function (nums = [], option = true) {
    if (nums.length <= 1) {
        return nums;
    }
    for (let i = 1; i < nums.length; i++) {
        //前置指针
        let preIndex = i - 1;
        //当前排序元素
        let cur = nums[i];
        //前置指针>=0且指向的元素符合移动要求（升序大于当前元素，降序小于）
        while (preIndex >= 0 && (option ? nums[preIndex] > cur : nums[preIndex] < cur)) {
            //指针元素后移
            nums[preIndex + 1] = nums[preIndex];
            //指针前移
            preIndex--;
        }
        //插入位置
        nums[preIndex + 1] = cur;
    }
    return nums;
}
// const test = [2, 3, 5, 6, 0, 1, 2, 3, 3, 5, 6, 7, 8, 10, 15, 2];
// console.log(insertSort(test, false));