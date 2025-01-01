import { User } from "../entities/User";

export interface IUserRepository {
  // findAll(): Promise<User[]>;
  findById(id: number): Promise<User | null>;
  // create(user: Partial<User>): Promise<User>;
  // update(id: number, user: Partial<User>): Promise<User>;
  // delete(id: number): Promise<void>;
}