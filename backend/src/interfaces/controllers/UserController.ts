import { Request, Response } from "express";
import { GetUserWithPostsUseCase } from "../../application/usecases/GetUserWithPosts";
import { PrismaUserRepository } from "../../infrastructure/prisma/PrismaUserRepository";
import { Post } from "../../domain/entities";

const userRepository = new PrismaUserRepository();
const getUserWithPostsUseCase = new GetUserWithPostsUseCase(userRepository);

export class UserController {
  static async getUserWithPosts(req: Request, res: Response): Promise<any> {
    const userId = Number(req.params.id);
    try {
      const user = await getUserWithPostsUseCase.execute(userId);
      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      if (!user) {
        return res.status(404).json({ error: "User not found" });
      }

      return res.json({
        id: user.id,
        name: user.name,
        email: user.email,
        posts: user.posts.map((post: Post) => ({
          id: post.id,
          title: post.title,
          content: post.content,
        })),
      });

      
    } catch (e) {
      console.error(e);
      return res.status(500).json({ error: 'An unexpected error occurred' });
    }
  }
}