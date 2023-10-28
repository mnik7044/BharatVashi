import { Router } from "express";
import Comment from "../models/comment.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Comment.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching all comments" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { content, author, postId } = req.body;
    const newComment = new Comment({
      content,
      author,
      postId,
    });
    await newComment.save();
    res.json({ message: "Comment added successfully", comment: newComment });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while adding the comment" });
  }
});

router.delete("/delete/:commentId", async (req, res) => {
  try {
    const commentId = req.params.commentId;

    const comment = await Comment.findById(commentId);

    if (!comment) {
      return res.status(404).json({ error: "Comment not found" });
    }

    await comment.remove();

    res.json({ message: "Comment deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the comment" });
  }
});

export default router;
