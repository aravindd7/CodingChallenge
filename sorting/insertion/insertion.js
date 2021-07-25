function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        // Ensures the array is in array bounds
        // Checks if the current value is less than
        // the value to the left
        // J Subtracts wiil continue to check the first value in
        // the new array
        for (let j = i; j > 0 && array[j] < array[j - 1]; j--) {
            swap(array, j, j - 1)
        }
    }
    console.log(array)
}

// Change the order of the two elements
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j]
    array[j] = temp;
}

insertionSort([8,4,2,6,3,9,11,1,2])