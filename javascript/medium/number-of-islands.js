/* 
Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.
*/

class Implementation {

  numIslands(grid) {
    //declare a function within numIslands to prevent grid from being passed within the dfs function
    //otherwise we'll have to pass in grid
    const dfs = (i, j) => {
      //given two coordinates, check if it's hitting a boundary
      if (i < 0 || j < 0 || i >= grid.length || j >= grid[0].length || grid[i][j] === '0') return;

      //set the current coordinate as visited
      grid[i][j] = '0'; //0 is visited in this case
      //maximum call stack exceeded due to string vs int here

      //check it's neighbors recursively
      dfs(i, j + 1);
      dfs(i, j - 1);
      dfs(i + 1, j);
      dfs(i - 1, j);
    }

    let islandCount = 0;
    //here call dfs in a nested for loop to parse through all the elements in the grid individually
    for (let i = 0; i < grid.length; i++) {
      for(let j = 0; j < grid[0].length; j++) {
        //here we're checking if it's an island
        // if it is, see how big it is, mark all the neighbors (the same island) so we don't count it again
        if(grid[i][j] === '1') {
          islandCount++;
          dfs(i, j);
        }
      }
    }

    return islandCount;
  }
}

const sol = new Implementation();
const grid = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"]
];
console.log(sol.numIslands(grid));