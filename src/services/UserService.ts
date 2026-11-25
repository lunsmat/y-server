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

    async usernameExists(username: string): Promise<boolean>
    {
        const count = await prisma.user.count({
            where: {
                username,
            }
        });
        return count !== 0;
    }

    async getUserByEmail(email: string): Promise<User | null>
    {
        const user = await prisma.user.findFirst({
            where: {
                email,
            }
        });

        return user;
    }

    async getUserById(id: string): Promise<User | null>
    {
        const user = await prisma.user.findUnique({
            where: {
                id,
            }
        });

        return user;
    }
}

export { UserService };
