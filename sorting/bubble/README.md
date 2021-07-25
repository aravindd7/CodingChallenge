# Bubble Sort

1. Traverses the array and compare two adjacent elements.
1. If they are in the wrong order swap them.
1. Repeat while array not sorted.

Example

`[7,5,9,15,2,28,11,3]`
`[5,7,9,15,2,28,11,3]`
`[5,7,9,2,15,28,11,3]`
`[5,7,9,2,15,11,28,3]`
`[5,7,9,2,15,11,3,28]`
`Iteration one over entire array`
`[5,7,9,2,15,11,3,28]`
`[5,7,2,9,15,11,3,28]`
`[5,7,2,9,11,15,3,28]`
`[5,7,2,9,11,3,15,28]`
`Iteration two over entire array`
`[5,7,2,9,11,3,15,28]`
`[5,2,7,9,11,3,15,28]`
`[5,2,7,9,3,11,15,28]`
`Iteration three over entire array`
`[5,2,7,9,3,11,15,28]`
`[2,5,7,9,3,11,15,28]`
`[2,5,7,3,9,11,15,28]`
`Iteration four over entire array`
`[2,5,7,3,9,11,15,28]`
`[2,5,3,7,9,11,15,28]`
`Iteration five over entire array`
`[2,5,3,7,9,11,15,28]`
`[2,3,5,7,9,11,15,28]`

## Complexity

Only space used is the array size. O(1)

With one while loop we will sort through the array n times. We will also complete a for loop n times for the length of the array.

Quadratic
