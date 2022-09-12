/**
 * 堆排序
 * @param {Array} arr 
 * @param {Boolean} option 
 * @returns 
 */
const heapSort = function (arr, option = true) {
    //从第一个非叶子节点从下往上初始化构建顶堆
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        ajustHeap(arr, i, arr.length, option);
    }
    //每次交换堆顶元素，并重新调整堆结构
    for (let j = arr.length - 1; j > 0; j--) {
        [arr[0], arr[j]] = [arr[j], arr[0]];
        ajustHeap(arr, 0, j, option);
    }
    return arr;
}

const ajustHeap = function (arr, index, length, option = true) {
    let indexTemp = arr[index];
    for (let k = 2 * index + 1; k < length; k = 2 * k + 1) {
        //根据option来判断
        //true:将k指向左右孩子中最大的
        //false：指向最小的
        if (k + 1 < length && (option ? (arr[k] < arr[k + 1]) : (arr[k] > arr[k + 1]))) {
            k++;
        }
        //与当前的index父节点相比较，是否需要交换
        if (option ? (arr[k] > indexTemp) : (arr[k] < indexTemp)) {
            arr[index] = arr[k];
            index = k;
        } else {
            //无需交换则可退出循环，
            //以true升序排序为例，进入这个else证明子节点均小于父节点，即以左右子节点为树结构的所有后续结点均小于父节点，无需再继续比较
            //因为初始化时侯已经将整体结构整理完毕，后续只是在移动根元素和最后一个元素的调整
            break;
        }
        arr[index] = indexTemp;
    }
}
// const test = [2, 3, 5, 6, 0, 1, 2, 3, 3, 5, 6, 7, 8, 10, 15, 2];
// console.log(heapSort(test, false));