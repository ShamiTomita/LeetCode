/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0; 
    let current = prices[0]
    for(let i = 0; i < prices.length-1; i++){
        current = Math.min(current, prices[i])
        console.log(current)
        maxProfit = Math.max( (prices[i+1] - current), maxProfit)
        console.log(maxProfit)
    }
    return maxProfit;
};