function binarySearch(array, target) {
    let lo = 0;
    let high = array.length - 1;
    while (lo < high) {
        let mid = (lo + high + 1) / 2;
        if (target > array[mid]) {
            high = mid - 1; // search the right half [lo, mid -1]
        } else {
            lo = mid; // search the left half [mid, high]
        } 
    }
        if (array[lo] === target) {
            return lo;
        } else {
        return -1;
    }
}

let array = [1,3,4,6,7,8,11,15,22,25,33]
let target = 4
binarySearch(array, target)