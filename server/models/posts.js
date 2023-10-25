import { Schema, model } from "mongoose";

export const postSchema = new Schema(
  {
    content: "String",
    cover: "String",
    author: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
  }
);

const postModel = model("Post", postSchema);

export default postModel
