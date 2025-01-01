import { IPostRepository } from "../../domain/repositories/IPostRepository";
import { Post } from "../../domain/entities/Post";

export class CreatePostUseCase {
  constructor(private postRepository: IPostRepository) {}

  async execute(title: string, content: string | null, authorId: number): Promise<Post> {
    return await this.postRepository.create({
      title,
      content,
      author: { id: authorId },
    });
  }
}