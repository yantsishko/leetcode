
var RecentCounter = function() {
    this.requests = [];
};

/** 
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.requests.push(t);
    const min = t - 3000;
    const max = t;
    
    let count = 0;
    
    for (let i = 0; i < this.requests.length; i++) {
        if (this.requests[i] >= min) {
            break;
        } else {
            count++;
        }
    }
    
    return this.requests.length - count;
};

/** 
 * Your RecentCounter object will be instantiated and called as such:
 * var obj = new RecentCounter()
 * var param_1 = obj.ping(t)
 */