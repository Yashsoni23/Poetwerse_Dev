import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository{
    constructor(){
        super(Like);
    }
    async findByUserAndLikeable(userId, likeableId,onModel){
        try{
            const like = await Like.findOne({user:userId, likeable:likeableId, onModel:onModel});
            return like;
        }catch (error) {
            console.log(error);
        }
    }

}

export default LikeRepository;