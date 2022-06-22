/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    if (!wordDict || wordDict.length == 0) return false
    var dp = new Array(s.length + 1);
    dp.fill(false)
    dp[0] = true
    
    for(var i = 1; i <= s.length; i++) {
        for(var j = 0; j < i; j++) {

            if(dp[j] && wordDict.includes(s.substring(j, i))) {
                
                dp[i] = true
                break;
            }
        }
    }

    return dp[s.length]
};