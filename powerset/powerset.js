// O(n*2^n) time | O(n*2^n) space
function powerset(array) {
    let subsets=[[]]

    for (const ele of array) {
        for (let i = 0; i < subsets.length; i++) {
            let currentSubset = subsets[i]
            subsets.push(currentSubset + [ele])
        }
    }
    return subsets;
}

console.log(powerset([1,2,3]))