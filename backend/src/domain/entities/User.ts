import { Post } from "./Post";

export class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public posts: Post[] = [] // 投稿のリレーション
  ) {}
}