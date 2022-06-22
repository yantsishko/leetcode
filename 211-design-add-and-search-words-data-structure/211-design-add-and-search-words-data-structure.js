/**
 * Initialize your data structure here.
 */
var WordDictionary = function() {
    this.dictionary = {};
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    const wordLen = word.length;
    
    if (!this.dictionary[wordLen]) {
        this.dictionary[wordLen] = [];
    }

    this.dictionary[wordLen].push(word);
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function(word) {
    const wordLen = word.length;
    
    const arrayOfWords = this.dictionary[wordLen];
    if (!arrayOfWords) return false;

    const reg = new RegExp(`${word}`);
    for (let i = 0; i < arrayOfWords.length; i += 1) {
        if (reg.test(arrayOfWords[i])) {
            return true;
        }
    }
    
    return false;
};

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */