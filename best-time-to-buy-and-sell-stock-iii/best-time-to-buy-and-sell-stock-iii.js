/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    const dpLR = [];
    let dpLRMin = [];
    const dpRL = [];
    let dpRLMax = [];

    const findBestLR = () => {
        dpLR[0] = 0;
        dpLRMin[0] = prices[0];
        for (let i = 1; i < prices.length; i++) {
            dpLRMin[i] = Math.min(dpLRMin[i - 1], prices[i]);
            dpLR[i] = Math.max(dpLR[i - 1], prices[i] - dpLRMin[i]);
        }
    }
    const findBestRL = () => {
        dpRL[prices.length - 1] = 0;
        dpRLMax[prices.length - 1] = prices[prices.length - 1];
        for (let i = prices.length - 2; i >= 0; i--) {
            dpRLMax[i] = Math.max(dpRLMax[i + 1], prices[i]);
            dpRL[i] = Math.max(dpRL[i + 1], dpRLMax[i] - prices[i]);
        }
    }
    findBestLR();
    findBestRL();
    
    let max = dpLR[0] + dpRL[0];
    
    for (let i = 1; i < dpLR.length; i++) {
        max = Math.max(max, dpLR[i] + dpRL[i]);
    }
    
    return max;
};