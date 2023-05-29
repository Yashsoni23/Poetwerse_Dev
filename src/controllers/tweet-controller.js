import TweetService from "../services/tweet-service.js";

const tweetService = new TweetService();
export const createTweet = (async (req, res) => {
    try {
        const tweet = await tweetService.create(req.body);
        res.status(201).json({
            success: true,
            message: "Successfully created tweet !!",
            data: tweet,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }
})

export const getAllTweets = async (req, res) => {
    try {
        const tweets = await tweetService.getAll();

        res.status(200).json({
            success: true,
            message: "Successfully fetched tweets !!",
            data: tweets,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }
}

export const getTweetById = ((req, res) => {
    try {
        const tweet = tweetService.getById(req.params.id);
        res.status(200).json({
            success: true,
            message: "Successfully fetched tweet !!",
            data: tweet,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }
})

export const getTweetWithComments = ((req, res) => {
    try {
        const tweet = tweetService.getWithComments(req.params.id);
        res.status(200).json({
            success: true,
            message: "Successfully fetched tweet !!",
            data: tweet,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }
})

export const updateTweet = ((req, res) => {
    try {
        const tweet = tweetService.update(req.params.id, req.body);
        res.status(200).json({
            success: true,
            message: "Successfully updated tweet !!",
            data: tweet,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }
})

export const deleteTweet = ((req, res) => {
    try {
        const tweet = tweetService.delete(req.params.id);
        res.status(200).json({
            success: true,
            message: "Successfully deleted tweet !!",
            data: tweet,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }
})