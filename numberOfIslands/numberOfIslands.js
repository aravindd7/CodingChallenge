/*
Given a 2D grid map of 1s (land) and 0s (water), count the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

Input:
11110
11010
11000
00000

Output: 1

Input:
11000
11000
00100
00011

Output: 3
*/

function numberOfIslands(grid) {

    let markIsland = function(grid, row, column, visited) {
        if (row < 0 || row > grid.length - 1 || column < 0 || column > grid[row].length - 1){
            return;
        }
        if (visited[row][column] === true) {
            return;
        }

        visited[row][column] = true;

        if (grid[row][column] === '0') {
            return;
        }
        
        markIsland(grid, row - 1, column, visited);
        markIsland(grid, row + 1, column, visited);
        markIsland(grid, row, column - 1, visited);
        markIsland(grid, row, column + 1, visited);
    }

    let visited = [];
    
    for (let i = 0; i < grid.length; i++) {
        visited[i] = []
    }

    let count = 0;

    for (let row = 0; row < grid.length; row++) {
        for (let column = 0; column < grid[row].length; column++) {
            if (!visited[row][column] && grid[row][column] === '1') {
                count++;
                markIsland(grid, row, column, visited);
            }
            visited[row][column] = true;
        }
    }
    return count;
}

let map = [
    ['1','1','1','1','0'],
    ['1','1','0','1','0'],
    ['1','1','0','0','0'],
    ['0','0','0','0','0'],
]

console.log(numberOfIslands(map))