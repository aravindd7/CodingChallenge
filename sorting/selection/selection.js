function selectionSort(array){
    // Iterate entire array (outer loop)
    // Iterate the size of the array
    for (let i = 0; i < array.length - 1; i++){
        let min = i;
        // Iterates through the array again to find 
        // the smallest element (inner loop)
        // Checks every element in the array
        for (let j = i + 1; j < array.length; j++) {
            // Checks if any value in the array is less 
            // than the current minimum
            if (array[j] < array[min]) {
                min = j
            }
        }
        // Once minimum value has been set we swap the position 
        // of the new array 
        swap(array, i, min)
    }
    return array
}

// Change the order of the two elements
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j]
    array[j] = temp;
}

selectionSort([85,4,22,16,33,9,11,1,19,8,6,7])