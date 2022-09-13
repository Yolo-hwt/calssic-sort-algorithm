# 排序算法

---

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


## 插入排序

![img](https://cdn.jsdelivr.net/gh/Yolo-hwt/PicGo-res/images/repo_sort_algorithm/16ab01953a298248tplv-t2oaga2asx-zoom-in-crop-mark3024000.webp)

**思想**

* **通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入。**
* **插入排序因而在从后向前扫描过程中，需要反复把已排序元素逐步向后挪位，为最新元素提供插入空间。**

```js
const insertSort=function(nums){
let len=nums.length;
    for(let i=1;i<len;i++){
        let cur=nums[i];
        let preIndex=i-1;
        while(preIndex>=0&&nums[preIndex]>cur){
            nums[preIndex+1]=nums[preIndex]
            preIndex--;
        }
        nums[preIndex+1]=cur;
    }
}
```

## 希尔排序

**思想**

* **先将整个待排序的记录序列分割成为若干子序列。**
* **分别进行直接插入排序。**
* **待整个序列中的记录基本有序时，再对全体记录进行依次直接插入排序。**

![img](https://cdn.jsdelivr.net/gh/Yolo-hwt/PicGo-res/images/repo_sort_algorithm/1674859d8eb3ada3tplv-t2oaga2asx-zoom-in-crop-mark3024000.webp)

```js
const shellSort=function(nums){
let len=nums.length,gap=1,temp;
    //动态调整gap
    while(gap<len/3){
        gap=gap*3+1;
    }
    for(gap;gap>0;gap=Math.floor(gap/3)){
        for(let i=gap;i<len;i++){
            temp=nums[i];
            let j=i-gap;
            //在本次gap划分中找到temp的合适位置
            for(;j>=0&&nums[j]>temp;j-=gap){
                nums[j+gap]=nums[j]
            }
            nums[j+gap]=temp;
        }
    }
    return nums
}
```

**第一，希尔排序是原地排序算法吗 ？ **

**希尔排序过程中，只涉及相邻数据的交换操作，只需要常量级的临时空间，空间复杂度为 O(1) 。所以，希尔排序是** `原地排序`算法。

**第二，希尔排序是稳定的排序算法吗 ？ **

**我们知道，单次直接插入排序是稳定的，它不会改变相同元素之间的相对顺序，但在多次不同的插入排序过程中，相同的元素可能在各自的插入排序中移动，可能导致相同元素相对顺序发生变化。 因此，希尔排序** `不稳定`。

**第三，希尔排序的时间复杂度是多少 ？**

****最佳情况：T(n) = O(n logn)。 最差情况：T(n) = O(n (log(n))2)。 平均情况：T(n) = 取决于间隙序列。****

## 堆排序

**堆排序**
**  堆排序基本介绍**

* **堆排序是利用堆这种数据结构而设计的一种排序算法，****堆排序是一种选择排序**，它的最坏，最好，平均时间复杂度均为O(nlogn)，它也是不稳定排序。
* **堆是具有以下性质的完全二叉树：每个结点的值都大于或等于其左右孩子结点的值，称为大顶堆, 注意 : 没有要求结点的左孩子的值和右孩子的值的大小关系。**
* **每个结点的值都小于或等于其左右孩子结点的值，称为小顶堆**

**堆排序的基本思想**
**1.将待排序序列构造成一个大顶堆**
**2.此时，整个序列的最大值就是堆顶的根节点。**
**3.将其与末尾元素进行交换，此时末尾就为最大值。**
**4.然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了。**

**可以看到在构建大顶堆的过程中，元素的个数逐渐减少，最后就得到一个有序序列了.**

**二叉树预备知识**

**最后一个非叶子结点：N/2-1向下取整（Math.floor(arr.length/2)-1）**

**N结点的左子树：2*N+1**

**N结点的右子树：2*N+2**

```js
function heapSort(arr) {
    let temp;
    //1.将无序序列构成一个堆，根据升序降序需求选择大顶堆或小顶堆
    //最后一个值的序号为arr.length-1，根据顺序存储二叉树，
    //n节点的左子树为2*n+1,右子树为2*n+2，
    //那么最后一个非叶子节点的值应该为Math.floor((arr.length-1-1)/2) 
    //= Math.floor((arr.length)/2 -1)
    //=Math.floor(arr.length / 2) - 1
    for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
        adjustHeap(arr, i, arr.length)
    }
    //2.将堆顶元素与末尾元素交换，将最大元素“沉”到数组末端
    //3.重新调整结构，使其满足堆条件，然后继续交换堆顶元素和当前末尾元素,
    //  反复执行调整+交换步骤，直到整个序列有序
    for (let j = arr.length - 1; j > 0; j--) {
        //交换
        temp = arr[j];
        arr[j] = arr[0];
        arr[0] = temp;
        adjustHeap(arr, 0, j);
    }
}

//将一个数组(二叉树),调整成一个大顶堆
/**
 * 将以i对应的非叶子节点的树调整成一个大顶堆
 * @param {要调整的数组} arr 
 * @param {表示非叶子节点在数组中的索引} i 
 * @param {对多少个元素进行调整，length是在逐渐减少} length 
 */
function adjustHeap(arr, i, length) {
    let temp = arr[i];//先取出当前元素的值，保存在临时变量
    //开始调整
    //说明 调整非叶子节点的顺序时从下到上，从左到右
    //从最下层开始，逐层将大的值往上提
    //1.k=i*2+1是i节点的左子节点
    for (let k = i * 2 + 1; k < length; k = k * 2 + 1) {
        if (k + 1 < length && arr[k] < arr[k + 1]) {
            //说明左子节点的值小于右子节点的值
            k++//k指向右子节点
        }
        if (arr[k] > temp) {
            //如果子节点大于父节点
            arr[i] = arr[k]//把较大的值赋给当前节点
            //i指向k，继续循环比较，使的以当前i顶点的二叉树满足大顶堆的条件
            //k为i节点的左子节点或右子节点，因为从下往上调整的，
            //我们可以认为左子节点树或右子节点树已经是一个大顶堆，
            //当这个大顶堆的顶点被某值X替换后，大顶堆被破坏结构，
            //此时我们需要从原来的大顶堆右边节点树找到一个位置，将X放入该位置，从而重新形成大顶堆结构
            //其实是从把最右边的一排节点逐层上移，X被安放在最右边的一排节点中合适的位置
            i = k;
        } else {
            break;//调整非叶子节点的顺序时从下到上，从左到右,所以可以中断
        }
        //当for循环结束后，我们已经将以i为父节点的树的最大值，放在了最顶上（局部）
        arr[i] = temp;//将temp值放到调整后的位置
    }
}
```
