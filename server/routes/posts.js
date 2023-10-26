import { PrismaClient } from '@prisma/client'
import { Router } from "express";
// import Post from "../models/posts.js";

const router = Router();
const prisma = new PrismaClient()

router.get("/", async (req, res) => {
  try {
    const savedPost = await prisma.Post.findMany();
    console.log(savedPost)
    res.json({});
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "An error occurred while fetching all posts" });
  }
});

router.post("/create", async (req, res) => {
  try {
    await prisma.Post.create(
      {
        data: req.body
      }
    )
    res.status(200).json({ response: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: false,
      error: "Failed to create a new post"
    });
  }
});

// router.delete("/delete/:postId", async (req, res) => {
//   try {
//     const postId = req.params.postId;
//     const post = await Post.findById(postId);
//     if (!post) {
//       return res.status(404).json({ error: "Post not found" });
//     }
//     await post.remove();
//     res.json({ message: "Post deleted successfully" });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "An error occurred while deleting the post" });
//   }
// });

export default router;
