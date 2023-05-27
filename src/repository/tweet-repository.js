import Tweet from'../models/tweet.js';


class TweetRepository{

    async create (data) {
        try {
            const tweet = await Tweet.create(data);
            return tweet;
        } catch (error) {
            console.log(error)
        }
    }
    
    async getAll () {
        try {
            const tweets = await Tweet.find();
            return tweets;
        } catch (error) {
            console.log(error)
        }
    }

    async getById (id) {
        try{
            const tweet = await Tweet.findById(id);
            return tweet;
        }catch (error) {
            console.log(error)
        }
    };
async getWithComments (id) {
        try{
            const tweet = await Tweet.findById(id).populate({path:'comments'}).lean();
            return tweet;
        }catch (error) {
            console.log(error)
        }
    };




    async update (id, data) {
        try{
            const tweet = await Tweet.update(id, data);
            return tweet;
        }catch (error) {
            console.log(error);
        }
    };

    async delete (id) {
        try{
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
        }catch (error) {
            console.log(error)
        }
    };

}

export default TweetRepository;