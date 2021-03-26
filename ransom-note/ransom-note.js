/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const magazineHash = {};
    const ransomNoteHash = {};
    
    let result = true;
    
    Array.from(magazine).forEach(character => {
        magazineHash[character] = magazineHash[character] ? magazineHash[character] + 1 : 1;
    });
    
    Array.from(ransomNote).forEach(character => {
        ransomNoteHash[character] = ransomNoteHash[character] ? ransomNoteHash[character] + 1 : 1;
        
        if (!magazineHash[character] || ransomNoteHash[character] > magazineHash[character]) {
            result = false;
        }
    });

    return result;
};