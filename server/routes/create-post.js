import { Router } from "express";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const { content, cover, author } = req.body;

    const newPost = new Post({
      content,
      cover,
      author,
    });

    const savedPost = await newPost.save();

    res.status(200).json(savedPost);
  } catch (error) {
    res.status(500).json({ error: "Failed to create a new post" });
  }
});

export default router;
