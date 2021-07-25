# Selection SOrt

Algorithm

1. We divide the array in two parts: a sorted subarry(starts empty), and an unsorted subarray (starts full)
1. In each iteration we pick the smalled element from the unsorted subarray and append it to the sorted subarray.

## Laymans Terms

You start with the two arrays. The initial arry(unsorted) and the empty sorted subarray. You find the smallest number in the unsorted array and move it to the sorted subarray.

Example

`[9,11,3,22,15,6,42,5]`
| Sorted | Unsorted |
| ----------- | :-----------: |
| [] | [9,11,3,22,15,6,42,5] |  
| [3] | [11,9,22,15,6,42,5] |
| [3,5] | [9,22,15,6,42,11] |  
| [3,5,6] | [22,15,9,42,11] |
| [3,5,6,9] | [15,22,42,11] |
| [3,5,6,9,11] | [22,42,15] |
| [3,5,6,9,11,15] | [42,22] |
| [3,5,6,9,11,15,22] | [42] |
| [3,5,6,9,11,15,22,42] | [] |

## Complexity

Iterate through the n the size of the array for the outer loop. The inner loop will iterate n + (n - 1) + n + n (n - 2) + ... + 1 = n \*(n + 1)/2. Essential the time complexity is O(n^2) - Quadratic

The space is holding one array with no new element creations. O(1)
