import { Schema, model } from "mongoose";

export const commentSchema = new Schema(
  {
    content: {
      type: String,
      required: false,
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    postId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const commentModel = model("Comments", commentSchema);

export default commentModel;
