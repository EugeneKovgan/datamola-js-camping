import { tweets } from "./tweets_arr.js";

(function () {
    console.log("module ready");

    let user = "user";

    function getTweets(skip = 0, top = 10, filterConfig = {}) {
        let result = JSON.parse(JSON.stringify(tweets));

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
        return tweets.find((tweet) => tweet.id === id);
    }

    function validateTweet(tw) {
        if (
            (typeof tw.id === "string" &&
                tw.text !== "" &&
                typeof tw.text === "string" &&
                tw.text.length <= 280 &&
                typeof tw.text === "string" &&
                tw.createdAt !== "" &&
                typeof tw.createdAt === "object" &&
                tw.author !== "" &&
                typeof tw.author === "string",
            validateComment(tw))
        ) {
            return true;
        } else {
            return false;
        }
    }

    function validateComment(com) {
        if (
            typeof com.id === "string" &&
            com.text !== "" &&
            typeof com.text === "string" &&
            com.text.length <= 280 &&
            typeof com.text === "string" &&
            typeof com.createdAt === "object" &&
            com.author !== ""
        ) {
            return true;
        } else {
            return false;
        }
    }

    function addTweet(text) {
        const newTweet = {};
        newTweet.id = genereteId();
        newTweet.text = text;
        newTweet.createdAt = new Date();
        newTweet.author = user;
        newTweet.comments = [];
        if (validateTweet(newTweet)) {
            tweets.push(newTweet);
            return true;
        } else {
            return false;
        }
    }

    function addComment(id, text) {
        const commentedTweet = getTweet(id);
        if (commentedTweet) {
            const newComment = {};
            newComment.id = genereteId();
            newComment.text = text;
            newComment.createdAt = new Date();
            newComment.author = user;
            if (validateComment(newComment)) {
                commentedTweet.comments.push(newComment);
                return true;
            } else {
                return false;
            }
        }
    }

    function genereteId() {
        return Math.random().toString(36).substr(2, 9);
    }

    function editTweet(id, text) {
        const tweet = getTweet(id);
        if (tweet.author === user && validateTweet(tweet)) {
            tweet.text = text;
            return true;
        } else {
            return false;
        }
    }

    function removeTweet(id) {
        const tweet = getTweet(id);
        if (tweet.author === user) {
            tweets.splice(tweet.id, 1);
            return true;
        } else {
            return false;
        }
    }

    function changeUser(usr) {
        user = usr;
    }

    // for check
    console.log(tweets);

    console.log(getTweets(0, 10)); // должен отсортировать твиты по дате создания и вернуть первые 10 твитов.
    console.log(getTweets(10, 10)); //должен отсортировать твиты по дате создания и вернуть 10 твитов, начиная с 11-ого.
    console.log(getTweets(0, 10, { author: "snow" })); // должен выбрать те твиты, где автор содержит подстроку ‘snow’, отсортировать твиты по дате создания, вернуть первые 10 твитов.
    console.log(getTweets(0, 10, { author: "Snow" })); // должен выбрать те твиты, где автор содержит подстроку ‘snow’, отсортировать твиты по дате создания, вернуть первые 10 твитов.
    console.log(getTweets(0, 10, { text: "#js" })); // отсортировать твиты с #js
    console.log(getTweet("7")); // получить твит id7
    console.log(validateTweet("2")); // не валидный твит
    console.log(
        validateTweet({
            id: "77",
            text: "Всё хорошо! #js",
            createdAt: new Date("2022-03-09T23:00:00"),
            author: "Пётр Петров",
            comments: [],
        })
    ); // валидный твит
    console.log(validateComment("2")); // не валидный соммент
    console.log(
        validateComment({
            id: "77",
            text: "Всё хорошо! #js",
            createdAt: new Date("2022-03-09T23:00:00"),
            author: "Пётр Петров",
        })
    ); // валидный коммент
    console.log(editTweet("7", "hi")); // редактирование твита
    console.log(removeTweet("9")); // удаление твита
    console.log(addTweet("text")); //добавление твита
    console.log(addComment("2", "text")); // добавление комментария к твиту

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
