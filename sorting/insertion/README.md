# Insertion Sort

1. We divide the array in two parts: a sorted prefix (starts empty), and an unsorted suffix (start full)
1. In each iteration we pick the first element from the unsorted subarray and insert it to the correct position in the sorted subarray.

## Laymans Terms

You start with the two arrays. The initial arry(unsorted) and the empty sorted prefix. You start with moving the array index at position 0 and push it into the sorted (empty) array. Once the value enters the sorted array you compare the value with the values to the left of the value. If the value is smaller you swap the position. Repeat until the last value cannot be swapped.

Example

`[8,4,2,6,3,9]`
| Sorted | Unsorted |
| ----------- | :-----------: |
| [] | [8,4,2,6,3,9] |  
| [8] | [4,2,6,3,9] |
| [4,8] | [2,6,3,9] |  
| [2,4,8] | [6,3,9] |
| [2,4,6,8] | [3,9] |
| [2,3,4,6,8] | [9] |
| [2,3,4,6,8,9] | [] |

## Complexity

Iterate through the n the size of the array for the outer loop. The inner loop will iterate 1 + 2 + 3 + ... + n = n*(n + 1)/2. Essential the time complexity is O(n^2) - Quadratic

The space is holding one array with no new element creations. O(1)

