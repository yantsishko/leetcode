/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    const sA = s.split('');
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    
    let p1 = 0;
    let p2 = s.length - 1;
    
    while (p1 <= p2 ) {
        const isP1 = vowels.includes(sA[p1].toLowerCase());
        const isP2 = vowels.includes(sA[p2].toLowerCase());

        if (isP1 && isP2) {
            const t  = sA[p2];
            sA[p2] = s[p1];
            sA[p1] = t;
            
            p1 += 1;
            p2 -= 1;
        }
        
        if (!isP1) {
            p1 += 1;
        }
        if (!isP2) {
            p2 -= 1;
        }
    }
    
    return sA.join('');
};