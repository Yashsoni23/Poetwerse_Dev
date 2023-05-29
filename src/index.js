import express  from 'express';
import dotenv  from 'dotenv';
import bodyParser from 'body-parser';
dotenv.config();
import {connect}  from './config/database.js';
import { HashtagRepository, TweetRepository, UserRepository} from "./repository/index.js"
import Comment  from './models/comment.js';
import TweetService  from './services/tweet-service.js';
import LikeService from './services/like-service.js';
import apiRoutes  from './routes/index.js';


const app = express();
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.use("/api", apiRoutes);

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
//     const hashtagRepository = new HashtagRepository();
//     const tag = await hashtagRepository.getAll(hashNames);
//     console.log(tag.map((tag) => tag.title));

//     const tweetRepository = new TweetRepository();
//     const tweetService = new TweetService();
//    const tweet=await tweetRepository.getAll();
    // const tweet = await tweetService.create({
    //     "content":"This is the #First tweet"
    // });

    // console.log(tweet);

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0, 10);
    // const user = await userRepo.getAll();
    // console.log(user);
    // const user = await userRepo.create({
    //     "name":"Rahul",
    //     "password":"123456",
    //     "email":"rahul@gmail.com"
    // });
    
    // const likeService = new LikeService();
    // const like = await likeService.toggleLike(tweets[0]._id, 'Tweet', "64748b4f30af64bd8bc4025b");
    // console.log({like:like});
});