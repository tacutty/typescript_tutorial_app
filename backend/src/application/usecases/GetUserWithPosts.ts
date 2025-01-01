import { IUserRepository } from "../../domain/repositories/IUserRepository";
import { User } from "../../domain/entities/User";

export class GetUserWithPostsUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(userId: number): Promise<User | null> {
    return await this.userRepository.findById(userId);
  }
}