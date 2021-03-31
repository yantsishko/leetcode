/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
var getHint = function(secret, guess) {
    let bull = 0;
    let cow = 0;
    let hashS = {};
    let hashG = {};

    for (let i = 0; i < secret.length; i += 1) {
        if (secret[i] === guess[i]) {
            bull += 1;
        } else {
            hashS[secret[i]] = hashS[secret[i]] ? hashS[secret[i]] + 1 : 1;
            hashG[guess[i]] = hashG[guess[i]] ? hashG[guess[i]] + 1 : 1;
        }
    }
    
    Object.keys(hashS).forEach(key => {
        if (hashS[key] && hashG[key]) {
            cow = cow + ((hashS[key] === hashG[key]) ? hashS[key] : Math.min(hashS[key], hashG[key]));
        }
    });
    
    return `${bull}A${cow}B`;
};