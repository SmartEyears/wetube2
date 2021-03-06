import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    createAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String }],
    meth: {
        views: { type: Number, default: 0, required: true },
        rating: { type: Number, default: 0, required: true },
    }
});

const Video = mongoose.model("Video", videoSchema)
export default Video;