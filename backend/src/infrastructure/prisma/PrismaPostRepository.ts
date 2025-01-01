import { PrismaClient } from "@prisma/client";
import { IPostRepository } from "../../domain/repositories/IPostRepository";
import { Post } from "../../domain/entities/Post";

const prisma = new PrismaClient();

export class PrismaPostRepository implements IPostRepository {
  async create(post: Partial<Post>): Promise<Post> {
    const newPost = await prisma.post.create({
      data: {
        title: post.title!,
        content: post.content,
        authorId: post.author?.id!,
      },
    });

    return new Post(newPost.id, newPost.title, newPost.content, post.author!);
  }
}