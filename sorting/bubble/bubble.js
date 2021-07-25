class BubbleSort {
    constructor() {

    }
}


function bubbleSort(array) {
    // Repeat function 
    while(true) {
        // Gives the ability to Exit the loop
        let swapped = false;
        // Iterate the array to the last element not array size
        for (let i = 0; i < array.length - 1; i++) {
            // Checks if elements are in the correct order
            // Is the larger element on the right
            if (array[i + 1] < array[i]) {
                // Swap helper function
                swap(array, i , i +1);
                // Keeps up in the loop as long as their are
                // elements that need to swap. If their are no
                // elements to swap you will not enter the if statement.
                swapped = true;
            }
        }
        // Exit while loop if we stop swapping elements
        // in other words the array is sorted
        if (!swapped) return array;
    }
}

// Change the order of the two elements
function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j]
    array[j] = temp;
}


bubbleSort([105,8,4,22,16,3,9,11,1,19,8,6,7])
