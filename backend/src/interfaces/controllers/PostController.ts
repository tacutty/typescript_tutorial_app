import { Request, Response } from "express";
import { CreatePostUseCase } from "../../application/usecases/CreatePost";
import { PrismaPostRepository } from "../../infrastructure/prisma/PrismaPostRepository";

const postRepository = new PrismaPostRepository();
const createPostUseCase = new CreatePostUseCase(postRepository);

export class PostController {
  static async createPost(req: Request, res: Response): Promise<any> {
    const { title, content, authorId } = req.body;

    // 入力チェック (オプション)
    if (!title || !authorId) {
      return res.status(400).json({
        message: "Title and Author ID are required",
      });
    }

    try {
      // ユースケースを実行
      const post = await createPostUseCase.execute(title, content, authorId);

      // 成功レスポンス
      return res.status(201).json({
        success: true,
        data: post,
      });
    } catch (e: any) {
      // エラーハンドリング
      console.error(e); // 内部ログ用
      return res.status(500).json({
        success: false,
        message: e.message || "An unexpected error occurred",
      });
    }
  }
}