/**
 * Initialize your data structure here.
 */
var TrieNode = function(character, isEndOfWord = false, value = 0) {
    this.childes = {};
    this.value = value;
    this.character = character;
    this.isEndOfWord = isEndOfWord;
    
    
    this.addChild = (character, isEndOfWord, value) => {
        if (this.childes[character] === undefined) {
            this.childes[character] = new TrieNode(character, isEndOfWord, value);
        } else {
            this.childes[character].value = this.childes[character].value + value;
        }
        
        this.childes[character].isEndOfWord = this.childes[character].isEndOfWord || isEndOfWord;
        
        return this.childes[character];
    }
};

const Trie = function() {
    this.head = new TrieNode('*');
    this.map = {};
};

Trie.prototype.insert = function(word, value) {
    const characters = Array.from(word);
    let currentNode = this.head;
    const prevValue = value - (this.map[word] ? this.map[word] : 0);

    this.map[word] = value;
    
    for (let i = 0; i < characters.length; i +=1) {
        const isLastCharacter = i === characters.length - 1;
        currentNode = currentNode.addChild(characters[i], isLastCharacter, prevValue);
    }
};

Trie.prototype.search = function(word) {
    let currentNode = this.head;

    for (let char of word) {
        if (!currentNode.childes[char]) {
            return 0;
        }
        currentNode = currentNode.childes[char];
    }
    
    return currentNode.value;
};

/**
 * Initialize your data structure here.
 */
var MapSum = function() {
    this.trie = new Trie();
};

/** 
 * @param {string} key 
 * @param {number} val
 * @return {void}
 */
MapSum.prototype.insert = function(key, val) {
    this.trie.insert(key, val);
};

/** 
 * @param {string} prefix
 * @return {number}
 */
MapSum.prototype.sum = function(prefix) {
     return this.trie.search(prefix);
};

/** 
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */






// /**
//  * Initialize your data structure here.
//  */
// var MapSum = function() {
//     this.mapSum = {};
    
//     this.SIZE = 100100;
//     this.BASE = 2017;
//     this.MOD = 1000000009;
    
//     this.powers = [];
//     this.powers[0] = 1;
//     for (let i = 1; i < this.SIZE; i++) {
//         this.powers[i] = this.powers[i - 1] * this.BASE % this.MOD;
//     }
// };

// /** 
//  * @param {string} key 
//  * @param {number} val
//  * @return {void}
//  */
// MapSum.prototype.insert = function(key, val) {
//     let hash = '0';

//     let n = key.length;
//     for (let i = 1; i <= n; i++) {
//         hash += hash[i - 1] * this.BASE % this.MOD + key.charCodeAt(i - 1) % this.MOD;
//     }
    
//     this.mapSum[hash] = val;
    
//     console.log(this.mapSum);
// };

// /** 
//  * @param {string} prefix
//  * @return {number}
//  */
// MapSum.prototype.sum = function(prefix) {
//     let prefixHash = '0';

//     let n = prefix.length;
//     for (let i = 1; i <= n; i++) {
//         prefixHash += prefixHash[i - 1] * this.BASE % this.MOD + prefix.charCodeAt(i - 1) % this.MOD;
//     }

//     let result = 0;
//     console.log(prefix.length);
//     Object.keys(this.mapSum).forEach((key) => {
//         const hash = (key[prefix.length] - key[0] * this.powers[prefix.length] % this.MOD + this.MOD) % this.MOD;
        
//         console.log(prefixHash, hash);
//         if (hash === prefixHash) {
//             result += this.mapSum[key];
//         }
//     });
    
//     return result;

// };

// /** 
//  * Your MapSum object will be instantiated and called as such:
//  * var obj = new MapSum()
//  * obj.insert(key,val)
//  * var param_2 = obj.sum(prefix)
//  */