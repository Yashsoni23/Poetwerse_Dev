import { TweetRepository, HashtagRepository } from '../repository/index.js';

class TweetService {
    constructor() {
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();
    }
    async create(data) {
        const content = data.content;
        const tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag) => tag.slice(1));;
        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map((tags) => tags.title)
        let newTags = tags.filter((tag) => !titleOfPresentTags.includes(tag));
        newTags = newTags.map(tag => {
            return {
                title: tag,
                tweets: [tweet._id]
            }
        }
        );
        
       await this.hashtagRepository.bulkCreate(newTags);
        // to create a hashtags and add here
        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet._id);
            tag.save();
        });

        return tweet;
    }
}

export default TweetService;