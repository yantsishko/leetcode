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

const Trie = function() {
   this.head = new TrieNode('*');
};

Trie.prototype.insert = function(word) {
    const characters = Array.from(word);
    let currentNode = this.head;
    
    for (let i = 0; i < characters.length; i +=1) {
        const isLastCharacter = i === characters.length - 1;
        currentNode = currentNode.addChild(characters[i], isLastCharacter);
    }
};


/**
 * @param {string[]} words
 * @return {string}
 */
var longestWord = function(words) {
    const trie = new Trie();

    words.sort((a, b) => a.localeCompare(b))

    for (let i = 0; i < words.length; i++) {
        trie.insert(words[i]);
    }
    
    const dfs = (root, str, res) => {
        for(let character of Object.keys(root.childes)){
            const node = root.childes[character];
            if(!node.isEndOfWord) continue
            res = dfs(node, str + character, res);
        }
        res = res.length < str.length ? str : res;

        return res;
    }
    
    return dfs(trie.head, '', '');
};