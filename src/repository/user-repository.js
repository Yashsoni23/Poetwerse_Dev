import User from "../models/user.js";
import CrudRepository from "./crud-repository.js";


class UserRepository extends CrudRepository{
    constructor(){
        super(User);
    }
    async findByUserAndLikeable(userId, likeableId){
        try{
            const User = await User.findOne({userId:userId, UserableId:likeableId});
            return like;
        }catch (error) {
            console.log(error);
        }
    }

}

export default UserRepository;