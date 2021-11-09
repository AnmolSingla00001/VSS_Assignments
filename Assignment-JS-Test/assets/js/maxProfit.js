//@ts-check
// You need to write an algorithm & it's implementation for for finding the max profit if a given set of stock prices is given in a chronological order.

// See test cases below.
// - Test 1
// Input: prices = [7,1,5,3,6,4]
// Output: 5

// - Test 2
// Input: prices = [7,6,4,3,1]
// Output: 0

// Leetcode Link :https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// Algorithm

// 1- Initialise MaxProfit as 0.
// 2- Traverse through the price list using a for loop Loop1.
//     2.1- Start another for loop Loop2 inside this Loop with starting index as Loop1's Index
//     2.2- Inside Loop2 Subtract Loop2 item with Loop1 item.
//     2.3- Store result into MaxProfit if result is greater than MaxProfit.
// 3- Return MaxProfit.

// const inpPrices = [7, 1, 5, 3, 6, 4];
const inpPrices = [7, 6, 4, 3, 1];

let maxProfit = 0;

for (i = 0; i < inpPrices.length - 1; i++) {
  for (j = i + 1; j < inpPrices.length; j++) {
    console.log(`${inpPrices[j]} - ${inpPrices[i]}`);
    if (inpPrices[j] - inpPrices[i] > maxProfit) {
      maxProfit = inpPrices[j] - inpPrices[i];
      console.log(maxProfit);
    }
  }
}
console.log(maxProfit);
