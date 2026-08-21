import { prisma } from '@lib/prisma';
import { Request, Response } from 'express';

class UsersController {
    public async count(request: Request, response: Response): Promise<Response> {
        const usersCount = await prisma.user.count();

        return response.json({
            count: usersCount
        });
    }
}

export default UsersController;
