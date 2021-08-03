# Merge Sort

One of the most commonly used sorting algorithm due to the effecient time complexity.

1. We divide the array in two halves
1. Recursively sort the two halves
1. Merge them back together

Example

```
    [7,3,4,8,1,5,3,1]
    [7,3,4,8]         [1,5,3,1]
    [7,3]    [4.8]    [1,5]     [3,1]
    [7] [3]  [4] [8]  [1] [5]  [3] [1]

    [3,7]   [4,8]     [1,5]   [1,3]
    [3,4,7,8]          [1,1,3,5]
    [1,1,3,3,4,5,7,8]
```

## Complexity

Time Complexity - O(nlogn) Two pointers and only one for loop that halves the search by two each time.
Space Complexity - Create a new array O(n)
