/*
 * @lc app=leetcode.cn id=211 lang=javascript
 *
 * [211] 添加与搜索单词 - 数据结构设计
 */

// @lc code=start
/**
 * Data structure of a Node
 */
let TrieNode = function () {
    this.next = new Map();
    this.isWord = false;
}

/**
 * Initialize your data structure here.
 */
var WordDictionary = function () {
    this.root = new TrieNode();
};

/**
 * Adds a word into the data structure. 
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function (word) {
    if (!word) return;
    let node = this.root;
    for (let c of word) {
        if (!node.next.has(c)) {
            node.next.set(c, new TrieNode());
        }
        node = node.next.get(c);
    }
    node.isWord = true;
};

/**
 * Returns if the word is in the data structure. A word could contain the dot character '.' to represent any one letter. 
 * @param {string} word
 * @return {boolean}
 */
WordDictionary.prototype.search = function (word) {
    if (!word) return false;
    return this.searchHelp(word, this.root);
};

WordDictionary.prototype.searchHelp = function (word, root) {
    let node = root;
    for (let i = 0; i < word.length; i++) {
        let c = word[i];
        if (c === '.') {
            let nodes = node.next.values();
            for (let node of nodes) {
                if (this.searchHelp(word.substring(i + 1), node)) {
                    return true;
                }
            }
            return false;
        } else {
            if (!node.next.has(c)) return false;
            node = node.next.get(c);
        }
    }
    return node.isWord;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */
// @lc code=end

