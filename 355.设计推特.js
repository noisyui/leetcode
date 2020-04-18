/*
 * @lc app=leetcode.cn id=355 lang=javascript
 *
 * [355] 设计推特
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */

class Tweet {
    constructor(tweetId) {
        this.tweetId = tweetId;
        this.next = null;
    }
}

class User {
    constructor(userId) {
        this.userId = userId;
        this.tweet = null;
        this.followees = new Set();
    }

    postTweet(tweetId) {
        let newTweet = new Tweet(tweetId);
        if (this.tweet) {
            newTweet.next = this.tweet;
        }
        this.tweet = newTweet;
    }
}

var Twitter = function () {
    this.time = 0;
    this.recentMax = 10;

    /**
     * @type {Map<number,number>}
     */
    this.tweetTime = new Map();

    /**
     * @type {Map<number,User>}
     */
    this.userMap = new Map();
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
    let user;
    if (!this.userMap.has(userId)) {
        user = new User(userId);
        this.userMap.set(userId, user);
    } else {
        user = this.userMap.get(userId);
    }

    user.postTweet(tweetId);
    this.tweetTime.set(tweetId, ++this.time);
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
    if (!this.userMap.has(userId)) {
        return [];
    }

    /**
     *  
     * @param {Tweet} list1 
     * @param {Tweet} list2 
     * @param {Tweet} res 
     * @return {number[]}
     */
    let merge = (list1, list2) => {
        let len = 0;
        let time1 = 0, time2 = 0;
        let res = new Tweet();
        let temp = res;
        while (len < this.recentMax) {
            time1 = list1 ? this.tweetTime.get(list1.tweetId) : 0;
            time2 = list2 ? this.tweetTime.get(list2.tweetId) : 0;
            if (time1 || time2) {
                if (time1 > time2) {
                    temp.next = new Tweet(list1.tweetId);
                    list1 = list1.next;
                } else {
                    temp.next = new Tweet(list2.tweetId);
                    list2 = list2.next;
                }
                temp = temp.next;
                len++;
            } else {
                break;
            }
        }

        return res.next;
    }

    let user = this.userMap.get(userId);
    let merged = merge(user.tweet, null);
    for (let f of user.followees) {
        if (this.userMap.has(f)) {
            let u = this.userMap.get(f);
            merged = merge(u.tweet, merged);
        }
    }

    let result = [];
    let tem = merged;
    while (tem) {
        result.push(tem.tweetId);
        tem = tem.next;
    }
    return result;
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
    if (followerId === followeeId) return;

    let user;
    if (!this.userMap.has(followerId)) {
        user = new User(followerId);
        this.userMap.set(followerId, user);
    } else {
        user = this.userMap.get(followerId);
    }

    user.followees.add(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
    if (!this.userMap.has(followerId)) {
        return;
    }

    let user = this.userMap.get(followerId);
    user.followees.delete(followeeId);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */
// @lc code=end

// var obj = new Twitter();
// obj.postTweet(1, 5);
// var param_3 = obj.getNewsFeed(1)
// obj.follow(1, 2);
// obj.postTweet(2, 6);
// param_3 = obj.getNewsFeed(1)

var obj = new Twitter();
obj.postTweet(1, 5);
obj.postTweet(1, 3);
obj.postTweet(1, 101);
obj.postTweet(1, 13);
obj.postTweet(1, 10);
obj.postTweet(1, 2);
obj.postTweet(1, 94);
obj.postTweet(1, 505);
obj.postTweet(1, 333);
obj.postTweet(1, 22);
obj.postTweet(1, 28);
var param_2 = obj.getNewsFeed(1);