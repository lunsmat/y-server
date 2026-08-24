import { User } from "@prisma/client";
import { prisma } from "@lib/prisma";

class UserService
{
    async create(
        name: string,
        username: string,
        email: string,
        password: string,
    ): Promise<User> {
        const user = await prisma.user.create({
            data: {
                name,
                username,
                email,
                password
            }
        });

        return user;
    }
}

export { UserService}
