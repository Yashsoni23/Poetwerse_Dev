import express from "express";
import { createTweet ,deleteTweet,getAllTweets, getTweetWithComments, updateTweet} from "../../controllers/tweet-controller.js";
// import { createComment, deleteComment, getAllComments, updateComment } from "../../controllers/comment-controller.js";
import { toggleLike } from "../../controllers/like-controller.js";
const router = express.Router();

router.post("/tweets/create", createTweet);
router.get("/tweets/get", getAllTweets);
router.delete("/tweets/delete", deleteTweet);
router.put("/tweets/update", updateTweet);
router.get("/tweets/get/:id", getTweetWithComments);

router.post("/likes/toggle", toggleLike);


export default router;