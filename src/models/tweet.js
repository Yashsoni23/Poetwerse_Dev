import mongoose from 'mongoose';

const tweetSchema = new mongoose.Schema({
    content: {
        type: String,
        required: true,
        max:[280, 'Tweet cannot be more than 280 characters']
    },
    hashtags: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Hashtag',
        }
    ]
    
},{timestamps: true});

// tweetSchema.pre('remove', async function(next) {

//     try {
//         await Comment.deleteMany({
//             _id: {
//                 $in: this.comments,
//             },
//         });
//         next();
//     } catch (error) {
//         next(error);
//     }
// }
// );

// tweetSchema.virtual('commentCount').get(function() {
//     return this.comments.length;
// }
// );


const Tweet  =  mongoose.model('Tweet', tweetSchema);
export default Tweet;