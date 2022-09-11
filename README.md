# 排序算法

![image-20220831172203936](https://cdn.jsdelivr.net/gh/Yolo-hwt/PicGo-res/images/repo_sort_algorithm/image-20220831172203936.png)



![2.jpg](https://cdn.jsdelivr.net/gh/Yolo-hwt/PicGo-res/images/repo_sort_algorithm/21bd63358d604e9ebde08b61bb7ee5b5tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 冒泡排序

顾名思义，冒泡，相邻元素两两比较，每次遍历冒泡出一个元素

这里做了一点优化

如果在一次冒泡中没有元素的交换，即后续未排序列表已经有序了，则isSorted为true，退出循环

```js
//冒泡排序
const bubbleSort = function (nums) {
//冒泡次数，nums.length-1
//只要排列完倒数第二个元素，最后一个元素自动有序
    for (let i = 0; i < nums.length - 1; i++) {
    let isSorted = true;
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                isSorted = false;
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
            }
        }
    if (isSorted)
    break;
}
   
```

![3.jpg](https://cdn.jsdelivr.net/gh/Yolo-hwt/PicGo-res/images/repo_sort_algorithm/bb98997eab974429a6189c5f0c58f1c8tplv-k3u1fbpfcp-zoom-in-crop-mark3024000.webp)

## 选择排序

每次选择满足要求（最小/最大）的一项和当前指定位置项交换，直到列表尾部，全部有序

```js
const selectSort = function (nums) {
    let len = nums.length;
    let curIndex = null;
    //排序len-1次，最后一个自动有序
    for (let i = 0; i < len - 1; i++) {
        curIndex = i;
        //i之前有序，从i开始往后寻找符合要求数据
        for (let j = i + 1; j < len; j++) {
            curIndex = nums[j] < nums[curIndex] ? j : curIndex;
        }
        if (curIndex != i) {//若下标变化则交换
            [nums[curIndex], nums[i]] = [nums[i], nums[curIndex]]
        }
    }
}
```

## 快速排序

以升序排列为例，快速排序就是每次找到一个轴点，小于它的交换到它左边，大于它的自然在右边

**在递归的过程中从局部有序直到全部有序**

每次 **partition** 操作找到右边界元素合法位置，使右边界元素有序

然后对左右两边进行快速排序，递归直到 **low<=high** 触发边界条件，达到局部有序，递归完全结束后所有局部构成全局有序

```js
//快速排序
    const partition = function (arr, left, right) {
        let index = left;
        for (let i = left; i < right; i++) {
            if (arr[i] < arr[right]) {
                [arr[i], arr[index]] = [arr[index], arr[i]];
                index++;
            }
        }
        [arr[right], arr[index]] = [arr[index], arr[right]];
        return index;
    }
    const quickSort = function (arr, low, high) {
        if(low<high){
        let piovt = partition(arr, low, high);
        //左右两边都进行快速排序
        quickSort(arr, piovt + 1, high);
        quickSort(arr, low, piovt - 1); 
    	}  
    }
  
```

## 二分查找

二分法又可以被称为二分查找，它描述了在有序集合中搜索特定值的过程。广义的二分查找是将问题的规模尽可能的缩小到原有的一半。

二分查找（非递归实现）

```js
var binarySearch = function (nums, target) {
    let start = 0, end = nums.length - 1
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if (nums[mid] == target) {
            return mid
        } else if (nums[mid] > target) {
            end = mid - 1
        } else if(nums[mid] < target){
            start = mid + 1
        }
    }
    return -1
};
```

二分查找（递归实现）

```js
var binarySearch = function (nums, target, start, end) {
    if (start > end) {
        return -1;
    }
    let mid = Math.floor((start + end) / 2)
    if (nums[mid] === target) {
        return mid
    } else if (nums[mid] > target) {
        return binarySearch(nums, target, start, mid - 1)
    } else if (nums[mid] < target) {
        return binarySearch(nums, target, mid + 1, end)
    }
};
```

## 归并排序

1.将一个数组不断二分直到每个小组只有一个元素

2.然后在回溯的过程中不断调用merge合并各个对应的小组，使得每次合并之前各个小组内部保持有序

3.回溯到顶层，合并左右两个部分完成排序

![归并排序](https://cdn.jsdelivr.net/gh/Yolo-hwt/PicGo-res/images/repo_sort_algorithm/68747470733a2f2f706963342e7a68696d672e636f6d2f76322d63646461336631316336656662633031353737663563323961393036363737325f622e77656270.gif)

```js
function mergeSort(arr) { //采用自上而下的递归方法
　　var len = arr.length;
　　if(len < 2) {
　　　　return arr;
　　}
　　var middle = Math.floor(len / 2),
　　left = arr.slice(0, middle),
　　right = arr.slice(middle);
　　return merge(mergeSort(left), mergeSort(right));
}


function merge(left, right){
　　var result = [];
　　console.time('归并排序耗时');
　　while (left.length && right.length) {
　　　　if (left[0] <= right[0]) {
　　　　　　result.push(left.shift());
　　　　} else {
　　　　　　result.push(right.shift());
　　　　}
　　}

　　while (left.length){
　　　　result.push(left.shift());
　　}
　　while (right.length){
　　　　result.push(right.shift());
　　}
　　console.timeEnd('归并排序耗时');
　　return result;
}

```

