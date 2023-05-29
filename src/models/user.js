import mongoose from "mongoose";

// const userSchema = new mongoose.Schema(
//     {
//         name: {
//             type: String,
//             required: true,
//             trim: true,
//             minLength: 3,
//             maxLength: 50,
//         },
//         username: {
//             type: String,
//             required: true,
//             trim: true,
//             unique: true,
//             minLength: 3,
//             maxLength: 50,
//         },
//         email: {
//             type: String,
//             required: true,
//             trim: true,
//             unique: true,
//             minLength: 3,
//             maxLength: 50,
//         },
//         password: {
//             type: String,
//             required: true,
//             trim: true,
//             minLength: 3,
//             maxLength: 50,
//         },
//         profilePicture: {
//             type: String,
//             trim: true,
//         },
//         coverPicture: {
//             type: String,
//             trim: true,
//         },
//         bio: {
//             type: String,
//             trim: true,
//             maxLength: 160,
//         },
//         location: {
//             type: String,
//             trim: true,
//             maxLength: 30,
//         },
//         website: {
//             type: String,
//             trim: true,
//             maxLength: 100,
//         },
//         birthDate: {
//             type: Date,
//         },
//         followers: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "User",
//             },
//         ],
//         following: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "User",
//             },
//         ],
//         likes: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Like",
//             },
//         ],
//         retweets: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Retweet",
//             },
//         ],
//         tweets: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Tweet",
//             },
//         ],
//         comments: [ 
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Comment",
//             },
//         ],
//         bookmarks: [
//             {   
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Bookmark",
//             },
//         ],
//         notifications: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Notification",
//             },
//         ],
//         messages: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Message",
//             },
//         ],
//         chats: [
//             {
//                 type: mongoose.Schema.Types.ObjectId,
//                 ref: "Chat",
//             },
//         ],
//         role: {
//             type: String,
//             enum: ["user", "admin"],
//             default: "user",
//         },
//         isActive: {
//             type: Boolean,
//             default: true,
//         },
//         isVerified: {
//             type: Boolean,
//             default: false,
//         },
//         isSuspended: {
//             type: Boolean,
//             default: false,
//         },
//         isDeleted: {
//             type: Boolean,
//             default: false,
//         },
//     },
//     { timestamps: true }
// );
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
        name:{
            type: String,
            required: true,

        }
    },
    { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;