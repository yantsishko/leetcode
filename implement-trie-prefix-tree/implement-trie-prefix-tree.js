/**
 * Initialize your data structure here.
 */
var TrieNode = function(character, isEndOfWord = false) {
    this.childes = {};
    this.character = character;
    this.isEndOfWord = isEndOfWord;
    
    
    this.addChild = (character, isEndOfWord) => {
        if (this.childes[character] === undefined) {
            this.childes[character] = new TrieNode(character, isEndOfWord);
        }
        
        this.childes[character].isEndOfWord = this.childes[character].isEndOfWord || isEndOfWord;
        
        return this.childes[character];
    }
};

var Trie = function() {
   this.head = new TrieNode('*');
};

/**
 * Inserts a word into the trie. 
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function(word) {
    const characters = Array.from(word);
    let currentNode = this.head;
    
    for (let i = 0; i < characters.length; i +=1) {
        const isLastCharacter = i === characters.length - 1;
        currentNode = currentNode.addChild(characters[i], isLastCharacter);
    }
};

/**
 * Returns if the word is in the trie. 
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function(word, isStartWith = false) {
    let currentNode = this.head;
    for (let char of word) {
      if (!currentNode.childes[char]) {
        return false;
      }
      currentNode = currentNode.childes[char];
    }
    return isStartWith ? true : currentNode.isEndOfWord;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix. 
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function(prefix) {
    return this.search(prefix, true);
};

/** 
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */