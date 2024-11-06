/* 
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

class Solution {
  
  bruteForce(prices) {
    //too slow but works
    let currMax = 0;
    for(let i = 0; i < prices.length; i++) {
      let today = prices[i];
      let newMax = Math.max(...prices.slice(i + 1));
      const possibleNewMax = newMax - today

      if(possibleNewMax > currMax) { 
        currMax = possibleNewMax;
      }
    }

    return currMax;
  }

  optimal(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for(let i = 0; i < prices.length; i++) {
      if (prices[i] < minPrice) {
        minPrice = prices[i];
      }

      const profit = prices[i] - minPrice;

      if(profit > maxProfit) {
        maxProfit = profit;
      }
    }

    return maxProfit;
  }
}

const sol = new Solution();
const args = [[7,1,5,3,6,4], [1, 2]];
const ans = args.map(arg => sol.optimal(arg))

console.log(ans);