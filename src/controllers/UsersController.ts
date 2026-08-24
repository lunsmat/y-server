import { Request, Response } from 'express';
import { UserService } from '@services/UserService';

class UsersController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public create = async (request: Request, response: Response): Promise<Response> => {
        const { name, username, email, password } = request.body;

        const user = await this.userService.create(name, username, email, password);

        return response.status(201).json({
            user
        });
    }
}

export default UsersController;
