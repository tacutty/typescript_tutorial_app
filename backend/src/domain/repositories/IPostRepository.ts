import { Post } from "../entities/Post";

export interface IPostRepository {
  // findAll(): Promise<Post[]>;
  // findById(id: number): Promise<Post | null>;
  create(post: Partial<Post>): Promise<Post>;
  // update(id: number, post: Partial<Post>): Promise<Post>;
  // delete(id: number): Promise<void>;
}