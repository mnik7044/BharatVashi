import { Router } from "express";

const router = Router();

router.get("/", (req, res, next) => {
  res.json([
    {
      message: "Hello World",
      timestamp: new Date(),
    },
    {
      message: "Another Hello",
      timestamp: new Date(),
    },
    {
      message: "Greetings",
      timestamp: new Date(),
    },
  ]);
});

export default router;
