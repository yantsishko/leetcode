
var StockSpanner = function() {
    this.prices = [];
};

/** 
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function(price) {
    const prevLength = this.prices.length;
    this.prices.push(price);
    let count = 0;

    let index = this.prices.length - 1;

    while (this.prices[index] <= price) {
        if (this.prices[index] <= price) {
            count += 1;
        }
        index -= 1;
    }
    // add optimization with left jump

    return count; 
};

/** 
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */