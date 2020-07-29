/**
 * Initialize your data structure here.
 */
var Twitter = function () {
  this.time = 0;
  this.users = {}; // follows
};

/**
 * Compose a new tweet. 
 * @param {number} userId 
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function (userId, tweetId) {
  this.time += 1;
  let users = this.users;
  if (users[userId] === undefined) users[userId] = [];
  if (users[userId]['tweets'] === undefined) users[userId]['tweets'] = [];
  // 考虑重复推文
  let hasTweets = [];
  for (let tweet of users[userId]['tweets']) {
    hasTweets.push(tweet.tweetId);
  }
  if (hasTweets.indexOf(tweetId) !== -1) return;
  users[userId]['tweets'].push({ tweetId, time: this.time });
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent. 
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function (userId) {
  let users = this.users,
    list = [],
    ids = [userId]; // 自己和自己关注的 userId
  if (users[userId] === undefined) return [];
  let follows = users[userId]['follows'];
  if (follows !== undefined) {
    ids.push(...follows);
  }

  for (let userid of ids) {
    if (users[userid] === undefined) continue;
    if (users[userid]['tweets'] === undefined) continue;
    list.push(...users[userid]['tweets'])
  }

  list.sort((a, b) => b.time - a.time);

  let res = new Set(); // 去重重复推文，防止自己关注自己的情况
  for (let i = 0; i < list.length; i++) {
    res.add(list[i]['tweetId']);
    if (res.size === 10) break;
  }
  return [...res];
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function (followerId, followeeId) {
  let users = this.users;
  if (users[followerId] === undefined) users[followerId] = [];
  if (users[followerId]['follows'] === undefined) {
    users[followerId]['follows'] = [];
  }
  if (users[followerId]['follows'].indexOf(followeeId) !== -1) return;
  users[followerId]['follows'].push(followeeId);
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op. 
 * @param {number} followerId 
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function (followerId, followeeId) {
  let users = this.users;
  if (users[followerId] === undefined) return;
  if (users[followerId]['follows'] === undefined) return;
  let userFollows = users[followerId]['follows'];
  let index = userFollows.indexOf(followeeId);
  if (index === -1) return;
  userFollows.splice(index, 1);
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = new Twitter()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */