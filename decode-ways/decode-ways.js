/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function(s) {
    const dp = Array(s.length + 1).fill(0);
    dp[0] = 1;

    for (let i = 1; i <= s.length; i++) {
        if (+s[i - 1] > 0) dp[i] += dp[i - 1];

        if (+`${s[i - 2]}${s[i - 1]}` <= 26 && +`${s[i - 2]}${s[i - 1]}` >= 10) dp[i] += dp[i - 2];
    }

    return dp.pop();
};