import express from "express";
import { createTweet ,deleteTweet,getAllTweets, getTweetWithComments, updateTweet} from "../../controllers/tweet-controller.js";
const router = express.Router();

router.post("/create", createTweet);
router.get("/get", getAllTweets);
router.delete("/delete", deleteTweet);
router.put("/update", updateTweet);
router.get("/get/:id", getTweetWithComments);



export default router;