import express  from 'express';
const app = express();
import dotenv  from 'dotenv';
dotenv.config();
import {connect}  from './config/database.js';
import { HashtagRepository, TweetRepository} from "./repository/index.js"
import Comment  from './models/comment.js';
import TweetService  from './services/tweet-service.js';


app.listen(process.env.PORT, async () => {
    console.log(`Server started on port ${process.env.PORT}`);

    await connect();
    console.log('Database connected');
    const hashtags =  [
        {title: 'js'},
        {title: 'python'},
        {title: 'javascript'},
        {title: 'java'},
        {title: 'c#'},
        {title: 'cpp'},
    ]
    const hashNames = [
        'js',
        'python',
        'javascript',
        'java',
        'c#',
        'cpp',
    ]
    const hashtagRepository = new HashtagRepository();
    const tag = await hashtagRepository.getAll(hashNames);
    console.log(tag.map((tag) => tag.title));

    // const tweetRepository = new TweetRepository();
    // const tweetService = new TweetService();
    // const tweet = await tweetService.create({
    //     content: 'All Done #processing #ok #javascript #tweet #itself be a ',
    // });

    // console.log(tweet);

}
);