import { PrismaClient } from "@prisma/client";
import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";
import { Post } from "../../domain/entities/Post";

const prisma = new PrismaClient();

export class PrismaUserRepository implements IUserRepository {
  async findById(id: number): Promise<User | null> {
    const user = await prisma.user.findUnique({
      where: { id },
      include: { Posts: true },
    });

    if (!user) return null;

    const posts = user.Posts.map(
      (post) => new Post(post.id, post.title, post.content, undefined)
    );

    return new User(user.id, user.name, user.email, posts);
  }
}