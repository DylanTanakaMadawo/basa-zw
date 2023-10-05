import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  location: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  fee: {
    type: String,
    required: true,
  },
});

export const Post = mongoose.model("Post", postSchema);