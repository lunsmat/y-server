import { UserService } from '@services/UserService';
import { Request, Response } from 'express';

class UsersController {
    private userService: UserService;

    constructor() {
        this.userService = new UserService();
    }

    public create = async (request: Request, response: Response): Promise<Response> => {
        const { name, username, email, password } = request.body;

        const emailExists = await this.userService.emailExists(email);

        if (emailExists) {
            return response.status(400).json({
                error: true,
                message: "email already exists"
            })
        }

        const user = await this.userService.create(name, username, email, password);

        return response.status(201).json({
            user
        });
    }
}

export default UsersController;
