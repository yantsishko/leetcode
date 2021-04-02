/**
 * @param {number[]} nums
 */
var NumArray = function(nums) {
    let count = 0;
    this.dp = [];
    nums.forEach((num, index) => {
        count += num;
        this.dp[index] = count;

    });
};

/** 
 * @param {number} i 
 * @param {number} j
 * @return {number}
 */
NumArray.prototype.sumRange = function(i, j) {
    if (i === 0) {
        return this.dp[j];
    } else {
        return this.dp[j] - this.dp[i - 1];
    }
};

/** 
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(i,j)
 */