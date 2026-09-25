import { prisma } from "@lib/prisma";
import { User } from "@prisma/client";

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

    async emailExists(email: string): Promise<boolean>
    {
        const count = await prisma.user.count({
            where: {
                email,
            }
        });
        return count !== 0;
    }
}

export { UserService };
