/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function(words, order) {
    const map = {};
    Array.from(order).forEach((i, index) => {
        map[i] = order.length - index;
    });

    for (let i = 0; i < words.length - 1; i++) {
        const word1 = words[i];
        const word2 = words[i + 1];

        const maxLen = Math.max(word1.length, word2.length);
        let j = 0;

        while (j < maxLen) {
            const w1Val = map[word1[j]] || 27;
            const w2Val = map[word2[j]] || 27;
            if(w1Val < w2Val) {
                return false;
            }
            if (w1Val > w2Val) {
                break;
            }
            j++;
        }
    }
    
    return true;
};