import { Router } from "express";
import { PrismaClient } from "@prisma/client";

const router = Router();
const primsa = new PrismaClient();

router.post("/create", async (req, res) => {
  const { postId } = req.body;
  // console.log(req.body);
  try {
    const post = await primsa.Post.findMany({
      where: {
        id: postId,
      },
    });
    if (!post) {
      res.json(400).json({ response: false, error: "Post Not Found" });
      return;
    }
    const cmt = await primsa.Comment.create({
      data: res.body,
    });
    res.json({ response: true, data: cmt });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "An error occurred while fetching all comments" });
  }
});

// router.post("/create", async (req, res) => {
//   try {
//     const data = req.body;
//     const newComment = new Comment(data);
//     await newComment.save();
//     res.json({ message: "Comment added successfully", comment: newComment });
//   } catch (error) {
//     console.error(error);
//     res
//       .status(500)
//       .json({ error: "An error occurred while adding the comment" });
//   }
// });

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
    res
      .status(500)
      .json({ error: "An error occurred while deleting the comment" });
  }
});

export default router;
