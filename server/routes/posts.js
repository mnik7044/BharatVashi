import { Router } from "express";
import Post from "../models/posts.js";

const router = Router();

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching all posts" });
  }
});

router.post("/create", async (req, res) => {
  try {
    const { content, cover, author } = req.body;
    const newPost = new Post({
      content,
      cover,
      author,
    });
    const savedPost = await newPost.save();
    res.json(savedPost);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to create a new post" });
  }
});

router.delete("/delete/:postId", async (req, res) => {
  try {
    const postId = req.params.postId;
    const post = await Post.findById(postId);
    if (!post) {
      return res.status(404).json({ error: "Post not found" });
    }
    await post.remove();
    res.json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while deleting the post" });
  }
});

export default router;
