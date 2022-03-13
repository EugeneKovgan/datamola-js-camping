import { tweets } from "./tweets_arr.js";

(function (tweets) {
    console.log("module ready");

    let user;

    function getTweets(skip = 0, top = 10, filterConfig) {
        let result = tweets;

        if (filterConfig) {
            if (filterConfig.author) {
                result = result.filter((tweet) => tweet.author.includes(filterConfig.author));
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
        return { getTweets };
    }
})();
