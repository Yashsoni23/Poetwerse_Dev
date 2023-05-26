const express = require('express');
const app = express();
const dotenv = require('dotenv').config();

const connect = require('./config/database');

const TweetRepository = require('./repository/tweet-repository');
const Comment = require('./models/comment');
// const CommentRepository = require('./repository/comment-repository');
// const tweetRoutes = require('./routes/tweet-routes');
// const commentRoutes = require('./routes/comment-routes');


app.listen(process.env.PORT, async () => {
    console.log(`Server started on port ${process.env.PORT}`);

    await connect();
    console.log('Database connected');

    // const tweetRepository = new TweetRepository();
    // const tweet = await tweetRepository.create({
    //     content: 'This is a tweet',
    //     userEmail: 'yashsoni@gmail.com',
    // });
    // console.log(tweet);


}
);