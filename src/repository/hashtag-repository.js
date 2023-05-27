import Hashtags from '../models/hashtags.js';

class HashtagRepository{

    async create (data) {
        try {
            const tag = await Hashtags.create(data);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }
    
    async bulkCreate (data) {
        try {
            const tag = await Hashtags.insertMany(data);
            return tag;
        } catch (error) {
            console.log(error)
        }
    }
    async findByName (name) {
        try {
            const tag = await Hashtags.find({title: name});
            return tag;
        } catch (error) {
            console.log(error)
        }
    }

    async getAll () {
        try {
            const tags = await Hashtags.find();
            return tags;
        } catch (error) {
            console.log(error)
        }
    }

    async getById (id) {
        try{
            const tag = await Hashtags.findById(id);
            return tag;
        }catch (error) {
            console.log(error)
        }
    };
async getWithComments (id) {
        try{
            const tag = await Hashtags.findById(id).populate({path:'comments'}).lean();
            return tag;
        }catch (error) {
            console.log(error)
        }
    };




    async update (id, data) {
        try{
            const tweet = await Hashtags.update(id, data);
            return tweet;
        }catch (error) {
            console.log(error);
        }
    };

    async delete (id) {
        try{
            const tweet = await Hashtags.findByIdAndDelete(id);
            return tweet;
        }catch (error) {
            console.log(error)
        }
    };

}

export default HashtagRepository;