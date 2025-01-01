import { Router } from "express";
import { UserController } from "../../interfaces/controllers/UserController";

const router = Router();

router.get("/:id", UserController.getUserWithPosts);

export default router;