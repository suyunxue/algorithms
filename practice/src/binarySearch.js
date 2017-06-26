// 迭代版本
function binarySearch(arr, v, low, high) {
    while(low <= high) {
        mid = [low + high] / 2;
        if (v == arr[mid]) {
            return mid;
        } else if (v > arr[mid]) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return null;
}

// 递归版本
function binarySearch(arr, v, low, high) {
    if (low > high) {
        return null;
    }
    mid = (low + higt) / 2;
    if (arr[mid] === v) {
        return mid;
    } else if (arr[mid] > v) {
        return binarySearch(arr, v, low, mid - 1);
    } else {
        return binarySearch(arr, v, mid + 1, high);
    }
}