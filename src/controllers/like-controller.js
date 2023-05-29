import LikeService from "../services/like-service.js";

const likeService = new LikeService();
export const toggleLike = (async (req, res) => {
    try {
        const isToggled = await likeService.toggleLike(req.query.modelId, req.query.modelType, req.body.userId);
        res.status(200).json({
            success: true,
            message: "Successfully toggled like !!",
            data: isToggled,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }
})


export const getAllLikes = async (req, res) => {
    try {
        const likes = await likeService.getAll();

        res.status(200).json({
            success: true,
            message: "Successfully fetched likes !!",
            data: likes,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong !!",
            data: {},
            error: error.message,
        });
    }

    
} 


