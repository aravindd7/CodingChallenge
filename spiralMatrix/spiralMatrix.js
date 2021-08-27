function spiralOrder(k, result) {
    console.log(k)
    if (k.length == 0) return result;
    //get first row
    result = result.concat(k.shift());
    
    k.forEach(function(row) {
        //gets the last element of each row
        result.push(row.pop());
    });

    //get the remain elements in the last row then reverses it
    result = result.concat(k.pop().reverse())

    let temp = [];
    k.forEach(function(row) {
        //gets the last element of each row
        temp.push(row.shift())
    }) 

    result = result.concat(temp.reverse());

    return spiralOrder(k, result)
}

console.log.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]], []))

/*
Given a 2D matrix, return all elements of the matrix in spiral order.

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ],
 [ 10, 11, 12]
]

Output: [1, 2, 3, 6, 9, 12, 11, 10, 7, 4, 5, 8]
*/

function printSpiralOrder(input, result)
{
  if (input.length == 0)
  {
    return result;
  }

  result = result.concat(input.shift());

  input.forEach(function(row)
  {
    result.push(row.pop());
  });

  result = result.concat(input.pop().reverse());

  var temp = [];

  input.forEach(function(row)
  {
    temp.push(row.shift());
  });

  result = result.concat(temp.reverse());

  return printSpiralOrder(input, result);
}

var input =[[ 1, 2, 3 ],
            [ 4, 5, 6 ],
            [ 7, 8, 9 ],
            [ 10, 11, 12]];

var result = printSpiralOrder(input, []);
console.log(result);