/*
 * @lc app=leetcode.cn id=146 lang=javascript
 *
 * [146] LRU缓存机制
 */

// @lc code=start
/**
 * @param {number} capacity
 */
var LRUCache = function (capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.head = new DLinkedNode();
    this.tail = new DLinkedNode();
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
    let node = this.cache.get(key);
    if (!node) return -1;
    this.moveToHead(node);
    return node.value;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
    let node = this.cache.get(key);
    if(!node) {
        node = new DLinkedNode(key, value);
        this.cache.set(key, node);
        this.addNode(node);
        if(this.cache.size > this.capacity) {
            let eldest = this.popTail();
            this.cache.delete(eldest.key);
        }
    } else {
        node.value = value;
        this.moveToHead(node);
    }
};

class DLinkedNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

LRUCache.prototype.addNode = function (node) {
    node.prev = this.head;
    node.next = this.head.next;
    this.head.next.prev = node;
    this.head.next = node;
};

LRUCache.prototype.removeNode = function (node) {
    let prev = node.prev;
    let next = node.next;

    prev.next = next;
    next.prev = prev;
};

LRUCache.prototype.moveToHead = function (node) {
    this.removeNode(node);
    this.addNode(node);
};

LRUCache.prototype.popTail = function () {
    let res = this.tail.prev;
    this.removeNode(res);
    return res;
};

 var obj = new LRUCache(2);
 obj.put(1,1);
 obj.put(2,2);
 obj.get(1);
 obj.put(3,3);
 obj.get(2);
 obj.put(4,4);
 obj.get(1);
 obj.get(3);
 obj.get(4);

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

