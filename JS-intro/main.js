import { tweets } from "./tweets_arr.js";

(function () {
    console.log("module ready");

    let user = "user";

    function getTweets(skip = 0, top = 10, filterConfig = {}) {
        let result = tweets;

        if (filterConfig) {
            if (filterConfig.author) {
                result = result.filter((tweet) =>
                    tweet.author.toLocaleLowerCase().includes(filterConfig.author.toLocaleLowerCase())
                );
            }
            if (filterConfig.dateFrom) {
                result = result.filter((tweet) => {
                    tweet.createdAt >= filterConfig.dateFrom;
                });
            }
            if (filterConfig.dateTo) {
                result = result.filter((tweet) => tweet.createdAt <= filterConfig.dateTo);
            }
            if (filterConfig.hashtags) {
                result = result.filter((tweet) =>
                    filterConfig.hashtags.every((hashtag) => tweet.text.includes(`#${hashtag}`))
                );
            }
            if (filterConfig.text) {
                result = result.filter((tweet) => tweet.text.includes(filterConfig.text));
            }
            result.sort((a, b) => a.createdAt - b.createdAt);
            return result.slice(skip, skip + top);
        }
    }

    function getTweet(id) {
        return tweets.filter((tweet) => tweet.id === id);
    }

    function validateTweet(tw) {
        if (
            tw.id &&
            tw.text &&
            tw.text != "" &&
            tw.text.length <= 280 &&
            tw.createdAt &&
            tw.author &&
            validateComment(tw)
        ) {
            return true;
        } else {
            return false;
        }
    }

    function validateComment(com) {
        if (
            com == "" ||
            (com.id && com.text && com.text != "" && com.text.length <= 280 && com.createdAt && com.author)
        ) {
            return true;
        } else {
            return false;
        }
    }

    function addTweet(text) {
        const newTweet = {};
        newTweet.id = Math.random().toString(36).substr(2, 9);
        newTweet.text = text;
        newTweet.createdAt = new Date();
        newTweet.author = user;
        newTweet.comments = [];
        console.log(newTweet);
        if (validateTweet(newTweet)) {
            tweets.push(newTweet);
            // tweets = { ...tweets, ...newTweet };
            return true;
        } else {
            return false;
        }
    }

    // function addComment(id, text) {
    //     const commentedTweet = getTweet(id);
    //     if (commentedTweet) {
    //         const newComment = {};
    //     }
    // }

    function editTweet(id, text) {
        const tweet = getTweet(id);
        if (tweet.author === user && validateTweet(tweet)) {
            tweet[0].text = text;
            return true;
        } else {
            return false;
        }
    }

    function removeTweet(id) {
        const tweet = getTweet(id);
        if (tweet.author === user) {
            return true;
        } else {
            tweets = tweets.filter((tweet) => tweet.id === id);
        }
        return false;
    }

    function changeUser(usr) {
        user = usr;
    }

    // for check
    console.log(tweets);

    // console.log(getTweets(0, 10));
    // console.log(getTweets(10, 10));
    // console.log(getTweets(0, 10, { author: "snow" }));
    // console.log(getTweets(0, 10, { author: "Snow" }));
    // console.log(getTweets(0, 10, { text: "#" }));
    // console.log(getTweet("7"));
    // console.log(editTweet("7", "hi"));
    // console.log(removeTweet(9));
    console.log(addTweet("text"));

    console.log(tweets);

    return {
        getTweets,
        getTweet,
        validateTweet,
        validateComment,
        editTweet,
        changeUser,
        removeTweet,
        addTweet,
        addComment,
    };
})();
