import { User } from "../../../../generated/prisma/client";

export interface UserService {
    create(user: User): Promise<User>;
}