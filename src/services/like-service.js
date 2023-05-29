import { LikeRepository, TweetRepository } from "../repository/index.js";

class LikeService {

    constructor() {
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId) {

        if (modelType === 'Tweet') {
            var likeable = await this.tweetRepository.find(modelId);
            const data = {
                tweetId: modelId,
                userId: userId
            }
        } else if (modelType === 'Comment') {
            const data = {
                commentId: modelId,
                userId: userId
            }
        } else {
            throw new Error('Invalid model type');
        }
        const exists = await this.likeRepository.findByUserAndLikeable(
            userId,
            modelId,
            modelType
        );
        if (exists) {
            await this.likeRepository.delete(exists._id);
            likeable.likes.pull(exists._id);
            await likeable.save();
            var isAdded = false;
        }
        else {
            const newLike = await this.likeRepository.create({
                user: userId,
                likeable: modelId,
                onModel: modelType
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = true;
        }
        return isAdded;

    }


    //     try {
    //         const like = await this.likeRepository.toggleLike(data);
    //         return like;
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }


}

export default LikeService;