import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
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
    res.json({ error: "An error occurred while adding the comment" });
  }
});

export default router;
