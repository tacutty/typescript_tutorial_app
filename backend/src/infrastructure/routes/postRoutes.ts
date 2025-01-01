import { Router } from "express";
import { PostController } from "../../interfaces/controllers/PostController";

const router = Router();

router.post("/", PostController.createPost);

export default router;