import { prisma } from '@lib/prisma';
import { Request, Response } from 'express';

class UsersController {
    public async count(request: Request, response: Response): Promise<Response> {
        const usersCount = await prisma.user.count();

        return response.json({
            count: usersCount
        });
    }

    public async create(request: Request, response: Response): Promise<Response> {
        const { name, username, email, password } = request.body;

        const user = await prisma.user.create({
            data: {
                name,
                email,
                password,
                username
            }
        });

        return response.status(201).json({
            user
        });
    }
}

export default UsersController;
