function sort (array, aux, lo, hi){
    if (hi <= lo) return;
    let mid = (lo + hi) / 2;
    // array - 1 recursive sort function for low to mid
    sort(array, aux, lo, mid)
    // array - 2 recursive sort function for mid to high
    sort(array, aux, mid + 1, hi)
    // merge those two halves back into one array
    mergeSort(array, aux, lo, mid, hi)

}
function mergeSort (array, aux, lo, mid, hi) {
    for (let i = 0; i <= hi; i++) {
        aux[i] = array[i]
    }
    let i = lo;
    let j = mid + 1
    for (let k = lo; k <= hi; k++) {
        if (i > mid) {
            array[k] = aux[j];
            j++;
        }
        else if (j > hi) {
            array[k] = aux[i];
            j++;
        }
        else if (aux[j] < aux[i]) {
            array[k] = aux[j];
            j++;
        } else {
            array[k] = aux[i];
            i++;
        }
    }
}

