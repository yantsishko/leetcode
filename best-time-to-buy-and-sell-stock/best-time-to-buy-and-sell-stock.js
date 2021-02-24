/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices.length) return 0;
    const dp = [];
    dp[0] = prices[0];
    
    let maxV = 0;
    
    for (let i = 1; i < prices.length; i++) {
        dp[i] = Math.min(dp[i - 1], prices[i]);
        
        maxV = Math.max(maxV, prices[i] - dp[i]);
    }
    
    return maxV;
    

//     if (!prices.length) return 0;
//     let minBuy = prices[0];
//     let maxSell = 0;
//     for (let i = 1; i < prices.length; i++) {
//         if (minBuy > prices[i]) {
//             minBuy = prices[i];
//         } else if (prices[i] - minBuy > maxSell) {
//             maxSell = prices[i] - minBuy;
//         }
//     }
    
//     return maxSell;
};