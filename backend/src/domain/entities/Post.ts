import { User } from "./User";

export class Post {
  constructor(
    public id: number,
    public title: string,
    public content: string | null,
    public author?: Partial<User>
  ) {}
}