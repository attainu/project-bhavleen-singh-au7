import mongoose, { Schema } from "mongoose";
// import validator from 'validator';
const { ObjectId } = mongoose.Schema.Types;

const postSchema = new mongoose.Schema(
    {
        image: {
            publicId: {
                type: String,
                required: true,
            },
            imageUrl: {
                type: String,
            },
        },
        caption: {
            type: String,
            trim: true,
        },
        owner: {
            type: ObjectId,
            required: true,
            ref: "User",
        },
        likes: [
            {
                user: {
                    type: ObjectId,
                },
            },
        ],
        comments: [
            {
                user: {
                    type: ObjectId,
                },
                text: {
                    type: String,
                    required: true,
                },
                name: {
                    type: String,
                },
            },
            {
                timestamps: true,
            },
        ],
    },
    {
        timestamps: true,
    }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
