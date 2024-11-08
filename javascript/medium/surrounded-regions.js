/* 
You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

Connect: A cell is connected to adjacent cells horizontally or vertically.
Region: To form a region connect every 'O' cell.
Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.
*/

class Solution {

  surroundedRegions(grid){
    if(grid.length <= 1) return grid;

    //DFS
    const dfs = (i, j) => {
      if (i > grid.length - 1 || j > grid[0].length - 1) return;

      grid[i][j] = "V"

      dfs(i, j - 1);
      dfs(i, j + 1);
      dfs(i - 1, j);
      dfs(i + 1, j);
    }

    //convert all Os to a safe letter
    for(let i = 0; i < grid.length; i++) { 
      for(let j = 0; j < grid[0].length; j++) {
        //all the converting of elements will happen in the DFS algorithm
        //edit in place
        dfs(i, j);
      }
    }
    
  }
}