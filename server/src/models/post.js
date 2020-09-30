import mongoose from "mongoose";
// import validator from 'validator';

const postSchema = new mongoose.Schema(
  {
    image: {
      publicId: {
        type: String,
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
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);
export default Post;
